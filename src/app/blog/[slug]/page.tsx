import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import CTA from "@/components/home/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { createBlogPostingSchema, createBreadcrumbSchema } from "@/utils/schema";
import "./blog-single.css";
import "../blog.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found | TutorExel" };

  return {
    title: `${post.title} | TutorExel`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://tutorexel.com/blog/${post.slug}`,
      siteName: "TutorExel",
      locale: "en_AU",
      type: "article",
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://tutorexel.com/blog/${post.slug}`,
    },
  };
}

function CalendarIcon() {
  return (
    <svg
      className="blog-card__date-icon"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.792 4.167H5.208A2.083 2.083 0 003.125 6.25v14.583a2.083 2.083 0 002.083 2.084h14.584a2.083 2.083 0 002.083-2.084V6.25a2.083 2.083 0 00-2.083-2.083zM16.667 2.083V6.25M8.333 2.083V6.25M3.125 10.417h18.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs.filter((p) => p.id !== post.id).slice(0, 3);

  const blogPostSchema = createBlogPostingSchema({
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString().split('T')[0],
    slug: post.slug,
  });

  const blogBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "Blog", url: "https://tutorexel.com/blog" },
    { name: post.title, url: `https://tutorexel.com/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={blogPostSchema} />
      <JsonLd data={blogBreadcrumbSchema} />
      {/* Banner Section (Contact page style) */}
      <section className="blog-banner">
        <div className="blog-banner__decoration blog-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="blog-banner__curve blog-banner__curve--1"
          />
        </div>
        <div className="blog-banner__decoration blog-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="blog-banner__curve blog-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="blog-banner__curve blog-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="blog-banner__content">
            <h2 className="blog-banner__title">
              TutorExel{" "}
              <span className="blog-banner__title-highlight">Learning Hub</span>
              <span className="blog-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="" width={20} height={20} />
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="blog-single__featured">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="blog-single__featured-img"
        />
      </div>

      {/* Article Content */}
      <article className="blog-single__article">
        <span className="blog-single__category">{post.category}</span>
        <h1 className="blog-single__title">{post.title}</h1>
        <div className="blog-single__byline">
          <span>By TutorExel Team</span>
          <span className="blog-single__byline-divider">|</span>
          <span>Published on {post.date}</span>
        </div>
        <hr className="blog-single__divider" />
        <div className="blog-single__content">
          {post.content}
        </div>
      </article>

      {/* Internal Links - Subject Resources */}
      <section className="blog-single__resources">
        <div className="container">
          <h2 className="blog-single__resources-title">Explore Our Programs</h2>
          <div className="blog-single__resources-grid">
            {post.category === "General" || post.category === "Parent Guides" || post.category === "Study Skills" ? (
              <>
                <Link href="/subjects" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">📚</span>
                  <span className="blog-single__resource-name">Browse All Subjects</span>
                  <span className="blog-single__resource-desc">Maths, English &amp; Science for Years 2-7</span>
                </Link>
                <Link href="/free-assessment" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">📝</span>
                  <span className="blog-single__resource-name">Free Assessment</span>
                  <span className="blog-single__resource-desc">Find out where your child stands</span>
                </Link>
                <Link href="/pricing" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">💰</span>
                  <span className="blog-single__resource-name">Join Now</span>
                  <span className="blog-single__resource-desc">Plans from $39/month</span>
                </Link>
              </>
            ) : post.category === "Maths Tips" ? (
              <>
                <Link href="/subjects/year-3/maths" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">🔢</span>
                  <span className="blog-single__resource-name">Year 3 Maths</span>
                  <span className="blog-single__resource-desc">Build strong foundations</span>
                </Link>
                <Link href="/subjects/year-5/maths" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">📐</span>
                  <span className="blog-single__resource-name">Year 5 Maths</span>
                  <span className="blog-single__resource-desc">Bridge to high school</span>
                </Link>
                <Link href="/free-assessment" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">📝</span>
                  <span className="blog-single__resource-name">Free Assessment</span>
                  <span className="blog-single__resource-desc">Find out where your child stands</span>
                </Link>
              </>
            ) : post.category === "English Tips" ? (
              <>
                <Link href="/subjects/year-3/english" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">📖</span>
                  <span className="blog-single__resource-name">Year 3 English</span>
                  <span className="blog-single__resource-desc">Reading &amp; writing foundations</span>
                </Link>
                <Link href="/subjects/year-5/english" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">✍️</span>
                  <span className="blog-single__resource-name">Year 5 English</span>
                  <span className="blog-single__resource-desc">Analytical reading &amp; writing</span>
                </Link>
                <Link href="/free-assessment" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">📝</span>
                  <span className="blog-single__resource-name">Free Assessment</span>
                  <span className="blog-single__resource-desc">Find out where your child stands</span>
                </Link>
              </>
            ) : (
              <>
                <Link href="/co-curricular" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">🎵</span>
                  <span className="blog-single__resource-name">Music Programs</span>
                  <span className="blog-single__resource-desc">Piano &amp; Guitar lessons</span>
                </Link>
                <Link href="/subjects" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">📚</span>
                  <span className="blog-single__resource-name">Academic Tutoring</span>
                  <span className="blog-single__resource-desc">Maths, English &amp; Science for Years 2-7</span>
                </Link>
                <Link href="/free-assessment" className="blog-single__resource-card">
                  <span className="blog-single__resource-icon">📝</span>
                  <span className="blog-single__resource-name">Free Assessment</span>
                  <span className="blog-single__resource-desc">Find out where your child stands</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="blog-single__related">
        <div className="container">
          <h2 className="blog-single__related-title">Related Blogs</h2>
          <div className="blog-single__related-grid">
            {relatedPosts.map((related) => (
              <article
                key={related.id}
                className="blog-card"
              >
                <div className="blog-card__image-wrapper">
                  <Image
                    src={related.image}
                    alt={related.title}
                    width={600}
                    height={400}
                    className="blog-card__image"
                  />
                  <div className="blog-card__image-overlay"></div>
                  <span className="blog-card__badge">{related.category}</span>
                </div>
                <div className="blog-card__body">
                  <h3 className="blog-card__title">{related.title}</h3>
                  <p className="blog-card__excerpt">{related.excerpt}</p>
                  <div className="blog-card__date">
                    <CalendarIcon />
                    <span>{related.date}</span>
                  </div>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="blog-card__btn"
                    aria-label={`Read more: ${related.title}`}
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Same as Home Page */}
      {/* Internal Links Section */}
      <section style={{padding:'40px 0',background:'#f7f5f0'}}>
        <div className="container" style={{maxWidth:'800px',margin:'0 auto'}}>
          <h3 style={{fontSize:'20px',fontWeight:700,color:'#1a2e3b',marginBottom:'16px'}}>Explore Our Subjects</h3>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginBottom:'20px'}}>
            <a href="/subjects/year-3/maths" style={{background:'#fff',border:'1px solid #e4e0d8',borderRadius:'6px',padding:'8px 16px',textDecoration:'none',color:'#1a2e3b',fontSize:'13px',fontWeight:500}}>Year 3 Maths</a>
            <a href="/subjects/year-5/maths" style={{background:'#fff',border:'1px solid #e4e0d8',borderRadius:'6px',padding:'8px 16px',textDecoration:'none',color:'#1a2e3b',fontSize:'13px',fontWeight:500}}>Year 5 Maths</a>
            <a href="/subjects/year-5/english" style={{background:'#fff',border:'1px solid #e4e0d8',borderRadius:'6px',padding:'8px 16px',textDecoration:'none',color:'#1a2e3b',fontSize:'13px',fontWeight:500}}>Year 5 English</a>
            <a href="/subjects/year-7/english" style={{background:'#fff',border:'1px solid #e4e0d8',borderRadius:'6px',padding:'8px 16px',textDecoration:'none',color:'#1a2e3b',fontSize:'13px',fontWeight:500}}>Year 7 English</a>
            <a href="/naplan-preparation" style={{background:'#fff',border:'1px solid #e4e0d8',borderRadius:'6px',padding:'8px 16px',textDecoration:'none',color:'#1a2e3b',fontSize:'13px',fontWeight:500}}>NAPLAN Prep</a>
            <a href="/pricing" style={{background:'#fff',border:'1px solid #e4e0d8',borderRadius:'6px',padding:'8px 16px',textDecoration:'none',color:'#1a2e3b',fontSize:'13px',fontWeight:500}}>Pricing</a>
            <a href="/free-trial" style={{background:'#d4654a',border:'1px solid #d4654a',borderRadius:'6px',padding:'8px 16px',textDecoration:'none',color:'#fff',fontSize:'13px',fontWeight:600}}>Free Trial</a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
