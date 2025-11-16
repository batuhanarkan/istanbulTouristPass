'use client';

import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Plan your perfect Istanbul trip—for free!
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Sign up for our newsletter and get expertly crafted itineraries for your visit. 
            Plus, receive travel tips and the latest updates straight to your inbox!
          </p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p className="text-white/90">
                You&apos;ve successfully subscribed to our newsletter. Get ready for expert travel tips and updates about Istanbul!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <InputText
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 py-3 px-4 text-base rounded-lg border-0"
                style={{ '--tw-ring-color': '#F0034E' } as React.CSSProperties}
              />
              <Button
                type="submit"
                label="Subscribe"
                icon="pi pi-send"
                className="text-white px-6 py-3 text-base font-semibold border-2 border-white hover:bg-white/20"
                style={{ backgroundColor: 'transparent' }}
              />
            </form>
          )}

          <p className="text-sm text-white/80 mt-4">
            By signing up, you agree to receiving email updates in accordance with The Istanbul Tourist Pass®&apos;s privacy policy. 
            We do not sell your personal data.
          </p>
        </div>
      </div>
    </section>
  );
}

