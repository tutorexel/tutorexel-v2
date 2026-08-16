import Link from 'next/link';
import Image from 'next/image';
import './BetterWay.css';

export default function BetterWay() {
  return (
    <section className="better-way section">
      <div className="container">
        <div className="better-way__inner">
          <div className="better-way__grid">
            <div className="better-way__content">
              <h2 className="better-way__title">
                There&apos;s A Better Way
              </h2>
              <p className="better-way__description">
                Most parents know their child needs extra help, but don&apos;t want to compromise on quality.
                At TutorExel, we understand the Australian curriculum inside and out. Personal attention at
                a fraction of the cost.
              </p>
              <Link href="/about" className="better-way__btn">
                See How It Works
              </Link>
            </div>
            <div className="better-way__image">
              <Image
                src="/images/better-way/cta_image.webp"
                alt="Students learning together"
                className="better-way__img"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
