'use client'

import { motion } from 'framer-motion'

const AnimatedInstructions = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-3 rounded-lg shadow-lg"
      >
        👋 Welcome! This is your dashboard overview
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -right-10 top-1/2 bg-green-500 text-white p-3 rounded-lg shadow-lg"
      >
        💰 Track your total balance here
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="absolute left-1/2 transform -translate-x-1/2 bg-purple-500 text-white p-3 rounded-lg shadow-lg"
      >
        📊 View your recent transactions below
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.5 }}
        className="absolute right-10 top-1/2 bg-orange-500 text-white p-3 rounded-lg shadow-lg"
      >
        📱 Quick access to your accounts and latest activities
      </motion.div>
    </>
  )
}

export default AnimatedInstructions 