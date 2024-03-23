import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';
import APIContextProvider from "@/store/api-context";
import { AuthProvider } from "@/store/Auth-context";


export const metadata = {
  title: "Just Do It" ,
  description: "CHOOSE YOUR FAVOURITE SHOES ",
};

export default function RootLayout({ children }) {
  return (
 <html lang="en">
  
  <body className="relative " >
       <APIContextProvider>
        <AuthProvider>
        <NavBar/>
        {children}
        <section className= "bg-black padding-x padding-t pb-8 ">
        <Footer className='absolute  bottom-0'/>
         </section>
         <ScrollToTopButton/>
         </AuthProvider>
         </APIContextProvider>
        </body>

 </html>
  );
}

