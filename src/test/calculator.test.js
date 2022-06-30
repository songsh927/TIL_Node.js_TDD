const Calculator = require('../calculator.js')

describe('Calculator', () => {

    let cal;
    beforeEach(() => {
        cal = new Calculator();
    })

    it('init with 0' , () =>{
        expect(cal.value).toBe(0)
    });

    it('sets', () => {
        cal.set(9);
        cal.clear();
        expect(cal.value).toBe(0)
    });

    it('add', () => {
        cal.set(1);
        cal.add(1);
        expect(cal.value).toBe(2)
    });

    it('add over 100', () => {
        expect(() => {
            cal.add(101);
        }).toThrow('Value can not be greater than 100')
    })

    it('sub', () => {
        cal.set(1);
        cal.subtract(1);
        expect(cal.value).toBe(0)
    });

    it('mul', () => {
        cal.set(1);
        cal.multiply(2);
        expect(cal.value).toBe(2)
    });

    it('div', () => {
        cal.set(2);
        cal.divide(1);
        expect(cal.value).toBe(2)
    });

    it('0/0 === NaN', () => {
        cal.set(0);
        cal.divide(0);
        expect(cal.value).toBe(NaN)
    })

    it('1/0 === Infinity', () => {
        cal.set(1);
        cal.divide(0);
        expect(cal.value).toBe(Infinity)
    })
})