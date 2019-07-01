import React  from "react";
import Enzyme, { shallow } from "enzyme";
import { SearchField } from '../components/SearchField';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('SearchField component', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchField />);
    expect(wrapper.exists()).toBe(true);
  });

  test('renders with default value', () => {
    const initialValue = 'hello world';
    const wrapper = shallow(<SearchField value={initialValue} onSearch={() => {}} />);
    const propsValue = wrapper.find('input').props().value;
    expect(initialValue).toBe(propsValue);
  });

  test('invokes passed fn on change', () => {
    let value = null;
    const fn = (evt) => {
      value = evt.target.value;
    };
    const changedValue = 'hello world';
    const wrapper = shallow(<SearchField onSearch={fn} />);
    const input = wrapper.find('input');
    input.simulate('change', {
      target: { value: changedValue }
    })
    expect(value).toBe(changedValue);
  });
});

