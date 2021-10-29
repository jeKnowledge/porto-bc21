import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-scroll";

export const Button = styled.a`
  border-radius: 18px;
  background: ${({ primary }) => (primary ? "red" : "#fff")};
  white-space: nowrap;
  color: ${({ dark }) => (dark ? "#040305" : "#06649E")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "24px" : "20px")};
  font-weight: 600;
  line-height: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "red" : "#50A1D2")};
  }

  @media screen and (max-width: 760px) {
    padding: 10px 28px;
    font-size: 18px;
    line-height: 100%;
  }
`;

export const ButtonP = styled.p`
  transition: all 0.2s ease-in-out;
  background: linear-gradient(0.25turn, #040305, #1d2444, #06649e);
  background: -webkit-linear-gradient(0.25turn, #040305, #1d2444, #06649e);

  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 760px) {
    line-height: 140%;
  }
`;

export const ButtonP2 = styled.p`
  transition: all 0.2s ease-in-out;
  background: linear-gradient(0.25turn, #fff, #fff, #fff);
  background: -webkit-linear-gradient(0.25turn, #fff, #fff, #fff);

  background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 760px) {
    line-height: 140%;
  }
`;
