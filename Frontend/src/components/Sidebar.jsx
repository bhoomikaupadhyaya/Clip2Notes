import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="fixed left-0 top-20 h-[calc(100vh-80px)] w-64 bg-white border-r border-slate-200">
      <Navbar />

      <div className="pt-20">

        <Sidebar />

        {/* Leave space for the fixed sidebar */}
        <main className="lg:ml-64 p-6">

          <div className="mx-auto max-w-7xl">
            {children}
          </div>

        </main>

      </div>

      <Footer />

    </div>
  );
}

export default MainLayout;