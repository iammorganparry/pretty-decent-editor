import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PrettyDecentTestEditor } from 'utils/TestEditor';
import { PrettyDecentTableBtn } from '.';
describe('<PrettyDecentButton />', () => {
    const TableBtn = () => {
        return (
            <PrettyDecentTestEditor>
                <PrettyDecentTableBtn
                    tooltipProps={{
                        content: 'Table',
                    }}
                    format="table"
                    type="block"
                    data-testid="table-btn"
                >
                    <p>Bold</p>
                </PrettyDecentTableBtn>
            </PrettyDecentTestEditor>
        );
    };
    it('should render', () => {
        expect(render(<TableBtn />)).toBeTruthy();
    });

    describe('Given a user toggling the button', () => {
        it('should show a popper with grid selection', () => {
            render(<TableBtn />);
            const btn = screen.getByRole('button');
            userEvent.click(btn);
            const popper = screen.getByTestId('table-selection');
            expect(popper).toBeInTheDocument();
        });
    });
});
