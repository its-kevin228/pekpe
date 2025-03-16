import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

interface SidebarProps {
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (section: string) => {
        setActiveSection(section);
        setIsOpen(false); // Fermer la barre latérale après avoir cliqué sur un élément de menu
    };

    return (
        <>
            <button
                className="lg:hidden p-4 text-gray-600"
                onClick={toggleSidebar}
            >
                {isOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
            <aside
                className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static w-64 bg-white p-6 shadow-md min-h-screen transition-transform duration-300 ease-in-out z-50`}
            >
                <ul className="space-y-6 text-gray-600">
                    <li
                        className="hover:text-sky-400 hover:bg-sky-100 rounded-full p-2 cursor-pointer"
                        onClick={() => handleMenuClick('My Profile')}
                    >
                        My Profile
                    </li>
                    <li
                        className="hover:text-sky-400 hover:bg-sky-100 rounded-full p-2 cursor-pointer"
                        onClick={() => handleMenuClick("Security")}
                    >
                        Security
                    </li>
                    <li className="hover:text-sky-400 hover:bg-sky-100 rounded-full p-2 cursor-pointer">Teams</li>
                    <li className="hover:text-sky-400 hover:bg-sky-100 rounded-full p-2 cursor-pointer">Team Member</li>
                    <li className="hover:text-sky-400 hover:bg-sky-100 rounded-full p-2 cursor-pointer">Notifications</li>
                    <li className="hover:text-sky-400 hover:bg-sky-100 rounded-full p-2 cursor-pointer">Billing</li>
                    <li className="hover:text-sky-400 hover:bg-sky-100 rounded-full p-2 cursor-pointer">Data Export</li>
                    <li className="text-red-500 font-semibold hover:text-red-700 hover:bg-red-100 rounded-full p-2 cursor-pointer">Delete Account</li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;