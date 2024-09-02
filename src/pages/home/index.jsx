import { ContainerTop, Content, Footer, Header, Left, Main, Right, Scroll, Span, Texts, Titles, TuningCars } from './styled'
//Carros Modificados
import NissanGtr from '../../assets/nissan-skyline.png'
import MazdaRx from '../../assets/mazda.png'
import NissanSilvia from '../../assets/nissan-silvia.png'
import Nissan370z from '../../assets/nissan-370z.png'
//Carros Originais
import LancerEvo from '../../assets/lancer-evo.webp'
import MazdaRx7 from '../../assets/mazda-rx7.webp'
import ImprezaWrx from '../../assets/impreza-wrx.webp'
import AcuraNsx from '../../assets/acura-nsx.webp'
import Supra from '../../assets/toyota-supra.webp'
import NissanSkyline from '../../assets/skyline-gtr.webp'

function Home() {

  return (
    <Main>

      <Header>
        <h4>駐車場</h4>
        <h4>日本国内市場</h4>
      </Header>

      <ContainerTop>

        <Left>
          <Titles>MIDNIGHT</Titles>
          <Texts>スピード</Texts>
        </Left>

        <Right>
          <Texts>ミッドナイトクラブ</Texts>
          <Titles>CLUB</Titles>
        </Right>

      </ContainerTop>

      <Content>

        <h2> <Span>O que são JDM's</Span></h2>

        <p>JDM é a abreviação de Japanese Domestic Market, ou seja, "Mercado Doméstico Japonês".
          Originalmente, o termo se referia a qualquer produto fabricado no Japão para consumo interno.
          No entanto, no mundo automotivo, JDM se tornou sinônimo de um estilo de vida e de personalização
          de carros que transcende as fronteiras do Japão.</p>

        <h2><Span>As Raízes nas Pistas</Span></h2>

        <p>A história do JDM está internamente ligada às competições automobilísticas japonesas.
          O campeonato Civic One-Make Race, com os Honda Civic SR da 2ª geração, foi um marco fundamental.
          Os participantes, inspirados pelas corridas, começaram a aplicar nos seus carros as modificações e técnicas
          aprendidas nas pistas, dando origem ao movimento JDM.</p>

        <h2><Span>A Expansão da Cultura</Span></h2>
        <p>A cultura JDM se espalhou rapidamente pelo Japão, influenciada por filmes, animes e mangás que retratavam carros tunados
          e corridas de rua. A estética única dos carros japoneses, com suas linhas aerodinâmicas,
          motores potentes e suspensões ajustadas, cativou um público cada vez maior.</p>

        <h2><Span>Modelos Icones</Span></h2>

        <Scroll>
          <figure>
            <img src={AcuraNsx} alt="" />
            <figcaption>Acura NSX</figcaption>
          </figure>
          <figure>
            <img src={ImprezaWrx} alt="" />
            <figcaption>Impreza WRX</figcaption>
          </figure>

          <figure>
            <img src={Supra} alt="" />
            <figcaption>Toyota Supra</figcaption>
          </figure>
          <figure>
            <img src={LancerEvo} alt="" />
            <figcaption>Lancer Evo IV</figcaption>
          </figure>
          <figure>
            <img src={MazdaRx7} alt="" />
            <figcaption>Mazda RX7</figcaption>
          </figure>
          <figure>
            <img src={NissanSkyline} alt="" />
            <figcaption>Nissan Skyline R34</figcaption>
          </figure>
        </Scroll>

        <h2><Span>Modificações e Personalização dos JDM: Um Universo de Possibilidades</Span></h2>
        <p>A personalização é uma das marcas registradas da cultura JDM. Os entusiastas japoneses sempre buscaram tirar
          o máximo de seus carros, tanto em termos de desempenho quanto de estilo. Essa paixão por modificar os veículos
          se espalhou pelo mundo e se tornou uma parte essencial da cultura JDM.</p>

        <TuningCars>
          <img src={Nissan370z} alt="" />
          <img src={NissanSilvia} alt="" />
          <img src={NissanGtr} alt="" />
          <img src={MazdaRx} alt="" />
        </TuningCars>

        <h2> <Span>JDM nos Filmes e Jogos: Uma Celebração da Cultura Automobilística Japonesa</Span></h2>
        <p>Esses veículos, com seu design único, desempenho e paixão,
          conquistaram fãs ao redor do mundo e se tornaram ícones da cultura pop.
          Nos filmes e jogos, os JDM's são frequentemente retratados de forma heroica,
          exaltando suas características únicas e a paixão dos entusiastas por esses carros.</p>

        <h2><Span>Jogos com foco em JDM e cultura de rua:</Span></h2>
        <p> <span style={{ fontWeight: 500 }}>Need for Speed:</span> A franquia Need for Speed, especialmente em títulos
          como Underground e Most Wanted,
          apresenta uma grande variedade de carros JDM, incluindo modelos clássicos e tunados.
          As corridas de rua e a cultura de modificação são elementos-chave nesses jogos.</p>
        <p><span style={{ fontWeight: 500 }}>Midnight Club:</span> Outra série que celebra a cultura de rua, com foco em corridas ilegais e carros tunados.
          A presença de JDM's é marcante, especialmente em títulos como Midnight Club 3: DUB Edition.</p>

        <h2> <Span>Filmes que celebram a cultura JDM:</Span></h2>
        <p><span style={{ fontWeight: 500 }}>Initial D: Legend:</span> A adaptação para o cinema do popular anime sobre drift,
          com cenas de perseguição emocionantes nas montanhas e a icônica Toyota AE86 Trueno como protagonista.</p>
        <p> <span style={{ fontWeight: 500 }}>Fast & Furious Tokyo Drift:</span> O terceiro filme da franquia Fast & Furious, que introduz o mundo das corridas de rua
          em Tóquio e apresenta diversos modelos JDM, como o Nissan Skyline GT-R e o Mazda RX-7.</p>


      </Content>

      <Footer><p> <span style={{ color: '#4B0082' }}>Copyright</span> © 2024 by Davi Rocha. All rights reserved.</p></Footer>

    </Main>
  )
}

export default Home
