import React from 'react'
import { render } from '@testing-library/react'
import { PrettyDecentIcon } from '../PrettyDecentIcon'
describe('<PrettyDecentIcon />', () => {
    it('should render', () => {
        expect(render(<PrettyDecentIcon className=''>bold</PrettyDecentIcon>))
    });
});