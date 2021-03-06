import React from "react";
import styled from "styled-components";
import { colors, setupBorder } from "../components/utils";

const AlternativeTitle = ({ title }) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <div className="underline"></div>
            <div className="box"></div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    h1 {
        text-transform: capitalize;
        text-align: center;
    }
    .underline {
        width: 5rem;
        height: 0.25rem;
        background: ${colors.primary};
        margin: 0 auto;
    }
    .title {
        color: blue;
    }
    .box {
        height: 10px;
        border: ${setupBorder({
            width: 1,
            type: "solid",
            color: colors.primary,
        })};
    }
`;

export default AlternativeTitle;
