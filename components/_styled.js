import styled from "styled-components"
import Link from 'next/link';

export const Header = styled.header`
    background: #3a397b;
    background-image: linear-gradient(45deg, #3a397b 0, #0c69b0 100%);
    color: #fff;   
    height: 20vh;
    width: 100vw;
    display: flex;
    flex-direction: row;


`

export const TitleH2 = styled.h2`
    font-size: 2.5rem;
    align-self: center;
    letter-spacing: 1px;
    line-height: 1;
    margin: 20px;
    font-family: EM-Light;
    font-weight: 400;
    font-style: normal;
    box-sizing: border-box;



`
export const Title = styled(Link)`
    color: #fff;
    outline: transparent solid 3px;
    transition: all .15s ease;
    box-sizing: border-box;
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 1;
    font-family: EMprintLight, HelveticaNeue, Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    --webkit-text-size-adjust: 100%;
    align-self: flex-start;
    align-content: center;
    font-size: 30px;
    justify-content: center;




`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: 1rem;
    margin: 0;
    padding:0;
    box-sizing: border-box;

`

export const Search = styled.form`
    height: 10vh;
    width: 100vw;
    display: flex;
`
export const SearchField = styled.input`
    height: 50px;
    width: 200px;
    align-self: center;
    margin-left: 25px;
`
export const SearchSelect = styled.select`
    height: 50px;
    width: 200px;
    align-self: center;
    margin-left: 5px;

`

export const PlantLink = styled(Link)`
    align-self: center;
    margin-left: 5px;
    align-content: center;
`