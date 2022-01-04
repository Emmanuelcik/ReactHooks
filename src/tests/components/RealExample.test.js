import "../../setupTests";
import {shallow} from "enzyme";
import {ExampleRef} from "../../components/04-useRef/ExampleRef";

describe("Testing the component ExampleRef", () => {
    
    const wrapper = shallow( <ExampleRef /> );

    test("Should match the snapshot", () => {

        expect( wrapper).toMatchSnapshot();
        expect( wrapper.find("MultipleCustomHook").exists()).toBe(false);
        
    });
    test("Should match the snapshot", () => {
        
        wrapper.find("button").simulate("click");
        expect( wrapper.find("MultipleCustomHook").exists()).toBe(true);
    });
})