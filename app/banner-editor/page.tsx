"use client";

import { useRef, useState, useCallback, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────
interface ElementState {
  visible: boolean;
  x: number;
  y: number;
  scale: number;
  fontSize?: number;
  opacity: number;
}

type Elements = {
  logo: ElementState;
  line1: ElementState;
  line2: ElementState;
  line3: ElementState;
  subtitle: ElementState;
  btn1: ElementState;
  btn2: ElementState;
};

const PRESETS = {
  facebook: { w: 820, h: 312, label: "Facebook Banner (820x312)" },
  facebookHD: { w: 1640, h: 624, label: "Facebook Banner HD (1640x624)" },
  linkedin: { w: 1584, h: 396, label: "LinkedIn Banner (1584x396)" },
  twitter: { w: 1500, h: 500, label: "Twitter/X Header (1500x500)" },
  custom: { w: 1200, h: 630, label: "Personnalisé" },
};

const DEFAULT_ELEMENTS: Elements = {
  logo: { visible: true, x: 0, y: -20, scale: 1, opacity: 1 },
  line1: { visible: true, x: 0, y: 0, scale: 1, fontSize: 54, opacity: 1 },
  line2: { visible: true, x: 0, y: 0, scale: 1, fontSize: 54, opacity: 1 },
  line3: { visible: true, x: 0, y: 0, scale: 1, fontSize: 54, opacity: 1 },
  subtitle: { visible: true, x: 0, y: 0, scale: 1, fontSize: 18, opacity: 1 },
  btn1: { visible: true, x: 0, y: 0, scale: 1, opacity: 1 },
  btn2: { visible: true, x: 0, y: 0, scale: 1, opacity: 1 },
};

const LABELS: Record<keyof Elements, string> = {
  logo: "Logo",
  line1: '"Nous donnons vie"',
  line2: '"à vos projets les"',
  line3: '"plus ambitieux"',
  subtitle: "Sous-titre",
  btn1: "Bouton primaire",
  btn2: "Bouton ghost",
};

export default function BannerEditor() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [preset, setPreset] = useState<keyof typeof PRESETS>("facebook");
  const [canvasW, setCanvasW] = useState(PRESETS.facebook.w);
  const [canvasH, setCanvasH] = useState(PRESETS.facebook.h);
  const [bgColor, setBgColor] = useState("#1e1e1e");
  const [showParticles, setShowParticles] = useState(true);
  const [showNoise, setShowNoise] = useState(true);
  const [showGlow, setShowGlow] = useState(true);
  const [globalGap, setGlobalGap] = useState(4);
  const [elements, setElements] = useState<Elements>(DEFAULT_ELEMENTS);
  const [selected, setSelected] = useState<keyof Elements | null>(null);
  const [dragging, setDragging] = useState<keyof Elements | null>(null);
  const [dragStart, setDragStart] = useState({ mx: 0, my: 0, ex: 0, ey: 0 });
  const [zoom, setZoom] = useState(1);
  const [panelOpen, setPanelOpen] = useState(true);
  const [isCapturing, setIsCapturing] = useState(false);

  // Auto-fit zoom
  useEffect(() => {
    const fit = () => {
      const availW = window.innerWidth - (panelOpen ? 380 : 60) - 80;
      const availH = window.innerHeight - 80;
      const z = Math.min(availW / canvasW, availH / canvasH, 1.5);
      setZoom(Math.max(0.2, z));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [canvasW, canvasH, panelOpen]);

  // Preset change
  useEffect(() => {
    if (preset !== "custom") {
      setCanvasW(PRESETS[preset].w);
      setCanvasH(PRESETS[preset].h);
    }
  }, [preset]);

  const updateEl = useCallback(
    (key: keyof Elements, patch: Partial<ElementState>) => {
      setElements((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }));
    },
    []
  );

  // ─── Drag handlers ────────────────────────────────────────────────
  const onPointerDown = (key: keyof Elements, e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSelected(key);
    setDragging(key);
    setDragStart({
      mx: e.clientX,
      my: e.clientY,
      ex: elements[key].x,
      ey: elements[key].y,
    });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = (e.clientX - dragStart.mx) / zoom;
    const dy = (e.clientY - dragStart.my) / zoom;
    updateEl(dragging, { x: Math.round(dragStart.ex + dx), y: Math.round(dragStart.ey + dy) });
  };

  const onPointerUp = () => setDragging(null);

  // ─── Screenshot (html2canvas) ─────────────────────────────────────
  const takeScreenshot = async () => {
    const el = canvasRef.current;
    if (!el) return;
    const { default: html2canvas } = await import("html2canvas");
    // Remove selection outlines and zoom temporarily
    setSelected(null);
    setIsCapturing(true);
    await new Promise((r) => setTimeout(r, 200));
    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: null,
      useCORS: true,
      width: canvasW,
      height: canvasH,
      windowWidth: canvasW,
      windowHeight: canvasH,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
      ignoreElements: (element) => element.getAttribute("data-capture-ignore") === "true",
    });
    setIsCapturing(false);
    const link = document.createElement("a");
    link.download = `synaplink-banner-${canvasW}x${canvasH}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const resetAll = () => {
    setElements(DEFAULT_ELEMENTS);
    setBgColor("#1e1e1e");
    setShowParticles(true);
    setShowNoise(true);
    setShowGlow(true);
    setGlobalGap(4);
  };

  // ─── Render ────────────────────────────────────────────────────────
  const elStyle = (key: keyof Elements): React.CSSProperties => {
    const s = elements[key];
    return {
      transform: `translate(${s.x}px, ${s.y}px) scale(${s.scale})`,
      opacity: s.opacity,
      display: s.visible ? undefined : "none",
      cursor: "grab",
      outline: !isCapturing && selected === key ? "2px dashed #38bdf8" : "2px dashed transparent",
      outlineOffset: 4,
      position: "relative",
      transition: dragging === key ? "none" : "outline 0.15s",
    };
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#111",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#d4d4d4",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* ─── Panel Toggle ──────────────────────────────────────────── */}
      <button
        onClick={() => setPanelOpen(!panelOpen)}
        style={{
          position: "fixed",
          top: 12,
          left: panelOpen ? 362 : 12,
          zIndex: 100,
          background: "#252526",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#d4d4d4",
          borderRadius: 8,
          padding: "6px 10px",
          fontSize: 14,
          cursor: "pointer",
          transition: "left 0.3s",
        }}
      >
        {panelOpen ? "◀ Masquer" : "▶ Panneau"}
      </button>

      {/* ─── Left Panel ────────────────────────────────────────────── */}
      <aside
        style={{
          width: panelOpen ? 360 : 0,
          minWidth: panelOpen ? 360 : 0,
          overflow: "hidden auto",
          background: "#1a1a1a",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          padding: panelOpen ? "16px 18px 40px" : 0,
          transition: "width 0.3s, min-width 0.3s, padding 0.3s",
          flexShrink: 0,
        }}
      >
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4, marginTop: 32 }}>
          Banner Editor
        </h2>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 20 }}>
          Ajuste chaque element puis exporte en PNG
        </p>

        {/* Format */}
        <Section title="Format / Dimensions">
          <select
            value={preset}
            onChange={(e) => setPreset(e.target.value as keyof typeof PRESETS)}
            style={selectStyle}
          >
            {Object.entries(PRESETS).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <label style={miniLabel}>
              Largeur
              <input
                type="number"
                value={canvasW}
                onChange={(e) => {
                  setCanvasW(+e.target.value);
                  setPreset("custom");
                }}
                style={inputStyle}
              />
            </label>
            <label style={miniLabel}>
              Hauteur
              <input
                type="number"
                value={canvasH}
                onChange={(e) => {
                  setCanvasH(+e.target.value);
                  setPreset("custom");
                }}
                style={inputStyle}
              />
            </label>
          </div>
        </Section>

        {/* Background */}
        <Section title="Arriere-plan">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              style={{ width: 36, height: 30, border: "none", cursor: "pointer", borderRadius: 6 }}
            />
            <input
              type="text"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              style={{ ...inputStyle, flex: 1 }}
            />
          </div>
          <Toggle label="Particules animees" checked={showParticles} onChange={setShowParticles} />
          <Toggle label="Texture noise" checked={showNoise} onChange={setShowNoise} />
          <Toggle label="Halo lumineux (logo)" checked={showGlow} onChange={setShowGlow} />
        </Section>

        {/* Global spacing */}
        <Section title="Espacement global">
          <SliderRow label="Gap entre elements" value={globalGap} min={0} max={40} onChange={setGlobalGap} unit="px" />
        </Section>

        {/* Per-element controls */}
        <Section title="Elements">
          {(Object.keys(elements) as (keyof Elements)[]).map((key) => (
            <ElementControl
              key={key}
              elKey={key}
              label={LABELS[key]}
              state={elements[key]}
              isSelected={selected === key}
              onSelect={() => setSelected(key)}
              onChange={(patch) => updateEl(key, patch)}
            />
          ))}
        </Section>

        {/* Actions */}
        <Section title="Actions">
          <button onClick={takeScreenshot} style={btnPrimary}>
            Telecharger PNG
          </button>
          <button onClick={resetAll} style={{ ...btnGhost, marginTop: 8 }}>
            Reinitialiser tout
          </button>
        </Section>
      </aside>

      {/* ─── Canvas Area ───────────────────────────────────────────── */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "auto",
          padding: 40,
        }}
        onClick={() => setSelected(null)}
      >
        <div style={{ transform: isCapturing ? "none" : `scale(${zoom})`, transformOrigin: "center center" }}>
          <div
            ref={canvasRef}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            style={{
              width: canvasW,
              height: canvasH,
              background: bgColor,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.5)",
              borderRadius: 4,
            }}
          >
            {/* Particles */}
            {showParticles && <ParticlesCanvas bgColor={bgColor} />}

            {/* Noise */}
            {showNoise && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.15,
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.12) 0.45px, transparent 0.45px)",
                  backgroundSize: "3px 3px",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to bottom, transparent 0%, transparent 60%, ${bgColor}44 100%)`,
                pointerEvents: "none",
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: globalGap,
                padding: "0 24px",
                maxWidth: "100%",
              }}
            >
              {/* Logo */}
              <div
                onPointerDown={(e) => onPointerDown("logo", e)}
                style={elStyle("logo")}
              >
                {showGlow && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      opacity: 0.4,
                      background:
                        "radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(56,189,248,0.2) 50%, transparent 70%)",
                      filter: "blur(24px)",
                      transform: "scale(1.8)",
                      pointerEvents: "none",
                    }}
                  />
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/synaplink-logo.png"
                  alt="Logo Synap'Link"
                  style={{
                    width: 120 * elements.logo.scale,
                    height: 120 * elements.logo.scale,
                    objectFit: "contain",
                    filter: "drop-shadow(0 14px 34px rgba(0,0,0,0.42))",
                    position: "relative",
                  }}
                />
              </div>

              {/* Line 1 */}
              <div onPointerDown={(e) => onPointerDown("line1", e)} style={elStyle("line1")}>
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: elements.line1.fontSize,
                    color: "#d4d4d4",
                    lineHeight: 1.05,
                    whiteSpace: "nowrap",
                  }}
                >
                  Nous donnons vie
                </span>
              </div>

              {/* Line 2 */}
              <div onPointerDown={(e) => onPointerDown("line2", e)} style={elStyle("line2")}>
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: elements.line2.fontSize,
                    color: "#d4d4d4",
                    lineHeight: 1.05,
                    whiteSpace: "nowrap",
                  }}
                >
                  à vos projets les
                </span>
              </div>

              {/* Line 3 - gradient */}
              <div onPointerDown={(e) => onPointerDown("line3", e)} style={elStyle("line3")}>
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: elements.line3.fontSize,
                    lineHeight: 1.05,
                    background: "linear-gradient(270deg, #38bdf8, #7c3aed, #a855f7, #38bdf8)",
                    backgroundSize: "240% 240%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    animation: "gradientShift 8s linear infinite",
                    whiteSpace: "nowrap",
                  }}
                >
                  plus ambitieux
                </span>
              </div>

              {/* Subtitle */}
              <div onPointerDown={(e) => onPointerDown("subtitle", e)} style={elStyle("subtitle")}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: elements.subtitle.fontSize,
                    color: "#888",
                    maxWidth: 520,
                    lineHeight: 1.6,
                  }}
                >
                  Strategie, design, developpement, IA et automatisation. On transforme vos
                  objectifs business en experiences web qui convertissent vraiment.
                </p>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div onPointerDown={(e) => onPointerDown("btn1", e)} style={elStyle("btn1")}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "12px 28px",
                      borderRadius: 999,
                      background: "linear-gradient(120deg, #7c3aed 0%, #a855f7 45%, #38bdf8 100%)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      transform: `scale(${elements.btn1.scale})`,
                    }}
                  >
                    Planifier un echange
                  </span>
                </div>
                <div onPointerDown={(e) => onPointerDown("btn2", e)} style={elStyle("btn2")}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "12px 28px",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.08)",
                      color: "#d4d4d4",
                      fontWeight: 600,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      transform: `scale(${elements.btn2.scale})`,
                    }}
                  >
                    Demander un devis
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dimensions label */}
          <div
            style={{
              textAlign: "center",
              marginTop: 12,
              fontSize: 12,
              color: "#555",
            }}
          >
            {canvasW} x {canvasH}px &mdash; Zoom: {Math.round(zoom * 100)}%
          </div>
        </div>
      </main>

      {/* ─── Global keyframes ─────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Inter:wght@400;600&display=swap');
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; cursor: auto !important; }
        body { overflow: hidden; }
        input[type="range"] {
          -webkit-appearance: none;
          height: 4px;
          background: #333;
          border-radius: 2px;
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #7c3aed;
          cursor: pointer;
          border: 2px solid #1a1a1a;
        }
      `}</style>
    </div>
  );
}

// ─── Sub Components ──────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h3
        style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#666",
          marginBottom: 10,
          borderBottom: "1px solid #2a2a2a",
          paddingBottom: 6,
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 0",
        fontSize: 13,
        cursor: "pointer",
      }}
    >
      {label}
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: 36,
          height: 20,
          borderRadius: 10,
          background: checked ? "#7c3aed" : "#333",
          position: "relative",
          transition: "background 0.2s",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#fff",
            position: "absolute",
            top: 2,
            left: checked ? 18 : 2,
            transition: "left 0.2s",
          }}
        />
      </div>
    </label>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
  unit,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  unit?: string;
}) {
  return (
    <div style={{ marginBottom: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#888", marginBottom: 2 }}>
        <span>{label}</span>
        <span>
          {step && step < 1 ? value.toFixed(2) : value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step || 1}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  );
}

function ElementControl({
  elKey,
  label,
  state,
  isSelected,
  onSelect,
  onChange,
}: {
  elKey: keyof Elements;
  label: string;
  state: ElementState;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (patch: Partial<ElementState>) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: isSelected ? "rgba(124,58,237,0.12)" : "#222",
        border: `1px solid ${isSelected ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 8,
        padding: "8px 10px",
        marginBottom: 6,
        transition: "background 0.15s, border 0.15s",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
        onClick={() => {
          setOpen(!open);
          onSelect();
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              onChange({ visible: !state.visible });
            }}
            style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              border: "1px solid #444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              cursor: "pointer",
              background: state.visible ? "#7c3aed" : "transparent",
              color: "#fff",
            }}
          >
            {state.visible ? "✓" : ""}
          </div>
          <span style={{ fontSize: 13, fontWeight: 500 }}>{label}</span>
        </div>
        <span style={{ fontSize: 11, color: "#666" }}>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div style={{ marginTop: 10, paddingLeft: 26 }}>
          <SliderRow label="Position X" value={state.x} min={-400} max={400} onChange={(v) => onChange({ x: v })} unit="px" />
          <SliderRow label="Position Y" value={state.y} min={-300} max={300} onChange={(v) => onChange({ y: v })} unit="px" />
          <SliderRow label="Echelle" value={state.scale} min={0.1} max={3} step={0.05} onChange={(v) => onChange({ scale: v })} />
          <SliderRow label="Opacite" value={state.opacity} min={0} max={1} step={0.05} onChange={(v) => onChange({ opacity: v })} />
          {state.fontSize !== undefined && (
            <SliderRow label="Taille police" value={state.fontSize} min={8} max={120} onChange={(v) => onChange({ fontSize: v })} unit="px" />
          )}
          <button
            onClick={() =>
              onChange({
                x: DEFAULT_ELEMENTS[elKey].x,
                y: DEFAULT_ELEMENTS[elKey].y,
                scale: DEFAULT_ELEMENTS[elKey].scale,
                opacity: DEFAULT_ELEMENTS[elKey].opacity,
                fontSize: DEFAULT_ELEMENTS[elKey].fontSize,
              })
            }
            style={{ ...btnGhost, fontSize: 11, padding: "4px 10px", marginTop: 4, width: "auto" }}
          >
            Reset cet element
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Particles Canvas ────────────────────────────────────────────────
function ParticlesCanvas({ bgColor }: { bgColor: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const count = Math.floor((canvas.width * canvas.height) / 12000);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.25)";
        ctx.fill();
      }

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, [bgColor]);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

// ─── Styles ──────────────────────────────────────────────────────────
const selectStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: 6,
  border: "1px solid #333",
  background: "#222",
  color: "#d4d4d4",
  fontSize: 13,
  outline: "none",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "6px 8px",
  borderRadius: 6,
  border: "1px solid #333",
  background: "#222",
  color: "#d4d4d4",
  fontSize: 13,
  outline: "none",
};

const miniLabel: React.CSSProperties = {
  flex: 1,
  fontSize: 11,
  color: "#888",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

const btnPrimary: React.CSSProperties = {
  width: "100%",
  padding: "10px 16px",
  borderRadius: 8,
  border: "none",
  background: "linear-gradient(120deg, #7c3aed, #a855f7, #38bdf8)",
  color: "#fff",
  fontWeight: 600,
  fontSize: 14,
  cursor: "pointer",
};

const btnGhost: React.CSSProperties = {
  width: "100%",
  padding: "8px 16px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
  color: "#d4d4d4",
  fontWeight: 500,
  fontSize: 13,
  cursor: "pointer",
};
