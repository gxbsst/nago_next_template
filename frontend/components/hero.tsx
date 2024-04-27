"use client";
import "keen-slider/keen-slider.min.css";
import {useKeenSlider} from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import _ from "lodash";
import React from "react";
import {useState} from "react";
import Container from "./container";
import {cn} from "@nago/utils/ui";
import NextImage from "next/image";
import clsx from "clsx";

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
      )}
    </svg>
  );
}

export default function Hero(props: { content?: string; heros: any[], className?: string }) {

  const [isLoading, setLoading] = useState(true);

  const {heros, className} = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);


  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: 'snap',
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);

      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false

      function clearNextTimeout() {
        clearTimeout(timeout)
      }

      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }

      nextTimeout()

      slider.container.addEventListener("mouseover", () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)


    },
  });

  return (
    <>
      <div className={cn('navigation-wrapper h-auto', className)}>
        <div ref={sliderRef} className="keen-slider">
          {_.map(
            heros,
            ({node: {title, ename, featuredImage, id}}) => {
              return (
                <div
                  key={id}
                  className="keen-slider__slide relative max-h-[1080px] min-h-[567px] overflow-auto w-full h-full"
                >
                  <NextImage
                    width={1920}
                    height={1080}
                    className={clsx(
                      'group-hover:opacity-75 object-cover',
                      'duration-700 ease-in-out',
                      'object-cover w-full h-full max-h-[1080px]',
                      isLoading ? 'opacity-0' : 'opacity-100'
                    )}
                    src={featuredImage?.node.sourceUrl}
                    onLoadingComplete={() => setLoading(false)}
                    alt={title}
                  />
                  <Container className="relative px-[112px]">
                    <section className="absolute bottom-20 text-white">
                      <h1 className="text-[46px] font-hmBLK">{title}</h1>
                      <h3 className="font-arial">{ename?.ename}</h3>
                    </section>

                    {loaded && instanceRef.current && (
                      <div className="dots absolute bottom-4 left-1/2 -translate-x-1/2">
                        {[
                          // @ts-ignore
                          ...Array(
                            instanceRef.current.track.details.slides.length,
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceRef.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" + (currentSlide === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Container>
                </div>
              );
            },
          )}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
}