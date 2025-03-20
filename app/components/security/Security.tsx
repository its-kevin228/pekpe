import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';

const Security = () => {
    const [password, setPassword] = useState(() => localStorage.getItem('userPassword') || 'defaultPassword');
    const [showPassword, setShowPassword] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

    const user = {
        _id: "ID_USER",
        email: "nouveau.utilisateur@example.com",
        firstName: "Jean",
        lastName: "Dupont",
        phone: "0123456789",
        address: "123 Rue Exemple",
        post: "Web dev",
        niveau: {
            observation: "E",
            action: "0",
            approbation: "0"
        },
        accessLevel: {
            observation: "E",
            action: "0",
            approbation: "0"
        },
        createdById: "ID_USER_CREATOR",
        createdAt: "2024-11-27T12:00:00.000Z",
        updatedAt: "2024-11-27T12:00:00.000Z"
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    const validatePassword = (password: string) => {
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
        } else if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one uppercase letter.');
        } else if (!/[0-9]/.test(password)) {
            setError('Password must contain at least one number.');
        } else {
            setError('');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleEditMode = () => {
        if (isEditing) {
            if (error) {
                return;
            }
            localStorage.setItem('userPassword', password);
        }
        setIsEditing(!isEditing);
    };

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
                    <p className="text-gray-600">Manage your security settings here.</p>
                </div>
                {!isEditing && (
                    <button
                        className="text-gray-800 border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors duration-200"
                        onClick={toggleEditMode}
                    >
                        Edit <EditOutlined />
                    </button>
                )}
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <p className="text-gray-700">Password</p>
                    <div className="relative mt-2">
                        {isEditing ? (
                            <div className="flex items-center space-x-3">
                                <div className="relative flex-1">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                                        aria-describedby="password-error"
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleShowPassword}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-700 hover:text-gray-500 transition-colors duration-200"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? '👁️' : '👁️‍🗨️'}
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    onClick={toggleEditMode}
                                    disabled={!!error}
                                    className="px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 disabled:opacity-50"
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <span className="block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-gray-100 text-gray-900 sm:text-sm">
                                    {'•'.repeat(password.length)}
                                </span>
                            </div>
                        )}
                        {error && (
                            <p id="password-error" className="mt-2 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">User Access Levels</h3>
                    <p className="text-gray-700">Observation: {user.accessLevel.observation}</p>
                    <p className="text-gray-700">Action: {user.accessLevel.action}</p>
                    <p className="text-gray-700">Approbation: {user.accessLevel.approbation}</p>
                </div>
            </div>
        </section>
    );
};

export default Security;