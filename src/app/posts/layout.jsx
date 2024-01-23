import Navbar from "@/components/core/Navbar";

export const metadata = {
    title: "Posts Page",
    description: "Generated by create next app",
  };
  
  export default function Layout({ children }) {
    return (
      <div>
        <Navbar/>
        {children}
      </div>
    );
  }