"use client";

import { BrandModel } from "@/models/BrandModel";

const Brand: React.FC<BrandModel> = ({ title, hexColor, path }) => {
  return (
    <div className="brand-container">
      <svg
        className="brand"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={(e) => (e.currentTarget.style.fill = hexColor)}
        onMouseLeave={(e) => (e.currentTarget.style.fill = "")}
      >
        <title>{title}</title>
        {path}
      </svg>
      <span className="brand-title">{title}</span>
    </div>
  );
};

export { Brand };
