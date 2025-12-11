import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CREATIVE FORCE | UNIVERSITY OF KELANIYA',
  description: 'Member Recruitment Portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}