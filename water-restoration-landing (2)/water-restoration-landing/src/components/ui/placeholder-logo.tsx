import React from 'react';

interface PlaceholderLogoProps {
  text?: string;
  className?: string;
}

export default function PlaceholderLogo({ text = "Your Logo", className = "" }: PlaceholderLogoProps) {
  return (
    <div className={`bg-blue-600 text-white px-3 py-2 rounded-md font-bold ${className}`}>
      {text}
    </div>
  );
}
