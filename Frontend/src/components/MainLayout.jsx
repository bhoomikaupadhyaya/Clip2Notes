import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Fixed Navbar */}
      <Navbar />

      {/* Content below Navbar */}
      <div className="flex pt-20">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">

          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>

        </main>

      </div>

      <Footer />

    </div>
  );
}

export default MainLayout;