import { useState } from 'react'
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Content from "../components/layout/Content";

export default function App() {

  return (
    <div className="h-screen  grid grid-cols-[minmax(max-content,auto)_1fr] grid-rows-[auto_1fr_auto] gap-1 p-1 size-full">

      
      <Header />
      <Sidebar />


      <Content />
      
      <Footer />
      
    </div>

  );
}
