const Stack = require('../stack.js');

describe('', () => {

    let stack;
    beforeEach(() => {
        stack = new Stack();
    })

    it('push', () => {
        stack.push(2);
        stack.push(3);
        expect(stack.print()).toEqual([2,3]);
    });

    it('push - pop', () => {
        stack.push(2);
        stack.pop();
        stack.push(3);
        expect(stack.print()).toEqual([3]);
    });

    it('pop before push', () => {
        expect(stack.pop()).toBe('stack is empty! push first')
    })
})