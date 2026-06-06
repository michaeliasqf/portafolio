"use client";

import { useCallback, useState } from "react";

type TiltStyle = {
  transform: string;
  "--shine-x": string;
  "--shine-y": string;
};

const neutralTilt: TiltStyle = {
  transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)",
  "--shine-x": "50%",
  "--shine-y": "50%"
};

export function useTiltController(strength = 10) {
  const [style, setStyle] = useState<TiltStyle>(neutralTilt);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * strength;
      const rotateX = ((0.5 - y / rect.height) * strength);

      setStyle({
        transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
          2
        )}deg) translateY(-6px)`,
        "--shine-x": `${((x / rect.width) * 100).toFixed(0)}%`,
        "--shine-y": `${((y / rect.height) * 100).toFixed(0)}%`
      });
    },
    [strength]
  );

  const onPointerLeave = useCallback(() => setStyle(neutralTilt), []);

  return { style, onPointerMove, onPointerLeave };
}
