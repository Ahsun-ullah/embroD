'use client';
import Footer from '@/components/user/HomePage/Footer';
import { Header } from '@/components/user/HomePage/Header';

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <main className='admin-content'>{children}</main>
      <Footer />
    </>
  );
}
