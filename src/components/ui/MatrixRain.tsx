import React, { useEffect, useRef } from 'react'

interface MatrixRainProps {
  side: 'left' | 'right' | 'background'
}

interface FallingLetter {
  id: number
  char: string
  x: number
  y: number
  speed: number
  element: HTMLDivElement
}

const MatrixRain: React.FC<MatrixRainProps> = ({ side }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<FallingLetter[]>([])
  const nextIdRef = useRef(0)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()!{}[]|\\:\";\'?,./~`'
    
    // Calculate dimensions based on side type
    const isBackground = side === 'background'
    const containerWidth = isBackground ? window.innerWidth : 120
    const columnWidth = isBackground ? 25 : 20
    const columns = Math.floor(containerWidth / columnWidth)
    
    // Adjust spawn rate for background mode
    const baseSpawnInterval = isBackground ? 200 : 150
    const maxLetters = isBackground ? columns * 3 : columns * 2

    const createLetter = (columnIndex: number): FallingLetter => {
      const char = characters.charAt(Math.floor(Math.random() * characters.length))
      const element = document.createElement('div')
      
      element.style.position = 'absolute'
      element.style.left = `${columnIndex * columnWidth + (isBackground ? Math.random() * 10 : 0)}px`
      element.style.fontSize = isBackground ? '12px' : '14px'
      element.style.lineHeight = isBackground ? '16px' : '18px'
      element.style.fontFamily = "'Courier New', monospace"
      element.style.color = 'var(--matrix-text)'
      element.style.filter = isBackground ? 'blur(1px)' : 'blur(0.5px)'
      element.style.userSelect = 'none'
      element.style.opacity = isBackground ? '0.3' : '1'
      element.style.pointerEvents = 'none'
      element.textContent = char
      
      container.appendChild(element)

      const letter: FallingLetter = {
        id: nextIdRef.current++,
        char,
        x: columnIndex * columnWidth,
        y: -20 - Math.random() * 100,
        speed: Math.random() * (isBackground ? 0.6 : 0.8) + (isBackground ? 0.3 : 0.4),
        element
      }

      return letter
    }

    const spawnLetter = () => {
      // Limit total number of letters
      if (lettersRef.current.length >= maxLetters) return
      
      const columnIndex = Math.floor(Math.random() * columns)
      const letter = createLetter(columnIndex)
      lettersRef.current.push(letter)
    }

    const updateLetters = () => {
      for (let i = lettersRef.current.length - 1; i >= 0; i--) {
        const letter = lettersRef.current[i]
        letter.y += letter.speed
        letter.element.style.transform = `translateY(${letter.y}px)`

        // Remove letters that have fallen off screen
        if (letter.y > window.innerHeight + 50) {
          if (letter.element.parentNode) {
            letter.element.parentNode.removeChild(letter.element)
          }
          lettersRef.current.splice(i, 1)
        }
      }
    }

    let lastSpawnTime = 0

    const animate = (currentTime: number) => {
      const spawnInterval = baseSpawnInterval + Math.random() * 100
      
      if (currentTime - lastSpawnTime > spawnInterval) {
        spawnLetter()
        lastSpawnTime = currentTime
      }

      updateLetters()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Initial spawn with staggered timing
    const initialSpawns = isBackground ? columns : columns * 2
    for (let i = 0; i < initialSpawns; i++) {
      setTimeout(() => {
        spawnLetter()
      }, Math.random() * 2000)
    }

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate)

    // Handle resize for background mode
    const handleResize = () => {
      if (isBackground && containerRef.current) {
        const newWidth = window.innerWidth
        containerRef.current.style.width = `${newWidth}px`
      }
    }

    if (isBackground) {
      window.addEventListener('resize', handleResize)
    }

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      
      lettersRef.current.forEach(letter => {
        if (letter.element.parentNode) {
          letter.element.parentNode.removeChild(letter.element)
        }
      })
      lettersRef.current = []
      
      if (isBackground) {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [side])

  return (
    <div 
      ref={containerRef}
      className={`matrix-rain ${side}`}
    />
  )
}

export default MatrixRain