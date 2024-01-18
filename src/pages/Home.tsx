import { AsideContent } from '../components/aside/Aside';
import { Card } from '../components/card/Card';
import { Header } from '../components/global/Header/Header';
import { MainContent } from '../components/main/MainContent';
import { handleDocument } from '../helpers/prismic/home';

import { aside_section } from '../../content.mock.json';

const Home = () => {
   const homeData = handleDocument();

   console.log(homeData?.cardsContainer);

   return (
      <>
         <Header />
         <main>
            <section className="main__box__01">
               <MainContent
                  title={homeData?.title}
                  description={homeData?.description}
               />
               <aside className="aside">
                  <h2 className="aside__title">New</h2>
                  {aside_section.map((as) => (
                     <AsideContent key={as.title} {...as} />
                  ))}
               </aside>
            </section>
            <section className="main__box__02">
               {homeData?.cardsContainer?.cards?.map((card) =>
                  card?.map((c) => (
                     <Card
                        key={c.numberPublish}
                        number={c?.numberPublish}
                        title={c?.titleCard}
                        image={c?.imageCard}
                        content={c?.contentCard}
                     />
                  )),
               )}
            </section>
         </main>
      </>
   );
};

export default Home;
