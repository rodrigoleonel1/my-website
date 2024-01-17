export interface Project {
  title: string;
  description: string;
  tools: string[];
  demo: string | false;
  repo: string;
  img: string;
  alt: string;
}

export interface MiniProject {
  title: string;
  description: string;
  tools: string[];
  demo: string;
  repo: string;
}
