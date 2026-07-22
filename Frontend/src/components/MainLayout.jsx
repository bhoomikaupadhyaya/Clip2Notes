import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 pt-24 pb-10 px-6 lg:px-10 overflow-x-hidden">
          {/* Common Container */}
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;

