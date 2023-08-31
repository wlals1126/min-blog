export interface UCategory {
  id: number;
  name: string;
  postCount?: number;
}

export interface ULogin {
  username: string;
  password: string;
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

export interface UUser {
  id: number;
  username: string;
  password?: string;
}

export interface ULinkedPosts {
  name: string;
  posts: {
    id: number;
    title: string;
    createdAt: string;
    CategoryPost: any;
  }[];
}
