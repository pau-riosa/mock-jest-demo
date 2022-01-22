async function getHero(name) {
  try {
    const result = await fetch(`https://api.genshin.dev/characters/${name}`);
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }
}

export { getHero };
