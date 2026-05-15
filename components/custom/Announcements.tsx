'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Licensed Work. Upfront Price. Done Right.</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(https://img1.wsimg.com/isteam/ip/89e3a28a-1623-450e-a04f-089dccc30b1d/fm%3Df_eN91pW.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                }}
              />
              {/* [TODO: Replace with NYC Electricians job site or team photo] */}
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every call starts the same way: we assess the issue in front of you,
                explain exactly what needs to happen, and give you a clear price before
                any work begins. No guessing, no surprise invoices — just a straight
                answer and a plan.
              </p>
              <p>
                <strong>Step 1: Diagnose.</strong> We identify the root cause of the
                problem — not just the symptom — and confirm the right solution before
                recommending anything.
              </p>
              <p>
                <strong>Step 2: Approve &amp; Work.</strong> You get the price first.
                Once you&apos;re ready, we get to work. Most jobs are completed in a
                single visit.
              </p>
              <p>
                <strong>Step 3: Inspect &amp; Clean Up.</strong> We test everything
                under real conditions before leaving, handle any required permit
                inspections, and leave the work area clean.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="/contact-us"
                label="Schedule Service"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
