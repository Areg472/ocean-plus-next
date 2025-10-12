"use client";

import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function SidebarContent() {
  const { state } = useSidebar();

  return (
    <>
      <AppSidebar />
      <div
        className="fixed top-6 left-6 z-50 transition-all duration-200 ease-linear lg:top-6 lg:left-[calc(var(--sidebar-width)+1rem)] lg:data-[state=collapsed]:left-6"
        data-state={state}
      >
        <SidebarTrigger />
      </div>
    </>
  );
}

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark">
      <SidebarProvider className="dark" defaultOpen>
        <SidebarContent />
        <main>{children}</main>
      </SidebarProvider>
    </div>
  );
}
