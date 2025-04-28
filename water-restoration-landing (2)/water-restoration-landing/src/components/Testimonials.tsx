import Image from 'next/image';

const TestimonialCard = ({
  text,
  author,
  role,
  rating = 5
}: {
  text: string;
  author: string;
  role: string;
  rating?: number;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
      <blockquote className="text-gray-700 text-lg italic mb-6 flex-grow">"{text}"</blockquote>
      <div className="flex items-center">
        <div className="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center text-xl font-bold text-blue-600">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-bold">{author}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      text: "Carolina Restoration Solutions was a lifesaver! After a pipe burst in our basement, they responded within 30 minutes. The team was professional, efficient, and saved us from much worse damage. Their attention to detail during the restoration process was outstanding.",
      author: "Michael Johnson",
      role: "Homeowner",
      rating: 5
    },
    {
      text: "Our office flooded over a weekend, and the Carolina Restoration team worked tirelessly to get us back in business by Wednesday. Their quick response and thorough work prevented any mold issues. They even helped with the insurance paperwork!",
      author: "Sarah Williams",
      role: "Business Owner",
      rating: 5
    },
    {
      text: "The word that comes to mind with Carolina Restoration is 'compassion'. We felt it from day one. After a severe storm damaged our home, they helped us put our lives and our home back together with minimal stress. We're eternally grateful for their excellent service.",
      author: "Thomas Robinson",
      role: "Homeowner",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in providing exceptional service and results for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg">
            With excellent Google reviews, we're committed to excellence in water damage restoration.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-2"
              >
                <path d="M22.0001 12.2223C22.0001 11.4169 21.9292 10.6396 21.7998 9.88873H12.2451V13.8884H17.7103C17.4785 15.0896 16.7559 16.1044 15.6872 16.7699V19.2511H18.8702C20.7031 17.5423 22.0001 15.1486 22.0001 12.2223Z" fill="#4285F4"/>
                <path d="M12.245 22.0001C14.9513 22.0001 17.2295 21.0439 18.8701 19.2511L15.6871 16.7699C14.7931 17.3629 13.6461 17.7093 12.245 17.7093C9.61439 17.7093 7.39522 15.9628 6.60957 13.5801H3.33301V16.1345C4.96371 19.6039 8.34957 22.0001 12.245 22.0001V22.0001Z" fill="#34A853"/>
                <path d="M6.60953 13.5801C6.41027 12.987 6.29926 12.3541 6.29926 11.7C6.29926 11.046 6.41027 10.413 6.60953 9.81998V7.26556H3.333C2.59418 8.91714 2.167 10.7625 2.167 11.7C2.167 12.6376 2.59418 14.4829 3.333 16.1345L6.60953 13.5801Z" fill="#FBBC05"/>
                <path d="M12.245 5.69076C13.7179 5.69076 15.0322 6.20512 16.0557 7.18506L18.8878 4.35303C17.225 2.80452 14.9468 1.80005 12.245 1.80005C8.34957 1.80005 4.96371 4.19628 3.33301 7.66566L6.60958 10.22C7.39522 7.83732 9.61439 5.69076 12.245 5.69076V5.69076Z" fill="#EA4335"/>
              </svg>
              <span className="font-bold">Google</span>
              <span className="ml-1">4.9/5</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600 mr-2"
              >
                <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.71 7.25h3.42a.75.75 0 01.75.75v5.69a.75.75 0 01-.81.75c-1.695-.144-3.384-.284-5.1-.432a.75.75 0 01-.69-.75V12c0-1.402 1.135-2.5 2.43-2.5zm1.71-2.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" />
              </svg>
              <span className="font-bold">HomeAdvisor</span>
              <span className="ml-1">5/5</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24"
                height="24"
                className="mr-2"
              >
                <path
                  fill="#f44336"
                  d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z"
                />
                <path
                  fill="#fff"
                  d="M32.85 21.37l-4.91-.72l-2.2-4.43c-.15-.3-.64-.3-.79 0L22.76 20.65l-4.91.72c-.34.05-.48.46-.23.71l3.55 3.45l-.84 4.88c-.06.34.3.6.58.44L24 28.58l4.09 2.27c.28.16.64-.1.58-.44l-.84-4.88l3.55-3.45c.24-.26.1-.67-.23-.71z"
                />
              </svg>
              <span className="font-bold">Yelp</span>
              <span className="ml-1">4.8/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
