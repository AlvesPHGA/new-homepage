import { AsideContent } from './components/aside/Aside';
import { Card } from './components/card/Card';
import { Header } from './components/global/Header/Header';
import { MainContent } from './components/main/MainContent';

function App() {
   return (
      <>
         <Header />

         <main>
            <section className="main__box__01">
               <MainContent />
               <AsideContent />
            </section>
            <section className="main__box__02">
               <Card />
               <Card />
               <Card />
            </section>
         </main>
         <footer></footer>
      </>
   );
}

export default App;
