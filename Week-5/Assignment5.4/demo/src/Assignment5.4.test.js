var msg = require('./Assignment5.4.js');

test('test the addition Operation', ()=>{

    expect(msg.sum(2,2)).toBe(4);
    expect(msg.sum(2,2)).toBeGreaterThan(3);

})


test('test the substraction Operation', ()=>{

    expect(msg.diff(3,2)).toBe(1);
    expect(msg.diff(3,2)).toBeLessThan(3);

})


test('test the product Operation', ()=>{

    expect(msg.product(3,2)).toBe(6);
    expect(msg.product(3,2)).toBeLessThan(7);

})