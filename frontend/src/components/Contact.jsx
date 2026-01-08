import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import Toast from './ui/Toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        // Show loading toast
        setToastMessage('Sending your message...');
        setToastType('loading');
        setShowToast(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Portfolio Contact: Message from ${formData.name}`,
                    from_name: 'Portfolio Contact Form',
                    replyto: formData.email
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });

                // Show success toast
                setToastMessage('Message sent successfully! 🎉');
                setToastType('success');

                setTimeout(() => {
                    setStatus('');
                    setShowToast(false);
                }, 3000);
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Failed to send message');

                // Show error toast
                setToastMessage('Failed to send message. Please try again.');
                setToastType('error');

                setTimeout(() => {
                    setStatus('');
                    setShowToast(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again.');

            // Show error toast
            setToastMessage('Network error. Please check your connection.');
            setToastType('error');

            setTimeout(() => {
                setStatus('');
                setShowToast(false);
            }, 3000);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
            {/* Toast Notification */}
            <Toast message={toastMessage} type={toastType} isVisible={showToast} />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading text-slate-800">
                        Get In <span className="text-slate-600">Touch</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                        Have a project in mind? Let's work together to bring your ideas to life.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                >
                    <div className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                Your Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 text-slate-800 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 text-slate-800 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200/50 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                Message
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 text-slate-400" size={20} />
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 text-slate-800 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200/50 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {status === 'error' && errorMessage && (
                            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
                                {errorMessage}
                            </div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full px-6 py-3 sm:py-4 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                            {status === 'sending' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
