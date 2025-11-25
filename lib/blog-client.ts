import { BlogPost } from './blog';

// Sample data for client-side rendering
const samplePosts: BlogPost[] = [
  {
    title: "Essential Winter Car Maintenance Tips for Edinburgh Drivers",
    excerpt: "Prepare your vehicle for Scottish winter conditions with our comprehensive guide to winter car maintenance.",
    slug: "winter-car-maintenance-edinburgh",
    publishedAt: "25-11-2025",
    author: "APG Team",
    category: "Maintenance Tips",
    tags: ["winter", "maintenance", "scotland", "safety"],
    featured: true,
    coverImage: "/about-workshop.jpg",
    content: "<p>Winter preparation content...</p>",
    readingTime: 8
  },
  {
    title: "Complete MOT Preparation Guide: Pass First Time",
    excerpt: "Our expert guide to preparing your vehicle for its MOT test, helping you avoid common failures and pass first time.",
    slug: "mot-preparation-guide-edinburgh",
    publishedAt: "20-11-2025",
    author: "APG Team",
    category: "MOT Preparation",
    tags: ["mot", "preparation", "testing", "safety"],
    featured: true,
    coverImage: "/hero-workshop.jpg",
    content: "<p>MOT preparation content...</p>",
    readingTime: 12
  },
  {
    title: "Understanding Engine Oil: Complete Guide for Scottish Drivers",
    excerpt: "Learn everything you need to know about engine oil, from choosing the right type to understanding oil change intervals.",
    slug: "engine-oil-guide-scottish-drivers",
    publishedAt: "15-11-2025",
    author: "APG Team",
    category: "Technical Guides",
    tags: ["engine", "oil", "maintenance", "technical"],
    featured: false,
    content: "<p>Engine oil guide content...</p>",
    readingTime: 15
  },
  {
    title: "Customer Story: Sarah's Classic Mini Restoration Journey",
    excerpt: "Follow Sarah's emotional journey restoring her late grandfather's 1972 Mini, with help from APG's expert team.",
    slug: "customer-story-mini-restoration-sarah",
    publishedAt: "10-11-2025",
    author: "APG Team",
    category: "Customer Stories",
    tags: ["restoration", "classic-car", "mini", "customer-story"],
    featured: false,
    content: "<p>Customer story content...</p>",
    readingTime: 10
  },
  {
    title: "New UK MOT Changes 2025: What Edinburgh Drivers Need to Know",
    excerpt: "Stay informed about the latest MOT regulation changes and how they affect vehicle testing in Scotland.",
    slug: "uk-mot-changes-2024-edinburgh",
    publishedAt: "05-11-2025",
    author: "APG Team",
    category: "Industry News",
    tags: ["mot", "regulations", "2025", "uk-changes"],
    featured: false,
    content: "<p>MOT changes content...</p>",
    readingTime: 7
  }
];

export function getAllPosts(): BlogPost[] {
  return samplePosts.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getFeaturedPosts(): BlogPost[] {
  return samplePosts.filter((post) => post.featured).slice(0, 3);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return samplePosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getAllCategories(): string[] {
  const categories = new Set(samplePosts.map((post) => post.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const tags = new Set(samplePosts.flatMap((post) => post.tags));
  return Array.from(tags);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = samplePosts.find((post) => post.slug === slug);
  return post || null;
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  
  return samplePosts.filter((post) => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.category.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = samplePosts.filter((post) => post.slug !== currentPost.slug);
  
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
