
import Sidebar from "./sidebar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="flex">
        <aside>
            <Sidebar />
        </aside>

        <div className="flex-1 h-screen overflow-auto">
          {children}
        </div>
      </main>
  );
}
