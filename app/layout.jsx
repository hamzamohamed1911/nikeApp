import "./globals.css";
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
        {children}
         </AuthProvider>
         </APIContextProvider>
        </body>

 </html>
  );
}

