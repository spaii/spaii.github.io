import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex w-full max-w-full items-center justify-between gap-x-6 px-4 py-3 font-mono text-[13px]"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 font-medium text-foreground"
        >
          {profile.photo && (
            <img
              src={profile.photo}
              alt=""
              className="size-8 rounded-md border object-cover"
            />
          )}
          {profile.handle}
        </a>

        <div className="flex items-center gap-1">
          {/* Menu untuk layar lebar (laptop) */}
          <ul className="hidden flex-wrap gap-x-4 gap-y-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={
              theme === "dark" ? "Ganti ke tema terang" : "Ganti ke tema gelap"
            }
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>

          {/* Tombol menu untuk HP */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Daftar menu untuk HP */}
      {open && (
        <div id="menu-mobile" className="border-t lg:hidden">
          <ul className="mx-auto flex flex-col px-4 py-1 font-mono text-[13px]">
            {navItems.map((item) => (
              <li key={item.id} className="border-b last:border-b-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
