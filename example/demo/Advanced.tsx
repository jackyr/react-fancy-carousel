import { useRef, useEffect } from 'react'
import ReactFancyCarousel, { type RefType } from 'react-fancy-carousel'

const Item = ReactFancyCarousel.Item

function Advanced() {
  const carouselRef = useRef<RefType>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      e.stopPropagation()
      if (e.key === 'ArrowLeft') carouselRef.current?.prev()
      if (e.key === 'ArrowRight') carouselRef.current?.next()
    };
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (<>
    <h2>Advanced use - Ref instance method</h2>
    <ReactFancyCarousel
      ref={carouselRef}
      style={{ height: '500px' }}
      indicator="dot"
      speed={300}
      timingFunction="linear"
    >
      <Item style={{ backgroundColor: '#eee' }}>1</Item>
      <Item style={{ backgroundColor: '#bbb' }}>2</Item>
      <Item style={{ backgroundColor: '#999' }}>3</Item>
      <Item style={{ backgroundColor: '#666' }}>4</Item>
      <Item style={{ backgroundColor: '#333' }}>5</Item>
    </ReactFancyCarousel>
  </>)
}

export default Advanced