export default function LiveTicker() {
  const alerts = [
    "[CRITICAL] Phishing attempt detected in Maharashtra region...",
    "[WARN] New Ransomware variant 'WannaCry 2.0' spotted globally...",
    "[SUCCESS] SQL Injection blocked by Unit 5.4 Database Firewall...",
    "[INFO] Cloud S3 Bucket configuration audit completed...",
    "[ALERT] Man-in-the-Middle activity spike in public Wi-Fi networks..."
  ];

  return (
    <div className="fixed top-0 w-full bg-red-600/20 backdrop-blur-md border-b border-red-500/50 z-50 py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap space-x-10">
        {/* We repeat the array to make the loop seamless */}
        {[...alerts, ...alerts].map((text, i) => (
          <span key={i} className="text-white font-mono text-xs font-bold uppercase tracking-tighter">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}