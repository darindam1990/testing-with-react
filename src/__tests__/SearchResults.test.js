import React from "react";
import Enzyme, { shallow } from "enzyme";
import { SearchResults } from '../components/SearchResults';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('SearchResults component', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper.exists()).toBe(true);
  });

  test('shows loading spinner when flag is set', () => {
    const wrapper = shallow(<SearchResults loading={true} />);
    const loadingDiv = wrapper.find('div.SearchResults_loading');
    expect(loadingDiv.exists()).toBe(true);
  });

  test('hides loading spinner when flag is unset', () => {
    const wrapper = shallow(<SearchResults loading={false} />);
    const loadingDiv = wrapper.find('div.SearchResults_loading');
    expect(loadingDiv.exists()).toBe(false);
  });

  test('is empty when results prop is null', () => {
    const wrapper = shallow(<SearchResults results={null} />);
    expect(wrapper.children().length).toBe(0);
  });

  test('is empty when results prop is undefined', () => {
    const wrapper = shallow(<SearchResults results={undefined} />);
    expect(wrapper.children().length).toBe(0);
  });

  test('shows "no_data" element when results prop is empty array', () => {
    const wrapper = shallow(<SearchResults results={[]} />);
    const noDataEl = wrapper.find('div.SearchResults_container.no_data');
    expect(noDataEl.exists()).toBe(true);
  });

  test('hides "no_data" element results when results prop is set', () => {
    const mockData = [{
      trackName: 'Track1',
      artistName: 'Eminem'
    }, {
      trackName: 'Track2',
      artistName: 'Eminem'
    }];
    const wrapper = shallow(<SearchResults results={mockData} />);
    const noDataEl = wrapper.find('div.SearchResults_container.no_data');
    expect(noDataEl.exists()).toBe(false);
  });

  test('shows correct no. of results when results prop is set', () => {
    const mockData = [{
      trackName: 'Track1',
      artistName: 'Eminem'
    }, {
      trackName: 'Track2',
      artistName: 'Eminem'
    }];
    const wrapper = shallow(<SearchResults results={mockData} />);
    const items = wrapper.find('li.SearchResults_item');
    expect(items.exists()).toBe(true);
    expect(items.length).toBe(mockData.length);
  });

  test('shows correct results when results prop is set', () => {
    const mockData = [{
      trackName: 'Track1',
      artistName: 'Eminem'
    }, {
      trackName: 'Track2',
      artistName: 'Eminem'
    }];
    const wrapper = shallow(<SearchResults results={mockData} />);
    const items = wrapper.find('li.SearchResults_item');
    items.forEach((node, i) => {
      expect(node.text()).toBe(Object.values(mockData[i]).join(' by '));
    });
  });

});