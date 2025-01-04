import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Animation state for fade-in effect
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fade-in effect after the component mounts
        setIsVisible(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create a mailto link with the user's input
        const { name, email, message } = formData;
        const subject = `Message from ${name}`;
        const body = `From: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
        const mailtoLink = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the default mail client
        window.location.href = mailtoLink;

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="mt-3 py-16 bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 rounded-lg">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
                <p className="mt-4 text-gray-600">
                    Have any questions or need further information? Feel free to reach out to us directly via email.
                </p>

                {/* Contact Form with fade-in animation */}
                <div
                    className={`mt-8 max-w-lg mx-auto  p-6 rounded-lg shadow-lg transform transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        } transition duration-700 ease-in-out`}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-left text-gray-700">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-left text-gray-700">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-left text-gray-700">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                                rows="4"
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all hover:scale-110"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
