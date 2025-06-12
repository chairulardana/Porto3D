'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

gsap.registerPlugin(SplitText, ScrambleTextPlugin)

export interface ScrambledTextProps {
  radius?: number
  duration?: number
  speed?: number
  scrambleChars?: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!rootRef.current) return

    const paragraph = rootRef.current.querySelector('p')
    if (!paragraph) return

    // Split characters (do not break layout)
    const split = new SplitText(paragraph, {
      type: 'chars',
      charsClass: 'scramble-char',
    })

    // Set original character as data-content
    split.chars.forEach((char) => {
      const el = char as HTMLElement
      gsap.set(el, {
        attr: { 'data-content': el.textContent || '' },
      })
    })

    // Initial fade-in animation
    gsap.fromTo(
      split.chars,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.7,
        ease: 'power2.out',
        overwrite: true,
      }
    )

    // Mouse pointer interaction
    const handleMove = (e: PointerEvent) => {
      split.chars.forEach((char) => {
        const el = char as HTMLElement
        const { left, top, width, height } = el.getBoundingClientRect()
        const dx = e.clientX - (left + width / 2)
        const dy = e.clientY - (top + height / 2)
        const dist = Math.hypot(dx, dy)

        if (dist < radius) {
          gsap.to(el, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: el.dataset.content || '',
              chars: scrambleChars,
              speed,
            },
            ease: 'none',
          })
        }
      })
    }

    const el = rootRef.current
    el.addEventListener('pointermove', handleMove)

    return () => {
      el.removeEventListener('pointermove', handleMove)
      split.revert()
    }
  }, [radius, duration, speed, scrambleChars])

  return (
    <div
      ref={rootRef}
      className={`m-[7vw] max-w-[800px] font-mono text-[clamp(14px,4vw,32px)] text-white ${className}`}
      style={style}
    >
      <p className="leading-relaxed whitespace-normal">{children}</p>
    </div>
  )
}

export default ScrambledText
