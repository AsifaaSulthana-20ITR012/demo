import React from 'react';
import './slideshow.css'


// import img1 from '../asserts/home10.png';
import img3 from '../../asserts/home3.jpeg';
// import img3 from '../asserts/home6.png';
import img4 from '../../asserts/home8.jpeg';
import img1 from '../../asserts/Home.png';
import img2 from '../../asserts/Contact.png';
// import img5 from '../asserts/car.jpg';
// import img6 from '../asserts/car.jpg';
// import img0 from '../asserts/car.jpg';
// import img4 from '../../asserts/'
const colors = [ img1, img2, img3, img4]
const delay = 3000;

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
        <div>
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, height: "100vh" }}
            >
                {colors.map((home, index) => (
                    <img className="slide" src={home} key={index} alt="" />
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
        </div>
        </div>
    );
}
export default Slideshow;