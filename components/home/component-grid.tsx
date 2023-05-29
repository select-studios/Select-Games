"use client";

import Tooltip from "@/components/shared/hoverinfo";

export default function ComponentGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
        <div className="flex w-40 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
          <p className="text-gray-600">Tooltip</p>
        </div>
      </Tooltip>
    </div>
  );
}
