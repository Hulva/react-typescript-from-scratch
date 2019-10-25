import { configure } from 'enzyme';
import * as EnzymeAdopter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdopter() });