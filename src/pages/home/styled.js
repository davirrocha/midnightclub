import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`

export const Header = styled.header`
    width: 100%;
    height: 17vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

h4{
    color: #fff;
    font-size: 28px;
}
`

export const ContainerTop = styled.section`
    height: 77vh;
    display: flex;
    justify-content: center;
    color: aliceblue;
    flex-direction: column;
`
export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


`
export const Titles = styled.h1`
font-size: 60px;
color: aliceblue;
transition: .6s;

&:hover{
    color: #4B0082	;
    transition: .5s;
    cursor: pointer;
}

@media (max-width:500px) { 
    font-size: 40px;
}
`

export const Texts = styled.p`
font-size: 30px;
color: #4B0082;
transition: .6s;

&:hover{
    color: #fff	;
    transition: .5s;
    cursor: pointer;}

    @media (max-width:500px) { 
    font-size: 27px;
}
`

export const Content = styled.div`
    width: 80vw;
    max-width: 970px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 50px;
    gap: 30px;

h2{
    color: #fff;
    font-size: 30px;
}

p{
    color: #fff;
    font-size: 28px;
    font-weight: 200;
}
`

export const Span = styled.span`
color: #4B0082;
`

export const Scroll = styled.div`
    display: flex;
    height: 30vh;
    max-height: 200px;
    overflow-x: auto;
    text-align: center;

img{
    height: 130px;

}

figcaption{
    color: #fff;
    font-size: 20px;
}
`

export const TuningCars = styled.div`
    display: grid;
    grid-template-columns: 350px 350px;
    align-items: center;
    justify-content: center;
    gap: 20px;

@media (max-width:500px) {
    grid-template-columns: 1fr;
}

img{
    width: 100%;
}
`
export const Footer = styled.footer`
    width: 100%;
    height: 17vh;
     display: flex;
    justify-content: center;
    align-items: center;

p{
     color: #fff;
    font-size: 21px;   
        
    @media (max-width:500px) { 
    font-size: 15px;
    }
}
`

