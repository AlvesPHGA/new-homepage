import Logo from '../../../assets/icon/logo.svg';

const navLinksLegend = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export function Header() {
   return (
      <header className="px-8">
         <div className="w-[75rem] py-10 mx-auto flex items-center justify-between font-inter">
            <img src={Logo} alt="Logo site" />
            <nav className="text-2xl">
               {navLinksLegend.map((legend) => (
                  <a
                     key={legend}
                     className="hover:text-softRed transition-all delay-100 mr-6 last:mr-0"
                     href=""
                  >
                     {legend}
                  </a>
               ))}
            </nav>
         </div>
      </header>
   );
}
