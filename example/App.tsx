import { useState } from 'react'
import BasicDemo from './demo/Basic'
import AdvancedDemo from './demo/Advanced'
import CustomDemo from './demo/Custom'
import DynamicDemo from './demo/Dynamic'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <div className="App">
      <h1 style={{ display: 'flex', gap: 20, margin: 0 }}>
        {['Demo1', 'Demo2', 'Demo3', 'Demo4'].map((v, i) => (
          <button
            key={i}
            style={activeIndex === i ? { color: '#f00' } : {}}
            onClick={() => setActiveIndex(i)}
          >{v}</button>
        ))}
      </h1>
        {[
          <BasicDemo key={1} />,
          <AdvancedDemo key={2} />,
          <DynamicDemo key={3} />,
          <CustomDemo key={4} />,
        ].find((v, i) => activeIndex === i && v)}
    </div>
  )
}

export default App