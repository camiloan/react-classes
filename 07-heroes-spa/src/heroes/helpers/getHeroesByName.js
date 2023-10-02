import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  name = name.toLocaleLowerCase().trim();
//   console.log('getHeroesByName');
  if (name.length === 0) return [];
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
