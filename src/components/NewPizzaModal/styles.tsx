import styled from 'styled-components';

export const Container = styled.form`
     background-color:#fff;
     
     h1{ 
         position:relative;
         top:5rem;
         left:6rem;
     }
   

    input{
        
        width: 100%;
        padding: 0 1rem;
        
       
        margin:7rem;
        height: 1rem;
        border-radius: 0.25rem;

        border: none;
        background: transparent;
        outline: 0;
        font-weight: 400;
        font-size: 1rem;
    

    &::placeholder{
        color: #b7b7cc
    }

    & + input{
        margin-top: -1rem;
    }

    }

    button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;
          position:relative;
          left:30rem;
          bottom:3rem;
          display: flex;
          width:13rem;
          align-items: center;

            .text{
                position:relative;
                left:2rem;
                font-weight: bold;
                font-size:18px;
            }
         

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            position:relative;
            left:4.1rem;
          }
        }

`;
