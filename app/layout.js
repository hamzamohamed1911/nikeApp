import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer'

export const metadata = {
  title: "NIKE APP" ,
  description: "CHOOSE YOUR FAVOURITE SHOES ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative" >
        <NavBar/>
        {children}
        <section className="bg-black padding-x padding-t pb-8 ">
        <Footer/>
         </section>
        
        </body>
    </html>
  );
}
