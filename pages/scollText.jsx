import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const HeroCont = styled.section`
    /* height: 6000px; */
    width: 40%;
    margin-top: -526px;
    position: relative;

    .text-container {
        height: 1500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero__text {
        color: rgb(250, 250, 250);
        font-size: 36px;
        text-align: center;
        width: 70%;
        margin: 100px auto 900px;
    }

    .name {
        font-size: 36px;
        color: rgb(250, 250, 250);
        position: fixed;
        top: 50%;
        left: 54%;
    }

    .hero__span {
        opacity: 0;
    }
`;

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef(null);
    // const name = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const text1 = self.selector(".hero__text--1");
            const textCont = self.selector(".text-container");
            const text2 = self.selector(".hero__text--2");
            const textCont2 = self.selector(".text-container--2");

            gsap.to(text2, {
                opacity: 0.5,
                y: () => ScrollTrigger.maxScroll(window) * 0.45,
                scrollTrigger: {
                    trigger: textCont2,
                    start: "top center",
                    end: "bottom center",
                    markers: true,
                    scrub: true,
                },
            });
        }, container);
    }, []);
    return (
        <HeroCont>
            <div ref={container}>
                <h2 className={"name"}>text</h2>
                <div className="text-container">
                    <h2 className={"hero__text hero__text--1"}>
                        this is some <span className={"hero__span"}>text</span>.
                    </h2>
                </div>
                <div className="text-container text-container--2">
                    <h2 className={"hero__text hero__text--2"}>
                        this is some <span className={"hero__span"}>text</span>.
                    </h2>
                </div>
            </div>
        </HeroCont>
    );
};

export default Hero;
