import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 bg-muted/30 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
