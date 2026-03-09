import AttackCard from '../components/AttackCard';
import { unit5Data } from '../data/attacks';

export default function Unit5Cloud() {
  return (
    <div className="no-scrollbar h-screen overflow-y-scroll ">
          {/* Intro Slide */}
          <div className="h-screen w-full flex flex-col items-center justify-center snap-start bg-slate-900 text-center p-6 ">
            <h1 className="text-6xl font-black text-white mb-4">Unit V cloud specific attacks</h1>
            <p className="text-slate-400 text-xl max-w-2xl">Scroll down to explore cyber attack case studie.</p>
            <div className="mt-10 animate-bounce text-blue-400">↓↓ Scroll to Begin ↓↓</div>
          </div>
          
          {unit5Data.map(item => <AttackCard key={item.id} data={item} />)}
        </div>
  );
}