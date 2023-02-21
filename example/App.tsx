import React, { useRef, useEffect } from 'react'
import ReactFancyCarousel from '../src/index'
import type { RefType } from '../src/index.d'

const Item = ReactFancyCarousel.Item

function App() {
  const carouselRef = useRef<RefType>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      e.stopPropagation()
      if (e.code === 'ArrowLeft') carouselRef.current?.prev()
      if (e.code === 'ArrowRight') carouselRef.current?.next()
    };
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])
  
  return (
    <div className="App">
      <ReactFancyCarousel
        ref={carouselRef}
        style={{ height: '100vh' }}
        autoplay
        onChange={(currentIndex, prevIndex) => console.log(currentIndex, prevIndex)}
      >
        <Item style={{ backgroundColor: '#eee' }}>1</Item>
        <Item style={{ backgroundColor: '#bbb' }}>2</Item>
        <Item style={{ backgroundColor: '#999' }}>3</Item>
        <Item style={{ backgroundColor: '#666' }}>4</Item>
        <Item style={{ backgroundColor: '#333' }}>5</Item>
      </ReactFancyCarousel>
    </div>
  )
}

export default App