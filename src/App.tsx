import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/global";

import { Screen } from "./components";
import { ThemeProvider } from "styled-components";
import { newTheme } from "./styles/theme";
import { Global } from "./styles";
import { useAppSelector } from "./hooks/redux";

const App: FC = () => {
  const { theme } = useAppSelector((state) => state.themeToggle);
  return (
    <ThemeProvider theme={newTheme(theme)}>
      <Global />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Screen />} />
            <Route path="/home" element={<Screen />} />
            <Route path="/sport" element={<Screen />} />
            <Route path="/work" element={<Screen />} />
            <Route path="/family" element={<Screen />} />
            <Route path="/statistics" element={<Screen />} />
            <Route path="/compare" element={<Screen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
