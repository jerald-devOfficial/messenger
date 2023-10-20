import Image from 'next/image';
import AuthForm from './components/AuthForm';
import { Metadata } from 'next';

const title = 'Messenger clone by Jerald Baroro';

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Messenger - Send live messages with friends',
  twitter: {
    images: {
      url: 'https://messenger-jerald-devofficial.vercel.app/images/logo.png',
      alt: 'Messenger - Send live messages with friends',
      type: 'image/png',
      width: 300,
      height: 300
    }
  },
  openGraph: {
    title: title,
    images: {
      url: 'https://messenger-jerald-devofficial.vercel.app/images/logo.png',
      alt: 'Messenger - Send live messages with friends',
      type: 'image/png',
      width: 300,
      height: 300
    },
    siteName: 'Messenger',
    description:
      'Messenger - Send live messages with friends. Made with Next.js 13.5, TailwindCSS, Prisma, MongoDB, and Pusher'
  }
};

export default function Home() {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image
          alt='Logo'
          height={48}
          width={48}
          className='mx-auto w-auto'
          src={'/images/logo.png'}
        />
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
