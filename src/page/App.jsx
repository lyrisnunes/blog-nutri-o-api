////https://sujeitoprogramador.com/rn-api/?api=posts
import { useEffect, useState } from "react"; // 1
import { Header } from "../components/Header";
import { Container, Content } from "./styles";
import { Info } from "../components/Info";


export function Home() {
  const [nutri, setNutri] = useState([]); // começa vazio //2

  useEffect(() => {
    // 3
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url) // lida com a requisição
        .then((r) => r.json()) // sucesso
        .then((json) => {
          // receber a requisição/ resultado
          setNutri(json);
        });
    }

    loadApi();
  }, []);

  return (
    <Container>
      <Header />
      <p>A jornada da perda de peso começa com um único passo.</p>

      <Info/>

      
      <h1>Artigos sobre saúde</h1>
      <Content >
      
        {nutri.map((item) => {
          return (
            <article key={item.id}>
              <strong>{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} />
              <a href="#">Acessar</a>
            </article>
          );
        })}
      </Content>
    </Container>
  );
}
