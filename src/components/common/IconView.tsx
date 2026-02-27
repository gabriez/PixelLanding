import { LucideIcon } from "lucide-react";

export const IconView = ({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) => {
  return <Icon className={className} />;
};
