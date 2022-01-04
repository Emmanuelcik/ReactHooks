import React from 'react';
import {shallow} from 'enzyme';
import { MultipleCustomHook } from '../../components/03-examples/MultipleCustomHook';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch');

describe("Testing the component MultipleCustomHooks", () =>{

    test("should be correctly mounted", () => {
        const wrapper = shallow( <MultipleCustomHook />);

        useFetch.mockReturnValue({
            data: null,
            loading: true,
        });


        expect(wrapper).toMatchSnapshot();
    });

    test("should get all info", () => {

        useFetch.mockReturnValue({
            data: [{
                author: "Emm",
                quote: "Hello world",
            }],
            loading: false,
        });
        
        const wrapper = shallow( <MultipleCustomHook />);
        expect(wrapper.find(".alerta").exists() ).toBe(false);
        // expect(wrapper.find(".mb-0").text().trim() ).toBe("Hello world");

    })
    
})