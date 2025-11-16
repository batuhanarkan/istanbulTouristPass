'use client';

import { Carousel } from 'primereact/carousel';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'United States',
    rating: 5,
    text: 'Amazing experience! The skip-the-line access saved us so much time. We visited Hagia Sophia, Galata Tower, and Topkapi Palace all in one day without waiting in queues.',
    avatar: '👩'
  },
  {
    id: 2,
    name: 'Michael Chen',
    country: 'Singapore',
    rating: 5,
    text: 'Best investment for our Istanbul trip! The app made everything so easy. We saved over €200 compared to buying individual tickets. Highly recommend!',
    avatar: '👨'
  },
  {
    id: 3,
    name: 'Emma Williams',
    country: 'United Kingdom',
    rating: 5,
    text: 'The audio guides were fantastic and available in so many languages. The Galata Tower visit was unforgettable with the panoramic views. Worth every penny!',
    avatar: '👩'
  },
  {
    id: 4,
    name: 'Ahmed Al-Rashid',
    country: 'Saudi Arabia',
    rating: 5,
    text: 'Perfect for families! Our kids loved the Bosphorus cruise and the aquarium. The pass made planning so much easier. Will definitely use again.',
    avatar: '👨'
  },
  {
    id: 5,
    name: 'Maria Garcia',
    country: 'Spain',
    rating: 5,
    text: 'Excellent customer service and the mobile app is very user-friendly. We visited 15 attractions in 3 days. The savings were incredible!',
    avatar: '👩'
  }
];

export default function TestimonialsSection() {
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const itemTemplate = (testimonial: typeof testimonials[0]) => {
    return (
      <div className="px-3">
        <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md h-full">
          <div className="flex items-center mb-4">
            <div className="text-4xl mr-4">{testimonial.avatar}</div>
            <div>
              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.country}</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <i key={i} className="pi pi-star-fill text-yellow-400"></i>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed italic">
            &quot;{testimonial.text}&quot;
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy travelers who have explored Istanbul with our pass
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            value={testimonials}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={itemTemplate}
            circular
            autoplayInterval={5000}
            className="custom-carousel"
          />
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="pi pi-star-fill text-yellow-400"></i>
              ))}
            </div>
            <span className="text-gray-700 font-semibold ml-2">4.9/5</span>
            <span className="text-gray-500 text-sm ml-2">from 12,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

