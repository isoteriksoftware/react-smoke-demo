export const getSmokeTextures = () => {
  const smokeTextures = ["default.png"];

  for (let i = 0; i <= 24; i++) {
    const suffix = String(i).padStart(2, "0");
    smokeTextures.push(`blackSmoke${suffix}.png`);
  }

  for (let i = 0; i <= 8; i++) {
    const suffix = String(i).padStart(2, "0");
    smokeTextures.push(`explosion${suffix}.png`);
  }

  for (let i = 0; i <= 8; i++) {
    const suffix = String(i).padStart(2, "0");
    smokeTextures.push(`fart${suffix}.png`);
  }

  for (let i = 0; i <= 8; i++) {
    const suffix = String(i).padStart(2, "0");
    smokeTextures.push(`flash${suffix}.png`);
  }

  for (let i = 0; i <= 24; i++) {
    const suffix = String(i).padStart(2, "0");
    smokeTextures.push(`whitePuff${suffix}.png`);
  }

  return smokeTextures;
};
