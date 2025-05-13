'use client';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1 bg-background min-h-screen">
        {children}
      </main>
    </div>
  );
} 