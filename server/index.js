import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import process from "node:process";

const requiredEnv = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "CONTACT_TO"];
const missingEnv = requiredEnv.filter((name) => !process.env[name]);
const smtpPort = Number(process.env.SMTP_PORT || 587);
if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
  throw new Error("SMTP_PORT must be a valid port number.");
}

const transporter =
  missingEnv.length === 0
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: process.env.SMTP_SECURE
          ? process.env.SMTP_SECURE === "true"
          : smtpPort === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    : null;

if (missingEnv.length > 0) {
  console.warn(
    `Contact email is disabled. Set ${missingEnv.join(", ")} in .env to enable it.`,
  );
}

const app = express();
app.use(express.json({ limit: "10kb" }));

app.post("/api/contact", async (request, response) => {
  const { name, email, message } = request.body ?? {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return response.status(400).json({ error: "Name, email, and message are required." });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (
    !trimmedName ||
    trimmedName.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) ||
    trimmedEmail.length > 254 ||
    !trimmedMessage ||
    trimmedMessage.length > 5000
  ) {
    return response.status(400).json({ error: "Please check the form fields and try again." });
  }

  if (!transporter) {
    return response.status(503).json({
      error: "Email delivery is not configured. Add SMTP settings to the server environment.",
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      replyTo: trimmedEmail,
      subject: `Portfolio contact from ${trimmedName}`,
      text: `${trimmedMessage}\n\nFrom: ${trimmedName} <${trimmedEmail}>`,
    });

    return response.status(200).json({ message: "Your message has been sent." });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return response.status(500).json({ error: "Unable to send your message right now. Please try again later." });
  }
});

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`Contact API listening on port ${port}`);
});
