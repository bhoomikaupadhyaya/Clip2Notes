import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

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