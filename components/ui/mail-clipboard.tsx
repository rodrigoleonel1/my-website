"use client";

import { toast } from "sonner";
import { MailIcon } from "../svg";

interface TextProps {
  type: string;
  contact: string;
}

export default function MailClipboard({ text }: { text: TextProps }) {
  const handleClick = () => {
    navigator.clipboard.writeText(text.contact);
    toast.success(
      `${text.type}: ${text.contact} ha sido copiado a su portapapeles.`
    );
  };

  return (
    <div onClick={handleClick}>
      <MailIcon size={32} className="cursor-pointer hover:text-red-700" />
    </div>
  );
}
