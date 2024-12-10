import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
    title: 'ToDoList',
    description: 'ToDoList app by João Pedro',
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