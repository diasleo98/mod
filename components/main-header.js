import Link from 'next/link';
import classes from "./main-header.module.css";
import { Header, Title, TitleContainer, TitleH2 } from './_styled';


function MainHeader(props) {
  // return <header className={classes.header} >
  //   <div className={classes.logo}>
  //     
  //   </div>
  // </header>;
  return(
    <Header>   
      <TitleH2>
        <Title href="/">Midstream Operations Directory</Title>
      </TitleH2>
    </Header>
  )
}
export default MainHeader;
