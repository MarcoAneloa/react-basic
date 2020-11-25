import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Prueba en el archivo 08-imp-exp', () => {
    test('getHeroeById debe retornar un Heroe por su id', () => {
        const id = 2;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(heroe => heroe.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('getHeroeById debe retornar undefined si no hay el id', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('getHeroesByOwner debe retornar un arreglo de Heroes de DC', () => {
        const owner = 'DC';
        const heroes1 = getHeroesByOwner(owner);
        const heroesData = heroes.filter(heroe => heroe.owner === owner);
        expect(heroes1).toEqual(heroesData);
    });

    test('getHeroesByOwner debe retornar un arreglo de Heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes1 = getHeroesByOwner(owner);
        expect(heroes1.length).toBe(2);
    });
});