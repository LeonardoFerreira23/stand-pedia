export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-8 text-white">
      <h1 className="mb-16 text-6xl font-black italic tracking-widest text-purple-500 drop-shadow-[0_4px_4px_rgba(168,85,247,0.5)]">
        STAND-PEDIA
      </h1>

      {/* Card Bizarro com efeito de Hover */}
      <div className="relative group w-80 cursor-pointer">
        
        {/* Fundo distorcido simulando um painel de mangá */}
        <div className="absolute -inset-2 bg-linear-to-br from-pink-500 to-purple-600 transform skew-y-3 skew-x-3 opacity-60 group-hover:opacity-100 transition-all duration-300 z-0 border-4 border-black"></div>
        
        {/* Conteúdo principal do Card */}
        <div className="relative z-10 bg-zinc-900 border-4 border-black p-6 transform -skew-y-2 transition-transform duration-300 group-hover:-translate-y-2">
          
          <div className="flex justify-between items-start mb-6 border-b-2 border-zinc-700 pb-2">
            <h2 className="text-3xl font-black uppercase tracking-widest text-white">Soft & Wet</h2>
            <span className="text-pink-500 font-black text-xl italic">Pt 8</span>
          </div>
          
          <div className="space-y-2 font-mono text-sm mb-6">
            <p><span className="text-zinc-500 font-bold">User:</span> Josuke Higashikata</p>
            <p><span className="text-zinc-500 font-bold">Type:</span> Close-Range</p>
          </div>

          {/* Status do Stand */}
          <div className="grid grid-cols-2 gap-3 pt-2 font-bold text-lg">
            <div className="text-red-400 drop-shadow-md">Power: C</div>
            <div className="text-blue-400 drop-shadow-md">Speed: B</div>
            <div className="text-green-400 drop-shadow-md">Range: D</div>
            <div className="text-yellow-400 drop-shadow-md">Dur: B</div>
          </div>
          
          {/* Onomatopeia secreta */}
          <div className="absolute -right-10 -top-8 text-5xl font-black text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform rotate-12 drop-shadow-[0_3px_0_rgba(0,0,0,1)] pointer-events-none">
            ゴゴゴ
          </div>
        </div>

      </div>
    </main>
  );
}