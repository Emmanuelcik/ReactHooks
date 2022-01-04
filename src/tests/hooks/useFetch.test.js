import { renderHook } from "@testing-library/react-hooks";
import "../../setupTests";
import {useFetch} from "../../hooks/useFetch";


describe("Testing useFetch", () => {

    test("should get all dafault info", () => {
        const url = "https://www.breakingbadapi.com/api/quotes/1";

        const {result } = renderHook( () => useFetch(url) );

        const {data, loading, error} = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });
    test("should get the info", async () => {
        const url = "https://www.breakingbadapi.com/api/quotes/1";

        const {result , waitForNextUpdate} = renderHook( () => useFetch(url) );
        await waitForNextUpdate();

        const {data, loading, error} = result.current;
        expect( data.length ).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
        
    });
    test("should catch the error", async () => {
        const url = "https://reqres.in/apidd/users?page=2";

        const {result , waitForNextUpdate} = renderHook( () => useFetch(url) );
        await waitForNextUpdate();
        
        const {data, loading, error} = result.current;
        
        expect( data ).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe("something went wrong");
        
    });
})