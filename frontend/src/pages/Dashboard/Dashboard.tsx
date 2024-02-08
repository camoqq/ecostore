import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import NotificationsPage from "./NotificationsPage";
import SettingsPage from "./Settings";

const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-72px)]">
        <aside className="col-span-2 border-e">
          <nav>
            <ul className="">
              <li><Link className="block border-b font-medium text-lg py-3 px-3 cursor-pointer hover:bg-slate-100 " to='/orders'>All Orders</Link></li>
              <li><Link className="block border-b font-medium text-lg py-3 px-3 cursor-pointer hover:bg-slate-100" to='/profile-settings'>Profile Settings</Link></li>
              <li><Link className="block border-b font-medium text-lg py-3 px-3 cursor-pointer hover:bg-slate-100" to='/Notificatios'>Notifications</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="col-span-10">
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile-settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
