import React from "react";
import styled from "styled-components";

const HeroCont = styled.section`
    .background {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const hero = () => {
    return (
        <HeroCont>
            <img
                src="https://picsum.photos/2000/800"
                alt="pic"
                className="background"
            />
        </HeroCont>
    );
};

export default hero;
