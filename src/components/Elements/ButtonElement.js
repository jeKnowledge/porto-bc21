import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 18px;
    background: ${({primary}) => (primary ? 'red' : '#fff')};
    white-space: nowrap;
    color: ${({dark}) => (dark ? '#040305' : '#06649E')}; 
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig}) => (fontBig ? '24px' : '20px')};
    font-weight: 600;
    line-height: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: inline-flex;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'red': '#fff' )};
    }

    @media screen and (max-width: 760px) {
        padding: 10px 28px;
        font-size: 18px;
        line-height: 100%;
    }
`

export const ButtonP = styled.p`
    line-height: 120%;
    background: linear-gradient(0.25turn, #040305, #1D2444, #06649E);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 760px) {
        line-height: 140%;
    }
`