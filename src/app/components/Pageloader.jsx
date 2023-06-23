
import LoaderGif from '../../../public/images/spinner.gif';
import Image from 'next/image';

export default function Pageloader() {
    
    const spinner_style = {
         margin:'auto',
        'margin-top':'10%'
    }

return ( 
        <div className='container_style_loader'>
            <Image src={LoaderGif} width={120} height={120} alt="pita spinner" style={spinner_style}/>
        </div>
        )
}


