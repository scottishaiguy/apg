import { Container } from '@/components/container';
import { Breadcrumb } from '@/components/breadcrumb';
import { BlogPostCard } from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';
import { getPostsByCategory, getAllCategories } from '@/lib/blog-client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const categoryName = params.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const posts = getPostsByCategory(categoryName);
  
  if (posts.length === 0) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${categoryName} Articles - APG Blog`,
    description: `Browse all ${categoryName.toLowerCase()} articles from Ainslie Park Garage`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = params.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const posts = getPostsByCategory(categoryName);
  
  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-apg-slate text-white py-16">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: categoryName }
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {categoryName} <span className="text-apg-red">Articles</span>
            </h1>
            <p className="text-xl text-gray-300">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
            </p>
          </div>
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <Container>
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

      {/* Back to Blog */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="text-center">
            <Button asChild variant="outline" className="border-apg-red text-apg-red hover:bg-apg-red hover:text-white">
              <Link href="/blog">← Back to All Articles</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
