import { useState, useRef } from "react";

const CardSpotlightBorder = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group rounded-lg p-6 bg-black border border-gray-800 shadow-md transition duration-500 hover:shadow-lg"
    >
      {/* Effet Spotlight */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(228, 115, 32, 0.4), transparent 60%)`,
          opacity: position.opacity,
        }}
      />
      
      {/* Contenu */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CardSpotlightBorder;
