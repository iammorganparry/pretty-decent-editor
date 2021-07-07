import React, { useState } from 'react';
import { useSlate } from 'slate-react';
import styled from 'styled-components';
import { createTable } from './createTable';

const SelectionBox = styled.div`
    /* width: 200px; */
    /* height: 200px; */
    position: absolute;
    top: 50px;
    display: 'inline-block';
    z-index: 131313;
    background: white;
    border: 1px solid #eee;
    border-radius: 5px;
`;
type ColProps = {
    selected?: boolean;
};
const Col = styled.span<ColProps>`
    border: 1px solid #4c4c4c;
    width: calc(200px / 6);
    height: calc(200px / 6);
    display: inline-block;
    margin: 1px;
    background: ${({ selected }) => (selected ? 'orange' : 'white')};
`;

const Row = styled.div`
    margin: 0;
`;
const initState = {
    cols: 0,
    rows: 0,
};

const SIZE = 3 as const;

type SelectionProps = {
    setClose: (bool: boolean) => void;
};
export const Selection = ({ setClose, ...others }: SelectionProps): JSX.Element => {
    const [size, setSize] = useState(initState);
    const editor = useSlate();

    const handleHover = (i: number, j: number) => () => {
        setSize({ cols: j + 1, rows: i + 1 });
    };
    const handleLeave = () => setSize(initState);

    const handleSubmit = () => {
        createTable({ editor, rows: size.rows, cols: size.cols });
        setClose(true);
    };
    return (
        <SelectionBox data-testid="table-selection" {...others} onMouseLeave={handleLeave}>
            {Array.from({ length: SIZE }).map((row, i) => (
                <Row key={`row-${i}`} className="row">
                    {Array.from({ length: SIZE }).map((col, j) => {
                        const isSelected = i <= size.rows - 1 && j <= size.cols - 1;
                        return (
                            <Col
                                key={`col-${j}`}
                                selected={isSelected}
                                onMouseEnter={handleHover(i, j)}
                                onClick={handleSubmit}
                            />
                        );
                    })}
                </Row>
            ))}
            <p>{`${size.cols} x ${size.rows}`}</p>
        </SelectionBox>
    );
};

export const PrettyDecentSelection = Selection;
