export type tTag = {
  color?: "pink" | "blue" | "gray";
  variant?: "filled" | "transparent";
  children: string;
};

export type tPost = {
  title: string;
  user: string;
  tagList: tTag[];
  date: string | Date;
  views: number;
  starred: boolean;
};
