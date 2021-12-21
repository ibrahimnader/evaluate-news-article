import {validateUrl} from '../client/js/helpers'
import "babel-polyfill"

describe('Test, validateUrl is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateUrl).toBe("function");
    });
});

describe('Test, validateUrl for valid url' , () => {
    var url = "https://www.newscientist.com/article/2302533-microplastics-in-french-mountain-air-may-have-crossed-atlantic-ocean";
    test('should return true', async () => {
        const response = validateUrl(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});