import { AsideContent } from './components/aside/Aside';
import { Card } from './components/card/Card';
import { Header } from './components/global/Header/Header';
import { MainContent } from './components/main/MainContent';

function App() {
   return (
      <>
         <Header />

         <main className="xl:w-[75rem] 2xl:w-[75rem] lg:w-[1000px] mbl_s:w-full xl:mx-auto 2xl:mx-auto lg:mx-auto md:w-[calc(768px-40px)] md:mx-auto">
            <section className="xl:w-full xl:grid xl:grid-cols-main xl:justify-between  2xl:w-full 2xl:grid 2xl:grid-cols-main 2xl:justify-between lg:w-full lg:grid lg:grid-cols-main lg:justify-between md:grid md:w-full md:grid-cols-main md:justify-between">
               <MainContent />
               <AsideContent />
            </section>
            <section className="xl:flex xl:justify-between xl:pt-20 2xl:flex 2xl:justify-between 2xl:pt-20 lg:flex lg:justify-between lg:pt-16">
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
