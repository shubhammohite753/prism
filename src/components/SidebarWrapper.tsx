"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function SidebarWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <div
        className={`lg:hidden fixed top-4 left-4 z-[60] transition-opacity duration-300 ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-full bg-white dark:bg-gray-900 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-64 h-screen z-40 bg-white dark:bg-gray-800">
        <Sidebar />
      </aside>

      {/* Mobile overlay and sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      >
        {/* Dark overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            open ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Slide-in sidebar */}
        <aside
          className={`min-h-0 flex-grow fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 overflow-y-auto ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end px-4 py-2">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <Sidebar />
        </aside>
      </div>
    </>
  );
}
