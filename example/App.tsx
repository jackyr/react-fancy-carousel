import { useState } from 'react'
import BasicDemo from './demo/Basic'
import Basic2Demo from './demo/Basic2'
import AdvancedDemo from './demo/Advanced'
import CustomDemo from './demo/Custom'
import DynamicDemo from './demo/Dynamic'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <div className="App">
      <h1 style={{ display: 'flex', gap: 20, margin: 0 }}>
        {['Basic', 'Basic2', 'Advance', 'Dynamic', 'Custom'].map((v, i) => (
          <button
            key={i}
            style={activeIndex === i ? { color: '#f00' } : {}}
            onClick={() => setActiveIndex(i)}
          >{v}</button>
        ))}
      </h1>
        {[
          <BasicDemo key={1} />,
          <Basic2Demo key={2} />,
          <AdvancedDemo key={3} />,
          <DynamicDemo key={4} />,
          <CustomDemo key={5} />,
        ].find((v, i) => activeIndex === i && v)}
    </div>
  )
}

export default App