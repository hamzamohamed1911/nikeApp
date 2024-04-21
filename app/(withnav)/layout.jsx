'use client'
import Footer from "@/app/_components/Footer";
import NavBar from "@/app/_components/NavBar";
import ScrollToTopButton from "@/app/_components/ScrollToTopButton";
import { useEffect, useState } from "react";
import Loader from "../_components/loading";



const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <NavBar />
          </header>
          <main>
            {children}
          </main>
          <ScrollToTopButton/>
          <section className="bg-black padding-x padding-t pb-8">
            <Footer className='absolute bottom-0'/>
          </section>
        </>
      )}
    </>
  );
};

export default Layout;
