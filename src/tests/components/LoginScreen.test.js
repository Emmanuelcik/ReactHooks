import { mount } from "enzyme";
import { LoginScreen } from "../../components/09-useConext/LoginScreen";
import { UserContext } from "../../components/09-useConext/UserContext";



describe("Testing LoginScreen", () => {


    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={ {
            setUser,
        }}>

            <LoginScreen /> 
        </UserContext.Provider>  
    );
    //wrapper 
    test("should match the snapshot", ()=> {

        expect(wrapper).toMatchSnapshot();
    });

    test("Should execute setUser",( ) => {

        // wrapper.find("button").simulate("click", setUser);

        wrapper.find("button").prop("onClick")();

        expect(setUser).toHaveBeenCalledWith({
            id: 1,
            nombre: "nose",
        });
    });
})