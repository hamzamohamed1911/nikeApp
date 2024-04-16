import Footer from "@/app/_components/Footer";
import NavBar from "@/app/_components/NavBar";
import ScrollToTopButton from "@/app/_components/ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {children}
      </main>
      <ScrollToTopButton/>
      <section className= "bg-black padding-x padding-t pb-8 ">
        <Footer className='absolute  bottom-0'/>
      </section>
    </>
  );
};

export default Layout;
