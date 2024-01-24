"use client";

import { toast } from "sonner";

interface TextProps {
  type: string;
  contact: string;
}

export default function Clipboard({
  text,
  children,
}: {
  text: TextProps;
  children: React.ReactNode;
}) {
  const handleClick = () => {
    navigator.clipboard.writeText(text.contact);
    toast.success(
      `${text.type}: ${text.contact} ha sido copiado a su portapapeles.`
    );
  };

  return <div onClick={handleClick}>{children}</div>;
}
