// This is used by the test build process to configure Enzyme for use with React.
import { configure } from "enzyme";
import React16Adapter from "enzyme-adapter-react-16";

configure({ adapter: new React16Adapter() });
