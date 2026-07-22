import React from "react";

interface DottedWorldMapProps {
  className?: string;
  dotColor?: string;
  dotOpacity?: number;
}

export default function DottedWorldMap({
  className = "",
  dotColor = "#E79923",
  dotOpacity = 0.08
}: DottedWorldMapProps) {
  // We'll define a grid of dots using normalized coordinates [0, 1]
  const cols = 110;
  const rows = 45;

  const dots: { cx: number; cy: number; r: number }[] = [];

  function isLand(x: number, y: number): boolean {
    // 1. Greenland
    const dxGreenland = (x - 0.40) / 0.07;
    const dyGreenland = (y - 0.14) / 0.08;
    if (dxGreenland * dxGreenland + dyGreenland * dyGreenland < 1) {
      return y < 0.20 && (x - 0.40) > (y - 0.20) * 0.4;
    }

    // 2. North America
    // Main bulk
    const dxNA1 = (x - 0.22) / 0.13;
    const dyNA1 = (y - 0.30) / 0.11;
    if (dxNA1 * dxNA1 + dyNA1 * dyNA1 < 1) return true;

    // Alaska / NW Canada
    const dxNA2 = (x - 0.10) / 0.09;
    const dyNA2 = (y - 0.22) / 0.07;
    if (dxNA2 * dxNA2 + dyNA2 * dyNA2 < 1) return true;

    // Florida / Central America
    const dxNA3 = (x - 0.26) / 0.04;
    const dyNA3 = (y - 0.45) / 0.08;
    if (dxNA3 * dxNA3 + dyNA3 * dyNA3 < 1 && x < 0.28 && y > 0.36) return true;

    // 3. South America
    // Upper bulk
    const dxSA1 = (x - 0.30) / 0.075;
    const dySA1 = (y - 0.58) / 0.09;
    if (dxSA1 * dxSA1 + dySA1 * dySA1 < 1) return true;

    // Lower tapering tail
    const dxSA2 = (x - 0.32) / 0.035;
    const dySA2 = (y - 0.74) / 0.15;
    if (dxSA2 * dxSA2 + dySA2 * dySA2 < 1 && y < 0.88) {
      const taper = (0.88 - y) / 0.14;
      if (Math.abs(x - 0.31) < 0.035 * taper) return true;
    }

    // 4. Africa
    // Northern bulge
    const dxAf1 = (x - 0.53) / 0.095;
    const dyAf1 = (y - 0.51) / 0.085;
    if (dxAf1 * dxAf1 + dyAf1 * dyAf1 < 1) return true;

    // Southern tail
    const dxAf2 = (x - 0.57) / 0.05;
    const dyAf2 = (y - 0.68) / 0.14;
    if (dxAf2 * dxAf2 + dyAf2 * dyAf2 < 1 && y < 0.83) {
      const taper = (0.83 - y) / 0.15;
      if (Math.abs(x - 0.57) < 0.05 * taper) return true;
    }

    // Madagascar
    const dxMad = (x - 0.635) / 0.015;
    const dyMad = (y - 0.72) / 0.04;
    if (dxMad * dxMad + dyMad * dyMad < 1) return true;

    // 5. Eurasia (Europe & Northern Asia)
    // Siberia / Northern Russia
    const dxAs1 = (x - 0.75) / 0.21;
    const dyAs1 = (y - 0.23) / 0.13;
    if (dxAs1 * dxAs1 + dyAs1 * dyAs1 < 1) return true;

    // Europe core
    const dxEu1 = (x - 0.51) / 0.08;
    const dyEu1 = (y - 0.31) / 0.08;
    if (dxEu1 * dxEu1 + dyEu1 * dyEu1 < 1 && y > 0.21) return true;

    // Southern Europe / Mediterranean
    const dxEu2 = (x - 0.49) / 0.04;
    const dyEu2 = (y - 0.39) / 0.03;
    if (dxEu2 * dxEu2 + dyEu2 * dyEu2 < 1) return true;

    // Scandinavia
    const dxScand = (x - 0.48) / 0.035;
    const dyScand = (y - 0.23) / 0.06;
    if (dxScand * dxScand + dyScand * dyScand < 1) return true;

    // 6. Eastern & Southern Asia
    // China / East Asia
    const dxAs2 = (x - 0.81) / 0.10;
    const dyAs2 = (y - 0.39) / 0.09;
    if (dxAs2 * dxAs2 + dyAs2 * dyAs2 < 1) return true;

    // India
    const dxInd = (x - 0.71) / 0.04;
    const dyInd = (y - 0.48) / 0.06;
    if (dxInd * dxInd + dyInd * dyInd < 1 && x > 0.68) {
      const taper = (0.54 - y) / 0.06;
      if (Math.abs(x - 0.71) < 0.04 * taper) return true;
    }

    // Indochina / SE Asia
    const dxIndo = (x - 0.80) / 0.04;
    const dyIndo = (y - 0.50) / 0.05;
    if (dxIndo * dxIndo + dyIndo * dyIndo < 1) return true;

    // Middle East
    const dxME = (x - 0.61) / 0.05;
    const dyME = (y - 0.44) / 0.05;
    if (dxME * dxME + dyME * dyME < 1) return true;

    // Japan
    const dxJap = (x - 0.90) / 0.012;
    const dyJap = (y - 0.34) / 0.05;
    if (dxJap * dxJap + dyJap * dyJap < 1) return true;

    // 7. Oceania
    // Australia
    const dxAus = (x - 0.85) / 0.08;
    const dyAus = (y - 0.72) / 0.075;
    if (dxAus * dxAus + dyAus * dyAus < 1) return true;

    // New Zealand
    const dxNZ = (x - 0.92) / 0.014;
    const dyNZ = (y - 0.80) / 0.04;
    if (dxNZ * dxNZ + dyNZ * dyNZ < 1) return true;

    // Indonesian Islands (Scattered points)
    const dxIsl1 = (x - 0.82) / 0.06;
    const dyIsl1 = (y - 0.59) / 0.04;
    if (dxIsl1 * dxIsl1 + dyIsl1 * dyIsl1 < 1) {
      // Simulate scattered islands by only keeping points where sine function is positive
      return Math.sin(x * 120) * Math.cos(y * 120) > 0.15;
    }

    return false;
  }

  // Generate staggered/honeycomb grid coordinates
  for (let r = 0; r < rows; r++) {
    const cy = (r + 0.5) / rows;
    
    // Shift alternate rows for pointillist staggered texture
    const shift = (r % 2 === 0) ? 0.5 : 0;
    
    for (let c = 0; c < cols; c++) {
      const cx = (c + shift) / cols;

      // Exclude extreme margins to keep it centered
      if (cx > 0.04 && cx < 0.96 && cy > 0.06 && cy < 0.94) {
        if (isLand(cx, cy)) {
          // Add a minor variation in radius for organic pointillist texture
          const pseudoRandomSeed = Math.sin(cx * 987 + cy * 123);
          const rSize = 1.3 + (pseudoRandomSeed * 0.3); // size range 1.0 to 1.6 px
          
          dots.push({
            cx: cx * 1000,
            cy: cy * 500,
            r: rSize
          });
        }
      }
    }
  }

  return (
    <div className={`pointer-events-none select-none relative ${className}`}>
      <svg
        viewBox="0 0 1000 500"
        width="100%"
        height="100%"
        className="w-full h-full opacity-[0.99]"
        style={{ color: dotColor }}
      >
        <g fill="currentColor" opacity={dotOpacity}>
          {dots.map((dot, index) => (
            <circle
              key={index}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              className="transition-opacity duration-300"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
