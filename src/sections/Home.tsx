import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (el.paused) {
        el.volume = 0.5;
        await el.play();
      } else {
        el.pause();
      }
    } catch {
      // Browser menolak atau file musik tidak ditemukan.
    }
  }

  return (
    <section id="home" className="border-b pt-10 pb-10">
      <div
        className="flex items-start justify-between gap-5 sm:gap-8"
        data-aos="fade-up"
      >
        <div className="min-w-0 md:shrink-0">
          <p className="font-mono text-xs text-primary">Home</p>
          <p className="mt-2 font-display text-4xl leading-[1.05] font-bold tracking-tight whitespace-pre-line sm:text-7xl lg:text-7xl">
            {profile.welcome}
          </p>
        </div>

        {profile.music && (
          <div className="w-32 shrink-0 rounded-md border bg-card p-1.5 sm:w-90">
            {profile.musicCover && (
              <img
                src={profile.musicCover}
                alt=""
                className="aspect-video w-full rounded-sm object-cover"
              />
            )}
            <div className="flex items-center gap-2.5 px-1 pt-2 pb-1">
              <div className="relative shrink-0">
                {playing && (
                  <span
                    aria-hidden
                    className="absolute inset-0 animate-ping rounded-full bg-primary/30 motion-reduce:animate-none"
                  />
                )}
                <Button
                  size="icon"
                  onClick={toggle}
                  aria-pressed={playing}
                  aria-label={playing ? "Jeda musik" : "Putar musik"}
                  className="relative size-9 rounded-full sm:size-10 [&_svg]:size-4"
                >
                  {playing ? (
                    <Pause className="fill-current" />
                  ) : (
                    <Play className="ml-0.5 fill-current" />
                  )}
                </Button>
              </div>
              <div className="min-w-0">
                <p className="truncate font-mono text-[11px] text-muted-foreground">
                  {playing ? "sedang diputar" : "putar musik"}
                </p>
                {profile.musicTitle && (
                  <p className="truncate text-xs font-medium">
                    {profile.musicTitle}
                  </p>
                )}
              </div>
            </div>
            <audio
              ref={audioRef}
              src={profile.music}
              loop
              preload="none"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
