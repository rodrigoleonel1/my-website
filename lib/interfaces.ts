export interface Project {
  title: string;
  description: string;
  tools: Tool[];
  demo: string | false;
  repo: string;
  img: string;
  alt: string;
}

export interface Tool {
  id: number;
  name: string;
  image: string;
  invert: boolean;
}

export interface MiniProject {
  title: string;
  description: string;
  tools: Tool[];
  demo: string;
  repo: string;
}
