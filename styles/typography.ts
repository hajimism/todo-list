import { cn } from "@/common/lib/cn";

export const h1 = (className?: string | undefined) =>
  cn(
    "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    className
  );

export const h2 = (className?: string | undefined) =>
  cn(
    "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
    className
  );

export const h3 = (className?: string | undefined) =>
  cn("scroll-m-20 text-2xl font-semibold tracking-tight", className);

export const p = (className?: string | undefined) =>
  cn("leading-7 [&:not(:first-child)]:mt-6", className);
