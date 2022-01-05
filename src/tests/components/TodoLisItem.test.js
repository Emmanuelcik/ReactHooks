import { shallow }  from "enzyme";
import {TodoListItem} from "../../components/08-useReducer/TodoListItem";
import {demoTodos} from "../fixtures/demoTodos";

describe("Testing en TodoListItem", () => {

    const handleToggle = jest.fn();

    const handleDelete = jest.fn();
    
    const wrapper = shallow( <TodoListItem 
            todo={demoTodos[1]} 
            index={1} 
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />);
    
    test("Should call the handleDelete function", () => {
        
        wrapper.find("button").simulate("click");
        expect(handleDelete ).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test("Should call the handleToggle function", () => {
        wrapper.find("p").simulate("click");
        expect(handleToggle ).toHaveBeenCalledWith(demoTodos[1].id);
    });

})