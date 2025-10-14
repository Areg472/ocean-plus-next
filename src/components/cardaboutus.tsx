import * as React from "react";

import { cn } from "@/lib/utils";

const Cardaboutus = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { color?: string }
>(({ className, color, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:text-gray-50",
      color,
      className,
    )}
    {...props}
  />
));
Cardaboutus.displayName = "Card";

const CardaboutusHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardaboutusHeader.displayName = "CardHeader";

const CardaboutusTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardaboutusTitle.displayName = "CardTitle";

const CardaboutusDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
));
CardaboutusDescription.displayName = "CardDescription";

const CardaboutusContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardaboutusContent.displayName = "CardContent";

const CardaboususFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardaboususFooter.displayName = "CardFooter";

export {
  Cardaboutus,
  CardaboutusHeader,
  CardaboususFooter,
  CardaboutusTitle,
  CardaboutusDescription,
  CardaboutusContent,
};
