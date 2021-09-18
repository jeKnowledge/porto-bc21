import React, { useState } from "react";
import { TeamContainer, Card, Grid, TeamBar, Team } from "./TeamElements";
import { Heading, PointWrapper, PointF } from "../Elements/PointElement";

import Angela from "./AngelaLaspriella.png";
import Filipa from "./FilipaBotinas.png";
import Leonor from "./LeonorJacob.png";
import Raposo from "./MariaRaposo.png";

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
            <Heading moreMargin={false}>TEAM</Heading>

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
                <p class="nameTeam">Filipa Bonitas</p>
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
              <img class="img" src={Angela} />
              <div class="whiteBG">
                <p class="nameTeam">Filipa Bonitas</p>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="imgA">
              <img class="img" src={Angela} />
              <div class="whiteBG">
                <p class="nameTeam">Filipa Bonitas</p>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="imgA">
              <img class="img" src={Angela} />
              <div class="whiteBG">
                <p class="nameTeam">Filipa Bonitas</p>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="imgA">
              <img class="img" src={Angela} />
              <div class="whiteBG">
                <p class="nameTeam">Filipa Bonitas</p>
              </div>
            </div>
          </div>
        </div>
      </TeamContainer>
    </>
  );
};

export default TeamSection;
