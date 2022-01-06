import { mount } from "enzyme";
import { AppRouter } from "../../components/09-useConext/AppRouter";


describe("Testing AppRouter", () => {

    const user = {
        id: 1,
        nombre: "emm",
    }
    
    const wrapper = mount(  
        <UserContext.Provider value={ {
            user,
        }}>
            <AppRouter /> 
        </UserContext.Provider>    
    );

    test("Matching snapshot ", () => {
        expect(wrapper).toMatchSnapshot();
    });
})