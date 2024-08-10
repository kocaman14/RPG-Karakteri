import './globals.css'
import { New_Rocker } from 'next/font/google'

const new_rocker_init = New_Rocker({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-new_rocker',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={new_rocker_init.variable}>{children}</body>
    </html>
  )
}
