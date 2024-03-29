export default function MoonIcon({
  className,
  size,
  onClick
}: {
  className?: string;
  size?: number;
  onClick?: () => void
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size? size : "24"}
      height={size? size : "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      onClick={onClick}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}
