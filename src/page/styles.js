import styled from "styled-components";

export const Container = styled.div`
  background-color: #121214;

  .text{
    margin-bottom: 2rem;
    background-color: #0b0726;
    color: white;
    text-align: center;
    padding: 2rem;
  }

  h1{
    padding: 1rem 0;
    color: white;
    text-align: center;
  }
`;

export const Content = styled.div`
  max-width: 140rem;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  gap: 1rem;
  padding: 0 1rem;
  

  img {
    height: 200px;
    object-fit: cover;
    max-width: 100%;
    border-top-right-radius:8px ;
    border-top-left-radius:8px ;
  }

  a{
    padding: 1rem;
    background-color: #663399;
    color: white;
    border-bottom-right-radius:8px ;
    border-bottom-left-radius:8px ;
  }

  > article{
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    p{
      padding: .5rem;
      height: 120px;
      display: flex;
      align-items: center;
    background-color: #0b0726;
    color: white;
    }
  }

  @media(max-width: 1432px){
  grid-template-columns: 1fr 1fr;

  }

  @media(max-width: 700px){
  grid-template-columns: 1fr  ;
  }
`;
