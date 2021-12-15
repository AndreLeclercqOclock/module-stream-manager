const BOARD = {
  changeColor: async ({ slug, color }) => {
    await newEvent("evntboard-tmp", {
      slug: slug,
      color: CONFIG.colors[color],
    });
  },
};
