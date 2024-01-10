import { AsideContent } from './components/aside/Aside';
import { Card } from './components/card/Card';
import { Header } from './components/global/Header/Header';
import { MainContent } from './components/main/MainContent';

import { cards } from '../content.mock.json';

function App() {
   console.log(cards);
   return (
      <>
         <Header />

         <main>
            <section className="main__box__01">
               <MainContent />
               <AsideContent />
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
