export default function Loading() {
  return (
    <div className="min-h-screen bg-andus-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-14 h-14 rounded-sm bg-andus-gold/10 border border-andus-gold/20 flex items-center justify-center animate-pulse">
            <span className="font-display font-bold text-andus-gold text-xl">A</span>
          </div>
          <div className="absolute inset-0 rounded-sm border border-andus-gold/40 animate-ping opacity-30" />
        </div>
        <div className="font-mono text-xs text-andus-subtle tracking-widest uppercase animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}
