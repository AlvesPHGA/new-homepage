import { AsideContent } from './components/aside/Aside';
import { Card } from './components/card/Card';
import { Header } from './components/global/Header/Header';
import { MainContent } from './components/main/MainContent';

import { aside_section, cards } from '../content.mock.json';

function App() {
   return (
      <>
         <Header />

         <main>
            <section className="main__box__01">
               <MainContent />
               <aside className="aside">
                  <h2 className="aside__title">New</h2>
                  {aside_section.map((as) => (
                     <AsideContent key={as.title} {...as} />
                  ))}
               </aside>
            </section>
            <section className="main__box__02">
               {cards.map((card) => (
                  <Card key={card.id} {...card} />
               ))}
            </section>
         </main>
         <footer></footer>
      </>
   );
}

export default App;
