import Unit1 from './Unit1Attacks'
import Unit5 from './Unit5Cloud'

export default function MainSection() {
  return (
    <div className="no-scrollbarh-full overflow-y-scroll snap-y snap-mandatory scroll-smooth align-middle flex-row ">
     <div className="p-10"> <Unit1 /> </div>
     <div className="p-10"> <Unit5 /> </div>
    </div>
  );
}