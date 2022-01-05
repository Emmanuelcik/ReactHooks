import { shallow } from "enzyme";
import { TodoAdd } from "../../components/08-useReducer/TodoAdd";


describe("Testing TodoAdd", () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow( 
        <TodoAdd 
            handleAddTodo={handleAddTodo}
        /> 
    )

    test("Should match the snapshot", () => {

        expect(wrapper).toMatchSnapshot();
    });
    test("Should not call handleAddTodo", () => {

        const formSubmit = wrapper.find("form").prop("onSubmit");

        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });
    test("Should call handleAddTodo", () => {

        const value = "Aprender react";

        wrapper.find("input").simulate("change", {
            target : {
                value,
                name: "description"
            }
        });

        const formSubmit = wrapper.find("form").prop("onSubmit");

        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        })
    });
});