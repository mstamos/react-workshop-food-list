import {render} from '@testing-library/react';
import List from './component';

describe('<List/>', () => {
    it('renders', () => {
        expect(render(<List items={['spanakorizo', 'burger']}/>).container).toMatchSnapshot();
    })
})