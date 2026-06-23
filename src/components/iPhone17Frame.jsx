import React from 'react'
import { motion } from 'framer-motion'

export default function iPhone17Frame({ children }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full max-w-md mx-auto"
      style={{
        aspectRatio: '9/19.5',
      }}
    >
      {/* Outer Phone Bezel */}
      <div className="relative w-full h-full rounded-[60px] bg-gradient-to-b from-gray-900 to-black shadow-2xl overflow-hidden border-[14px] border-gray-800">
        {/* Inner Bezel Highlight */}
        <div className="absolute inset-[2px] rounded-[56px] border border-white/10" />

        {/* Dynamic Island */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-9 bg-black rounded-b-3xl z-50 flex items-center justify-center gap-3 shadow-lg border-b border-gray-700"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
          <div className="flex-1 text-center text-white text-xs font-semibold">9:41</div>
          <div className="w-1 h-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>
        </motion.div>

        {/* Status Bar Area */}
        <div className="h-14 bg-gradient-to-b from-black via-black/95 to-transparent"></div>

        {/* Screen Content - Main Area */}
        <div className="w-full flex-1 bg-black overflow-hidden relative">
          {children}
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
          }} />
        </div>

        {/* Home Indicator */}
        <div className="h-7 bg-black flex items-center justify-center border-t border-gray-900">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-1.5 bg-gray-700 rounded-full"
          />
        </div>
      </div>

      {/* Phone Shine Effect */}
      <div
        className="absolute inset-0 rounded-[60px] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
          boxShadow: `
            inset 0 0 30px rgba(255,255,255,0.05),
            0 25px 50px rgba(0, 0, 0, 0.7),
            0 0 1px rgba(255, 255, 255, 0.1)
          `,
        }}
      />

      {/* Ambient Light */}
      <div
        className="absolute -inset-10 rounded-full pointer-events-none blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}
