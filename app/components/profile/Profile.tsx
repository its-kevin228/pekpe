/* eslint-disable @typescript-eslint/no-unused-vars */
import { EditOutlined } from "@ant-design/icons";
import { useRef, useState, useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
const Profile = ({ }) => {
    const [profileImage, setProfileImage] = useState(() => localStorage.getItem('userProfileImage') ?? "https://img.freepik.com/photos-gratuite/avatar-androgyne-personne-queer-non-binaire_23-2151100149.jpg?ga=GA1.1.216277761.1734835743&semt=ais_hybrid");
    const [name, setName] = useState(() => localStorage.getItem('userName') ?? "Rafiqul Rahman");
    const [role, setRole] = useState(() => localStorage.getItem('userRole') ?? "Team Manager");
    const [location, setLocation] = useState(() => localStorage.getItem('userLocation') ?? "Leeds, United Kingdom");
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        localStorage.setItem('userProfileImage', profileImage);
    }, [profileImage]);

    useEffect(() => {
        localStorage.setItem('userName', name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem('userRole', role);
    }, [role]);

    useEffect(() => {
        localStorage.setItem('userLocation', location);
    }, [location]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target && event.target.result) {
                    const newImage = event.target.result as string;
                    setProfileImage(newImage);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleEditClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-20 h-20 rounded-full"
                    />
                    <div>
                        <h3 className="text-lg font-bold text-gray-700">{name}</h3>
                        <p className="text-gray-400 font-bold">{role}</p>
                        <p className="text-gray-300 font-bold">{location}</p>
                    </div>
                </div>
                <button
                    className="text-gray-600 border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-200"
                    onClick={handleEditClick}
                >
                    Edit <EditOutlined />
                </button>
            </div>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
            />
        </section>
    );
};

export default Profile;