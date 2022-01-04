import "../../setupTests";
import {renderHook, act} from "@testing-library/react-hooks";
import {useForm} from "../../hooks/useForm";

describe("Testing useFomr", ()=> {

    const initialForm = {
        nombre: "Emm",
        email: "correo@correo.com",
    };

    test("Should return the form", () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");
    });
    test("Should change the form", () => {
        const e = {
            target: {
                value: "Eduardo",
                name: "nombre"
            } 
        }
        const {result} = renderHook( () => useForm(initialForm));
        const [ , handleInputChange] = result.current;
        act( () => {
            handleInputChange(e);
        });
        const [values] = result.current;
        expect(values).toEqual({...initialForm, nombre: "Eduardo"})
    });
    test("Should reset the form", () => {
        const e = {
            target: {
                value: "Eduardo",
                name: "nombre"
            }
        }
        const {result} = renderHook( () => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;
        act( () => {
            handleInputChange(e);
            reset();
        });
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
})