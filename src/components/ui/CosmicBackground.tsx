import React, { useEffect, useRef } from 'react'

const CosmicBackground: React.FC = () => {
  const starfieldRef = useRef<HTMLDivElement>(null)
  const particleSystemRef = useRef<HTMLDivElement>(null)
  const neuralNetworkRef = useRef<HTMLDivElement>(null)
  const geometryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Generate Starfield
    if (starfieldRef.current) {
      const starfield = starfieldRef.current
      starfield.innerHTML = ''
      
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div')
        const size = Math.random() < 0.7 ? 'star-small' : Math.random() < 0.9 ? 'star-medium' : 'star-large'
        star.className = `star ${size}`
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.animationDelay = `${Math.random() * 3}s`
        starfield.appendChild(star)
      }
    }

    // Generate Particle System
    if (particleSystemRef.current) {
      const particleSystem = particleSystemRef.current
      particleSystem.innerHTML = ''
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        const size = Math.random() < 0.6 ? 'particle-small' : Math.random() < 0.8 ? 'particle-medium' : 'particle-large'
        particle.className = `particle ${size}`
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 6}s`
        particleSystem.appendChild(particle)
      }
    }

    // Generate Neural Network
    if (neuralNetworkRef.current) {
      const neuralNetwork = neuralNetworkRef.current
      neuralNetwork.innerHTML = ''
      
      for (let i = 0; i < 20; i++) {
        const line = document.createElement('div')
        line.className = 'neural-line'
        line.style.left = `${Math.random() * 100}%`
        line.style.top = `${Math.random() * 100}%`
        line.style.width = `${100 + Math.random() * 200}px`
        line.style.transform = `rotate(${Math.random() * 360}deg)`
        line.style.animationDelay = `${Math.random() * 3}s`
        neuralNetwork.appendChild(line)
      }
    }

    // Generate Floating Geometry
    if (geometryRef.current) {
      const geometryContainer = geometryRef.current
      geometryContainer.innerHTML = ''
      
      for (let i = 0; i < 15; i++) {
        const geometry = document.createElement('div')
        const iseCube = Math.random() < 0.5
        geometry.className = `floating-geometry ${iseCube ? 'geometry-cube' : 'geometry-sphere'}`
        geometry.style.left = `${Math.random() * 100}%`
        geometry.style.top = `${Math.random() * 100}%`
        geometry.style.animationDelay = `${Math.random() * 10}s`
        geometry.style.animationDuration = `${10 + Math.random() * 20}s`
        geometryContainer.appendChild(geometry)
      }
    }
  }, [])

  return (
    <>
      <div ref={starfieldRef} className="starfield" />
      <div ref={particleSystemRef} className="particle-system" />
      <div ref={neuralNetworkRef} className="neural-network" />
      <div ref={geometryRef} className="floating-geometry" />
    </>
  )
}

export default CosmicBackground