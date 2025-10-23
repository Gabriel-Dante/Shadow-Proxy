import { useState } from 'react'
import Sidebar from "./components/layout/Sidebar";
import SettingsPage from './pages/SettingsPage';
import HttpHistoryPage from './pages/HttpHistoryPage';
import AppLayout from './components/layout/AppLayout';

const pages = {
  httpHistory: <HttpHistoryPage />,
  settings: <SettingsPage />,
};

export default function App() {
  const [activePage, setActivePage] = useState<keyof typeof pages>("httpHistory");

  
  return (
    <AppLayout sidebar={<Sidebar onSelect={setActivePage} activePage={activePage} />}>
      {pages[activePage]}
    </AppLayout>
  );
}
