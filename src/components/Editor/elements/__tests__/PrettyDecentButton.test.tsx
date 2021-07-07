import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { PrettyDecentButton } from '../PrettyDecentButton';
import userEvent from '@testing-library/user-event';
import { PrettyDecentTestEditor } from 'utils/TestEditor';
describe('<PrettyDecentButton />', () => {
    const BoldBtn = () => {
        return (
            <PrettyDecentTestEditor>
                <PrettyDecentButton
                    tooltipProps={{
                        content: 'Bold Tooltip',
                    }}
                    format="bold"
                    type="mark"
                    data-testid="bold-btn"
                >
                    <p>Bold</p>
                </PrettyDecentButton>
            </PrettyDecentTestEditor>
        );
    };

    afterAll(cleanup);

    it('should render', () => {
        expect(render(<BoldBtn />)).toBeTruthy();
    });

    describe('Given a user hovering the button', () => {
        it('should show a tooltip with the correct label', () => {
            render(<BoldBtn />);
            const btn = screen.getByRole('button');
            userEvent.hover(btn);
            const tooltip = screen.getByText('Bold Tooltip');
            expect(tooltip).toBeInTheDocument();
        });
    });

    describe('Given a user toggling the button', () => {
        test.todo('Figure out why this isnt working');
        // it('should render active', () => {
        //     render(<BoldBtn />);
        //     const btn = screen.getByRole('button');
        //     expect(btn).toHaveAttribute('data-toggled', 'false');
        //     userEvent.click(btn);
        //     const btnClicked = screen.getByRole('button');
        //     expect(btnClicked).toHaveAttribute('data-toggled', 'true');
        // });
    });
});
