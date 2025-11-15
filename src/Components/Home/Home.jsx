import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-50 to-blue-200 p-6">
            <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-blue-800">
                     Hospital Laboratory System
                </h1>

                <p className="text-gray-600 text-sm md:text-lg max-w-md mx-auto">
                    Welcome to the Laboratory Management System.
                    Please log in to continue.
                </p>

                <button
                    onClick={() => navigate("/login")}
                    className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </div>

            <div className="info">
             
                <p className="m-5">Design By: <span className="bg-red-200 p-2 rounded-xl "> Maged Tanious</span></p>
            </div>
        </div>
    );
}

