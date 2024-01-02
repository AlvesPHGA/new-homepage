import Logo from '../../../assets/icon/logo.svg';

const navLinksLegend = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export function Header() {
   return (
      <header className="xl:2xl:px-8">
         <div className="font-inter xl:2xl:w-[75rem] xl:2xl:py-10 xl:2xl:lg:mx-auto xl:2xl:lg:flex xl:2xl:items-center xl:2xl:justify-between lg:w-[1000px] lg:mx-auto lg:flex lg:items-center lg:justify-between lg:py-5 border">
            <img src={Logo} alt="Logo site" />
            <nav className="xl:2xl:text-2xl lg:text-xl">
               {navLinksLegend.map((legend) => (
                  <a
                     key={legend}
                     className="xl:2xl:hover:text-softRed xl:2xl:transition-all xl:2xl:delay-100 xl:2xl:mr-6 xl:2xl:last:mr-0 lg:hover:text-softRed lg:transition-all lg:delay-100 lg:mr-6 lg:last:mr-0"
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
