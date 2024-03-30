import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';


export default function RootLayout({ children }) {
  return (
 <html lang="en">
  
  <body className="relative " >
       
        <NavBar/>
        {children}
        <ScrollToTopButton/>
        <section className= "bg-black padding-x padding-t pb-8 ">
        <Footer className='absolute  bottom-0'/>
         </section>
        </body>

 </html>
  );
}

