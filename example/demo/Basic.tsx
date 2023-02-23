import ReactFancyCarousel from 'react-fancy-carousel'

const Item = ReactFancyCarousel.Item

function Basic() {
  return (<>
    <h2>Basic use - Autoplay, default indicator</h2>
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
  </>)
}

export default Basic