import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prueba componente de "<CounterApp/>"', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const valor = wrapper.find('h2').text();
        expect(valor).toBe('100');
    });

    test('Debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('Debe de decrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('Debe colocar el valor por defecto con el btn reset', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('10');
    });

});