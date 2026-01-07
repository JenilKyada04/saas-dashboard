import "./globals.css";
import { SidebarProvider } from "./context/SidebarContext";
import DashboardLayout from "./components/DashboardLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <SidebarProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
