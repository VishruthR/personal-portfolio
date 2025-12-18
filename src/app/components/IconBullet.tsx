import { ReactNode } from "react";

interface IconBulletProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  children: ReactNode;
  className?: string;
  iconSize?: number;
  iconClassName?: string;
}

const IconBullet = ({ 
  icon: Icon, 
  children, 
  className = "",
  iconSize = 16,
  iconClassName = ""
}: IconBulletProps) => {
  // Calculate margin to center icon on first line (line-height: 1.625)
  // Convert iconSize from px to em (assuming 16px base font size)
  const iconSizeEm = iconSize / 16;
  const lineHeight = 1.625;
  const marginTopEm = (lineHeight - iconSizeEm) / 2;
  
  return (
    <li className={`flex items-start gap-2 ${className}`}>
      <span 
        className="flex-shrink-0"
        style={{ marginTop: `${marginTopEm}em` }}
      >
        <Icon 
          size={iconSize} 
          className={`text-brownMuted ${iconClassName}`}
        />
      </span>
      <span className="flex-1">{children}</span>
    </li>
  );
};

export default IconBullet;

