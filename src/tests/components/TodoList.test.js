import { shallow } from "enzyme";
import { TodoList } from "../../components/08-useReducer/TodoList";
import { demoTodos } from "../fixtures/demoTodos";



describe("Pruebas en TodoList", () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos={demoTodos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    )
    test("Should match the snapshot ", ()=> {
        
        expect(wrapper).toMatchSnapshot();
    });
    test("Should has 2 todoListItems", ()=> {
        
        expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);

        expect(wrapper.find("TodoListItem").at(0).prop("handleDelete") ).toEqual( expect.any(Function));
    });
});