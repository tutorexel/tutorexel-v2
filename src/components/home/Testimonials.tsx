'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    image: '/avatar-priya.png',
    name: 'Priya Sharma',
    location: 'Parramatta, NSW',
    text: '"My daughter went from struggling with fractions to confidently solving complex problems. The teachers are patient, knowledgeable, and really understand how to make learning fun. Best decision we made for her education!"',
  },
  {
    id: 2,
    image: '/avatar-rohit.png',
    name: 'Rajesh Kumar',
    location: 'Castle Hill, NSW',
    text: '"We tried two other tutoring services before TutorExel. The difference is night and day. My son actually looks forward to his classes now, and his NAPLAN results improved dramatically. Worth every penny!"',
  },
  {
    id: 3,
    image: '/avatar-sarah.png',
    name: 'Sarah Thompson',
    location: 'Sydney, NSW',
    text: '"The personalized attention my children receive is incredible. Both of them have shown remarkable improvement in their grades. The tutors really understand each child\'s learning style."',
  },
  {
    id: 4,
    image: '/avatar-michael.png',
    name: 'Michael Chen',
    location: 'Chatswood, NSW',
    text: '"As a busy parent, I appreciate how flexible TutorExel is with scheduling. The online platform works seamlessly, and the progress reports help us stay informed about our son\'s development."',
  },
  {
    id: 5,
    image: '/avatar-emily.png',
    name: 'Emily Carter',
    location: 'Austin, Texas, USA',
    text: 'TutorExel has been a great support for our daughter. Her tutor is patient, encouraging, and takes the time to explain difficult concepts in a way she understands. She is much more confident in her schoolwork now.',
  },
  {
    id: 6,
    image: '/avatar-daniel.png',
    name: 'Daniel Wilson',
    location: 'Toronto, Ontario, Canada',
    text: 'We really appreciate the personalised approach. The lessons are well structured, and the tutor adapts the sessions to our son’s learning needs. He enjoys his classes and feels much more comfortable asking questions.',
  },
  {
    id: 7,
    image: '/avatar-sophie.png',
    name: 'Sophie Thompson',
    location: 'Auckland, New Zealand',
    text: 'Finding flexible online tutoring has made a big difference for our family. The lessons are engaging, and our daughter feels supported rather than pressured. We have been very happy with her progress and confidence.',
  },
  {
    id: 8,
    image: '/avatar-jennifer.png',
    name: 'Jennifer Miller',
    location: 'Seattle, Washington, USA',
    text: 'We were looking for tutoring that would work around our family schedule, and TutorExel has been a wonderful fit. Our son connects really well with his tutor, and the personalised lessons have helped him understand challenging topics and approach schoolwork with much more confidence.',
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 2;
  const slidesCount = Math.ceil(testimonialsData.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const visibleTestimonials = testimonialsData.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__header">
          <div className="testimonials__header-left">
            <p className="testimonials__label">
              <Image src="/images/icons/circle_icon.webp" alt="" className="testimonials__label-icon" width={20} height={20} />
              Testimonials
            </p>
            <h2 className="testimonials__title">What Parents Are Saying</h2>
          </div>
          <div className="testimonials__nav testimonials__nav--desktop">
            <button
              className="testimonials__nav-btn testimonials__nav-btn--prev"
              onClick={prevSlide}
              aria-label="Previous testimonials"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="testimonials__nav-btn testimonials__nav-btn--next"
              onClick={nextSlide}
              aria-label="Next testimonials"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials__slider">
          <div className="testimonials__slider-wrapper">
            <button
              className="testimonials__nav-btn testimonials__nav-btn--prev testimonials__nav-btn--mobile"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="testimonials__grid">
              {visibleTestimonials.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                  <div className="testimonial-card__header">
                    <div className="testimonial-card__avatar">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-card__info">
                      <div className="testimonial-card__name">{testimonial.name}</div>
                      <div className="testimonial-card__location">{testimonial.location}</div>
                    </div>
                    <div className="testimonial-card__quote">
                      <Image src="/images/icons/slider_icon.webp" alt="" className="testimonial-card__quote-icon" width={24} height={24} />
                    </div>
                  </div>
                  <p className="testimonial-card__text">{testimonial.text}</p>
                </div>
              ))}
            </div>

            <button
              className="testimonials__nav-btn testimonials__nav-btn--next testimonials__nav-btn--mobile"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials__dots">
          {Array.from({ length: slidesCount }).map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
