import { act } from "@testing-library/react";
import { shallow, mount } from "enzyme"
import { TodoApp } from "../../components/08-useReducer/TodoApp"
import { demoTodos } from "../fixtures/demoTodos";



describe("testing TodoApp", ()=> {

    const wrapper = shallow( <TodoApp />);
    Storage.prototype.setItem = jest.fn();
    
    test("Should match the snapshot", () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test("should add a TODO", () => {
        const wrapper = mount( <TodoApp /> );
        
        act( () => {
            wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
            wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);

        });

        expect(wrapper.find("h1").text().trim()).toBe("Todo App (2)");
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    })
})