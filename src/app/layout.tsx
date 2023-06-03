import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "./components/Navbar";
import 'flowbite';
import Footer_comp from "./components/Footer";
import Chat from "./components/Chat";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head>
            
      </head>
      <body className={inter.className}>

           <NavBar/>
            <main className="homeview flex items-center justify-between">
              {children} 
              <Chat/>
            </main>
        

          <Footer_comp/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
         
      </body>
        
    </html>
  )
}
