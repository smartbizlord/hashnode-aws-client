import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { split } from '../../animations/text'
import { gsap } from "gsap";
import "./notfound.scss"

const NotFound = () => {

    useEffect(()=>{
        split()
        const redirectLink = document.querySelector(".redrectLink404");
        gsap.set(redirectLink, {
            opacity: 0,
            yPercent: 5,
            transformStyle: "preserve-3d",
        });
        gsap.to(redirectLink, {
            opacity: 1,
            yPercent: 0,
            ease: "easeOut"
        })
      }, [])

  return (
    <div className='notFoundWrapper'>
        <div className="notFoundContent">
            <p className="notFound404">
                <span>4</span> <span className='middle'>0</span> <span>4</span>
            </p>
            <p className='middleText'>SORRY, THERE'S</p>
            <p className='bottomText'>NOTHING HERE</p>
            <Link className='redirectLink404' to="/"><span className='front'>GO HOME</span></Link>

        </div>
    </div>
  )
}

export default NotFound