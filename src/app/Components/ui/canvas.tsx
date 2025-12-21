class Oscillator {
    phase: number;
    offset: number;
    frequency: number;
    amplitude: number;
    private currentValue: number = 0;

    constructor(config: {
        phase?: number;
        offset?: number;
        frequency?: number;
        amplitude?: number;
    } = {}) {
        this.phase = config.phase || 0;
        this.offset = config.offset || 0;
        this.frequency = config.frequency || 0.001;
        this.amplitude = config.amplitude || 1;
    }

    update(): number {
        this.phase += this.frequency;
        this.currentValue = this.offset + Math.sin(this.phase) * this.amplitude;
        return this.currentValue;
    }

    value(): number {
        return this.currentValue;
    }
}

class Line {
    spring: number;
    friction: number;
    nodes: Node[];

    constructor(config: { spring?: number } = {}) {
        this.spring = (config.spring || 0) + 0.1 * Math.random() - 0.05;
        this.friction = E.friction + 0.01 * Math.random() - 0.005;
        this.nodes = [];

        for (let n = 0; n < E.size; n++) {
            const t = new Node();
            // @ts-ignore
            t.x = pos.x;
            // @ts-ignore
            t.y = pos.y;
            this.nodes.push(t);
        }
    }

    update() {
        let e = this.spring;
        let t = this.nodes[0];
        // @ts-ignore
        t.vx += (pos.x - t.x) * e;
        // @ts-ignore
        t.vy += (pos.y - t.y) * e;

        for (let i = 0, a = this.nodes.length; i < a; i++) {
            t = this.nodes[i];
            if (0 < i) {
                const n = this.nodes[i - 1];
                t.vx += (n.x - t.x) * e;
                t.vy += (n.y - t.y) * e;
                t.vx += n.vx * E.dampening;
                t.vy += n.vy * E.dampening;
            }
            t.vx *= this.friction;
            t.vy *= this.friction;
            t.x += t.vx;
            t.y += t.vy;
            e *= E.tension;
        }
    }

    draw() {
        let n = this.nodes[0].x;
        let i = this.nodes[0].y;
        // @ts-ignore
        ctx.beginPath();
        // @ts-ignore
        ctx.moveTo(n, i);

        for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
            const e = this.nodes[a];
            const t = this.nodes[a + 1];
            n = 0.5 * (e.x + t.x);
            i = 0.5 * (e.y + t.y);
            // @ts-ignore
            ctx.quadraticCurveTo(e.x, e.y, n, i);
        }

        const a = this.nodes.length - 2;
        const e = this.nodes[a];
        const t = this.nodes[a + 1];
        // @ts-ignore
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
        // @ts-ignore
        ctx.stroke();
        // @ts-ignore
        ctx.closePath();
    }
}

// Throttle mousemove for better performance
let lastMoveTime = 0;
const throttleDelay = 16; // ~60fps max

// @ts-ignore
function onMousemove(e) {
    function o() {
        lines = [];
        for (let e = 0; e < E.trails; e++)
            lines.push(new Line({ spring: 0.45 + (e / E.trails) * 0.025 }));
    }
    // @ts-ignore
    function c(e) {
        const now = Date.now();
        if (now - lastMoveTime < throttleDelay) return;
        lastMoveTime = now;

        e.touches
            ? // @ts-ignore
            ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
            : // @ts-ignore
            ((pos.x = e.clientX), (pos.y = e.clientY)),
            e.preventDefault();
    }
    // @ts-ignore
    function l(e) {
        // @ts-ignore
        1 == e.touches.length &&
            ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
    }
    document.removeEventListener("mousemove", onMousemove),
        document.removeEventListener("touchstart", onMousemove),
        document.addEventListener("mousemove", c, { passive: false }),
        document.addEventListener("touchmove", c, { passive: false }),
        document.addEventListener("touchstart", l, { passive: true }),
        c(e),
        o(),
        render();
}

// Frame rate limiting
let lastFrameTime = 0;
const frameDelay = 1000 / 30; // 30fps cap

function render() {
    // @ts-ignore
    if (ctx.running) {
        const now = Date.now();
        const elapsed = now - lastFrameTime;

        // Skip frame if not enough time has passed
        if (elapsed < frameDelay) {
            window.requestAnimationFrame(render);
            return;
        }

        lastFrameTime = now;

        // @ts-ignore
        ctx.globalCompositeOperation = "source-over";
        // @ts-ignore
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // @ts-ignore
        ctx.globalCompositeOperation = "lighter";
        // @ts-ignore
        ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.025)";
        // @ts-ignore
        ctx.lineWidth = 10;
        for (var e, t = 0; t < E.trails; t++) {
            // @ts-ignore
            (e = lines[t]).update();
            e.draw();
        }
        // @ts-ignore
        ctx.frame++;
        window.requestAnimationFrame(render);
    }
}

function resizeCanvas() {
    // @ts-ignore
    ctx.canvas.width = window.innerWidth - 20;
    // @ts-ignore
    ctx.canvas.height = window.innerHeight;
}

interface Position {
    x: number;
    y: number;
}

// @ts-ignore
var ctx,
    // @ts-ignore
    f,
    e = 0,
    pos: Position = { x: 0, y: 0 },
    // @ts-ignore
    lines = [],
    E = {
        debug: true,
        friction: 0.5,
        trails: 15,
        size: 20,
        dampening: 0.025,
        tension: 0.99,
    };
class Node {
    x: number = 0;
    y: number = 0;
    vy: number = 0;
    vx: number = 0;
}

export const renderCanvas = function () {
    // @ts-ignore
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.running = true;
    ctx.frame = 1;
    f = new Oscillator({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
    });

    // Debounce resize event for better performance
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 150);
    };

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", debouncedResize);
    window.addEventListener("focus", () => {
        // @ts-ignore
        if (!ctx.running) {
            // @ts-ignore
            ctx.running = true;
            render();
        }
    });
    window.addEventListener("blur", () => {
        // @ts-ignore
        ctx.running = false;
    });
    resizeCanvas();
};
