import { useRef, useEffect } from 'react'
import ReactFancyCarousel, { type RefType } from 'react-fancy-carousel'
import useHighlight from '../useHighlight'
import customTheme from './customTheme.module.css'

const Item = ReactFancyCarousel.Item

const codeStr = `
import ReactFancyCarousel, { type RefType } from 'react-fancy-carousel'
import 'react-fancy-carousel/dist/style.css'
import customTheme from './customTheme.module.css'
const Item = ReactFancyCarousel.Item

export default function () {
  const carouselRef = useRef<RefType>(null)

  // Use keyboard arrow key to control
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        e.stopPropagation()
        if (e.key === 'ArrowLeft') carouselRef.current?.prev()
        else carouselRef.current?.next()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <ReactFancyCarousel
      ref={carouselRef}
      className={customTheme.custom}
      style={{ height: '500px' }}
    >
      <Item style={{ backgroundColor: '#999' }}>1</Item>
      <Item style={{ backgroundColor: '#999' }}>2</Item>
      <Item style={{ backgroundColor: '#999' }}>3</Item>
      <Item style={{ backgroundColor: '#999' }}>4</Item>
      <Item style={{ backgroundColor: '#999' }}>5</Item>
    </ReactFancyCarousel>
  ) 
}
`

const codeStr2 = `
.custom {
  --indicator-active-bg-color: #1677ff;
}
`

function Advanced() {
  useHighlight()
  const carouselRef = useRef<RefType>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        e.stopPropagation()
        if (e.key === 'ArrowLeft') carouselRef.current?.prev()
        else carouselRef.current?.next()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (<section>
    <h2>Advanced use - Ref instance method, custom theme</h2>
    <div style={{ display: 'flex', gap: 20 }}>
      <ReactFancyCarousel
        ref={carouselRef}
        className={customTheme.custom}
        style={{ height: '500px', flex: '1 0 500px' }}
      >
        <Item style={{ backgroundColor: '#eee' }}>1</Item>
        <Item style={{ backgroundColor: '#bbb' }}>2</Item>
        <Item style={{ backgroundColor: '#999' }}>3</Item>
        <Item style={{ backgroundColor: '#666' }}>4</Item>
        <Item style={{ backgroundColor: '#333' }}>5</Item>
      </ReactFancyCarousel>
      <pre style={{ flex: 1, margin: 0 }}>
        Advanced.tsx
        <code className='language-tsx'>{codeStr}</code>
        <br />
        customTheme.module.css
        <code className='language-css'>{codeStr2}</code>
      </pre>
    </div>
  </section>)
}

export default Advanced