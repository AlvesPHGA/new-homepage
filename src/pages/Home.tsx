import { handleDocument } from '../helpers/prismic/home';

const Home = () => {
   const homeData = handleDocument();
   console.log(homeData);
   return (
      <>
         <h1>This is a test!</h1>
      </>
   );
};

export default Home;
