import React, { useState } from 'react'
import {
  Container,
  CarouselItem,
  CarouselCaption,
  Carousel
} from 'reactstrap'
import About from '../components/About';
import Agreement from '../components/Agreement';
import CarList from '../components/CarList';
import Content from '../components/Content';

const items = [
  {
    src: 'https://picsum.photos/id/123/1351/600',
    altText: 'Slide 1',
    caption: 'RENTCARIN',
    text: <div>
      <h1 className='car-head'>RENTCARIN</h1>
      <p>RENTAL MOBIL MURAH, AMAN, DAN TERPERCAYA</p>
    </div>,
    key: 1
  },
  {
    src: 'https://picsum.photos/id/456/1351/600',
    altText: 'Slide 2',
    caption: 'RENTCARIN',
    text: <div>
    <h1 className='car-head'>RENTCARIN</h1>
      <p>RENTAL MOBIL MURAH, AMAN, DAN TERPERCAYA</p>
    </div>,
    key: 2
  },
  {
    src: 'https://picsum.photos/id/678/1351/600',
    altText: 'Slide 3',
    caption: 'RENTCARIN',
    text: <div>
    <h1 className='car-head'>RENTCARIN</h1>
      <p>RENTAL MOBIL MURAH, AMAN, DAN TERPERCAYA</p>
    </div>,
    key: 3
  }
];

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-size"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.text} />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        fade={true}
        ride={'carousel'}
      >
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
        {slides}
        {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
      </Carousel>
      <div style={{backgroundColor: '#f5f4f2'}}>
        <Container>
          <Content/>
        </Container>
      </div>

      <div style={{backgroundColor: '#edf0ee'}}>
        <Container>
          <CarList/>
        </Container>
      </div>

      <div>
        <Container>
          <About/>
        </Container>
      </div>

      <div>
        <Container>
          <Agreement/>
        </Container>
      </div>
    </>
  )
}

export default Main