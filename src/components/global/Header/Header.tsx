import Logo from '../../../assets/icon/logo.svg';

const navLinksLegend = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export function Header() {
   return (
      <header className="xl:2xl:px-8">
         <div className="xl:2xl:w-[75rem] xl:2xl:py-10 xl:2xl:mx-auto xl:2xl:flex xl:2xl:items-center xl:2xl:justify-between xl:2xl:font-inter">
            <img src={Logo} alt="Logo site" />
            <nav className="xl:2xl:text-2xl">
               {navLinksLegend.map((legend) => (
                  <a
                     key={legend}
                     className="xl:2xl:hover:text-softRed xl:2xl:transition-all xl:2xl:delay-100 xl:2xl:mr-6 xl:2xl:last:mr-0"
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
