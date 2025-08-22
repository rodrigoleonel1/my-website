import { Tool } from "@/lib/interfaces";

export default function ToolBadge({ tool }: { tool: Tool }) {
  return (
    <span
      data-slot="badge"
      className="inline-flex rounded-lg border px-2 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 bg-neutral-900 border-white/10"
      key={tool.id}
    >
      <img
        height="16"
        width="16"
        src={tool.image}
        alt={tool.name}
        className={`${tool.invert ? "invert" : ""}`}
      />
      {tool.name}
    </span>
  );
}
