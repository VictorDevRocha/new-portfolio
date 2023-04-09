import "./App.css";
import { About } from "./sections/about";
import { Certificates } from "./sections/certificates";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Header } from "./sections/headerPage";
import { Hero } from "./sections/hero";
import { Jobs } from "./sections/jobs";
import { Skills } from "./sections/skill";
import { GlobalStyle } from "./style";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Jobs />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
};
