
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <section className= "bg-black padding-x padding-t pb-8 ">
        <Footer className='absolute  bottom-0'/>
      </section>
    </>
  );
};

export default Layout;
