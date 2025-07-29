import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/svg";
import Clipboard from "./clipboard";

export default function SocialButtons() {
  return (
    <article className="py-2 gap-4 flex text-blue-400">
      <a
        href="https://github.com/rodrigoleonel1"
        target={"_blank"}
        rel={"noreferrer"}
        aria-label="See the repository for this project on github."
        className="btn-icon gap-2"
      >
        <GithubIcon size={32} />
        <p>Github</p>
      </a>
      <a
        href="https://www.linkedin.com/in/rodrigoalarc%C3%B3n/"
        target={"_blank"}
        rel={"noreferrer"}
        aria-label="See this project website."
        className="btn-icon gap-2"
      >
        <LinkedinIcon size={32} />
        <p>Linkedin</p>
      </a>
      <Clipboard
        text={{ contact: "rodricsxd@gmail.com", type: "Email" }}
        className="btn-icon gap-2"
      >
        <MailIcon size={32} />
        <p>Mail</p>
      </Clipboard>
    </article>
  );
}
