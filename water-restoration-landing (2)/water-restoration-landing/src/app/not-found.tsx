import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Page Not Found | Carolina Restoration Solutions',
  description: 'The page you were looking for could not be found. Carolina Restoration Solutions offers 24/7 water damage restoration services.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're sorry, but the page you were looking for doesn't exist.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-md text-gray-700">
            Need emergency water damage restoration? Contact us immediately at{' '}
            <a href="tel:1-800-555-0000" className="text-blue-600 font-bold">
              1-800-555-0000
            </a>
          </p>
          <p className="text-md text-gray-700">
            We provide professional water damage restoration, flood cleanup, and mold remediation services with 24/7 emergency response throughout Carolina.
          </p>
        </div>
        <div className="mt-6">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
