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

// https://www.figma.com/design/zAPjoHfKfbPXuYLkelw6Do/Education-Dashboard-Practice-Backup?node-id=9-1216&p=f
