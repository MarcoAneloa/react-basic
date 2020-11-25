import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas del archivo 07-deses-arr.js', () => {
    test('retornaArreglo debe retornar un arreglo', () => {

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
    });
});