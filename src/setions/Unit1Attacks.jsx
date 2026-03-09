import AttackCard from '../components/AttackCard';
import { unit1Data } from '../data/attacks';

export default function Unit1Attacks() {
  return (
    <div className="no-scrollbar h-screen overflow-y-scroll ">
      {/* Intro Slide */}
      <div className="h-screen w-full flex flex-col items-center justify-center snap-start bg-slate-900 text-center p-6 ">
        <h1 className="text-6xl font-black text-white mb-4">Unit I Threats</h1>
        <p className="text-slate-400 text-xl max-w-2xl">Scroll down to explore 10 real-world cyber attack case studies mapped to Unit I Security Basics.</p>
        <div className="mt-10 animate-bounce text-blue-400">↓↓ Scroll to Begin ↓↓</div>
      </div>
      
      {unit1Data.map(item => <AttackCard key={item.id} data={item} />)}
    </div>
  );
}