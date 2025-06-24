import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MedievalCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function MedievalCard({ children, className, hover = true }: MedievalCardProps) {
  return (
    <div 
      className={cn(
        "medieval-card rounded-lg p-6",
        hover && "hover-lift",
        className
      )}
    >
      {children}
    </div>
  );
}
