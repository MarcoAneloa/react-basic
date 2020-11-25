import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Prueba en el archivo 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect(userTest).toStrictEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Marco';
        const userTest2 = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);
        expect(userTest2).toEqual(user);
    });
})