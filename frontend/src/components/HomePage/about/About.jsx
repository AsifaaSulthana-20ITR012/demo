import React from 'react'

import "./aboutTab.css"
import { Container, Row, Col } from 'react-grid-system';

import img1 from '../../../asserts/shop1.jpg';
import img2 from '../../../asserts/shop2.jpg';
import img3 from '../../../asserts/shop3.jpg';
// import img from '../../../'
const colors = [img1, img2, img3]
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
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, height: "250px", }}
            >
                {colors.map((home, index) => (
                    <img className="slide fade-in-image" src={home} key={index} alt="" />
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
    );
}




function About() {
    const [toggleState, setToggleState] = React.useState(1);
    const toggleTab = (index) => {
        setToggleState(index);

    };

    return (
        <div className='about'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className='about-left'>
                            <h5>BEST PRODUCT SINCE 1999</h5>
                            <h2>OUR PRODUCTS</h2>
                            <h3>WHO WE ARE</h3>
                            <div className="tabs-custom">
                                <ul className="nav nav-tabs row">
                                    <button onClick={() => toggleTab(1)} className='col'>
                                        <li>
                                            <a className="nav-link">About</a>
                                            <p className={toggleState === 1 ? "tab-pane fade active show" : "tab-pane fade"}> <hr /> </p>
                                        </li>
                                    </button>
                                    <button onClick={() => toggleTab(2)} className='col'>
                                        <li>
                                            <a className="nav-link col">Our mission</a>
                                            <p className={toggleState === 2 ? "tab-pane fade active show" : "tab-pane fade"}> <hr /> </p>
                                        </li>
                                    </button>
                                    <button onClick={() => toggleTab(3)} className='col'>
                                        <li>
                                            <a className="nav-link col">Our vision</a>
                                            <p className={toggleState === 3 ? "tab-pane fade active show" : "tab-pane fade"}> <hr /> </p>
                                        </li>
                                    </button>
                                </ul>
                                <div className="tab-content" >
                                    <div className={toggleState === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <p>Since its foundation, Dates has been offering best dry fruits for local residents, fruit markets, and guests of our city. We are dedicated to improving your healthy food standards.</p>
                                    </div>
                                    <div className={toggleState === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <p>Our mission is to grow profitably through innovation and operational excellence in supplying fresh produce for all local shops, markets, and residents.</p>
                                    </div>
                                    <div className={toggleState === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <p>In a world with limited natural resources, we aim to play a leading role in supplying first-rate products, providing first-class service and developing efficient fresh produce.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <Slideshow />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About