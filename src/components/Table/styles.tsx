import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: -6rem;
    max-width:1320px;
    position:relative;
    left: 20rem;
    
    
 
`;


export const Teste = styled.div`
    

    h6{
        position: relative;
        top:1.6rem;
        left:1rem;
        color: #3d3d4d;
        font-size:2rem;
        font-weight: 500;
    }
    p{
        position: relative;
        top:3rem;
        left:1rem;
        color:#3d3d4d;
        font-size:1.2rem;
    }

    strong{
        position: relative;
        top:4.5rem;
        left:1rem;
        color:#39b100;
        font-size:1.7rem;
    }
   
    img{
        overflow: hidden;
        border-radius: 8px 8px 0px 0px;
        
        height:192px;
        width:405.33px;
        vertical-align: middle;
    }

`;

export const Button = styled.button`
position: relative;
top: 8rem;
width: 8rem;
height:2.5rem;
font-weight: 600;
border-radius: 20px;
border: 0;
background: #39b100;
 color: #fff;

`;

export const Teste2 = styled.div`
border-radius: 20px;
background: #fff;
width:4rem;
height:2rem;
position: relative;

left: 3rem;


`;