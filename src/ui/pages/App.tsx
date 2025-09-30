import { useState } from 'react'
import Sidebar from "../components/layout/Sidebar";
import SettingsPage from './SettingsPage';
import HttpHistoryPage from './HttpHistoryPage';
import AppLayout from '../AppLayout';

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
