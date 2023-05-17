import { useState } from 'react'
import useHighlight from '../useHighlight'
import ReactFancyCarousel from 'react-fancy-carousel'

const Item = ReactFancyCarousel.Item

const codeStr = `
import { useState } from 'react'
import ReactFancyCarousel from 'react-fancy-carousel'
const Item = ReactFancyCarousel.Item

const childrenArr = [
  [
    <Item key={1} style={{ backgroundColor: '#eee' }}>1</Item>,
    <Item key={2} style={{ backgroundColor: '#bbb' }}>2</Item>,
  ],
  [
    <Item key={3} style={{ backgroundColor: '#999' }}>3</Item>,
    <Item key={4} style={{ backgroundColor: '#666' }}>4</Item>,
    <Item key={5} style={{ backgroundColor: '#333' }}>5</Item>,
  ]
]

export default function () {
  const [autoplay, setAutoplay] = useState(true)
  const [pauseOnHover, setPauseOnHover] = useState(true)
  const [childrenIndex, setChildrenIndex] = useState(0)
  const [speed, setSpeed] = useState(300)
  
  return (<>
    <label>autoplay:<input 
      type="checkbox"
      checked={autoplay}
      onChange={e => setAutoplay(e.target.checked)}
    /></label>
    <label>pauseOnHover:<input
      type="checkbox"
      checked={pauseOnHover}
      onChange={e => setPauseOnHover(e.target.checked)}
    /></label>
    <span>speed:
      <label><input
        type="radio"
        value={300}
        checked={speed === 300}
        onChange={() => setSpeed(300)}
      />300</label>
      <label><input
        type="radio"
        value={1000}
        checked={speed === 1000}
        onChange={() => setSpeed(1000)}
      />1000</label>
    </span>
    <button
      onClick={() => setChildrenIndex(index => index === 1 ? 0 : 1)}
    >change children</button>

    <ReactFancyCarousel
      style={{ height: '500px' }}
      autoplay={autoplay}
      pauseOnHover={pauseOnHover}
      speed={speed}
    >
      {childrenArr[childrenIndex]}
    </ReactFancyCarousel>
  </>) 
}
`

const childrenArr = [
  [
    <Item key={1} style={{ backgroundColor: '#eee' }}>1</Item>,
    <Item key={2} style={{ backgroundColor: '#bbb' }}>2</Item>,
  ],
  [
    <Item key={3} style={{ backgroundColor: '#999' }}>3</Item>,
    <Item key={4} style={{ backgroundColor: '#666' }}>4</Item>,
    <Item key={5} style={{ backgroundColor: '#333' }}>5</Item>,
  ]
]

function Dynamic() {
  useHighlight()
  const [autoplay, setAutoplay] = useState(true)
  const [pauseOnHover, setPauseOnHover] = useState(true)
  const [childrenIndex, setChildrenIndex] = useState(0)
  const [speed, setSpeed] = useState(300)

  return (<section>
    <h2>
      Dynamic change props
    </h2>
    <h5 style={{ display: 'flex', gap: 10 }}>
      <label>autoplay:<input type="checkbox" checked={autoplay} onChange={e => setAutoplay(e.target.checked)} /></label>
      <label>pauseOnHover:<input type="checkbox" checked={pauseOnHover} onChange={e => setPauseOnHover(e.target.checked)} /></label>
      <span>speed:
        <label><input type="radio" value={300} checked={speed === 300} onChange={() => setSpeed(300)} />300</label>
        <label><input type="radio" value={1000} checked={speed === 1000} onChange={() => setSpeed(1000)} />1000</label>
      </span>
      <button onClick={() => setChildrenIndex(index => index === 1 ? 0 : 1)}>change children</button>
    </h5>
    <div style={{ display: 'flex', gap: 20 }}>
      <ReactFancyCarousel
        style={{ height: '500px', flex: '1 0 500px' }}
        autoplay={autoplay}
        pauseOnHover={pauseOnHover}
        speed={speed}
      >
        {childrenArr[childrenIndex]}
      </ReactFancyCarousel>
      <pre style={{ flex: 1, margin: 0 }}>
        Dynamic.tsx
        <code className='language-tsx'>{codeStr}</code>
      </pre>
    </div>
  </section>)
}

export default Dynamic