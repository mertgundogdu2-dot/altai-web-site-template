"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  primaryColor = "#e63946",
  secondaryColor = "#1d3557",
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen items-center justify-center text-white transition-bg overflow-hidden",
        className
      )}
      style={{ background: secondaryColor }}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, ${primaryColor}33 10%, ${primaryColor}22 15%, transparent 30%, transparent 35%, ${primaryColor}11 50%),
              repeating-linear-gradient(100deg, ${secondaryColor}44 0%, ${primaryColor}33 7%, ${secondaryColor}22 20%, ${primaryColor}11 25%, ${secondaryColor}33 35%)
            `,
            backgroundSize: "300%, 200%",
            backgroundPosition: "50% 50%, 50% 50%",
            animation: "aurora 60s linear infinite",
          }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${primaryColor}44, transparent)`,
        }}
      />
      {children}
    </div>
  );
};
