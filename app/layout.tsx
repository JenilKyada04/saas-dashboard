import "./globals.css";
import { SidebarProvider } from "../context/SidebarContext";
import DashboardLayout from "../component/DashboardLayout";
import { SavedCoursesProvider } from "../context/SavedCoursesContext";

import { NuqsAdapter } from 'nuqs/adapters/next/app'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <SidebarProvider>
          <SavedCoursesProvider>
            <DashboardLayout>

              <NuqsAdapter>
                <div className="white-blue">
                  {children}
                </div>
              </NuqsAdapter>

            </DashboardLayout>
          </SavedCoursesProvider>
        </SidebarProvider>

      </body>
    </html>
  );
}

// https://www.figma.com/design/zAPjoHfKfbPXuYLkelw6Do/Education-Dashboard-Practice-Backup?node-id=9-1216&p=f
