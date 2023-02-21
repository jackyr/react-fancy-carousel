import React, { useRef, useEffect } from 'react'
import Carousel from '../src/index'
import type { RefType } from '../src/index.d'

const CarouselItem = Carousel.Item

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
      <Carousel
        ref={carouselRef}
        style={{ height: '100vh' }}
        autoplay
        onChange={(currentIndex, prevIndex) => console.log(currentIndex, prevIndex)}
      >
        <CarouselItem style={{ backgroundColor: '#eee' }}>1</CarouselItem>
        <CarouselItem style={{ backgroundColor: '#bbb' }}>2</CarouselItem>
        <CarouselItem style={{ backgroundColor: '#999' }}>3</CarouselItem>
        <CarouselItem style={{ backgroundColor: '#666' }}>4</CarouselItem>
        <CarouselItem style={{ backgroundColor: '#333' }}>5</CarouselItem>
      </Carousel>
    </div>
  )
}

export default App