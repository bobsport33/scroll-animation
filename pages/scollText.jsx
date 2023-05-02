import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const HeroCont = styled.section`
    height: 10000px;
    width: 100%;

    .container {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .heading {
        color: rgb(250, 250, 250);
        font-size: 36px;
        text-align: center;
        width: 100%;
    }

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
            const text1 = self.selector(".heading");
            const text1Other = self.selector(".heading--text");
            const name = self.selector(".heading--span");
            const textCont = self.selector(".heading-container");
            const text2 = self.selector(".hero__text--2");
            const textCont2 = self.selector(".text-container--2");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container",
                    start: "top top",
                    end: "+=10000",
                    scrub: 1,
                },
            });

            tl.fromTo(text1, { scale: 3 }, { scale: 1 })
                .to(text1Other, {
                    opacity: 0,
                })
                .to(name, {
                    x: -500,
                });
            // tl.fromTo(
            //     text1,
            //     { opacity: 1 },
            //     {
            //         opacity: 0,
            //         scrollTrigger: {
            //             trigger: text1,
            //             markers: true,
            //             start: "center center",
            //             end: "=+500",
            //             scrub: true,
            //         },
            //     }
            // );

            // tl.fromTo(
            //     text2,
            //     {
            //         scale: 3,
            //         opacity: 0,
            //     },
            //     {
            //         scale: 1,
            //         opacity: 0.5,
            //         y: () => ScrollTrigger.maxScroll(window) * 0.4,
            //         scrollTrigger: {
            //             trigger: textCont2,
            //             start: "top center",
            //             end: "bottom center",
            //             markers: true,
            //             scrub: true,
            //         },
            //     }
            // );
        }, container);
    }, []);
    return (
        <HeroCont>
            <div className="container" ref={container}>
                <div className="heading-container">
                    <h1 className={"heading"}>
                        <span className={"heading--text"}>this is some </span>
                        <span className={"heading--span"}>text</span>
                        <span className={"heading--text"}>.</span>
                    </h1>
                </div>
                {/* <div className="text-container text-container--2">
                    <h2 className={"hero__text hero__text--2"}>
                        this is some <span className={"hero__span"}>text</span>.
                    </h2>
                </div> */}
            </div>
        </HeroCont>
    );
};

export default Hero;
