import { insuranceVariants } from "@/utils/constants";
import { InsuranceVariantsId } from "@/utils/types";

// id - id ubezpieczenia (opcjonalnie)
// gradient - gradient koloru (opcjonalnie)
// icon - ikona ubezpieczenia (opcjonalnie)
const InsuranceVariantIcon = ({
  id,
  gradient,
  icon,
}: {
  id?: InsuranceVariantsId;
  gradient?: string;
  icon?: React.ElementType;
}) => {
  const gradientColor = gradient ? gradient : id ? insuranceVariants.find((t) => t.id === id)?.color : "";
  const Icon = icon ? icon : id ? insuranceVariants.find((t) => t.id === id)?.icon : null;
  if (!Icon) return null;
  return (
    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${gradientColor}`}>
      <Icon className="h-7 w-7 text-white" />
    </div>
  );
};

export default InsuranceVariantIcon;
