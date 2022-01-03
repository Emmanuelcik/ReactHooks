import "../../setupTests";
import {renderHook, act} from "@testing-library/react-hooks";
import {useCounter} from "../../hooks/useCounter";

describe("testing useCounter ", () => {

    test("Should return the default values", ()=> {
        const {result} = renderHook( () => useCounter() );
        expect(result.current.counter).toBe(1);
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.reset).toBe("function");

    });
    test("Should return the default parameter", ()=> {
        const param = 10;
        const {result} = renderHook( () => useCounter(param) );
        expect(result.current.counter).toBe(param);
    
    });
    test("Should increment the counter +1", ()=> {
        const param = 10;
        const {result} = renderHook( () => useCounter(param) );
        const {increment} = result.current;
        act( () => {
            increment();
        });
        const {counter } = result.current;
        expect(counter).toBe(param +1);
    });
    test("Should decrement the counter -1", ()=> {
        const param = 10;
        const {result} = renderHook( () => useCounter(param) );
        const {decrement} = result.current;
        act( () => {
            decrement();
        });
        const {counter } = result.current;
        expect(counter).toBe(param - 1 );
    });
    test("Should reset the counter to the default param", ()=> {
        const param = 10;
        const {result} = renderHook( () => useCounter(param) );
        const {decrement, reset} = result.current;
        act( () => {
            decrement();
            reset();
        });
        const {counter } = result.current;
        expect(counter).toBe(param);
    });
})