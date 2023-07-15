const Tag = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`bg-cyan-600 text-white text-xs rounded-full px-3 py-2 flex items-center gap-1 shadow-lg ${className}`}
  >
    {children}
  </div>
);

export default Tag;
