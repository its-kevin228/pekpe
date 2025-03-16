'use client'

import type { NextPage } from "next";
import Sidebar from "./components/Sidebar";
import Profile from "./components/profile/Profile";
import { useEffect, useState } from "react";
import Security from "./components/security/Security";
import PersonalInfo from "./components/profile/PersonalInfo";
import AddressInfo from "./components/profile/AddressInfo";

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState('My Profile');

  useEffect(() => {
    const savedSection = localStorage.getItem('activeSection');
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <Sidebar setActiveSection={setActiveSection} className="w-full lg:w-1/4" />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{activeSection}</h2>
        <main className="space-y-6">
          {activeSection === 'My Profile' && (
            <>
              <Profile />
              <PersonalInfo />
              <AddressInfo />
            </>
          )}
          {activeSection === 'Security' && <Security />}
        </main>
      </div>
    </div>
  );
};

export default Home;
