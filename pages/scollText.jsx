import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const HeroCont = styled.section`
    height: 6000px;
    width: 40%;
    margin-top: 330px;
    position: relative;

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
            const text2 = self.selector(".hero__text--2");
            const text3 = self.selector(".hero__text--3");
            const text4 = self.selector(".hero__text--4");
            const text5 = self.selector(".hero__text--5");

            gsap.to(text1, {
                y: () => ScrollTrigger.maxScroll(window) * 0.5,
                scrollTrigger: {
                    trigger: text1,
                    start: 0,
                    end: "max",
                    markers: true,
                    scrub: true,
                },
            });

            gsap.to(text2, {
                y: () => ScrollTrigger.maxScroll(window) * 0.5,
                scrollTrigger: {
                    trigger: text2,
                    start: 0,
                    end: "bottom",
                    markers: true,
                    scrub: true,
                },
            });

            gsap.to(text3, {
                y: () => ScrollTrigger.maxScroll(window) * 0.5,
                scrollTrigger: {
                    trigger: text3,
                    start: 0,
                    end: "max",
                    markers: true,
                    scrub: true,
                },
            });
            gsap.to(text4, {
                y: () => ScrollTrigger.maxScroll(window) * 0.5,
                scrollTrigger: {
                    trigger: text4,
                    start: 0,
                    end: "max",
                    markers: true,
                    scrub: true,
                },
            });
            gsap.to(text5, {
                y: () => ScrollTrigger.maxScroll(window) * 0.5,
                scrollTrigger: {
                    trigger: text5,
                    start: 0,
                    end: "max",
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
                <h2 className={"hero__text hero__text--1"}>
                    this is some <span className={"hero__span"}>text</span>.
                </h2>
                <h2 className={"hero__text hero__text--2"}>
                    this is some <span className={"hero__span"}>text</span>.
                </h2>
                <h2 className={"hero__text hero__text--3"}>
                    this is some <span className={"hero__span"}>text</span>.
                </h2>
                <h2 className={"hero__text hero__text--4"}>
                    this is some <span className={"hero__span"}>text</span>.
                </h2>
                <h2 className={"hero__text hero__text--5"}>
                    this is some <span className={"hero__span"}>text</span>.
                </h2>
            </div>
        </HeroCont>
    );
};

export default Hero;
