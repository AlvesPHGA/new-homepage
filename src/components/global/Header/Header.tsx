import Logo from '../../../assets/icon/logo.svg';

export function Header() {
   return (
      <header className=" px-8">
         <div className="w-[75rem] py-5 mx-auto flex items-center justify-between font-inter">
            <img src={Logo} alt="Logo site" />
            <nav className="text-2xl">
               <a className="hover:text-softRed mr-6" href="">
                  Home
               </a>
               <a className="hover:text-softRed mr-6" href="">
                  New
               </a>
               <a className="hover:text-softRed mr-6" href="">
                  Popular
               </a>
               <a className="hover:text-softRed mr-6" href="">
                  Trending
               </a>
               <a className="hover:text-softRed" href="">
                  Categories
               </a>
            </nav>
         </div>
      </header>
   );
}
