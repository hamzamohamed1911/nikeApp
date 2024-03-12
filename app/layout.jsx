import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';

export const metadata = {
  title: "Just Do It" ,
  description: "CHOOSE YOUR FAVOURITE SHOES ",
};

export default function RootLayout({ children }) {
  return (
 <html lang="en">
  
  <body className="relative " >
        <NavBar/>
        {children}
        <section className= "relative bg-black padding-x padding-t pb-8">
        <Footer className='absolute bottom-0'/>
         </section>
         <ScrollToTopButton/>
        </body>

 </html>
  );
}

