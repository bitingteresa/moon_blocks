export const initIncenseCursor = (container) => {
    const cursor = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    cursor.setAttribute('viewBox', '0 0 12 80');
    cursor.setAttribute('width', '12');
    cursor.setAttribute('height', '80');
    cursor.innerHTML = `
  <circle cx="6" cy="4" r="1" fill="#ff6600" opacity="0.9"/>
  <circle cx="6" cy="4" r="3" fill="#ff4400" opacity="0.3"/>
  <rect x="5" y="6" width="2" height="60" rx="1" fill="#8B4513"/>
  <rect x="4.5" y="50" width="3" height="16" rx="1" fill="#cc0000"/>
`;
    cursor.style.cssText = 'position:fixed;pointer-events:none;z-index:2;display:none';

    container.appendChild(cursor);
    container.style.position = 'relative';

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const particles = [];
    const resize = () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    };

    resize();
    new ResizeObserver(resize).observe(container);

    const spawn = (x, y) => {
        const r = container.getBoundingClientRect();
        particles.push({
            x: x - r.left,
            y: y - r.top,
            size: 8 + Math.random() * 10,
            drift: (Math.random() - 0.5) * 1.5,
            speed: 0.8 + Math.random() * 0.8,
            opacity: 0.5
        });
    };

    (function tick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];

            p.y -= p.speed;
            p.x += p.drift;
            p.size *= 1.015;
            p.opacity -= 0.008;

            if (p.opacity <= 0) {
                particles.splice(i, 1);
                continue;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(242,203,223,${p.opacity})`;
            ctx.filter = `blur(${p.size * 0.4}px)`;
            ctx.fill();
        }

        requestAnimationFrame(tick);
    })();

    let lastX = 0, lastY = 0;
    container.addEventListener('mousemove', (e) => {
        const minPxMoved = 15;
        cursor.style.left = e.clientX - 6 + 'px';
        cursor.style.top = e.clientY - 4 + 'px';
        cursor.style.display = 'block';
        document.body.style.cursor = 'none';
        const dx = e.clientX - lastX, dy = e.clientY - lastY;

        // pythagorean theorem
        if (Math.sqrt(dx * dx + dy * dy) < minPxMoved) return;

        lastX = e.clientX; lastY = e.clientY;
        for (let i = 0; i < 3; i++) {
            spawn(e.clientX, e.clientY + 4);
        }
    });

    container.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
        document.body.style.cursor = '';
    });

    container.addEventListener('touchmove', (e) => {
        const t = e.touches[0];
        for (let i = 0; i < 3; i++) {
            spawn(t.clientX, t.clientY);
        }
    }, { passive: true });
};