import styled from "styled-components"
import MainHeader from "../../components/main-header"
import { Fragment } from "react";

// export const Container = styled.div`
//     //background-color: red;
//     div {
//         //background-color: orange;
//         h1{
//             font-size:30
//         }
//     }

// `;
export const Titulo = styled.h1`
    font-size:70px;

`;

export const Botao = styled.button`
    background: ${props => props.primary ? "blue" : "black"};
    /* color: ${props => props.primary ? "white" : "palevioletred"}; */
    font-size: 500px;
    height:5vh;
    width:15vw;
`;
export const Grid = styled.div`
    width:100vw;
    height:100vh;
    display: grid;
    //grid-template: 15fr 85fr / 15% 85%;
    grid-template-rows: 15fr 85fr;
    grid-template-columns: 15% 85%;
    grid-template-areas: 
    "header header"
    "navbar content"
`;
export const Grid2 = styled.div`
    width:100%;
    height:100%;
    /* grid-column: 2/3;
    grid-row: 2/3; */
    grid-area: content;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(2, 1fr);
    background: black;

`;
export const Item = styled.div`
    margin: 5px;
	background: blue;
	text-align: center;
	font-size: 1.5em;
`;
export const Content = styled.div`
    width: 1fr;
    height: 1fr;
    grid-column: 2/3;
    grid-row: 2/3;
    background: red;
`;
export const Content2 = styled.div`
    height:10vh;
    background-color: ${props => props.color || "purple"}
`;


export const NavBar = styled.div`
    /* grid-column: 1/2;
    grid-row: 2/3; */
    grid-area: navbar;
    background: blue;
    height: 1fr;
    width: 1fr;

`;


export const Header = styled(MainHeader)`
    /* grid-row: 1/2;
    grid-column: 1/2; */
    grid-area: header;
`;

export const Container = styled(Fragment)`
    height: 100vh;
    width: 100vw;
    background: gray;
`;
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: lightblue;
    grid-row: 2;
    grid-column: 2;
    justify-content: center;
    align-items: center;
`;



