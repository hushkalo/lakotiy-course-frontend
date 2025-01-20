import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button.tsx";

export function WelcomeBlock() {
  const { t } = useTranslation();
  return (
    <div className="rounded-b-[30px] bg-custom-black pb-[60px] pt-16 lg:pb-24 lg:pt-[190px]">
      <div className="container m-auto space-y-[60px] px-4 lg:space-y-[124px] lg:px-5">
        <div className="flex flex-col space-y-[60px] lg:items-center lg:justify-between lg:space-y-[84px]">
          <div className="flex w-full flex-col items-center space-y-6 lg:flex-row lg:items-start lg:space-y-0">
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
            <div className="lg:flex lg:w-1/2 lg:justify-center">
              <iframe
                src={`https://www.youtube.com/embed/${import.meta.env.VITE_YOUTUBE_VIDEO_PREVIEW_ID}
                `}
                title="YouTube video player"
                className="h-[435px] w-[245px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
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
      </div>
    </div>
  );
}
