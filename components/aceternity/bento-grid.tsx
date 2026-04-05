"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  index = 0,
  primaryColor,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  index?: number;
  primaryColor?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition-all duration-300 shadow-none p-6 bg-white border border-gray-100 justify-between flex flex-col space-y-4 cursor-default",
        "hover:-translate-y-1 hover:border-gray-200",
        className
      )}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover/bento:scale-110"
        style={{ background: `${primaryColor || "var(--primary)"}15` }}
      >
        {icon}
      </div>
      <div className="transition duration-200">
        <h4
          className="font-semibold text-lg mb-2 tracking-tight"
          style={{ color: "var(--secondary)" }}
        >
          {title}
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
