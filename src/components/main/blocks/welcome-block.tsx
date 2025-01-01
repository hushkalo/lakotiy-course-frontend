import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button.tsx";

export function WelcomeBlock() {
  const list = [
    {
      title: "main.welcome.box-content.section1.title",
      content: "main.welcome.box-content.section1.content",
    },
    {
      title: "main.welcome.box-content.section2.title",
      content: "main.welcome.box-content.section2.content",
    },
    {
      title: "main.welcome.box-content.section3.title",
      content: "main.welcome.box-content.section3.content",
    },
    {
      title: "main.welcome.box-content.section4.title",
      content: "main.welcome.box-content.section4.content",
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="rounded-b-[30px] bg-custom-black pb-[60px] pt-12 lg:pb-24 lg:pt-[190px]">
      <div className="container m-auto space-y-[60px] px-4 lg:space-y-[124px] lg:px-5">
        <div className="flex flex-col space-y-[60px] lg:items-center lg:justify-between lg:space-y-[84px]">
          <div className="flex w-full flex-col items-center space-y-6 lg:flex-row lg:items-end lg:space-y-0">
            <div className="lg:w-1/2">
              <p className="flex items-center align-middle text-sm font-medium uppercase leading-tight text-white lg:text-xl">
                {t("main.welcome.title-text.text1")}
              </p>
              <p className="py-4 text-[56px] font-extrabold uppercase leading-none tracking-[0.56px] text-white lg:text-[84px]">
                {t("main.welcome.title-text.text2")}
              </p>
              <p className="text-sm font-medium leading-none text-white">
                {t("main.welcome.title-text.text3")}
              </p>
            </div>
            <div className="h-[181px] w-[255px] bg-white lg:h-[378px] lg:w-[535px]" />
          </div>
          <div className="flex w-full flex-col items-center space-y-[40px] lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full lg:w-1/2">
              <Button
                asChild
                className="h-auto w-full px-10 py-5 font-semibold lg:w-max"
              >
                <a href={"#cost"}>{t("main.welcome.button.content")}</a>
              </Button>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-base leading-6 text-white lg:w-[500px] lg:text-lg">
                {t("main.welcome.under-text.text1")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-y-0 lg:rounded-3xl lg:bg-[#1F1F26] lg:py-5">
          {list.map((item, index) => (
            <div
              key={`${item.title}_${index}`}
              className="rounded-2xl bg-custom-gray px-4 py-6 leading-none text-white lg:w-[25%] lg:bg-none lg:pl-[38px] lg:pr-[30px]"
            >
              <p className="text-default mb-3 text-[26px] font-extrabold lg:mb-4 lg:text-[32px]">
                {t(item.title)}
              </p>
              <p className="text-base font-medium lg:text-lg">
                {t(item.content)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
