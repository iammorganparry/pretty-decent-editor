import React, { ForwardedRef, useState } from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'

const SelectionBox = styled.div`
    width: 100%;
    background: white;
    border: 1px solid #eee;
    border-radius: 5px;
`
type ColProps = {
    selected?: boolean
}
const Col = styled.span<ColProps>`
    border: 1px solid #4c4c4c;
    width: 15px;
    display: inline-flex;
    height: 15px;
    margin: 2px;
    background: ${({ selected }) => selected ? 'orange' : 'white'};
`

const Row = styled.div`
    margin: 0;
`

export const Selection = (props) => {
    const [size, setSize] = useState({ cols: 0, rows: 0 });

    const handleHover = (i, j) => {
        setSize({ cols: j + 1, rows: i + 1 });

    }
    return (
        <SelectionBox {...props} ref={ref}>
            {Array.from({ length: 6 }).map((row, i) => (
                <Row key={`row-${i}`} className='row'>
                    {Array.from({ length: 6 }).map((col, j) => {
                        const isSelected = i <= size.rows - 1 && j <= size.cols - 1;
                        return (
                            <Col key={`col-${i}`} selected={isSelected} />
                        )
                    })}
                </Row>
            ))}
        </SelectionBox>
    )
}


export const PrettyDecentSelection = Selection


