import './globals.css'

export const metadata = {
  title: 'hello world site 20260104',
  description: 'a simple one-page next.js web app that displays 'hello, world!' centered on the screen. use tailwind css for styling.',
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
