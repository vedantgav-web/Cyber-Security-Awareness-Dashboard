import Unit1Attacks from './setions/Unit1Attacks';
import Unit5Cloud from './setions/Unit5Cloud';
import LiveTicker from './components/LiveTicker.jsx';


function App() {
  return (
    <div className="relative">

    
   <LiveTicker />
    <div className="no-scrollbar h-screen bg-[#0B1120] overflow-y-scroll   flex flex-col items-center">
   
     
      {/* Unit 1 Container */}
      <div className="w-full snap-start transition-all duration-500 hover:scale-[1.01]">
        {/* ADDED: overflow-hidden and FIXED: rounded-xl */}
        <div className="m-10 rounded-xl overflow-hidden shadow-[10px_10px_20px_2px_rgba(255,7,58,0.5)] hover:shadow-[15px_15px_30px_15px_rgba(0,0,0,0.8)] transition-shadow duration-500">
          <Unit1Attacks />
        </div>
      </div>

      {/* Unit 5 Container */}
      <div className="w-full snap-start transition-all duration-500 hover:scale-[1.01]">
        {/* ADDED: overflow-hidden and FIXED: rounded-xl */}
        <div className="m-10 rounded-xl overflow-hidden shadow-[10px_10px_20px_10px_rgba(255,7,58,0.5)] hover:shadow-[15px_15px_30px_15px_rgba(0,0,0,0.8)] transition-shadow duration-500">
          <Unit5Cloud />
        </div>
      </div>

      
    </div>
    </div>
  );
}

export default App;