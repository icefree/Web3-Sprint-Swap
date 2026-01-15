'use client'

import { useState, useEffect } from 'react'

// 粒子组件 - 使用 useEffect 避免 SSR hydration 问题
export function Particles() {
  const [particles, setParticles] = useState<Array<{ left: string; delay: string; duration: string }>>([])

  useEffect(() => {
    // 只在客户端生成粒子
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 6}s`,
    }))
    setParticles(generated)
  }, [])

  if (particles.length === 0) return <div className="particles" />

  return (
    <div className="particles">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}
