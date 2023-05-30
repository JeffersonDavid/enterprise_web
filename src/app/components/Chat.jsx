
'use client'

import User from '../../../public/images/user.png';
import Image from 'next/image';
import React from 'react';
import Chatbot from '../../../public/images/chatbotor.png'

import {useEffect} from 'react'

export default function Chat() {

const [chatIcon, setChatIcon] = React.useState('block');
const [chatModal, setChatModal] = React.useState('none');
const [conversation, setConversation] = React.useState([]);

const [loaderStatus, setLoader] = React.useState('none');


useEffect(() =>{

    if (conversation.length === 0){
        let post_data = { method: 'POST',headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'}, body: JSON.stringify({input:'dispatch'})}
        fetch('api/chatbot',post_data)
        .then(res => res.json())
        .then(function (res){
            
            setLoader('-webkit-inline-box');

            const timer = setTimeout(() => {
                res.iconFlow= <Image src={Chatbot} width={20} height={20} alt="Com" className="iconbot"/>;
                setConversation(conversation => [...conversation, res])
                setLoader('none')
              }, 3000);
        });

    }else{

          
          const lastConv = (conversation.slice(-1))[0];
      
          if(lastConv.author != 'Louis'){
            let post_data = { method: 'POST',headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'}, body: JSON.stringify({input:lastConv.message})}
            fetch('api/chatbot',post_data)
            .then(res => res.json())
            .then(function (res){

                setLoader('-webkit-inline-box');

                const timer = setTimeout(() => {
                    res.iconFlow= <Image src={Chatbot} width={20} height={20} alt="Com" className="iconbot"/>;
                    setConversation(conversation => [...conversation, res])
                    setLoader('none')
                  }, 3000);
            });
 
        }
    }

    const element = document.getElementById("chatflow");
    element.scrollTop = element.scrollHeight

},[conversation]) 







const closeBtn = (event) => {
    setChatModal('none');
    setChatIcon('block');
};

function activateBot()
{
    setChatModal('block');
    setChatIcon('none');
 }


const handleKeyDown = (event) => {

    setLoader('none')

    const  input = event.target.value
    if (event.key === 'Enter') {
      if(input!=null || input!=undefined){
        const new_conv = {
            author:'Tú',
            message:input,
            iconFlow: <Image src={User} width={20} height={20} alt="Com" className="iconbot"/>
        }
        setConversation(conversation => [...conversation, new_conv])
        event.target.value= "";
      }
    }
};



return(

<div className='chatbot'>

    <button onClick={ activateBot } style={{display:chatIcon}}>
        <div className='chatCont'>
{/*
            <div className="bocadillo-cuadrado animation"> 

                <div className="css-typing"><p className='noborderanim'>¿Necesitas ayuda? <br></br> Pulse aquí</p></div>

           </div>
*/}
            <Image src={Chatbot} width={50} height={50} alt="Com" className="iconbot animation"/>
        </div>
    </button>


    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{display:chatModal}}>
    <div className="flex justify-end px-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
        <div id="dropdown" className="closebtn z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li className=''>
                <button onClick={closeBtn} className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" >Close</button>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10" style={{margin:'5px;',padding:'0.5rem'}}>
          <Image className="w-14 h-14 mb-3 rounded-full shadow-lg" src={Chatbot} alt="Bonnie image"/> 
         <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> Louis </h5>
         <div className='loaderAnimation'><span className="text-sm text-gray-500 dark:text-gray-400">Agente comercial </span> &nbsp;
            <div className='loaderAnimation' style={{display:loaderStatus}}>
                <p className='pointanim'>.</p><p className='pointanim'>.</p><p className='pointanim'>.</p>
            </div>
         </div>
         
        <div id="chatflow" className="chatflow form-control w-full max-w-xs">

        {
            conversation.map(conv => {
               return(
                <div>
                    <div className='loaderAnimation'>
                        {conv.iconFlow}
                    </div>
                    <br></br>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-1">{conv.message}</span> 
                </div>
              )
                
            })
        }
                
        </div>
        <input  onKeyUp={handleKeyDown} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs borderlight"/>
    </div>
</div>
    
</div>



)}
