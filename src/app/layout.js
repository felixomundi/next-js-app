import { Inter } from 'next/font/google'
import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BootstrapClient from './components/BootstrapClient.js';
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        <BootstrapClient />
        </body>
    </html>
  )
}
