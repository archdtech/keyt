"use client";

import { ReactNode } from 'react';
import VentureStudioNav from './VentureStudioNav';

interface VentureStudioLayoutProps {
  children: ReactNode;
}

export default function VentureStudioLayout({ children }: VentureStudioLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <VentureStudioNav />
      <div className="lg:pl-64">
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}