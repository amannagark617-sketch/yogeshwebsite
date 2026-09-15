"use client";

import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-7 text-[13px] text-muted-foreground">
        <span>© {new Date().getFullYear()} Yogesh Rawat. All rights reserved.</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground transition-colors hover:text-primary"
        >
          <ArrowUp size={16} />
          Back to top
        </button>
      </div>
    </footer>
  );
}
