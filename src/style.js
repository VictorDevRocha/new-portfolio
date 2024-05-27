import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Inter", sans-serif;
}

:root {
  --brown: #1b0d07;
  --brown-light: #523b2c;

  --primary: #0d0d0d;
  --primary-light: #262626;

  --gray01: #14142b;
  --gray02: #4e4b66;
  --gray03: #6e7191;
  --gray04: #a0a3bd;
  --gray05: #d6d8e7;
  --gray06: #f7f7fc;

  --white: #fff;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

.heading56 {
  font-family: "Roboto";
  font-size: 56px;
  line-height: 70px;
  font-weight: 800;
}

.heading40 {
  font-family: "Roboto";
  font-size: 40px;
  line-height: 52px;
  font-weight: 800;
}

.heading32 {
  font-family: "Roboto";
  font-size: 32px;
  line-height: 42px;
  font-weight: 600;
}

.heading20 {
  font-family: "Roboto";
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
}

.heading18 {
  font-family: "Roboto";
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
}

.heading16 {
  font-family: "Roboto";
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
}

.body24 {
  font-family: "Inter";
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
}

.body18 {
  font-family: "Inter";
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
}

.body16 {
  font-family: "Inter";
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
}

.body14 {
  font-family: "Inter";
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
}

.body12_bold {
  font-family: "Inter";
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
}

.body12_light {
  font-family: "Inter";
  font-size: 12px;
  line-height: 20px;
  font-weight: 300;
}

.button16 {
  font-family: "Roboto";
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  border: none;
  cursor: pointer;
}

.button14 {
  font-family: "Roboto";
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.link16 {
  font-family: "Roboto";
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}

.link14 {
  font-family: "Roboto";
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}

.overline16 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.overline14 {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.margin4 {
  margin-bottom: 4px;
}

.margin8 {
  margin-bottom: 8px;
}

.margin12 {
  margin-bottom: 12px;
}

.margin16 {
  margin-bottom: 1rem;
}

button {
  background-color: transparent;
  border: none;
}

.brown_light {
  color: var(--brown-light);
}

.brown {
  color: var(--brown);
}

.gray {
  color: var(--gray01);
}

.gray2 {
  color: var(--gray02);
}

.gray3 {
  color: var(--gray03);
}

.gray4 {
  color: var(--gray04);
}

.gray5 {
  color: var(--gray05);
}

.gray6 {
  color: var(--gray06);
}

.primary {
  color: var(--primary);
}

.primary_light {
  color: var(--primary-light);
}

.white {
  color: var(--white);
}

.light {
  color: #e9f9fc;
}

.container {
  width: 100%;
  max-width: 1224px;
  margin: 0 auto;
}

.button_primary {
  background: var(--brown);
  color: var(--white);
}

.button_primary:hover {
  transform: scale(0.98);
}

.button_secundary {
  background-color: var(--white);
  color: var(--brown);
}

.button_secundary:hover {
  transform: scale(0.98);
}

.border {
  border: 1px solid var(--brown);
}

.button {
  padding: 16px 24px;
  border-radius: 4px;
}

.ajust_gap {
  display: flex;
  gap: 8px;
  align-items: center;
}

@media (max-width: 768px) {
  .heading56 {
    font-size: 40px;
    line-height: 52px;
    font-weight: 800;
  }

  .heading40 {
    font-family: "Inter";
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
  }
}

.animação {
  transform: translateY(0px);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

`;
