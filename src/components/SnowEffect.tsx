import { useEffect, useRef } from "react";

type Flake = {
  el: HTMLDivElement;
  x: number;
  y: number;
  speedY: number;
  drift: number;
};

function getBackgroundIsLight(): boolean {
  // Sample body background color
  const bg = getComputedStyle(document.body).backgroundColor;
  const match = bg.match(/\d+/g);
  if (!match) return false;

  const [r, g, b] = match.map(Number);

  // Perceived luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.6; // true = light background
}

export function SnowEffect({ count = 32 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flakesRef = useRef<Flake[]>([]);
  const mouseRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Text-style snow symbols (CSS color applies)
    const symbols = ["❄", "❅", "❆", "•"];

    const isLightBg = getBackgroundIsLight();

    // Decide snow color once
    const snowColor = isLightBg
      ? "rgba(59,130,246,0.85)" // blue-500
      : "rgba(255,255,255,0.9)"; // white

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");

      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.position = "fixed";
      el.style.top = "-30px";
      el.style.pointerEvents = "none";
      el.style.userSelect = "none";
      el.style.willChange = "transform";

      // ✅ Dynamic snow color
      el.style.color = snowColor;

      // Subtle softness (no glow)
      el.style.textShadow = isLightBg
        ? "0 0 3px rgba(59,130,246,0.4)"
        : "0 0 3px rgba(255,255,255,0.4)";

      el.style.fontFamily = "sans-serif";

      const size = Math.random() * 10 + 10;
      el.style.fontSize = `${size}px`;
      el.style.opacity = "0.75";

      const flake: Flake = {
        el,
        x: Math.random() * window.innerWidth,
        y: Math.random() * -window.innerHeight,
        speedY: Math.random() * 0.9 + 0.4,
        drift: Math.random() * 0.35 - 0.175,
      };

      container.appendChild(el);
      flakesRef.current.push(flake);
    }

    let rafId: number;

    const animate = () => {
      const { x: mx, y: my } = mouseRef.current;

      flakesRef.current.forEach((f) => {
        f.y += f.speedY;
        f.x += f.drift;

        const dx = f.x - mx;
        const dy = f.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 180;

        if (dist < radius) {
          const force = 1 - dist / radius;
          f.x += dx * force * 0.015;
        }

        if (f.y > window.innerHeight + 40) {
          f.y = -40;
          f.x = Math.random() * window.innerWidth;
        }

        if (f.x > window.innerWidth + 50) f.x = -50;
        if (f.x < -50) f.x = window.innerWidth + 50;

        f.el.style.transform = `translate(${f.x}px, ${f.y}px)`;
      });

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      flakesRef.current.forEach((f) => f.el.remove());
      flakesRef.current = [];
    };
  }, [count]);

  return <div ref={containerRef} className="absolute inset-0 z-[5]" />;
}
