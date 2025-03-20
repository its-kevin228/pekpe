import { EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const PersonalInfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(() => localStorage.getItem('userFirstName') ?? "Rafiqul");
    const [lastName, setLastName] = useState(() => localStorage.getItem('userLastName') ?? "Rahman");
    const [phone, setPhone] = useState(() => localStorage.getItem('userPhone') ?? "+09 345 346 46");
    const [phoneError, setPhoneError] = useState("");

    useEffect(() => {
        localStorage.setItem('userFirstName', firstName);
    }, [firstName]);

    useEffect(() => {
        localStorage.setItem('userLastName', lastName);
    }, [lastName]);

    useEffect(() => {
        localStorage.setItem('userPhone', phone);
    }, [phone]);

    const handleSave = () => {
        if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
            alert("Veuillez compléter tous les champs");
            return;
        }

        const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
        if (!phoneRegex.test(phone)) {
            alert("Veuillez entrer un numéro de téléphone valide");
            return;
        }

        localStorage.setItem('userFirstName', firstName);
        localStorage.setItem('userLastName', lastName);
        localStorage.setItem('userPhone', phone);
        setIsEditing(false);
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhone(value);

        const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
        if (!phoneRegex.test(value)) {
            setPhoneError("Veuillez entrer un numéro de téléphone valide");
        } else {
            setPhoneError("");
        }
    }

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Personal Information</h2>
                <button
                    className="text-gray-600 border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-200"
                    onClick={() => {
                        if (isEditing) {
                            handleSave();
                        } else {
                            setIsEditing(true);
                        }
                    }}
                >
                    {isEditing ? "Save" : "Edit"} <EditOutlined />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                    <p className="text-gray-400">First Name</p>
                    {isEditing ? (
                        <input
                            type="text"
                            className="border border-gray-400 p-2 rounded-full text-gray-600 w-full"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    ) : (
                        <p className="font-bold text-gray-600">{firstName}</p>
                    )}
                </div>
                <div>
                    <p className="text-gray-400">Last Name</p>
                    {isEditing ? (
                        <input
                            type="text"
                            className="border border-gray-400 p-2 rounded-full text-gray-600 w-full"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    ) : (
                        <p className="font-bold text-gray-600">{lastName}</p>
                    )}
                </div>
                <div>
                    <p className="text-gray-400">Email address</p>
                    <p className="font-bold text-gray-600">rafiqulrahman51@gmail.com</p>
                </div>
                <div>
                    <p className="text-gray-400">Phone</p>
                    {isEditing ? (
                        <>
                            <input
                                type="tel"
                                className="border border-gray-400 p-2 rounded-full text-gray-600 w-full"
                                value={phone}
                                onChange={handlePhoneChange}
                            />
                            {phoneError && <p className="text-red-500">{phoneError}</p>}
                        </>
                    ) : (
                        <p className="font-bold text-gray-600">{phone}</p>
                    )}
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <p className="text-gray-400">Bio</p>
                    <p className="font-bold text-gray-600">Team Manager</p>
                </div>
            </div>
        </section>
    );
};

export default PersonalInfo;