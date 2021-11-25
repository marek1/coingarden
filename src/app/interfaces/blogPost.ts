interface BlogData {
  header?: string;
  text?: string;
  image?: string;
  video?: string;
  youtube?: string;
  blog?: string;
  links?: string[];
}

export interface BlogPost {
  id: number;
  date: Date;
  name: string;
  meta: string;
  url: string,
  data: BlogData[]
}
