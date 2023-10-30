import styled from "styled-components";

export const Container = styled.div`
  background-color: #121214;

  .center {
    width: 180px;
    height: 60px;
  }

  p {
    background-color: #0b0726;
    color: white;
    text-align: center;
    padding: 2rem;
  }

  h1{
    color: white;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 140rem;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  gap: 1rem;

  img {
    display: block;
    height: 300px;
    width: 100%;
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
    display: grid;
    border-radius: 50px;
  }
`;
