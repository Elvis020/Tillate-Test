import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme";
import Cards from "./components/Cards";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Main Components used are Header and Cards */}
      <Header />
      <Cards />
    </ThemeProvider>
  );
}

export default App;
