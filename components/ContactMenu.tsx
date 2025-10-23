"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Instagram, Facebook } from "lucide-react";

export default function ContactMenu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current || !btnRef.current) return;
      if (
        !menuRef.current.contains(e.target as Node) &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      {/* Tombol utama */}
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition-all hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10"
      >
        Hubungi Saya
      </button>

      {/* Popup */}
      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-56 rounded-2xl border border-neutral-300 bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/90"
        >
          <p className="mb-3 text-xs text-neutral-600 dark:text-neutral-400">
            Terhubung dengan saya di:
          </p>

          <div className="flex justify-around">
            {/* Email */}
            <a
              href="mailto:diditaditia333@gmail.com"
              className="flex flex-col items-center gap-1 text-neutral-700 hover:text-sky-600 dark:text-neutral-300 dark:hover:text-sky-400 transition"
              title="Email"
            >
              <Mail className="h-6 w-6" />
              <span className="text-[10px]">Email</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/diditaditia66"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-neutral-700 hover:text-gray-900 dark:text-neutral-300 dark:hover:text-white transition"
              title="GitHub"
            >
              <Github className="h-6 w-6" />
              <span className="text-[10px]">GitHub</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aditiaadidit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-neutral-700 hover:text-pink-500 dark:text-neutral-300 dark:hover:text-pink-400 transition"
              title="Instagram"
            >
              <Instagram className="h-6 w-6" />
              <span className="text-[10px]">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1BBiSMeSBv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400 transition"
              title="Facebook"
            >
              <Facebook className="h-6 w-6" />
              <span className="text-[10px]">Facebook</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
