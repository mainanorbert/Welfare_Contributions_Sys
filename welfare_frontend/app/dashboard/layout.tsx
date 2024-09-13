
import Sidebar from "./sidebar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="flex bg-black h-screen">
        <aside>
            <Sidebar />
        </aside>

        <div className="flex-1 bg-white m-4 text-black rounded-xl overflow-auto">
          {children}
        </div>
      </main>
  );
}
