import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer';
import { ILogoP } from '../types';
import { SERVER_URL } from '../../Routing/Routing';

const Logo: FC<ILogoP> = (props) => {
    const [ref, inView] = useInView({
        triggerOnce: true
    })

  return (
    <div ref={ref} className={`logo hideSection ${inView ? 'show' : ''}`}>
        <img src={SERVER_URL + props.img} alt={props.img}/>
    </div>
  )
}

export default Logo
