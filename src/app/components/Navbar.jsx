import Image from "next/image"
import Logo from "../../../public/images/logo.png"
import Link from "next/link"
import PitaIcon from "../../../public/images/pan-de-pita.png"
import ComunincationIcon from "../../../public/images/com.png"
import BoxIcon from "../../../public/images/box.png"
import CompanyIcon from "../../../public/images/panadero.png"



export default function NavBar() {

    const pages = [

        {label:'Nosotros', source:'about-us', iconSrc: <Image src={CompanyIcon} width={30} height={30} alt="Pitasol"/>},
        
        {label:'Productos', source:'products', iconSrc: <Image src={PitaIcon} width={30} height={30} alt="Pitasol"/>},

        {label:'Contacto', source:'/contact', iconSrc: <Image src={ComunincationIcon} width={30} height={30} alt="Com"/>},

        {label:'Pedidos', source:'orders', iconSrc:<Image src={BoxIcon} width={30} height={30} alt="Com"/>},

    ]

return (

<header>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <Link href="/" className="flex items-center"><Image src={Logo} width={150} height={150} alt="Picture of the author"/>
     <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PITASOL SL</span>
    </Link>


    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

        {
            pages.map(element => {
               return(
                
              <div className="link-container">

                  <li className="link-navi">
                        <Link href={element.source} className="block py-2 pl-3 pr-4 text-zinc-950 rounded md:bg-transparent md:p-0 dark:text-white">{element.label}</Link>
                  </li>

                  <div className="icon_flv">
                      {element.iconSrc}
                  </div>

              </div>         
              )
                
            })
        }
      </ul>
    </div>
  </div>
</nav>
</header>
)
}


