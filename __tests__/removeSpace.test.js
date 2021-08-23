import { removeSpace } from '../src/client/js/removeSpace';

describe('Test removeSpace function', () => {
    test('Check that removeSpce returns a string with no spaces', () => {
        const city = "Los Angeles";
        expect(removeSpace(city)).toEqual('Los+Angeles');
    });
});