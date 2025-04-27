import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="my-6 text-center text-gray-500">or login with</div>

                <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-center gap-2 bg-gray-800 text-white rounded-lg py-2 hover:bg-gray-900 transition">
                        <i className="fab fa-github"></i> GitHub
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-blue-700 text-white rounded-lg py-2 hover:bg-blue-800 transition">
                        <i className="fab fa-facebook"></i> Facebook
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-blue-400 text-white rounded-lg py-2 hover:bg-blue-500 transition">
                        <i className="fab fa-twitter"></i> Twitter
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg py-2 hover:bg-red-600 transition">
                        <i className="fab fa-google"></i> Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
