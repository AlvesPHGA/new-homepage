import '../../../content.mock.json';
import image01 from '../../assets/images/image-retro-pcs.jpg';

export function Card() {
   return (
      <div>
         <img src={image01} alt="" />
         <div>
            <span>01</span>
            <h2>Reviving Retro PCs</h2>
            <p>What happens when old PCs are given modern upgrades?</p>
         </div>
      </div>
   );
}
