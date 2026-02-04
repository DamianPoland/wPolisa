export type BadgeVariant = 1 | 2 | 3;

const getCornerInfoBadgeColors = (variant: BadgeVariant) => {
  switch (variant) {
    case 1:
      return {
        main: "#f59e0b", // amber-500
        dark: "#b45309", // amber-700
      };
    case 2:
      return {
        main: "#9333ea", // purple-600
        dark: "#6b21a8", // purple-800
      };
    case 3:
      return {
        main: "#e67a2c", // accent
        dark: "#c2410c", // orange-700
      };
    default:
      return {
        main: "#1c3757",
        dark: "#0f1d2d",
      };
  }
};

const CornerInfoBadge = ({ text, variant }: { text: string; variant: BadgeVariant }) => {
  const colors = getCornerInfoBadgeColors(variant);

  return (
    <div className="absolute top-0 right-0 z-20 overflow-hidden w-28 h-28 pointer-events-none">
      {/* Ribbon */}
      <div
        className="absolute top-[30px] right-[-35px] w-[150px] text-center py-1.5 text-[9px] font-bold tracking-wider text-white shadow-md rotate-45"
        style={{
          background: `linear-gradient(90deg, ${colors.main} 0%, ${colors.dark} 50%, ${colors.main} 100%)`,
          boxShadow: `0 2px 8px rgba(0,0,0,0.3)`,
        }}
      >
        {text}
      </div>
      {/* Right fold shadow */}
      <div
        className="absolute top-[-5px] right-[17px] w-0 h-0 rotate-45"
        style={{
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: `6px solid ${colors.dark}`,
          filter: "brightness(0.6)",
        }}
      />
    </div>
  );
};

export default CornerInfoBadge;
