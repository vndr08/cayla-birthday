function GlassCard({ children, className = "", title = "" }) {
  return (
    <div className={`glass-card ${className}`}>
      {title && <h3 className="glass-card-title">{title}</h3>}
      <div className="glass-card-content">{children}</div>
    </div>
  );
}

export default GlassCard;
