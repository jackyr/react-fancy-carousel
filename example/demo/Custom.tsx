import ReactFancyCarousel from 'react-fancy-carousel'
import CustomIndicator from './CustomIndicator'

const Item = ReactFancyCarousel.Item

function Custom() {
  return (<>
    <h2>Custom use - Custom indicator component</h2>
    <ReactFancyCarousel
      style={{ height: '500px' }}
      autoplay
      indicator={CustomIndicator}
    >
      <Item style={{ backgroundColor: '#eee' }}>1</Item>
      <Item style={{ backgroundColor: '#bbb' }}>2</Item>
      <Item style={{ backgroundColor: '#999' }}>3</Item>
      <Item style={{ backgroundColor: '#666' }}>4</Item>
      <Item style={{ backgroundColor: '#333' }}>5</Item>
    </ReactFancyCarousel>
  </>)
}

export default Custom