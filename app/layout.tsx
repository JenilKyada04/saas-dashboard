import "./globals.css";
import { SidebarProvider } from "../context/SidebarContext";
import DashboardLayout from "../component/DashboardLayout";
import { SavedCoursesProvider } from "../context/SavedCoursesContext";

import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { type ReactNode } from 'react'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NuqsAdapter>

          <SidebarProvider>
            <SavedCoursesProvider>
              <DashboardLayout>

                <div className="white-blue">
                  {children}
                </div>

              </DashboardLayout>
            </SavedCoursesProvider>
          </SidebarProvider>

        </NuqsAdapter>

      </body>
    </html>
  );
}

// https://www.figma.com/design/zAPjoHfKfbPXuYLkelw6Do/Education-Dashboard-Practice-Backup?node-id=9-1216&p=f
