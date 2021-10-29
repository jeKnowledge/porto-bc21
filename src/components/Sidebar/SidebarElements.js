import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  // if open you can see it, if not is 0
  /* 
    Inline If-Else with Conditional Operator. The conditional (ternary) operator is the only JavaScript operator 
    that takes three operands: a condition followed by a question mark (?), 
    then an expression to execute if the condition is truthy 
    followed by a colon (:), and finally the expression to execute 
    if the condition is falsy. This operator is frequently used 
    as a shortcut for the if statement. */

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  //opacity: ${(isOpen) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #ffffff;

  &:hover {
    color: #50a1d2;
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #ffffff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #50a1d2;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtwnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.a`
  border-radius: 50px;
  background: #50a1d2;
  white-space: nowrap;
  padding: 16px 58px;
  color: #010606;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
