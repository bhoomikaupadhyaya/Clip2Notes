import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
   <div className="min-h-screen bg-slate-50">
  <Navbar />

  <div className="flex pt-20">
    <Sidebar />

    <main className="flex-1 ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </main>
  </div>
</div>

  );
}

export default MainLayout;