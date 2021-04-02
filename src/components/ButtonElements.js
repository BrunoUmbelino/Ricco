import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link as ScrollRouter } from "react-router-dom";

export const ButtonScroll = styled(ScrollLink)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "var(--primary)" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border: none;
  outline: 0;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#ffffff" : "#1ee5ab")};
  }
`;

export const ButtonRouter = styled(ScrollRouter)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "var(--primary)" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border: none;
  outline: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#ffffff" : "#1ee5ab")};
  }
`;
