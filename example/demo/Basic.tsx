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

function Basic() {
  useHighlight()

  return (<section>
    <h2>Basic use - Autoplay, default indicator</h2>
    <div style={{ display: 'flex', gap: 20 }}>
      <ReactFancyCarousel
        style={{ height: '500px', flex: '1 0 500px' }}
        autoplay
      >
        <Item style={{ backgroundColor: '#eee' }}>1</Item>
        <Item style={{ backgroundColor: '#bbb' }}>2</Item>
        <Item style={{ backgroundColor: '#999' }}>3</Item>
        <Item style={{ backgroundColor: '#666' }}>4</Item>
        <Item style={{ backgroundColor: '#333' }}>5</Item>
      </ReactFancyCarousel>
      <pre style={{ flex: 1, margin: 0 }}>
        Basic.tsx
        <code className='language-tsx'>{codeStr}</code>
      </pre>
    </div>

  </section>)
}

export default Basic