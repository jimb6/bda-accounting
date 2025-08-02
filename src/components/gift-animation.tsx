"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Star, Sparkles } from "lucide-react"

interface GiftAnimationProps {
  onGiftOpened: () => void
}

export function GiftAnimation({ onGiftOpened }: GiftAnimationProps) {
  const [tapCount, setTapCount] = useState(0)
  const [isShaking, setIsShaking] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const [showSparkles, setShowSparkles] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const requiredTaps = 7 // Number of taps needed to open the gift

  useEffect(() => {
    // Reset tap count if user stops tapping for 2 seconds
    if (tapCount > 0 && !isOpening) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        setTapCount(0)
        setIsShaking(false)
      }, 2000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [tapCount, isOpening])

  const handleTap = () => {
    if (isOpening) return

    const newTapCount = tapCount + 1
    setTapCount(newTapCount)
    setIsShaking(true)

    if (newTapCount >= requiredTaps) {
      setIsOpening(true)
      setShowSparkles(true)
      
      // Open the gift after animation
      setTimeout(() => {
        onGiftOpened()
      }, 3000)
    }

    // Stop shaking after a short delay
    setTimeout(() => setIsShaking(false), 200)
  }

  const sparkleVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: { 
      scale: [0, 1, 0], 
      rotate: [0, 180, 360],
      transition: { duration: 1, repeat: Infinity }
    }
  }

  const giftBoxVariants = {
    idle: { 
      scale: 1,
      rotateZ: 0,
    },
    shake: {
      scale: [1, 1.05, 1],
      rotateZ: [-2, 2, -2, 2, 0],
      transition: { duration: 0.3 }
    },
    opening: {
      scale: [1, 1.2, 1.1],
      rotateY: [0, 10, -10, 0],
      transition: { duration: 2 }
    }
  }

  const lidVariants = {
    closed: { rotateX: 0, y: 0 },
    opening: {
      rotateX: -45,
      y: -20,
      transition: { duration: 1.5, delay: 0.5 }
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            <Star className="h-4 w-4" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="mb-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-3">
              💝 A Simple Gift for you Ninong & Ninang 💝
            </h1>
            <div className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-2xl mx-auto">
              <p className="text-pink-200 font-medium">May your accounting firm continue to grow and prosper. Laging mag-succeed po kayo!</p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            🎁 Special Gift for You! 🎁
          </h2>
          <p className="text-xl md:text-2xl text-pink-200 mb-2">
            Are you ready for your surprise?
          </p>
          <p className="text-lg text-purple-200">
            Tap the gift box quickly {requiredTaps} times to unwrap it!
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-8"
        >
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(requiredTaps)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  i < tapCount ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <p className="text-white/80">
            {tapCount}/{requiredTaps} taps
          </p>
        </motion.div>

        {/* Gift Box */}
        <div className="relative cursor-pointer" onClick={handleTap}>
          <motion.div
            variants={giftBoxVariants}
            animate={isOpening ? 'opening' : isShaking ? 'shake' : 'idle'}
            className="relative"
            style={{ perspective: 1000 }}
          >
            {/* Gift Box Base */}
            <div className="w-48 h-48 mx-auto relative">
              <div className="w-full h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Box Pattern */}
                <div className="absolute inset-0 bg-red-600/20" />
              </div>

              {/* Gift Box Lid */}
              <motion.div
                variants={lidVariants}
                animate={isOpening ? 'opening' : 'closed'}
                className="absolute -top-2 inset-x-0 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-lg origin-bottom"
                style={{ transformStyle: 'preserve-3d' }}
              />

              {/* Ribbon Vertical */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg" />
              
              {/* Ribbon Horizontal */}
              <div className="absolute top-1/2 transform -translate-y-1/2 inset-x-0 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg" />

              {/* Bow */}
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                animate={isOpening ? { scale: [1, 1.2, 0], rotateY: [0, 180, 360] } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full relative shadow-lg">
                  <div className="absolute inset-1 bg-yellow-500 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-6 bg-yellow-700 rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Sparkles Animation */}
          <AnimatePresence>
            {showSparkles && (
              <>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-yellow-400"
                    style={{
                      left: `${50 + (Math.random() - 0.5) * 200}%`,
                      top: `${50 + (Math.random() - 0.5) * 200}%`,
                    }}
                    variants={sparkleVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                  >
                    <Sparkles className="h-6 w-6" />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center"
        >
          {!isOpening ? (
            <div>
              <p className="text-white/90 mb-2">👆 Tap the gift box quickly!</p>
              <p className="text-sm text-white/70">
                {tapCount > 0 ? "Keep tapping fast! Don't stop!" : "Start tapping to unwrap your gift!"}
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-2xl text-yellow-300 font-bold mb-2">🎉 Opening your gift! 🎉</p>
              <p className="text-white">Get ready for something amazing...</p>
            </motion.div>
          )}
        </motion.div>

        {/* Hearts floating animation */}
        <AnimatePresence>
          {isOpening && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-pink-400"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1, 0], 
                    y: -100,
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                >
                  <Heart className="h-8 w-8" />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
