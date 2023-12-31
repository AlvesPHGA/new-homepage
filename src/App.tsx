import { AsideContent } from './components/aside/Aside';
import { Card } from './components/card/Card';
import { Header } from './components/global/Header/Header';
import { MainContent } from './components/main/MainContent';

function App() {
   return (
      <>
         <Header />

         <main className="w-[75rem] mx-auto">
            <section className="w-full grid grid-cols-[63%_32%] justify-between">
               <MainContent />
               <AsideContent />
            </section>
            <section className="flex justify-between">
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
