
'use client'

import React from 'react';
import { useEffect } from 'react';

import productData from '../data/data';

export default function Blanco() {

let prd = productData();
 
return ( 
<div className='w-full p-1'>
<div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row mw hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-auto">

    <div className='pr_img'>
        <div>{prd.pita_blanco.df_image}</div>
        <div className='mdiv'></div>
        <div>{prd.carton_img}</div>
    </div>
    <div class="flex flex-col justify-between mbaut leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prd.pita_blanco.title}</h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{prd.pita_blanco.shortdesc}</p>
        <br/>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400"> 
        - Bolsas en caja : {prd.pita_blanco.box.quantity} bolsas.
        </p>

        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400"> 
        - Panes en bolsa : {prd.pita_blanco.bag.quantity} pita.
        </p>        

        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400"> 
        - Duración : {prd.pita_blanco.duration} días.
        </p>

        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400"> 
        - Almacenamiento : {prd.storage}
        </p>

        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400"> 
        - Dimension bolsa : {prd.pita_blanco.box.weight}
        </p>

    </div>
</div>
</div>
)


}
  