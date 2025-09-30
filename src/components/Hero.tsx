import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  scrollY: number;
}

interface CodeSnippet {
  id: number;
  code: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [codeSnippets] = useState<CodeSnippet[]>([
    { id: 1, code: 'function()', x: 10, y: 20, duration: 20, delay: 0 },
    { id: 2, code: '<div>', x: 85, y: 15, duration: 25, delay: 2 },
    { id: 3, code: 'const data = {}', x: 15, y: 70, duration: 22, delay: 1 },
    { id: 4, code: 'if(true)', x: 80, y: 60, duration: 23, delay: 3 },
    { id: 5, code: 'SELECT *', x: 20, y: 45, duration: 24, delay: 1.5 },
    { id: 6, code: '=> {}', x: 75, y: 35, duration: 21, delay: 2.5 },
    { id: 7, code: 'import React', x: 12, y: 80, duration: 26, delay: 0.5 },
    { id: 8, code: 'class AI:', x: 88, y: 75, duration: 22, delay: 1.8 },
    { id: 9, code: 'async await', x: 25, y: 30, duration: 23, delay: 2.2 },
    { id: 10, code: '{...props}', x: 70, y: 85, duration: 24, delay: 0.8 },
  ]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.2) 0%, transparent 50%)`,
          }} />
        </div>

        {codeSnippets.map((snippet) => (
          <div
            key={snippet.id}
            className="absolute text-red-600/30 font-mono text-sm md:text-base animate-float-code"
            style={{
              left: `${snippet.x}%`,
              top: `${snippet.y}%`,
              animation: `float-code ${snippet.duration}s ease-in-out infinite`,
              animationDelay: `${snippet.delay}s`,
            }}
          >
            {snippet.code}
          </div>
        ))}
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Advanced<br />
            <span className="text-red-600">Analytics Group</span>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-8 italic">
            "Like ICE<br />
            <span className="text-xl md:text-2xl">we blend in and make a solution"</span>
          </p>
          <a
            href="#about"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Discover More
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
}