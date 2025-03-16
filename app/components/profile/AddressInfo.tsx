import { EditOutlined } from "@ant-design/icons";

const AddressInfo = () => {
    return (
        <section className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Address</h2>
                <button className="text-gray-600 border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-200">
                    Edit <EditOutlined />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                    <p className="text-gray-400">Country</p>
                    <p className="font-bold text-gray-600">United Kingdom</p>
                </div>
                <div>
                    <p className="text-gray-400">City/State</p>
                    <p className="font-bold text-gray-600">Leeds, East London</p>
                </div>
                <div>
                    <p className="text-gray-400">Postal Code</p>
                    <p className="font-bold text-gray-600">ERT 2354</p>
                </div>
                <div>
                    <p className="text-gray-400">TAX ID</p>
                    <p className="font-bold text-gray-600">AS45645756</p>
                </div>
            </div>
        </section>
    );
};

export default AddressInfo;