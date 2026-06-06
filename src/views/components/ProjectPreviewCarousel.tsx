"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/models/portfolio";

type ProjectPreviewCarouselProps = {
  project: Project;
};

export function ProjectPreviewCarousel({ project }: ProjectPreviewCarouselProps) {
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  function toggleMobilePreview() {
    if (!window.matchMedia("(max-width: 900px)").matches) {
      return;
    }

    setIsPreviewActive((current) => !current);
  }

  return (
    <button
      type="button"
      className={`project-image-carousel ${isPreviewActive ? "is-preview-active" : ""}`}
      onClick={toggleMobilePreview}
      aria-label={`Previsualizacion de ${project.title}`}
      aria-pressed={isPreviewActive}
    >
      {project.previewImages.map((image, index) => (
        <Image
          key={image.src}
          className="project-image-slide"
          src={image.src}
          alt={image.alt}
          fill
          unoptimized
          quality={100}
          sizes="(max-width: 900px) calc(100vw - 64px), 420px"
          style={{
            animationDelay: `${index * 3.5}s`
          }}
        />
      ))}
      <div className="project-image-label">
        <span>{project.preview.eyebrow}</span>
        <strong>{project.preview.title}</strong>
      </div>
    </button>
  );
}
