import React, { useEffect, useRef } from 'react';

export default function AiLiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const mouse = { x: -1000, y: -1000, radius: 220 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic Nodes & Edge Signals
    const nodeCount = Math.min(90, Math.floor((width * height) / 14000));
    const colors = ['#3FA9F5', '#7C2CEC', '#2149F0', '#B26CF0', '#38BDF8'];

    const particles = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.03 + Math.random() * 0.04,
    }));

    const dataPackets = [];

    const createPacket = (p1, p2) => {
      if (dataPackets.length >= 20) return;
      dataPackets.push({
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        progress: 0,
        speed: 0.02 + Math.random() * 0.025,
        color: p1.color,
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Tech Grid Lines
      ctx.strokeStyle = 'rgba(33, 73, 240, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Edges & Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse magnetic attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2;
          p.y -= (dy / dist) * force * 2;
        }

        // Connecting Edges
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ndx = p2.x - p.x;
          const ndy = p2.y - p.y;
          const ndist = Math.sqrt(ndx * ndx + ndy * ndy);
          const maxDist = 160;

          if (ndist < maxDist) {
            const alpha = (1 - ndist / maxDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124, 44, 236, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            if (Math.random() < 0.002) {
              createPacket(p, p2);
            }
          }
        }

        // Render Particle Node with Glow
        const currentRadius = p.radius + Math.sin(p.pulse) * 1.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render Active Live Data Pulses
      for (let k = dataPackets.length - 1; k >= 0; k--) {
        const packet = dataPackets[k];
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          dataPackets.splice(k, 1);
          continue;
        }

        const currX = packet.x1 + (packet.x2 - packet.x1) * packet.progress;
        const currY = packet.y1 + (packet.y2 - packet.y1) * packet.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#3FA9F5';
        ctx.shadowColor = '#3FA9F5';
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft AI Ambient Background Gradient Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-2/3 right-10 w-[600px] h-[600px] bg-brand-purple/15 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
