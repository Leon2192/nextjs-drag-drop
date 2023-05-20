import './globals.css'

import { SideBar } from './components/SideBar';
import { TopBar } from './components/TopBar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Drag and drop app</title>
      </head>
      <body className='min-w-full min-h-screen bg-blue-100'>
        <TopBar />
        <SideBar />
        <main className='pl-40 pt-16'>
          {children}
        </main>
      </body>
    </html>
  )
}