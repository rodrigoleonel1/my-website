import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="max-w-3xl mx-auto p-4 flex items-center justify-end">
      <ThemeToggle />
    </header>
  );
}
