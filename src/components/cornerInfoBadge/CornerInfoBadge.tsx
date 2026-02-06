import { BadgeVariant } from "@/utils/types";

const getCornerInfoBadgeColors = (variant: BadgeVariant) => {
  switch (variant) {
    case BadgeVariant.one:
      return {
        main: "#f59e0b", // amber-500
        dark: "#b45309", // amber-700
      };
    case BadgeVariant.two:
      return {
        main: "#9333ea", // purple-600
        dark: "#6b21a8", // purple-800
      };
    case BadgeVariant.three:
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
    <div className="absolute top-0 right-0 z-20 overflow-hidden w-36 h-36 pointer-events-none">
      {/* Ribbon Container */}
      <div className="absolute top-0 right-0 w-full h-full">
        {/* Fold Shadows (Triangle behind ribbon) */}
        <div
          className="absolute top-0 right-[6rem] w-3 h-3 rotate-45 origin-bottom-right z-0"
          style={{
            backgroundColor: colors.dark,
          }}
        />
        <div
          className="absolute top-[6rem] right-0 w-3 h-3 rotate-45 origin-top-left z-0"
          style={{
            backgroundColor: colors.dark,
          }}
        />

        {/* Main Ribbon */}
        <div
          className="absolute top-[40px] -right-[70px] w-[240px] text-center py-2 transform rotate-45 z-10"
          style={{
            background: `linear-gradient(to bottom, ${colors.main} 0%, ${colors.dark} 100%)`,
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          }}
        >
          <span className="block text-[10px] font-bold tracking-wider text-white uppercase drop-shadow-sm whitespace-nowrap">
            {text}
          </span>
          {/* Inner highlight for 3D shine */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30" />
        </div>
      </div>
    </div>
  );
};

export default CornerInfoBadge;
