import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Tirtha Raj Acharya - Postdoctoral Research Fellow',
  description: 'Dr. Tirtha Raj Acharya is a Postdoctoral Research Fellow specializing in non-thermal plasma physics and sustainable chemistry at the University of Nottingham, UK.',
  keywords: [
    'Dr. Tirtha Raj Acharya',
    'Postdoctoral Research Fellow',
    'Non-thermal Plasma Physics',
    'Sustainable Chemistry',
    'University of Nottingham',
    'Plasma-Assisted Nitrogen Fixation',
    'CO2 Conversion',
    'Environmental Remediation',
    'Nanoparticle Synthesis',
    'Plasma Catalysis'
  ],
  authors: [{ name: 'Dr. Tirtha Raj Acharya' }],
  creator: 'Dr. Tirtha Raj Acharya',
  publisher: 'Dr. Tirtha Raj Acharya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tirtharajacharya.com.np'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Tirtha Raj Acharya - Postdoctoral Research Fellow',
    description: 'Specializing in non-thermal plasma physics and sustainable chemistry at the University of Nottingham, UK.',
    url: 'https://tirtharajacharya.com.np',
    siteName: 'Dr. Tirtha Raj Acharya Portfolio',
    images: [
      {
        url: 'https://tirtharajacharya.com.np/tirtha.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Tirtha Raj Acharya - Academic Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Tirtha Raj Acharya - Postdoctoral Research Fellow',
    description: 'Specializing in non-thermal plasma physics and sustainable chemistry at the University of Nottingham, UK.',
    images: ['https://tirtharajacharya.com.np/tirtha.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 