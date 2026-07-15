import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8 ml-0 lg:ml-64 min-h-screen">

          {children}

        </main>

      </div>

      <Footer />

    </div>
  );
}

export default MainLayout;