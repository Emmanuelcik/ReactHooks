import { mount } from "enzyme";
import { HomeScreen } from "../../components/09-useConext/HomeScreen";
import { UserContext } from "../../components/09-useConext/UserContext";


describe("Testing HomeScreen", () => {

    const user = {
        name: "Emm",
        email: "no se",
    }

    const wrapper = mount(
        <UserContext.Provider value={ {
            user,
        }}>

            <HomeScreen /> 
        </UserContext.Provider> 
    );
        
    test("Should match the snapshot", () => {

        expect(wrapper).toMatchSnapshot();
    })
});