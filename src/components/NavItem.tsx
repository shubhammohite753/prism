import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Badge } from "../shared/badge";

export interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  hasChildren?: boolean;
  badgeCount?: number;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const NavItem = ({
  icon,
  title,
  hasChildren = false,
  badgeCount,
  children,
  rightIcon,
}: NavItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-1">
      <button
        className="flex items-center justify-between w-full text-left py-1.5"
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <span className="flex items-center gap-3">
          {icon}

          <span className="font-semibold text-sm leading-5 tracking-normal text-[#414651]">
            {title}
          </span>
        </span>
        <div className="flex items-center gap-1">
          {badgeCount && (
            <Badge
              className="w-[24px] h-[22px] px-[12px] py-[4px] text-xs rounded-full border text-[#414651] bg-[#FAFAFA] border-[#E9EAEB]"
              variant="secondary"
            >
              {badgeCount}
            </Badge>
          )}
          {hasChildren &&
            (isExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#A4A7AE]" />
            ) : rightIcon ? (
              rightIcon
            ) : (
              <ChevronDown className="w-4 h-4 text-[#A4A7AE]" />
            ))}
        </div>
      </button>

      {isExpanded && children && (
        <div className="pl-7 mt-1 space-y-1">{children}</div>
      )}
    </div>
  );
};

export default NavItem;
