import type { ReactNode } from "react";
// import Sidebar from "./components/layout/Sidebar";
import Header from "./Header";
import Footer from "./Footer";

interface AppLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function AppLayout({ children, sidebar }: AppLayoutProps) {
  return (
    <div className="h-screen grid grid-cols-[minmax(max-content,auto)_1fr] grid-rows-[auto_1fr_auto] gap-1 p-1 size-full">
      <Header />
      {sidebar}
      <main className='col-start-2 row-start-2 col-span-full min-w-0 min-h-0 flex flex-col gap-1 rounded-md bg-bgprimary'>{children}</main>
      <Footer />
    </div>
  );
};

