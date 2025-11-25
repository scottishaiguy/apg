"use client";

import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { FeaturedPosts } from '@/components/featured-posts';
import { BlogPostCard } from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog-client';
import Link from 'next/link';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const regularPosts = allPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-apg-slate text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              APG <span className="text-apg-red">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert advice, maintenance tips, and automotive insights from Edinburgh's trusted garage
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && <FeaturedPosts posts={featuredPosts} />}

      {/* All Posts Section */}
      <section className="py-20">
        <Container>
          <SectionHeader
            title="All Articles"
            subtitle="Browse our complete collection of automotive guides and tips"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogPostCard 
                key={post.slug} 
                post={post}
                showExcerpt={true}
                showReadingTime={true}
              />
            ))}
          </div>

          {allPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-6">
                No articles found. Check back soon for new content!
              </p>
              <Button asChild className="bg-apg-red hover:bg-[#C62828]">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-apg-red text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Professional Car Care?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get your car serviced by Edinburgh's most trusted mechanics. 
              Book online or give us a call today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-apg-red border-white hover:bg-gray-100 text-lg px-8"
              >
                <Link href="/book">Book a Service</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white border-2 border-white text-apg-red hover:bg-gray-100 text-lg px-8"
              >
                <a href="tel:01311234567">Call 0131 123 4567</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
