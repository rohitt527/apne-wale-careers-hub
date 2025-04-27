
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({ title, subtitle, align = "center", className }: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        "mb-12", 
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right"
        },
        className
      )}
    >
      <h2 className="heading-lg mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
      <div 
        className={cn(
          "h-1 w-24 bg-brand-red mt-4", 
          {
            "mx-auto": align === "center",
            "ml-0": align === "left",
            "mr-0 ml-auto": align === "right"
          }
        )}
      ></div>
    </div>
  );
};

export default SectionHeading;
