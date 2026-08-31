"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
};

export default function MouseParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    let lastX = 0;
    let lastY = 0;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const particles: Particle[] = [];   

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    function createParticle(x: number, y: number,spread: number, dx: number = 0, dy: number = 0) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * spread,
        vy: (Math.random() - 0.5) * spread,
        size: Math.random() * 2 + 1,
        life: 120,
        maxLife: 120,
      });
    }

    function handleMouseMove(event: MouseEvent) {
        if (lastX === null || lastY === null) {
            lastX = event.clientX;
            lastY = event.clientY;
            return;
        }

        const dx = event.clientX - lastX;
        const dy = event.clientY - lastY;

        createParticle(
            event.clientX,
            event.clientY,
            0.3,
            dx,
            dy
        );

        lastX = event.clientX;
        lastY = event.clientY;
    }

    function handleClick(event: MouseEvent) {
        for (let i = 0; i < 25; i++) {
            createParticle(
            event.clientX,
            event.clientY,
            2
            );
        }
    }





    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;

        const alpha = particle.life / particle.maxLife;


        //具体形状和粒子质感
        ctx.beginPath();

        ctx.moveTo(particle.x, particle.y - particle.size * 2);
        ctx.lineTo(particle.x + particle.size, particle.y);
        ctx.lineTo(particle.x, particle.y + particle.size * 2);
        ctx.lineTo(particle.x - particle.size, particle.y);

        ctx.closePath();

        ctx.fillStyle = `rgba(255, 240, 180, ${alpha})`;
        ctx.fill();
        //


        if (particle.life <= 0) {   
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    }
    console.log("MouseParticles mounted");
    animate();
    console.log("MouseParticles mounted");
    return () => {
        window.removeEventListener("resize", resizeCanvas);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("click", handleClick);
    };
    
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
    />
  );
}