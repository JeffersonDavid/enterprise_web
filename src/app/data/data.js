

import Image from 'next/image';
import pitablanco_img from '../../../public/images/pitablanco.webp'
import pitaint_img from '../../../public/images/pan-integral.webp'
import baclava_img from '../../../public/images/baclava.jpg'

export default function productData(){


    let products = { 
        pita_blanco:{
            image: <Image src={pitablanco_img} width={250} height={250} alt="Picture of the author" clssName="rounded-t-lg m-auto" />, 
            title:'Pan pita blanco',
            shortdesc:'test',
            source_page : ''
        },
        pita_integral:{
            image: <Image src={pitaint_img} width={250} height={250} alt="Picture of the author" clssName="rounded-t-lg m-auto" />, 
            title:'Pan pita integral',
            shortdesc:'test',
            source_page : ''
        },
        
        baclava:{
            image: <Image src={baclava_img} width={250} height={250} alt="Picture of the author" clssName="rounded-t-lg m-auto" />, 
            title:'Dulces arabes',
            shortdesc:'test',
            source_page : ''
        },
    }

    return (products);
}

