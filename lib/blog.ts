export interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
  content: string;
  readingTime: number;
}

export interface BlogPostFrontmatter {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
}
