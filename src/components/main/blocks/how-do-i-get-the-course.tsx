import { useTranslation } from "react-i18next";

export function HowDoIGetTheCourse() {
  const { t } = useTranslation();
  return (
    <div
      id="getCourse"
      className="relative z-0 overflow-hidden rounded-[30px] bg-background pt-3 lg:pt-[100px]"
    >
      <div className="container m-auto px-4 lg:px-5">
        <div className="mb-[21px] flex flex-col-reverse lg:mb-[88px] lg:flex-row lg:items-center">
          <h1 className="pt-3 text-[32px] font-bold leading-snug lg:pt-0 lg:text-[54px]">
            {t("self-educate.how-do-i-get-the-course.title")}
          </h1>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-red-hover self-center rounded-xl bg-[#FF4242] px-5 py-4 text-center text-base font-semibold text-white md:w-[60%] lg:ml-[132px] lg:self-end lg:py-5 xl:w-max"
          >
            {t("self-educate.how-do-i-get-the-course.button")}
          </a>
        </div>
        <div className="leading-none lg:relative">
          <img
            src={"/assets/main/how-do-I-get-the-course/line-step.svg"}
            alt="Line steps"
            className="absolute left-8 -z-10 hidden lg:block"
          />
          <div className="mb-10 flex flex-col lg:mb-20 lg:flex-row lg:justify-between">
            <div className="mb-6 flex lg:mb-0">
              <p className="bg-light-violet-gradient h-max rounded-[30px] px-4 py-3 text-sm font-medium text-white lg:px-[21px] lg:py-[10px] lg:text-base">
                {t("self-educate.how-do-i-get-the-course.nameStep")} 1
              </p>
              <div className="ml-8 w-[63%] lg:w-[50%]">
                <p className="pt-2 text-[26px] font-extrabold lg:pt-0 lg:text-[32px]">
                  {t("self-educate.how-do-i-get-the-course.steps.step1.title")}
                </p>
                <p className="mt-4 text-lg font-normal leading-tight">
                  {t(
                    "self-educate.how-do-i-get-the-course.steps.step1.content"
                  )}
                </p>
              </div>
            </div>
            <div className="relative self-center rounded-3xl lg:h-[320px] lg:w-[600px]">
              <img
                src={"/assets/main/how-do-I-get-the-course/image-item1.png"}
                alt="Image step 1"
              />
              <img
                src={"/assets/main/how-do-I-get-the-course/svg1-image1.svg"}
                alt="Svg image 1"
                className="absolute -right-[90px] -top-7 -z-10 hidden lg:block"
              />
            </div>
          </div>
          <div className="mb-10 flex flex-col lg:mb-20 lg:flex-row lg:justify-between">
            <div className="mb-6 flex lg:mb-0 lg:w-1/2">
              <p className="bg-light-violet-gradient h-max rounded-[30px] px-4 py-3 text-sm font-medium text-white lg:px-[21px] lg:py-[10px] lg:text-base">
                {t("self-educate.how-do-i-get-the-course.nameStep")} 2
              </p>
              <div className="ml-8 w-[68%] lg:w-[58%]">
                <p className="pt-2 text-[26px] font-extrabold lg:pt-0 lg:text-[32px]">
                  {t("self-educate.how-do-i-get-the-course.steps.step2.title")}
                </p>
                <p className="mt-4 text-lg font-normal">
                  {t(
                    "self-educate.how-do-i-get-the-course.steps.step2.content"
                  )}
                </p>
              </div>
            </div>
            <div className="w-[600px] self-center rounded-2xl drop-shadow-[1px_5px_5px_rgba(0,0,0,0.25)] lg:h-[323px]" />
          </div>
          <div className="mb-10 flex flex-col lg:mb-20 lg:flex-row lg:justify-between">
            <div className="mb-6 flex lg:mb-0 lg:w-1/2">
              <p className="bg-light-violet-gradient h-max rounded-[30px] px-4 py-3 text-sm font-medium text-white lg:px-[21px] lg:py-[10px] lg:text-base">
                {t("self-educate.how-do-i-get-the-course.nameStep")} 3
              </p>
              <div className="ml-8 w-[50%]">
                <p className="pt-2 text-[26px] font-extrabold lg:pt-0 lg:text-[32px]">
                  {t("self-educate.how-do-i-get-the-course.steps.step3.title")}
                </p>
                <p className="mt-4 text-lg font-normal">
                  {t(
                    "self-educate.how-do-i-get-the-course.steps.step3.content"
                  )}
                </p>
              </div>
            </div>

            <img
              src={"/assets/main/how-do-I-get-the-course/image-item3.png"}
              alt=""
              className="w-[600px] self-center rounded-3xl drop-shadow-[1px_5px_5px_rgba(0,0,0,0.25)]"
            />
          </div>
          <div className="mb-10 flex flex-col lg:mb-20 lg:flex-row lg:justify-between">
            <div className="mb-6 flex lg:mb-0 lg:w-1/2">
              <p className="bg-light-violet-gradient h-max rounded-[30px] px-4 py-3 text-sm font-medium text-white lg:px-[21px] lg:py-[10px] lg:text-base">
                {t("self-educate.how-do-i-get-the-course.nameStep")} 4
              </p>
              <div className="ml-8 w-[55%]">
                <p className="pt-2 text-[26px] font-extrabold lg:pt-0 lg:text-[32px]">
                  {t("self-educate.how-do-i-get-the-course.steps.step4.title")}
                </p>
                <p className="mt-4 text-lg font-normal">
                  {t(
                    "self-educate.how-do-i-get-the-course.steps.step4.content"
                  )}
                </p>
              </div>
            </div>
            <img
              src={"/assets/main/how-do-I-get-the-course/image-item4.png"}
              alt=""
              className="w-[600px] self-center rounded-2xl drop-shadow-[1px_5px_5px_rgba(0,0,0,0.25)] lg:h-[320px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
