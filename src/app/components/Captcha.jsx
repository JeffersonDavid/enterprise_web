

'use client'
import Image from 'next/image';
import Flecha from '../../../public/images/flecha.png'
import Meta from '../../../public/images/terminar.png';
import React from 'react';
import { useEffect } from 'react';
import Spinner from '../../../public/images/spinner.gif'

export default function Captcha({form}) {

const [status, setStatus_] = React.useState('none');
const [statuscaptcha, setStatuscaptcha] = React.useState('block');
const [statusLoader, setStatusLoader] = React.useState('none');

useEffect(()=>{   
if(form.st){setStatus_('block')}
})




async function drop(e){
    var data = e.dataTransfer.getData("text");
    if(data.includes('flecha')){
        setStatuscaptcha('none');
        setStatusLoader('block');
    }
}


function sendData(form){

}


function dragOver(e){e.preventDefault()}
function dragStart(e){e.dataTransfer.setData("text", e.target.id);}

return (
<div className='popcontainer' style={{display:status}}>

  <div className="captcha">
      <div className="relative">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700"> 
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                     <div>CAPTCHA </div> 
                  </h3>
              </div>

              <div className='w-full p-3'  style={{display:statusLoader}}>
                <Image src={Spinner} width={100} height={100} alt="Loader" className="m-auto" />
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-3">Enviando datos... por favor espere.</p>
              </div>

              <div className='subcont' style={{display:statuscaptcha}}>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-3">Por favor arrastre la fecha amarilla hasta  la meta para terminar el envio del formulario (requerido)</p>
                <div className='w-full flex p-2'>
                <Image id="flecha" draggable="true" src={Flecha} width={50} height={50} alt="Picture of the author" className="rounded-t-lg" onDrag = { e => dragStart(e) }/>
                <Image src={Meta} width={50} height={50} alt="Picture of the author" className="rounded-t-lg  ml-auto meta" onDragOver={ e => dragOver(e)} onDrop={ e => drop(e)} />
                </div>
             </div>

          </div>
      </div>
  </div>

 
  </div>

  )
}
