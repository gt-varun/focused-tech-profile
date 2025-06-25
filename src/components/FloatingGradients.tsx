
import React from 'react';

const FloatingGradients = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient orbs that float around */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-[float_20s_ease-in-out_infinite] bg-gradient-to-br from-primary/30 to-primary/10 blur-3xl"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full opacity-15 animate-[float_25s_ease-in-out_infinite_reverse] bg-gradient-to-br from-accent/30 to-accent/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-10 animate-[float_30s_ease-in-out_infinite] bg-gradient-to-br from-muted/40 to-muted/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default FloatingGradients;
