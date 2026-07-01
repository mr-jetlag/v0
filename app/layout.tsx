import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agos Capital - Under Construction',
  description: 'Landing PAge',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('darkMode')==='true'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
