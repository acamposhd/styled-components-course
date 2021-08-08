import styled from "styled-components/macro";
import { HipsterButton } from "./components/Buttons";

function App() {
    return (
        <div style={{ padding: "2rem" }}>
            <HipsterButton>click me</HipsterButton>
            <HipsterButton as="a" href="www.google.com">
                click me
            </HipsterButton>
            <HipsterButton>click me</HipsterButton>
            <div
                css={`
                    color: green;
                `}
            >
                <h2>hello world</h2>
            </div>
        </div>
    );
}

export default App;
