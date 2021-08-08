import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import GlobalStyles from "./global.styles";

const BaseTheme = {
    color: "#222",
    background: "#fff",
};
const DarkTheme = {
    color: "#fff",
    background: "#222",
};

const Container = styled.div`
    padding: 2rem;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};
`;

function App() {
    const [baseTheme, setTheme] = useState(true);
    const toggleTheme = () => {
        setTheme((currentTheme) => !currentTheme);
    };
    return (
        <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
            <GlobalStyles />
            <Container>
                <h1>HelloWorld</h1>
                <button onClick={toggleTheme} className="btn">
                    toggle me
                </button>
            </Container>
            {/* <Card /> */}
        </ThemeProvider>
    );
}

export default App;
