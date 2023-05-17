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
  const [pauseOnHover, setPauseOnHover] = useState(false)
  const [childrenIndex, setChildrenIndex] = useState(0)
  const [speed, setSpeed] = useState(300)
  
  return (<>
    <button
      onClick={() => setChildrenIndex(index => index === 1 ? 0 : 1)}
    >change children</button>
    <button
      onClick={() => setAutoplay(autoplay => !autoplay)}
    >change autoplay</button>
    <button
      onClick={() => setPauseOnHover(pauseOnHover => !pauseOnHover)}
    >change pauseOnHover</button>
    <button
      onClick={() => setSpeed(speed => speed === 300 ? 1000 : 300)}
    >change speed</button>

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
    <Item key={1} style={{ backgroundColor: '#bbb' }}>2</Item>,
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
      &nbsp;<button onClick={() => setChildrenIndex(index => index === 1 ? 0 : 1)}>change children</button>
      &nbsp;<button onClick={() => setAutoplay(autoplay => !autoplay)}>change autoplay</button>
      &nbsp;<button onClick={() => setPauseOnHover(pauseOnHover => !pauseOnHover)}>change pauseOnHover</button>
      &nbsp;<button onClick={() => setSpeed(speed => speed === 300 ? 1000 : 300)}>change speed</button>
    </h2>
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