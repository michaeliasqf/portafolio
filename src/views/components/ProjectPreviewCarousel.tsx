"use client";

import Image from "next/image";
import type { Project } from "@/models/portfolio";

type ProjectPreviewCarouselProps = {
  project: Project;
};

export function ProjectPreviewCarousel({ project }: ProjectPreviewCarouselProps) {
  return (
    <div className="project-image-carousel" aria-label={`Previsualización de ${project.title}`}>
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
            animationDelay: `${index * 3}s`
          }}
        />
      ))}
      <div className="project-image-label">
        <span>{project.preview.eyebrow}</span>
        <strong>{project.preview.title}</strong>
      </div>
    </div>
  );
}
