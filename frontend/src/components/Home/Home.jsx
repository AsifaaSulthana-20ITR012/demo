import './Home.css'
import React from 'react';
import img1 from '../../images/homeimg1.jpg';
import img2 from '../../images/homeimg2.jpg';
import img3 from '../../images/homeimg3.jpg';
const colors = [img1,img3,img2]
const delay = 4500;
function Slideshow() {
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


  return (
    <div className="slideshow" style={{backgroundColor:"white"}}>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` ,maxHeight:"100%",maxWidth:"100%",zIndex:"-1"}}
      >
         {colors.map((home, index) => ( 
        <img className="slide" src={home} key={index} alt="" />
        ))} 
        
      </div>

      <div className="slideshowDots" >
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
 </div>
  );
  }
export default Slideshow;

