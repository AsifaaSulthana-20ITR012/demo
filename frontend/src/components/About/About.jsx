import React from 'react'
import './About.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../../images/homeimg1.jpg';
import img2 from '../../images/homeimg2.jpg';
import img3 from '../../images/homeimg3.jpg';

const colors = [img1,img3,img2]
const delay = 3000;
export default function About() {

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
}

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  //return
  return (
    <div className='about_body'>
      <Row>
      <h1 style={{paddingLeft:"15px",paddingTop:"3px"}}>ABOUT</h1>
      <Col xs={6} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum facere beatae possimus nisi pariatur perspiciatis repellendus rerum cupiditate, dolor officiis illum quas voluptatum qui? Dolores culpa ab veniam temporibus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolore quas ipsam nemo molestiae sed quasi quos. Expedita asperiores earum atque? Odit voluptates ratione ipsa nam autem illo. Suscipit, eum.
      </Col>
       <Col className="slideshow" xs={6}>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` ,float:'left',textAlign:"left"}}
      >
         {colors.map((home, index) => ( 
        <img className="slide" src={home} key={index} alt=""/>
        ))} 
       
      
      </div>

      <div className="slideshowDots">
        {colors.map((_, ind) => (
          <div
            key={ind}
            className={`slideshowDot${index === ind ? " active" : ""}`}
            onClick={() => {
              setIndex(ind);
            }}
            
          ></div>
        ))}
      </div>
      </Col>  
      </Row>    
    </div>
  )
}
