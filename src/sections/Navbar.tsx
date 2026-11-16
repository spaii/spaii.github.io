import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex w-full max-w-full flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3 font-mono text-[13px]"
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
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
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
        </div>
      </nav>
    </header>
  );
}
