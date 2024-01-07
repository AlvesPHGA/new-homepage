import { AsideContent } from './components/aside/Aside';
import { Card } from './components/card/Card';
import { Header } from './components/global/Header/Header';
import { MainContent } from './components/main/MainContent';

function App() {
   return (
      <>
         <Header />

         <main>
            <section className="main__content xl:w-full xl:grid xl:grid-cols-main xl:justify-between  2xl:w-full 2xl:grid 2xl:grid-cols-main 2xl:justify-between lg:w-full lg:grid lg:grid-cols-main lg:justify-between md:grid md:w-full md:grid-cols-main md:justify-between mbl_s:w-full">
               <MainContent />
               <AsideContent />
            </section>
            <section className="xl:flex xl:justify-between xl:pt-20 2xl:flex 2xl:justify-between 2xl:pt-20 lg:flex lg:justify-between lg:pt-16 mbl_s:flex mbl_s:flex-col mbl_s:gap-4 mbl_m:flex mbl_m:flex-col mbl_m:gap-4 mbl_l:flex mbl_l:flex-col mbl_l:gap-4">
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
