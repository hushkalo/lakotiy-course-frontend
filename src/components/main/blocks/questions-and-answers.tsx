import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";

function AccordionItemContent({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionItem
      value={`${title}_${index}`}
      className="rounded-3xl border-none bg-custom-gray px-5 py-4 text-lg hover:bg-custom-gray/70 lg:px-[30px] lg:py-10"
      onClick={() => setIsOpen(!isOpen)}
    >
      <AccordionTrigger className="hover:no-underline" cnArrow="size-10">
        <div className="flex items-center space-x-8 text-lg">
          <p className="text-2xl text-default-gradient-to">{index + 1}</p>
          <p>{t(title)}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-5 text-lg">{t(content)}</AccordionContent>
    </AccordionItem>
  );
}

export function QuestionsAndAnswers() {
  const { t } = useTranslation();
  const listQuestions = [
    {
      title: "self-educate.questions-and-answers.blocks.block1.title",
      content: "self-educate.questions-and-answers.blocks.block1.content",
    },
    {
      title: "self-educate.questions-and-answers.blocks.block2.title",
      content: "self-educate.questions-and-answers.blocks.block2.content",
    },
    {
      title: "self-educate.questions-and-answers.blocks.block3.title",
      content: "self-educate.questions-and-answers.blocks.block3.content",
    },
    {
      title: "self-educate.questions-and-answers.blocks.block4.title",
      content: "self-educate.questions-and-answers.blocks.block4.content",
    },
  ];

  return (
    <div
      id="questions"
      className="relative z-0 overflow-hidden bg-custom-black pb-[60px] pt-[60px] text-white lg:pb-24 lg:pt-[100px]"
    >
      <img
        src="/assets/common/bg-image.svg"
        alt="Background image"
        className="absolute -bottom-7 left-0 -z-[1] hidden lg:block"
      />
      <img
        src="/assets/common/bg-image.svg"
        alt="Background image"
        className="absolute -right-5 top-20 -z-[1] hidden -scale-x-100 lg:block"
      />
      <div className="container m-auto px-4 lg:px-5">
        <h1 className="mb-[30px] text-[32px] font-bold leading-snug lg:mb-[50px] lg:text-[54px]">
          {t("self-educate.questions-and-answers.title")}
        </h1>
        <div className="w-full">
          <Accordion type="single" collapsible className="space-y-6">
            {listQuestions.map((question, index) => (
              <AccordionItemContent
                key={`${question.title}_${index}`}
                title={question.title}
                content={question.content}
                index={index}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
