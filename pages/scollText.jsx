import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const HeroCont = styled.section`
    width: 100%;

    .container {
        height: calc(100vh + 20000px);
        width: 100%;
    }

    .heading-container {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .heading,
    .hero__text {
        color: rgb(250, 250, 250);
        font-size: 36px;
        text-align: center;
        width: 100%;
    }

    .text-container {
        position: fixed;
        top: 0;
        height: 100vh;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        &--2 {
            opacity: 0;
            transform: translateY(30%);
        }
    }

    .hero__span {
        opacity: 0;

        &--1 {
            opacity: 1;
        }
    }
`;

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef(null);
    // const name = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const container = self.selector(".container");
            const text1 = self.selector(".heading");
            const text1Other = self.selector(".heading--text");
            const name = self.selector(".heading--span");
            const textCont = self.selector(".heading-container");
            const text2 = self.selector(".hero__text--2");
            const textCont2 = self.selector(".text-container--2");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=20000",
                    scrub: 1,
                },
            });

            tl.fromTo(text1, { scale: 3 }, { scale: 1 })
                .to(text1Other, {
                    opacity: 0,
                })
                .to(text1, {
                    x: -230,
                })
                .fromTo(
                    textCont2,
                    { y: "30%", opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                    }
                )
                .to(textCont2, { y: "-30%", opacity: 0 });
        }, container);
    }, []);

    return (
        <HeroCont ref={container}>
            <div className="container">
                <div className="heading-container">
                    <h1 className={"heading"}>
                        <span className={"heading--text"}>this is some </span>
                        <span className={"heading--span"}>text</span>
                        <span className={"heading--text"}>.</span>
                    </h1>
                </div>
                <div className="text-container text-container--2">
                    <h2 className={"hero__text hero__text--2"}>
                        <span className={"hero__span"}>text</span> about
                        something.
                    </h2>
                </div>
            </div>
        </HeroCont>
    );
};

export default Hero;
