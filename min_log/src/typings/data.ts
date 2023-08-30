export interface UCategory {
  id: number;
  name: string;
  postCount?: number;
}

export interface UPost {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  createdAt?: string;
  body: string;
  categoryPosts: UCategory[];
  is_visible?: boolean;
  isEdited?: boolean;
}
