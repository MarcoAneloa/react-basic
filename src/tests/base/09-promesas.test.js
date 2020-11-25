import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Prueba del archivo 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un Heroe por su id async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })
    });

    test('getHeroeByIdAsync debe retornar un error si el id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    });
});