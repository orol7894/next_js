import Navigation from "../components/navigation"

export const metadata = {
  title: {
    template: "%s",
    default:"Merry Pages",
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}