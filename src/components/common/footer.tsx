'use client';

import { CurrentYear } from 'foxact/current-year';

export default function Footer() {
  return (
    <div className="w-full min-h-32 bg-background text-muted-foreground text-sm">
      <div className="py-14  flex justify-between max-w-5xl mx-auto">
        <div className="space-y-3">
          <div>
            <span className="mr-2">CC BY-NC-SA 4.0</span>
            <CurrentYear /> - NOW
            <span className="ml-2">© Bsx</span>
          </div>
          <div>Powered by nextjs</div>
        </div>
        <button
          className="hover:text-accent-foreground group flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <span className="i-ri-arrow-up-line opacity-0 group-hover:opacity-100 transition-opacity" />
          back to top
        </button>
      </div>
    </div>
  );
}
