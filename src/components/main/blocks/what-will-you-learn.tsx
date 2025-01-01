import { useTranslation } from "react-i18next";

import { StackTechnology } from "./stack-technology.tsx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";

function AccordionBlock({
  contentBlocks,
}: {
  contentBlocks: { title: string; content: string }[];
}) {
  return (
    <Accordion type="multiple" className="w-full">
      {contentBlocks.map(({ title, content }, i) => (
        <AccordionItem value={`item_${i}`} key={i} className="pb-5 pt-3">
          <AccordionTrigger>
            <div className="relative flex items-center">
              <div className="absolute flex h-8 w-10 items-center justify-center rounded-full border border-default">
                <p className="text-default">0{i + 1}</p>
              </div>
              <p className="pl-14">{title}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p>{content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function WhatWillYouLearn() {
  const { t } = useTranslation();

  const contentBlocks = [
    {
      title: t("main.what-will-your-learn.blocks.block1.title"),
      content: t("main.what-will-your-learn.blocks.block1.content"),
    },
    {
      title: t("main.what-will-your-learn.blocks.block2.title"),
      content: t("main.what-will-your-learn.blocks.block2.content"),
    },
    {
      title: t("main.what-will-your-learn.blocks.block3.title"),
      content: t("main.what-will-your-learn.blocks.block3.content"),
    },
  ];

  return (
    <div
      id="learn"
      className="relative overflow-hidden rounded-[30px] bg-custom-black pb-[60px] pt-12 lg:pb-20 lg:pt-[100px]"
    >
      <img
        src={"/assets/main/what-will-learn-block/bg-image.svg"}
        alt=""
        className="absolute left-0 top-1/3 hidden lg:block"
      />
      <img
        src={"/assets/main/what-will-learn-block/bg-image.svg"}
        alt=""
        className="absolute -right-10 top-[60%] hidden -scale-x-100 lg:block"
      />
      <div className="container m-auto px-4 lg:px-5">
        <div className="flex flex-col text-white lg:flex-row lg:justify-between">
          <div className="mb-[43px] lg:mb-0 lg:w-[38%]">
            <h1 className="text-start text-[32px] font-bold lg:text-[54px]">
              {t("main.what-will-your-learn.title")}
            </h1>
            <a
              href={"#program"}
              className="yakor hover-bg mt-[78px] hidden w-max rounded-xl bg-[#5A61F0] px-10 py-5 text-[22px] font-semibold lg:block"
            >
              {t("main.what-will-your-learn.button.content")}
            </a>
          </div>
          <div className="hidden w-1/2 lg:block">
            {contentBlocks.map(({ title, content }, i) => {
              return (
                <div key={i} className="group">
                  <div className="relative mb-[32px] rounded-[30px] group-hover:bg-custom-gradient lg:mb-0">
                    <div className="py-12 pl-[30px] pr-[20px]">
                      <div className="flex items-start justify-between">
                        <div className="mb-4 mb-[32px] flex flex-row flex-col items-start">
                          <div className="flex h-10 w-12 items-center justify-center rounded-full border border-default group-hover:bg-default">
                            <p className="text-lg text-default group-hover:text-white">
                              0{i + 1}
                            </p>
                          </div>
                          <h3 className="ml-0 ml-4 mt-2 mt-[29px] text-2xl text-xl font-bold">
                            {title}
                          </h3>
                        </div>
                        <img
                          src={
                            "/assets/main/what-will-learn-block/arrow-down.svg"
                          }
                          alt="arrow down"
                          className={`hidden h-[40px] w-[40px] transition-all duration-500`}
                        />
                      </div>
                      <p className="max-h-full overflow-hidden text-lg font-normal leading-tight transition-all duration-500 ease-in-out">
                        {content}
                      </p>
                    </div>
                    <hr className="absolute ml-[30px] mt-0 mt-3 w-[91.1%] w-full group-hover:hidden" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:hidden">
            <AccordionBlock contentBlocks={contentBlocks} />
          </div>
        </div>
        <StackTechnology />
      </div>
    </div>
  );
}
