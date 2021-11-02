interface BlogData {
  header?: string;
  text?: string;
  image?: string;
  video?: string;
  blog?: string;
}

export interface BlogPost {
  id: number;
  name: string;
  meta: string;
  url: string,
  data: BlogData[]
}
