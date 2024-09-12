
import Sidebar from "./sidebar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="flex bg-black">
        <aside>
            <Sidebar />
        </aside>

        <div className="flex-1 h-screen bg-white m-4 text-black rounded-xl overflow-auto">
          {children}
        </div>
      </main>
  );
}
