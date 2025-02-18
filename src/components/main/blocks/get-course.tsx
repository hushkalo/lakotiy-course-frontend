import { useTranslation } from "react-i18next";

//
// import { GetCourseForm } from "./get-course-form.tsx";

import { managerLink, managerLinkInstagram } from "@/components/contants";
import { Button } from "@/components/ui/button.tsx";
import { Icons } from "@/components/ui/icons.tsx";
import { Separator } from "@/components/ui/separator.tsx";

export function GetCourse() {
  const { t } = useTranslation();

  return (
    <div
      id="buy"
      className="relative z-0 overflow-hidden rounded-t-[30px] bg-background pb-[60px] pt-[60px] text-white lg:pb-24 lg:pt-[120px]"
    >
      <div className="container m-auto px-4 text-black lg:px-5">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-8 lg:mb-0">
            <div className="lg:w-11/12">
              <h1 className="mb-[35px] text-[32px] font-bold leading-none text-black lg:text-[54px]">
                {t("self-educate.get-course.blocks.block1.head.title")}
              </h1>
              <ul className="text-base font-normal text-black">
                {/*<li className="after:bg-grad relative mb-4 ml-4 after:absolute after:-left-4 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-full after:content-['']">*/}
                {/*  <p>*/}
                {/*    {t("self-educate.get-course.blocks.block1.head.list.item1")}*/}
                {/*  </p>*/}
                {/*</li>*/}
                <li className="after:bg-grad relative ml-4 after:absolute after:-left-4 after:top-2 after:h-2 after:w-2 after:rounded-full after:content-['']">
                  <p>
                    {t("self-educate.get-course.blocks.block1.head.list.item2")}
                  </p>
                </li>
              </ul>
              <div className="mt-5 px-4">
                <p className="mb-9 hidden text-lg font-normal text-black lg:block">
                  {t("self-educate.get-course.blocks.block1.body.content")}
                </p>
                <a
                  href={managerLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden w-max text-[22px] font-semibold text-default-gradient-to underline underline-offset-2 transition-colors hover:text-default-gradient-from lg:block"
                >
                  {t("self-educate.get-course.blocks.block1.body.link")}
                </a>
              </div>
            </div>
            <Separator className="line my-10 bg-black lg:my-[70px]" />
            <div className="flex flex-col space-y-10">
              <p>{t("self-educate.get-course.blocks.block1.body.text-ways")}</p>
              <div className="flex space-x-4">
                <Button
                  variant="withoutHover"
                  className="h-auto border-[#0088cc] bg-[#0088cc] px-4 py-2 text-white transition-colors hover:border-[#0088cc]/90 hover:bg-[#0088cc]/90 [&_svg]:size-5"
                  asChild
                >
                  <a href={managerLink} target="_blank" rel="noreferrer">
                    <Icons.telegram className="mr-2 size-6" />
                    {t(
                      "self-educate.get-course.blocks.block1.body.button-telegram"
                    )}
                  </a>
                </Button>
                <Button
                  variant="withoutHover"
                  className="h-auto border-transparent bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#F56040] px-4 py-2 text-white transition-opacity hover:bg-inherit hover:opacity-90 [&_svg]:size-7"
                  asChild
                >
                  <a
                    href={managerLinkInstagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icons.instagram className="mr-2" />
                    {t(
                      "self-educate.get-course.blocks.block1.body.button-instagram"
                    )}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/*<GetCourseForm />*/}
        </div>
      </div>
    </div>
  );
}
