import styled from "styled-components"
import MainHeader from "../../components/main-header"
import { Fragment } from "react";
import media from "styled-media-query";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  iphone: "1285px",
  tablet: "60em",
  mobile: "46em"
});

export const Grid = styled.div`
    width:100vw;
    height:100vh;
    display: grid;
    //grid-template: 15fr 85fr / 15% 85%;
    grid-template-rows: 20fr 80fr;
    grid-template-columns: 20% 80%;
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

export const Header = styled(MainHeader)`
    /* grid-row: 1/2;
    grid-column: 1/2; */
    grid-area: header;
`;
export const NavBar = styled.div`
    /* grid-column: 1/2;
    grid-row: 2/3; */
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display: none;
  `}
    grid-area: navbar;
    background: blue;
    height: 1fr;
    width: 1fr;
    display: flex;
    flex-direction: column;

`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: red;
    /* grid-row: 2;
    grid-column: 2; */
    grid-area: content;
    align-content: flex-start;
    padding-left: 20px;
    padding-top: 10px;
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    grid-row: 2;
    grid-column: 1/3;

  `}
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.color};
    border-radius: 25px;
    height: 200px;
    width: 325px;
    margin: 20px;
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2), 0 24px 80px 0 rgba(0, 0, 0, 0.19);


`;
export const CardText = styled.div`
    margin: 2px 10px;
    font-size: large;
    flex-wrap: wrap;
`;



export const MenuButton = styled.button`
  background-color: purple;
  height: 50px;
  width: 100%;
  margin-top: 5px;
`;

export const TerminalNameDiv = styled.div`
  font-size: large;
  background: gray;
  height: 5%;
  display: flex;
  justify-content: center;




`

export const TerminalName = styled.h3`
  align-self: center;



`
