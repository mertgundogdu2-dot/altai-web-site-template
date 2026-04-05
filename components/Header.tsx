"use client";
import { GradientMenu } from "./aceternity/gradient-menu";

export default function Header({ config }: { config: any }) {
  return (
    <GradientMenu
      businessName={config.business.name}
      phone={config.business.phone}
      primaryColor={config.design.primaryColor}
    />
  );
}
