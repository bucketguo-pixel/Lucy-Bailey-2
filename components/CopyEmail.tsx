"use client";
import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setOpen(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setOpen(false), 1500);
    } catch {
      window.prompt("Copy email:", email);
    }
  }

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={copy}
        className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
      >
        Copy email
      </button>
      {open ? (
        <div className="absolute left-0 top-11 rounded-2xl border soft-line bg-white px-3 py-2 text-xs text-slate-700 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
          Copied to clipboard
        </div>
      ) : null}
    </div>
  );
}
