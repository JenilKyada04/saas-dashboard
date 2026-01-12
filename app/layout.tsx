import "./globals.css";
import { SidebarProvider } from "../context/SidebarContext";
import DashboardLayout from "../component/DashboardLayout";
import { SavedCoursesProvider } from "../context/SavedCoursesContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          {/* ✅ Provider MUST wrap Navbar + Pages */}
          <SavedCoursesProvider>
            <DashboardLayout>
              <div className="white-blue">
                {children}
              </div>
            </DashboardLayout>
          </SavedCoursesProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}

// https://www.figma.com/design/zAPjoHfKfbPXuYLkelw6Do/Education-Dashboard-Practice-Backup?node-id=9-1216&p=f
