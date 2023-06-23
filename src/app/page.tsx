import Image from 'next/image'
import Link from 'next/link';

import Logo from '../../public/images/logo.png';
import Carousel from "../app/components/Slider"

export default function Home() {

  return (
   <div className='w-full block'>
    <Carousel />
   </div>
   
    
  )
}
