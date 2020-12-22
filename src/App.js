import React from "react";
import { Header, ImageContainer } from "./components";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme";
import Cards from "./components/Cards";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Cards />
    </ThemeProvider>
  );
}

export default App;
