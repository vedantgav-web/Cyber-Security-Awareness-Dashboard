export default function AttackCard({ data }) {
  return (
    <div className="h-screen w-full flex items-center justify-center snap-start p-4 md:p-10 bg-slate-50 border-b border-gray-200">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 flex flex-col md:flex-row h-[90vh]">
        
        {/* Left Side */}
        <div className="md:w-1/3 bg-slate-900 text-white p-8 flex flex-col justify-center">
          <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-2">{data.mapping}</span>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">{data.title}</h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-blue-400 font-semibold uppercase text-xs">Definition</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{data.definition}</p>
            </div>
            <div>
              <h4 className="text-blue-400 font-semibold uppercase text-xs">Mechanism</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{data.description}</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-blue-400 md:w-2/3 p-8 md:p-12 overflow-y-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-red-500 inline-block">Real-World Case Study</h3>
            <div className="grid grid-cols-2 gap-4 mt-4 mb-6">
              <div className="bg-slate-50 p-3 rounded-lg">
                <p className="text-xs text-slate-500 uppercase font-bold">Event Title</p>
                <p className="text-slate-800 font-medium">{data.realCase.title}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <p className="text-xs text-slate-500 uppercase font-bold">Date & Place</p>
                <p className="text-slate-800 font-medium">{data.realCase.date} | {data.realCase.place}</p>
              </div>
            </div>
            
            <h4 className="font-bold text-slate-700 mb-2 underline">Summary:</h4>
            <p className="text-slate-600 mb-6">{data.realCase.summary}</p>
            
            <h4 className="font-bold text-slate-700 mb-2 underline">Full Incident Details:</h4>
            <p className="text-slate-600 leading-relaxed italic">"{data.realCase.details}"</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
            <h4 className="text-green-800 font-bold flex items-center gap-2">
              🛡️ Prevention Strategy
            </h4>
            <p className="text-green-700 text-sm mt-2">{data.prevention}</p>
          </div>
        </div>

      </div>
    </div>
  );
}