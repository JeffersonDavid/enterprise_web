

'use client'
import Captcha from '../components/Captcha';
import React from 'react';
import { useEffect } from 'react';

export default function contactPage() {


const [username, setUsername] = React.useState('');
const [email, setMail] = React.useState('');
const [phone, setPhone] = React.useState('');
const [msg, setMsg] = React.useState('');
const [status, setStatus] =  React.useState(false);

const form = { un:username, mail:email, ph:phone, st:status }

const [validation,setValiadtion] = React.useState('');

const [classInputForms,setclassInputForms] = React.useState('block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500');


function SendData(){
  let errors = []
  for (const key in form) {
    let data = form[key]
    if( data === '' || data === undefined || data === null) {
      switch (key) {
        case 'un':
          setValiadtion('Por favor introduzca un nombre');
          setStatus(false)
          errors.push(key)
        break;
        case 'mail':
          setValiadtion('Por favor introduzca un email valido');
          setStatus(false)
          errors.push(key)
        break;
        case 'ph':
          setValiadtion('Por favor introduzca un teléfono');
          setStatus(false)
          errors.push(key)
        break;
      }
    }
  }
  if(arrayIsEmpty(errors)){
    setValiadtion();
    setStatus(true)
  }
}




function arrayIsEmpty(array) {
  if (!Array.isArray(array)) {
      return FALSE;
  }
  if (array.length == 0) {
      return true;
  }
  return false;
}


return( 

<div className='m-auto w-[100%]'>

<Captcha form={form} />

    <div className='boxformcont'>

      <div className="w-full max-w-xl">
      
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-2 mb-1">
              {/*
                <div className="mb-1">
                    <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 btnbcolor" role="alert">
                      <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                     
                </div>
                </div>
              */}
                <p className='m-3'> Contacto a través de formulario </p>
                <div className="mb-1">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Nombre y apellidos
                      </label>
                      <input className={classInputForms} id="username" type="text" placeholder="nombre..." onChange={e => setUsername(e.target.value)} value={username}/>
                </div>

                <div className="mb-1">
                      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="phone">
                        Telefono
                      </label>
                      <input className={classInputForms} id="phone" type="text" placeholder="phone..." value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>

                <div className="mb-1">
                      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                        email
                      </label>
                      <input className={classInputForms} id="email" type="email" placeholder="email..." value={email} onChange={e => setMail(e.target.value)}/>
                </div>

                <div className="mb-1">
                  <textarea id="message" rows="4" className={classInputForms} placeholder="(opcional) escribe aqui tu comentario..." value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                </div>              

                <div className="flex items-center justify-between">
                      <button className="btnbcolor bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={e => SendData(e)}>
                        Enviar
                      </button>
                      <p className="text-red-500 text-xs italic"> {validation}  </p>
                </div>
            </form>
        </div>
    </div>
    
    </div>





    );
  }
  