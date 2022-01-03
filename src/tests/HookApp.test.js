import {HookApp} from "../HookApp";
import {shallow} from "enzyme";
import "../setupTests";

describe("Testing <HookApp/>", () => {

    test("Should't have any errors", ()=> {
        const wrapper = shallow( <HookApp /> );
        
        expect(wrapper).toMatchSnapshot();
    })
})