import './globals.css'
import { League_Spartan } from 'next/font/google'

const spartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='min-w-[375px] max-w-[1440px]'>
      <body className={spartan.className}>{children}</body>
    </html>
  )
}
