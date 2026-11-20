import type { HTMLAttributes, LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function FieldGroup({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="field-group" className={cn("flex flex-col gap-5", className)} {...props} />;
}

export function Field({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="field" className={cn("flex flex-col gap-2", className)} {...props} />;
}

export function FieldLabel({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label data-slot="field-label" className={cn("text-sm font-medium text-foreground", className)} {...props} />;
}

export function FieldDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p data-slot="field-description" className={cn("text-xs leading-6 text-muted-foreground", className)} {...props} />;
}
