import React from 'react'
import '../styles/reset.scss'
import '../styles/skellygame.scss'
import { Helmet } from 'react-helmet'
import SkeletonHead from '../components/skeletonhead'
import { useRef, useEffect, useState } from 'react'
import { weapons } from '../components/weapon'
import pixelheart from '../assets/heart.png'
import damagesword from '../assets/damagesword.png'

const Upgrade = () => {

  const [skellyColor, setSkellyColor] = useState('#333');

  const gameRef = useRef(null); // create a reference to the skelly div

  const colors = ['#cd7f32', '#c0c0c0', '#ffd700']

  // useEffect(() => {
  //   // gameRef.current.style.setProperty('--color2', '#fff');
  //   const color1 = getComputedStyle(gameRef.current).getPropertyValue('--color1');
  //   console.log(color1);
  //   const color2 = getComputedStyle(gameRef.current).getPropertyValue('--color2');
  //   console.log(color2);
  //   const color3 = getComputedStyle(gameRef.current).getPropertyValue('--color3');
  //   console.log(color3);
  // }, []);

  return (
    <main>
      <Helmet>
        <title>Skelly Zone</title>
      </Helmet>
      <div className='game' ref={gameRef}>
        <div className='choices'>
          <button
            className='choice'
            id={`choice1`}
            key={1}
            aria-label={`choice1`}
            onMouseOver={() => {
              setSkellyColor(colors[0]);
            }}
          >
            <img src={pixelheart} />
          </button>
          <button
            className='choice'
            id={`choice2`}
            key={2}
            aria-label={`choice2`}
            onMouseOver={() => {
              setSkellyColor(colors[1]);
            }}
          >
            <img src={damagesword} />
          </button>
          <button
            className='choice'
            id={`choice3`}
            key={3}
            aria-label={`choice3`}
            onMouseOver={() => {
              setSkellyColor(colors[2]);
            }}
          >
            <img src={weapons[0].icon} />
          </button>
        </div>
        <div className='skelly'>
          <SkeletonHead color={skellyColor}/>
        </div>
      </div>
    </main>
  )
}

export default Upgrade