import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]",
        secondary: "bg-secondary/20 text-foreground hover:bg-secondary/30 active:scale-[0.98]",
        ghost: "hover:bg-muted hover:text-foreground active:scale-[0.98]",
        link: "text-accent underline-offset-4 hover:underline",
        accent:
          "bg-gradient-to-r from-[hsl(24,79%,54%)] to-[hsl(22,86%,45%)] text-white shadow-[0_8px_24px_-8px_hsl(24,79%,54%,0.35)] hover:opacity-90 active:scale-[0.98]",
        "accent-outline":
          "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white active:scale-[0.98]",
        hero: "bg-gradient-to-r from-[hsl(24,79%,54%)] to-[hsl(22,86%,45%)] text-white shadow-[0_8px_24px_-8px_hsl(24,79%,54%,0.35)] hover:shadow-lg hover:opacity-95 active:scale-[0.98] text-base px-8 py-6",
        "hero-outline":
          "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 active:scale-[0.98] text-base px-8 py-6",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
