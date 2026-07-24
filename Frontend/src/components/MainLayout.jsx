import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 ml-64 pt-24 px-8 pb-8">
          {children}
        </main>

      </div>

      <Footer />

    </div>
  );
}

export default MainLayout;