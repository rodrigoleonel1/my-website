import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/svg";
import Clipboard from "./clipboard";

function ExternalLink({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="btn-icon gap-2"
    >
      {children}
    </a>
  );
}

export default function SocialButtons() {
  return (
    <nav
      aria-label="Social media links"
      className="py-2 flex gap-4 text-blue-400"
    >
      <ExternalLink
        href="https://github.com/rodrigoleonel1"
        ariaLabel="GitHub profile"
      >
        <GithubIcon size={32} />
        <p>Github</p>
      </ExternalLink>

      <ExternalLink
        href="https://www.linkedin.com/in/rodrigoalarc%C3%B3n/"
        ariaLabel="LinkedIn profile"
      >
        <LinkedinIcon size={32} />
        <p>Linkedin</p>
      </ExternalLink>

      <Clipboard
        text={{ contact: "rodricsxd@gmail.com", type: "Email" }}
        className="btn-icon gap-2"
      >
        <MailIcon size={32} />
        <p>Mail</p>
      </Clipboard>
    </nav>
  );
}
