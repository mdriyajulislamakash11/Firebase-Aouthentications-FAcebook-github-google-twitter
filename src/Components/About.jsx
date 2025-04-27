import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-12">
            {/* About Section */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                <p className="text-gray-600 mb-6">
                    Welcome to our website! 🚀 <br />
                    We are passionate about providing the best services and experiences for our users.
                    Our mission is to create amazing products that make your life easier and more enjoyable.
                </p>
                <p className="text-gray-600">
                    Founded in 2025, our team has been working hard every day to deliver value,
                    innovation, and excellence. Thank you for being a part of our journey! ❤️
                </p>
            </div>

            {/* Blog Section */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Latest Blogs</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* Single Blog Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                        <img className="rounded-md mb-4" src="https://source.unsplash.com/400x250/?technology" alt="Blog 1" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">The Future of Technology</h3>
                        <p className="text-gray-600 mb-4">Explore how technology is evolving and shaping our lives faster than ever before.</p>
                        <button className="text-indigo-600 font-semibold hover:underline">Read More</button>
                    </div>

                    {/* Single Blog Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                        <img className="rounded-md mb-4" src="https://source.unsplash.com/400x250/?teamwork" alt="Blog 2" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Building Strong Teams</h3>
                        <p className="text-gray-600 mb-4">Discover the key secrets behind forming successful and motivated teams.</p>
                        <button className="text-indigo-600 font-semibold hover:underline">Read More</button>
                    </div>

                    {/* Single Blog Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                        <img className="rounded-md mb-4" src="https://source.unsplash.com/400x250/?innovation" alt="Blog 3" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Innovation in Everyday Life</h3>
                        <p className="text-gray-600 mb-4">How small innovations are making big impacts in the way we live and work.</p>
                        <button className="text-indigo-600 font-semibold hover:underline">Read More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
