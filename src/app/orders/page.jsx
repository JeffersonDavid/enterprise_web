
'use client'

import Product from '../components/Productdesc';

import productData from '../data/data';


export default function ordersPage() {

    return( 
        
            <div className='m-auto prc' >  
            
                <Product data={ productData().pita_blanco }/>
                <Product data={ productData().pita_integral }/>
                
            </div>
    )
}