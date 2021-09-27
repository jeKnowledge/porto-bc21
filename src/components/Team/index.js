import React, { useState } from "react";
import { TeamContainer, Card, Grid, TeamBar, Team } from "./TeamElements";
import { Heading, PointWrapper, PointF } from "../Elements/PointElement";

import Angela from "./AngelaLaspriella.png";
import Filipa from "./FilipaBotinas.png";
import Leonor from "./LeonorJacob.png";
import Raposo from "./MariaRaposo.png";

import Iris from "./IrisAlmeida.png";
import Joao from "./JoãoRodrigues.png";
import Marta from "./MartaPereira.png";

import "./Team.css";

const TeamSection = () => {
  /*   const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }; */

  function MouseOver(event) {
    event.target.style.opacity = "1";
  }
  function MouseOut(event) {
    event.target.style.opacity = "0";
  }

  return (
    <>
      <TeamContainer id="team">
        <TeamBar>
          <Team>
            <Heading moreMargin={false}>EQUIPA</Heading>

            <PointWrapper rotatePoint={true} leftPoint={false}>
              <PointF />
            </PointWrapper>
          </Team>
        </TeamBar>

        <div class="container">
          <div class="element">
            <div class="imgA">
              <img class="img" src={Filipa} />
              <div
                class="whiteBG"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                <p class="nameTeam">Filipa Botinas</p>
                <p class="jobTeam">Project Manager</p>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="imgA">
              <img class="img" src={Leonor} />
              <div
                class="whiteBG"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                <p class="nameTeam">Leonor Jacob</p>
                <p class="jobTeam">Oradores</p>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="imgA">
              <img class="img" src={Raposo} />
              <div
                class="whiteBG"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                <p class="nameTeam">Maria Raposo</p>
                <p class="jobTeam">Imagem</p>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="imgA">
              <img class="img" src={Iris} />
              <div
                class="whiteBG"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                <p class="nameTeam">Irís Almeida</p>
                <p class="jobTeam">Parcerias</p>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="imgA">
              <img class="img" src={Joao} />
              <div
                class="whiteBG"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                <p class="nameTeam">João Rodrigues</p>
                <p class="jobTeam">Logística</p>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="imgA">
              <img class="img" src={Angela} />
              <div
                class="whiteBG"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                <p class="nameTeam">Angela Laspriella</p>
                <p class="jobTeam">Desenvolvimento</p>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="imgA">
              <img class="img" src={Marta} />
              <div
                class="whiteBG"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                <p class="nameTeam">Marta Pereira</p>
                <p class="jobTeam">Comunicação</p>
              </div>
            </div>
          </div>
        </div>
      </TeamContainer>
    </>
  );
};

export default TeamSection;
