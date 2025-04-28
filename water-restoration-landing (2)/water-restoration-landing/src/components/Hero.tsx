import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] bg-blue-900 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://floodedbasementcleanup.ca/wp-content/uploads/2021/03/Flooded-Basement-Cleanup-Water-Damage-Services--scaled.jpg')",
          backgroundBlendMode: "overlay"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Fast, Professional Water Restoration Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            We respond quickly to restore your property and peace of mind after water damage. Available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Request Service
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-white font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Fast Response Time - On Site Within 60 Minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
