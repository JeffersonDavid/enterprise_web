import Sidebar from '../components/Sidebar';
export default function contactPage() {

    return( 

    <div className='boxformcont'>

<Sidebar>
  
</Sidebar>
      
     <div class="w-full max-w-xl">
     
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label className='formtitle'>Contacto a través de formulario</label>
        </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Nombre y apellidos
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="nombre..."/>
          </div>

          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                Telefono
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="phone..."/>
          </div>

          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                email
              </label>
              <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email..."/>
              <p class="text-red-500 text-xs italic">Introduzca un email valido.</p>
          </div>

          <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Enviar
              </button>
          </div>
        </form>
      </div>
    </div>
    );
  }
  