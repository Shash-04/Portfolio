"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // useEffect to trigger the mailto link after the form status is 'success'
  useEffect(() => {
    if (formStatus === 'success') {
      const mailtoLink = `mailto:shashwatvaish1@gmail.com?subject=Contact from ${name}&body=${message}`;
      window.open(mailtoLink);
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setFormStatus(null);
      }, 1000); // reset after 1 second
    }
  }, [formStatus, name, message]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8  text-gray-900 dark:dark:text-gray-100 transition-colors duration-200">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-7">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-7">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Send className="h-5 w-5 mr-2" />
                )}
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {formStatus === 'success' && (
                <motion.div
                  className="mt-4 p-3 bg-green-100 dark:bg-green-500/20 border border-green-500 rounded-lg text-green-800 dark:text-green-200 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-4 p-4 bg-white/70 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700/50"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                    <p className="font-medium">shashwatvaish1@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-white/70 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700/50"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-green-100 dark:bg-green-500/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Location</p>
                    <p className="font-medium">Delhi, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Shash-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-6 w-6 text-gray-800 dark:text-white" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shashwat-vaish-6256442b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6 text-gray-800 dark:text-white" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/shash.ded/?hl=enusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-6 w-6 text-gray-800 dark:text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}