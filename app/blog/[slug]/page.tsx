"use client";

import { Container } from '@/components/container';
import { Breadcrumb } from '@/components/breadcrumb';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog-client';
import { BlogPost } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPostCard } from '@/components/blog-post-card';
import { useState, useEffect } from 'react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const postData = await getPostBySlug(params.slug);
        if (!postData) {
          notFound();
        }
        setPost(postData);
        setRelatedPosts(getRelatedPosts(postData, 3));
      } catch (error) {
        console.error('Error loading post:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-apg-red mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const shareUrl = `https://ainsleyparkgarage.com/blog/${post.slug}`;

  return (
    <>
      {/* Hero Section with Cover Image */}
      <section className="relative">
        {post.coverImage ? (
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Container>
                <div className="max-w-4xl mx-auto text-center text-white">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-apg-red text-white rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
                    {post.title}
                  </h1>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        ) : (
          <div className="bg-apg-slate text-white py-16">
            <Container>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Blog', href: '/blog' },
                  { label: post.title }
                ]}
              />
              <div className="max-w-4xl mx-auto">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-apg-red text-white rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        )}
      </section>

      {/* Article Content */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Article Body */}
              <div 
                className="blog-content text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Buttons */}
              <div className="border-t border-b border-gray-200 py-8 my-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Share this article</h3>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-apg-red text-apg-red hover:bg-apg-red hover:text-white"
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-apg-red text-apg-red hover:bg-apg-red hover:text-white"
                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`, '_blank')}
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Tweet
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-apg-red text-apg-red hover:bg-apg-red hover:text-white"
                      onClick={() => window.open(`mailto:?subject=${post.title}&body=${post.excerpt}%0A%0A${shareUrl}`, '_blank')}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Related <span className="text-apg-red">Articles</span>
              </h2>
              <p className="text-lg text-gray-600">
                Continue reading with these similar articles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {relatedPosts.map((relatedPost) => (
                <BlogPostCard 
                  key={relatedPost.slug} 
                  post={relatedPost}
                  showExcerpt={true}
                  showReadingTime={false}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-apg-red text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Professional Car Care?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get your car serviced by Edinburgh&apos;s most trusted mechanics. 
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
