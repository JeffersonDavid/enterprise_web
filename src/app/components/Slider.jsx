
'use client';

import Sl1 from '../../../public/images/sl1.jpg';
import Sl2 from '../../../public/images/sl2.jpg';

import {useEffect} from 'react'
import Image from 'next/image';
import React from 'react'

export default function MyCarousel()  {

    useEffect(() =>{

        console.clear();
        console.log(Sl1.src)
    })

 /*
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
*/


const [position, setPosition] = React.useState(0);
const [img_style, setStyle]= React.useState({'width':'100% !important'});
const [car_style, setCarStyle]= React.useState({'display':'block !important','margin':'auto !important'});
const [status, setStatus]= React.useState('block');

let array = [
    { title:'Slide 1', img:Sl1.src , content:'test.......................'},
    { title:'Slide 2', img:Sl2 , content:'test.......................'},   
]

async function fadeout(){
   setStatus('none')
   setStyle({'-webkit-transition': 'opacity 3s ease-in-out','opacity': 0});
   await new Promise(resolve => setTimeout(resolve, 3000));
}

async function fadeIn(){
        setStyle({'-webkit-transition': 'opacity 1s ease-in-out','opacity':1});
        setStatus('block')
}

async function prev(){
    if(!(position <= 0)){
        if( position >= 0 && position < ((array.length))){
            await fadeout();
            setPosition( position - 1)
            await fadeIn();
            
        }
    }
}

async function next(){
    if( position >= 0 && position < ((array.length)-1)){
        await fadeout();
        setPosition( position + 1)
        await fadeIn();
    }
}

return( 




 <div> 
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" style={car_style}>
    <img id="target_img" src={array[position].img} alt="pita" style={img_style} className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg w-full'></img> 
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>

 <div class="controls" style={{display:status}}>
 <button class="prev-btn" onClick={prev}>Anterior</button>
 <button class="next-btn" onClick={next}>Siguiente</button>
</div>
</div>


    /*
    <div class="carousel">
        <div class="slide active">

                <h2 className='text-center'>{array[position].title}</h2>
                  {
                  /* 
                  <Image id="target_img" src={array[position].img} alt="pita" style={img_style} className='m-auto'  width={1200} height={950} />
                   <div className="m-auto" style={{'background-image':'url('+array[position].img+')','background-size': 'contain','width': '1200px','height': '900px','border': '2px solid','color': 'pink','background-repeat': 'no-repeat'}}></div>
                  
                  }
                    
                    <Image id="target_img" src={array[position].img} alt="pita" style={img_style} className='m-auto'  width={1200} height={600} />
                   <p className='text-center'>{array[position].content}</p>
        </div>

        <div class="controls" style={{display:status}}>
                <button class="prev-btn" onClick={prev}>Anterior</button>
                <button class="next-btn" onClick={next}>Siguiente</button>
        </div>
    </div>
    */
)}