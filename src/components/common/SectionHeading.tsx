
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({ title, subtitle, description, align = "center", className }: SectionHeadingProps) => {
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
      {subtitle && <p className="text-brand-red uppercase tracking-wider font-bold mb-2">{subtitle}</p>}
      <h2 className="heading-lg mb-4">{title}</h2>
      {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
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
