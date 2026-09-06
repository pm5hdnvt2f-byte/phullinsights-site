export default function RouteMark() {
  return (
    <svg
      viewBox="0 0 420 340"
      className="route-mark h-auto w-full max-w-md"
      role="img"
      aria-label="An abstract diagram of a supply chain route connecting five points, tracing from origin to destination"
    >
      <g opacity="0.35">
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            x2="420"
            y1={i * 48 + 10}
            y2={i * 48 + 10}
            stroke="var(--color-line)"
            strokeWidth="1"
          />
        ))}
      </g>

      <path
        d="M20,300 C90,300 70,190 140,190 C210,190 190,60 260,60 C310,60 300,130 360,110 L400,40"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="2"
        pathLength={1}
        className="route-line"
      />

      {[
        { x: 20, y: 300, label: "Origin" },
        { x: 140, y: 190, label: "Node" },
        { x: 260, y: 60, label: "Node" },
        { x: 360, y: 110, label: "Node" },
        { x: 400, y: 40, label: "Destination" },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={i === 0 || i === 4 ? 6 : 4.5} fill="var(--color-ink)" />
          <circle cx={p.x} cy={p.y} r={i === 0 || i === 4 ? 6 : 4.5} fill="none" stroke="var(--color-brass)" strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  );
}
