import React, {FC} from 'react'
import { IPLogos } from '../types'
import Logo from './Logo'

const Logos: FC<IPLogos> = (props) => {
  return (
    <div className='logos'>
      {props.images.map(logo => <Logo img={logo.img}/>)}
    </div>
  )
}

export default Logos
