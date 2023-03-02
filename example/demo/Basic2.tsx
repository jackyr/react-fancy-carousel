import ReactFancyCarousel from 'react-fancy-carousel'
import useHighlight from '../useHighlight'

const Item = ReactFancyCarousel.Item

const codeStr = `
import ReactFancyCarousel from 'react-fancy-carousel'
const Item = ReactFancyCarousel.Item

export default function () {
  return (
    <ReactFancyCarousel
      style={{ height: '500px' }}
      autoplay
      effect="fade"
      indicator="dot"
      duration={2000}
      speed={800}
    >
      <Item style={{ backgroundColor: '#eee' }}>1</Item>
      <Item style={{ backgroundColor: '#bbb' }}>2</Item>
      <Item style={{ backgroundColor: '#999' }}>3</Item>
      <Item style={{ backgroundColor: '#666' }}>4</Item>
      <Item style={{ backgroundColor: '#333' }}>5</Item>
    </ReactFancyCarousel>
  ) 
}
`

function Basic2() {
  useHighlight()

  return (<section>
    <h2>Basic use2 - Fade effect, dot indicator</h2>
    <div style={{ display: 'flex', gap: 20 }}>
      <ReactFancyCarousel
        style={{ height: '500px', flex: '1 0 500px' }}
        autoplay
        effect="fade"
        indicator="dot"
        duration={2000}
        speed={800}
      >
        <Item style={{ backgroundColor: '#bbb' }}>1</Item>
        <Item style={{ backgroundColor: '#bbb' }}>2</Item>
        <Item style={{ backgroundColor: '#bbb' }}>3</Item>
        <Item style={{ backgroundColor: '#bbb' }}>4</Item>
        <Item style={{ backgroundColor: '#bbb' }}>5</Item>
      </ReactFancyCarousel>
      <pre style={{ flex: 1, margin: 0 }}>
        Basic2.tsx
        <code className='language-tsx'>{codeStr}</code>
      </pre>
    </div>

  </section>)
}

export default Basic2