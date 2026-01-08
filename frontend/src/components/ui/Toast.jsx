import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

const Toast = ({ message, type, isVisible }) => {
    const icons = {
        success: <CheckCircle className="w-6 h-6" />,
        error: <XCircle className="w-6 h-6" />,
        loading: <Loader className="w-6 h-6 animate-spin" />
    };

    const styles = {
        success: 'text-black',
        error: 'text-slate-800',
        loading: 'text-slate-700'
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        mass: 1
                    }}
                    className="fixed top-24 left-1/2 -translate-x-1/2 z-[100]"
                >
                    <div className="relative">
                        {/* Glassmorphism Toast */}
                        <motion.div
                            initial={{ backdropFilter: "blur(0px)" }}
                            animate={{ backdropFilter: "blur(24px)" }}
                            className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-6 py-4 min-w-[320px]"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                    className={styles[type]}
                                >
                                    {icons[type]}
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-slate-800 font-medium text-sm"
                                >
                                    {message}
                                </motion.p>
                            </div>

                            {/* Animated progress bar for loading */}
                            {type === 'loading' && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-b-2xl origin-left"
                                />
                            )}

                            {/* Success checkmark animation */}
                            {type === 'success' && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [0, 1.2, 1] }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center"
                                >
                                    <motion.svg
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.5, duration: 0.3 }}
                                        className="w-5 h-5 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    >
                                        <motion.path
                                            d="M5 13l4 4L19 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </motion.svg>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Glow effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur-xl -z-10"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
