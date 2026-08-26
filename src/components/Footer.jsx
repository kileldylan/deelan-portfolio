import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-3 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
        <p>{profile.name} · {profile.tagline}</p>
        <p>{profile.footerLine}</p>
      </div>
    </footer>
  );
}