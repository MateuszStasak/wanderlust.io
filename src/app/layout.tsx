import { ReactNode } from 'react';

import './globals.css';
import { Selector } from './components/selector';

export const metadata = {
  title: 'Wanderlust.io',
  description: 'Generated by Next.js from super Vercel company',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang='en' data-theme='lemonade'>
      <body className='min-h-screen h-full bg-accent-100 text-base-content'>
      <header className='w-full bg-base-200 shadow-md p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-xl font-bold'>Wanderlust.io</h1>
        </div>
      </header>
      <main className='min-h-full flex flex-col items-center container mx-auto px-4 py-8'>
        <Selector />
        <div className='max-w-screen-md py-5 w-full h-full'>
          {children}
        </div>
      </main>
      <footer className='w-full bg-base-200 p-4 mt-auto'>
        <div className='container mx-auto text-center'>
          <p>&copy; 2024 Wanderlust.io. All rights reserved.</p>
        </div>
      </footer>
      </body>
      </html>

  );
}
