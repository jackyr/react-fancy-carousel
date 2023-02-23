import { useState } from 'react'
import BasicDemo from './demo/Basic'
import AdvancedDemo from './demo/Advanced'
import CustomDemo from './demo/Custom'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <div className="App">
      <h1 style={{ display: 'flex', gap: 20, margin: 0 }}>
        {['Demo1', 'Demo2', 'Demo3'].map((v, i) => (
          <a
            key={i}
            style={activeIndex === i ? { color: '#f00' } : {}}
            onClick={() => setActiveIndex(i)}
            href="#"
          >{v}</a>
        ))}
      </h1>
      {[<BasicDemo />, <AdvancedDemo />, <CustomDemo />].find((v, i) => (
        activeIndex === i && v
      ))}
    </div>
  )
}

export default App