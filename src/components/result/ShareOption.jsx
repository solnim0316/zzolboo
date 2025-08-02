export default function ShareOption({ label, icon, onClick, className = "bg-pink-100 hover:bg-pink-200" }) {
  return (
    <button 
      onClick={onClick}
      className={`text-sm ${className} px-4 py-3 rounded-lg transition-colors duration-200 flex flex-col items-center gap-1`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
