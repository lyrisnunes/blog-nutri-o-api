import { Container } from "./styles";

import img from '../../img/post.png';

export function Info(){
   return(
      <Container>
         <img src={img} alt="" />
         <div>
            <h2>Não se preocupe com o tempo que levará. O tempo passará de qualquer maneira; você pode tão bem fazer escolhas saudáveis</h2>
         </div>
      </Container>
   )
}