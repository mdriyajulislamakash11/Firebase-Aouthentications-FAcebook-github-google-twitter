import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner />

            {/* Features Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
                            <p className="text-gray-600">We provide the fastest delivery service across the country within 24 hours.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                            <p className="text-gray-600">Our support team is always ready to help you with any issues, any time.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-4">Secure Payment</h3>
                            <p className="text-gray-600">We ensure safe and secure payment methods for your convenience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <img src="https://images.unsplash.com/photo-1591696205602-2b6a06b27f19" alt="About Us" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                        <p className="text-gray-600 mb-4">
                            We are a passionate team dedicated to providing the best service and products to our customers.
                        </p>
                        <p className="text-gray-600">
                            Our mission is to make your experience smooth, simple, and enjoyable by delivering quality and innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <p className="text-gray-600 mb-4">
                                "Excellent service and super fast delivery. Highly recommended!"
                            </p>
                            <h4 className="font-semibold">- John Doe</h4>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <p className="text-gray-600 mb-4">
                                "Amazing quality and awesome support team. Loved my experience!"
                            </p>
                            <h4 className="font-semibold">- Jane Smith</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="py-16 bg-indigo-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="mb-8">Join us today and explore all the amazing features we have to offer.</p>
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                        Join Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
