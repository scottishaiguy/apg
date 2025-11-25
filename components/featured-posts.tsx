import { BlogPostCard } from '@/components/blog-post-card';
import { BlogPost } from '@/lib/blog';
import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Featured <span className="text-apg-red">Articles</span>
          </h2>
          <p className="text-lg text-gray-600">
            Hand-picked articles to help you maintain your vehicle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard 
              key={post.slug} 
              post={post}
              showExcerpt={true}
              showReadingTime={true}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
