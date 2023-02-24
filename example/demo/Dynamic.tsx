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

function Dynamic() {
  const [autoplay, setAutoplay] = useState(true)
  const [childrenIndex, setChildrenIndex] = useState(0)
  const [speed, setSpeed] = useState(300)

  return (<>
    <h2>
      Dynamic change props
      &nbsp;<button onClick={() => setChildrenIndex(index => index === 1 ? 0 : 1)}>change children</button>
      &nbsp;<button onClick={() => setAutoplay(autoplay => !autoplay)}>change autoplay</button>
      &nbsp;<button onClick={() => setSpeed(speed => speed === 300 ? 1000 : 300)}>change speed</button>
    </h2>
    <ReactFancyCarousel
      style={{ height: '500px' }}
      autoplay={autoplay}
      speed={speed}
    >
      {childrenArr[childrenIndex]}
    </ReactFancyCarousel>
  </>)
}

export default Dynamic