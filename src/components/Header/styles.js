import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 1rem;
   padding: 1.5rem 5rem;
   border-bottom: 1px solid #ffffff46;

   h2{
      font-size: 2rem;
      color: white;
   }

   button{
      background-color: #6833e4;
      cursor: pointer;
      color: white;
      padding: 1.3rem 1rem;
      border-radius: 5px;
   }

   button:hover{
      background-color: red;
      transition: 3s; 
   }

   @media(max-width: 700px){
    padding: 1.5rem ;
   }
   
`;