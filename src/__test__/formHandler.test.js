import handleSubmit  from '../client/js/formHandler'
import "babel-polyfill"


describe('Test,  function handleSubmit exist' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});
describe('Test, handleSubmit is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});