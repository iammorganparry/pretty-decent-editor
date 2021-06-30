
import React, { useMemo, useState } from 'react'
import { render, screen } from '@testing-library/react'
import { PrettyDecentButton } from '../PrettyDecentButton';
import userEvent from '@testing-library/user-event';
import { PrettyDecentTestEditor } from 'utils/TestEditor'
describe('<PrettyDecentButton />', () => {
 
    const BoldBtn = () => {
        return (
            <PrettyDecentTestEditor>
                <PrettyDecentButton 
                tooltipProps={{
                    content: 'Bold',
                }} format="bold" type='mark' data-testid='bold-btn'>
                    <p>Bold</p>
                </PrettyDecentButton>
            </PrettyDecentTestEditor>
    )
    }
    it('should render', () => {
        expect(render(<BoldBtn />)).toBeTruthy()
    });

    describe('Given a user toggling the button', () => {
        it('should render active', () => {
            render(<BoldBtn />)
            const btn = screen.getByText('Bold')
            expect(btn).toHaveStyle('color: #a9a9a9;')
            userEvent.click(btn)
            expect(btn).toHaveStyle('color: rgb(169, 169, 169);')
        });
    });

});