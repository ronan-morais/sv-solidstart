import { HiOutlineMenuAlt2 } from 'solid-icons/hi'

export default function HeaderNav() {
  return (
    <div class="container max-w-full flex gap-6 p-5 pt-8 lg:p-12 items-center bg-white">
      <div class="relative">
        <div class="w-14 h-14 flex items-center justify-center rounded-full relative overflow-clip ring-2 ring-green-400 ring-offset-2 hover:ring-offset-4 hover:ring-4 ring-offset-white transition-all">
          <img src="https://github.com/ronan-morais.png" alt="Ronan Morais" />
        </div>
        <span class="absolute -bottom-2 right-0 bg-green-500 text-sm text-white font-bold w-6 h-6 justify-center items-center rounded-full flex ">
          3
        </span>
      </div>
      <div class="w-full whitespace-nowrap">
        <h2 class="text-xs sm:text-sm font-bold text-begeMedio">
          Secretaria Virtual
        </h2>
        <h1 class="text-sm sm:text-lg lg:text-xl font-black tracking-normal text-begeEscuro leading-4">
          <a href="/">Flor de Jagube</a>
        </h1>
      </div>
      <div class="">
        <nav>
          <button
            type="button"
            id="menuButton"
            title="Menu Button"
            class="bg-begeClaro rounded-lg hover:ring-2 hover:ring-begeClaro hover:ring-offset-2 transition-all"
          >
            <label htmlFor="closeDrawer" class="p-3 flex cursor-pointer">
              <HiOutlineMenuAlt2 class="fill-begeMedio w-6 h-6" />
            </label>
          </button>
          {/* <Drawer>
            <div class="p-10">
              <ul>
                <li>Link 1</li>
              </ul>
            </div>
          </Drawer> */}
        </nav>
      </div>
    </div>
  );
}
