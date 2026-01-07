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
      <body>
        <SidebarProvider>
          <DashboardLayout>
            <div className="white-blue">
              {children}
            </div>
          </DashboardLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
