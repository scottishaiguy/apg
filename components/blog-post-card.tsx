import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface BlogPostCardProps {
  post: BlogPost;
  showExcerpt?: boolean;
  showReadingTime?: boolean;
}

export function BlogPostCard({ 
  post, 
  showExcerpt = true, 
  showReadingTime = true 
}: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-apg-red/50 h-full rounded-lg overflow-hidden flex flex-col">
      {/* Cover Image */}
      {post.coverImage && (
        <div className="relative h-48 overflow-hidden shrink-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {post.featured && (
            <div className="absolute top-4 left-4 bg-apg-red text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Category */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-apg-red/10 text-apg-red rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-apg-red transition-colors">
          <Link href={`/blog/${post.slug}`} className="hover:text-apg-red transition-colors">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {showExcerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
          
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>

          {showReadingTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {showExcerpt && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-apg-red font-medium hover:gap-3 transition-all group"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
