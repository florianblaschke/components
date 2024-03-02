import { SocialLink } from "./_components/Links";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 p-24">
      <SocialLink social="facebook" href="https://www.facebook.com" />
      <SocialLink social="xing" href="https://www.xing.com" />
      <SocialLink social="twitter" href="https://twitter.com" />
      <SocialLink social="linkedin" href="https://www.linkedin.com" />
      <SocialLink social="youtube" href="https://www.youtube.com" />
      <SocialLink social="facebook" href="https://www.facebook.com" invert />
      <SocialLink social="xing" href="https://www.xing.com" invert />
      <SocialLink social="twitter" href="https://twitter.com" invert />
      <SocialLink social="linkedin" href="https://www.linkedin.com" invert />
      <SocialLink social="youtube" href="https://www.youtube.com" invert />
      <SocialLink social="twitter" />
    </main>
  );
}
