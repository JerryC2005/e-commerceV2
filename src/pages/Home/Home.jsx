import ssg from '../../assets/ssg.jpg'
import badBlueEyes from '../../assets/bad-blue-eyes.jpg'
import charizard from '../../assets/charizard.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'



export function SlideShow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const SliderStyles = {
        height: '100%',
        
        position: 'relative',
    }

    const slideStyles = {
        height: '100%',
        
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex]})`,
        margin: '1rem'
    }

    const leftArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '10px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    }

    const RightArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '10px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    }

    function goToPrevious() {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    }

    function goToNext() {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <div style={slideStyles}>
                
                <div style={SliderStyles}>
                    <div style={leftArrowStyle} onClick={goToPrevious}>⇦</div>
                    <div style={RightArrowStyle} onClick={goToNext}>⇨</div>
                </div>
            </div>
        </>
    )
}


export default function Home() {

    const containerStyles = {
        width: '500px',
        height : '280px',
        margin: '0 auto'
    }

    const imgs = [ssg, badBlueEyes, charizard]

    return (
        <>
            <section id="hero-image">
        <div id="hero-text">
            <h1>TCG Jerry is Here!</h1>
            <p>Collect, Trade, and Play: Find Your Perfect Card Here!</p>
            <button><Link to="/products">Shop Now!</Link></button>
        </div>
    </section>

    <div style={containerStyles} className='slide-container'>
        <SlideShow slides={imgs} />
    </div>

    <section id="featured-categories">
        <h2>Featured Categories</h2>
        <div className="container">
            <div className="category-container">
                <div className="category-card">
                    <img src={badBlueEyes}/>
                    <h3>Yu-Gi-Oh! TCG</h3>
                    <p>Be the best duelist here!</p>
                    <button><Link to="/products">Buy Now!</Link></button>
                </div>

                <div className="category-card">
                    <img src={charizard}/>
                    <h3>Pokémon TCG</h3>
                    <p>Be the best trainer around!</p>
                    <button><Link to="/products">Learn More!</Link></button>
                </div>

                <div className="category-card">
                    <img src={ssg}/>
                    <h3>Dragon Ball Super TCG</h3>
                    <p>Go Super Saiyan on your foes!</p>
                    <button><Link to="/products">Explore Now!</Link></button>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}