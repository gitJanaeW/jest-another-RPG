const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

// jest.mock mocks/replaces the Potion constructor's implimentation (__tests__/Potion.test.js) with our faked data (__mock__/Potion.js)
jest.mock('../lib/Potion');

test('create a player object', () => {
    // This const is what we're testing. The "expects" below refer to what the expected info of the test will be
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});