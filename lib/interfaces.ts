export interface Tool {
  id: string;
  name: string;
  image: string;
  invert?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: Tool[];
  demo?: string | null;
  repo: string;
  img: string;
  alt?: string;
  featured?: boolean;
}