import clsx from "clsx";

type AccentType = React.ComponentPropsWithoutRef<"span">;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        "bg-gradient-to-br from-blue-950 via-blue-300 to-blue-950  bg-clip-text text-transparent"
      )}
    >
      {children}
    </span>
  );
}
