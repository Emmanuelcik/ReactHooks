
import { todoReducer } from "../../components/08-useReducer/todoReducer";
import "../../setupTests";
import { demoTodos } from "../fixtures/demoTodos";



describe("testing todoReducer", () => {
    
    test("should return the default state",() => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });
    test("should add a todo",() => {
        const action= {
            type: "add",
            payload: {
                id: 3,
                desc: "aprender node",
                done: false,
            }
        }
        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
    });
    test("should delete a TODO",() => {
        const action= {
            type: "delete",
            payload: 2
        }
        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
    });
    test("should change a TODO",() => {
        const action= {
            type: "completed",
            payload: 2
        }
        const state = todoReducer(demoTodos, action);

        expect(state[1].done).toBe(true);
        expect(state[0].done).toBe(false);
    });
});