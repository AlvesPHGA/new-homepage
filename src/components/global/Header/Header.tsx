import Logo from '../../../assets/icon/logo.svg';

const navLinksLegend = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export function Header() {
   return (
      <header className="header">
         <div className="header__container">
            <img src={Logo} alt="Logo site" />
            <nav className="header__nav">
               {navLinksLegend.map((legend) => (
                  <a key={legend} href="">
                     {legend}
                  </a>
               ))}
            </nav>
         </div>
      </header>
   );
}
