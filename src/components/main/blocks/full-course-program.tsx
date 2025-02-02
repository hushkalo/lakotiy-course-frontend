import { useState } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils.ts";

export function FullCourseProgram() {
  const { t } = useTranslation();
  const [open, setOpen] = useState("");

  const content = [
    {
      title: t("self-educate.full-course.blocks.block1.title"),
      tag: t("self-educate.full-course.blocks.block1.tag"),
      list: [
        t("self-educate.full-course.blocks.block1.list.item1"),
        t("self-educate.full-course.blocks.block1.list.item2"),
        t("self-educate.full-course.blocks.block1.list.item3"),
      ],
    },
    {
      title: t("self-educate.full-course.blocks.block2.title"),
      tag: t("self-educate.full-course.blocks.block2.tag"),
      list: [
        t("self-educate.full-course.blocks.block2.list.item1"),
        t("self-educate.full-course.blocks.block2.list.item2"),
        t("self-educate.full-course.blocks.block2.list.item3"),
        t("self-educate.full-course.blocks.block2.list.item4"),
        t("self-educate.full-course.blocks.block2.list.item5"),
        t("self-educate.full-course.blocks.block2.list.item6"),
      ],
    },
    {
      title: t("self-educate.full-course.blocks.block3.title"),
      tag: t("self-educate.full-course.blocks.block3.tag"),
      list: [
        t("self-educate.full-course.blocks.block3.list.item1"),
        t("self-educate.full-course.blocks.block3.list.item2"),
        t("self-educate.full-course.blocks.block3.list.item3"),
        t("self-educate.full-course.blocks.block3.list.item4"),
      ],
    },
    {
      title: t("self-educate.full-course.blocks.block4.title"),
      tag: t("self-educate.full-course.blocks.block4.tag"),
      list: [
        t("self-educate.full-course.blocks.block4.list.item1"),
        t("self-educate.full-course.blocks.block4.list.item2"),
        t("self-educate.full-course.blocks.block4.list.item3"),
        t("self-educate.full-course.blocks.block4.list.item4"),
        t("self-educate.full-course.blocks.block4.list.item5"),
      ],
    },
    {
      title: t("self-educate.full-course.blocks.block5.title"),
      tag: t("self-educate.full-course.blocks.block5.tag"),
      list: [t("self-educate.full-course.blocks.block5.list.item1")],
    },
    {
      title: t("self-educate.full-course.blocks.block6.title"),
      tag: t("self-educate.full-course.blocks.block6.tag"),
      isVideo: true,
    },
  ];
  return (
    <div
      id="program"
      className="relative z-0 overflow-hidden rounded-b-[30px] rounded-t-[30px] bg-custom-black pb-[60px] pt-[60px] text-white lg:pb-24 lg:pt-[100px]"
    >
      <div className="container m-auto px-4 lg:px-5">
        <h1 className="mb-[30px] text-[32px] font-bold leading-snug lg:mb-[50px] lg:text-[54px]">
          {t("self-educate.full-course.title")}
        </h1>
        <div className="w-full">
          {content.map(({ title, tag, list, isVideo }, i) => {
            return (
              <div
                key={i}
                className={cn(
                  "lg:hover:hover-bg-question mb-5 cursor-pointer rounded-3xl bg-[#1F1F26] px-4 py-5 lg:px-10 lg:py-[30px]",
                  {
                    "max-[1024px]:hover-bg-question lg:bg-[#1F1F26]":
                      open === `block${i}`,
                  }
                )}
                onClick={() => {
                  setOpen(open === `block${i}` ? "" : `block${i}`);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-[60%] text-lg font-bold lg:flex lg:items-center lg:text-2xl">
                    <p className="mr-[30px] hidden text-[#5A61F0] lg:block">
                      {i + 1}
                    </p>
                    <p>{title}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-3 rounded-[30px] border px-3 py-[5px] text-sm font-normal lg:mr-5 lg:px-5 lg:py-[10.5px] lg:text-base">
                      {tag}
                    </p>
                    <img
                      src={"/assets/main/what-will-learn-block/arrow-down.svg"}
                      alt="Arrow Down"
                      className={cn(
                        "h-[26px] w-[26px] rotate-0 transition-all duration-500 lg:h-12 lg:w-12",
                        {
                          "rotate-180": open === `block${i}`,
                        }
                      )}
                    />
                  </div>
                </div>
                <div
                  className={cn(
                    "max-h-0 overflow-hidden transition-all duration-500",
                    {
                      "max-h-[430px] sm:max-h-[260px] lg:max-h-[250px]":
                        open === `block${i}`,
                      "max-h-[435px] sm:max-h-[435px] lg:max-h-[435px]":
                        open === `block${i}` && isVideo,
                      "flex justify-center": isVideo,
                    }
                  )}
                >
                  {!isVideo ? (
                    <ul className="list-decimal pl-6 pt-5 uppercase lg:p-5">
                      {list && list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${import.meta.env.VITE_YOUTUBE_VIDEO_BONUS_ID}`}
                      title="YouTube video player"
                      className="h-[435px] w-[245px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
