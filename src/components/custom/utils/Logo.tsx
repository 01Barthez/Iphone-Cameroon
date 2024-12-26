import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "/images/LogoLight.svg";
import LogoDark from "/images/LogoDark.svg";
import { useTheme } from "@/hooks/use-theme";

interface LogoProps {
  isDarkZone?: boolean; 
}

const Logo: React.FC<LogoProps> = ({ isDarkZone = false }) => {
  const { theme } = useTheme();

  // Détermine le logo à utiliser
  const isDarkMode = theme === "dark" || (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  const logoSrc = isDarkMode || isDarkZone ? LogoLight : LogoDark;

  return (
    <Link to="/" className="inline-block w-24">
      <img
        src={logoSrc}
        alt="Logo Iphone Cameroon"
        className="w-full h-full object-contain"
      />
    </Link>
  );
};

export default Logo;
