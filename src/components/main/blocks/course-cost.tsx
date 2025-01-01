import { useTranslation } from "react-i18next";

export function CourseCost() {
  const { t } = useTranslation();

  return (
    <div
      id="cost"
      className={
        "relative z-0 overflow-hidden rounded-[30px] bg-custom-black pb-[60px] pt-[60px] text-white lg:pb-24 lg:pt-[100px]"
      }
    >
      <div className="container m-auto px-4 text-black lg:px-5">
        <h1 className="mb-[30px] text-[32px] font-bold leading-snug text-white lg:mb-[50px] lg:text-[54px]">
          {t("self-educate.cost-course.title")}
        </h1>
        <div className="bg-dark-gradient flex flex-col rounded-3xl p-5 text-white lg:flex-row lg:p-[30px] lg:pb-10">
          <div className="flex flex-col justify-between lg:w-[38%]">
            <div className="text-[26px] font-extrabold lg:text-[32px]">
              <p className="mb-2 text-lg font-normal lg:mb-4">
                {t("self-educate.cost-course.blocks.block1.head.label")}
              </p>
              <h1>{t("self-educate.cost-course.blocks.block1.head.title1")}</h1>
              <p className="text-sm font-normal">
                {t("self-educate.cost-course.blocks.block1.head.text1")}
                <span className="font-bold">
                  {t("self-educate.cost-course.blocks.block1.head.text2")}
                </span>
              </p>
            </div>
            <div className="my-8 lg:my-12 xl:w-7/12">
              <p className="text-lg font-normal">
                {t("self-educate.cost-course.blocks.block1.body.label")}
              </p>
              <div className="my-2 flex lg:my-4">
                <p className="text-[32px] font-extrabold">
                  {t("self-educate.cost-course.blocks.block1.body.cost")}
                </p>
                <p className="ml-4 text-lg font-normal">
                  {t("self-educate.cost-course.blocks.block1.body.before-cost")}
                </p>
              </div>
              <p className="text-sm font-normal">
                {t("self-educate.cost-course.blocks.block1.body.content")}
              </p>
            </div>

            <a
              href={"#buy"}
              className="hover-bg rounded-xl bg-[#5A61F0] px-10 py-4 text-center text-lg font-semibold text-white sm:w-1/2 sm:self-center lg:mb-0 lg:w-full lg:self-start lg:py-5 lg:text-[22px] xl:w-max"
            >
              {t("self-educate.cost-course.blocks.block1.body.button")}
            </a>
          </div>
          <div className="mb-4 mt-8 w-full bg-[#D2D2D2] max-[1023px]:h-[1px] lg:mx-12 lg:w-[1px]"></div>
          <div className="lg:w-[60%]">
            <p className="text-xl font-bold">
              {t("self-educate.cost-course.blocks.block2.label")}
            </p>
            <div className="flex flex-wrap justify-between">
              <div className="mt-5 flex items-start sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/list/icon.svg"} alt="list icon" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item1.title"
                    )}
                  </p>
                  <p className="text-base">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item1.content"
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/list/icon.svg"} alt="" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item2.title"
                    )}
                  </p>
                  <p className="text-base">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item2.content"
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/list/icon.svg"} alt="" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item3.title"
                    )}
                  </p>
                  <p className="text-base">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item3.content"
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/list/icon.svg"} alt="" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item4.title"
                    )}
                  </p>
                  <p className="text-base">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item4.content"
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/list/icon.svg"} alt="" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item5.title"
                    )}
                  </p>
                  <p className="text-base">
                    {t(
                      "self-educate.cost-course.blocks.block2.list.item5.content"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
