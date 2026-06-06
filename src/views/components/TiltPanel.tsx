"use client";

import type { CSSProperties, ReactNode } from "react";
import clsx from "clsx";
import { useTiltController } from "@/controllers/useTiltController";

type TiltPanelProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function TiltPanel({ children, className, strength = 9 }: TiltPanelProps) {
  const tilt = useTiltController(strength);

  return (
    <article
      className={clsx("tilt-panel", className)}
      style={tilt.style as CSSProperties}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
    >
      {children}
    </article>
  );
}
