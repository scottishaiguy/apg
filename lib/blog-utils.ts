import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost, BlogPostFrontmatter } from './blog';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      const frontmatter = matterResult.data as BlogPostFrontmatter;
      
      // Calculate reading time (average 200 words per minute)
      const plainText = matterResult.content;
      const wordCount = plainText.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200);

      return {
        title: frontmatter.title,
        excerpt: frontmatter.excerpt,
        slug: frontmatter.slug || slug,
        publishedAt: frontmatter.publishedAt,
        updatedAt: frontmatter.updatedAt,
        author: frontmatter.author,
        category: frontmatter.category,
        tags: frontmatter.tags,
        featured: frontmatter.featured || false,
        coverImage: frontmatter.coverImage,
        content: matterResult.content,
        readingTime,
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured).slice(0, 3);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map((post) => post.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set(allPosts.flatMap((post) => post.tags));
  return Array.from(tags);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    const frontmatter = matterResult.data as BlogPostFrontmatter;
    
    // Calculate reading time
    const plainText = matterResult.content;
    const wordCount = plainText.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      slug: frontmatter.slug || slug,
      publishedAt: frontmatter.publishedAt,
      updatedAt: frontmatter.updatedAt,
      author: frontmatter.author,
      category: frontmatter.category,
      tags: frontmatter.tags,
      featured: frontmatter.featured || false,
      coverImage: frontmatter.coverImage,
      content: contentHtml,
      readingTime,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function searchPosts(query: string): BlogPost[] {
  const allPosts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return allPosts.filter((post) => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.category.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts().filter((post) => post.slug !== currentPost.slug);
  
  // Score posts based on shared tags and category
  const scoredPosts = allPosts.map((post) => {
    let score = 0;
    
    // Same category gets highest score
    if (post.category === currentPost.category) {
      score += 3;
    }
    
    // Shared tags
    const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
    score += sharedTags.length;
    
    return { post, score };
  });
  
  // Sort by score and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}
