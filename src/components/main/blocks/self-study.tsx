import { useTranslation } from "react-i18next";

export function SelfStudy() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden rounded-b-[30px] pb-[60px] pt-12 lg:pb-24 lg:pt-[100px]">
      <img
        src="/assets/common/bg-image.svg"
        alt="Background image"
        className="absolute -bottom-20 -right-3 hidden -scale-x-100 scale-y-100 lg:block"
      />
      <div className="container m-auto px-4 lg:px-5">
        <div className="flex flex-col lg:mt-[50px] lg:justify-between xl:flex-row">
          <div className="z-10 mb-6 rounded-3xl bg-dark-gradient p-5 text-white lg:mb-10 lg:p-32 xl:mb-0 xl:w-[48%] xl:p-[30px] xl:pb-10">
            <div className="lg:hover:bg-grad relative max-w-max rounded-[30px] border border-[#DFE1F8] bg-inherit px-[14px] py-[10px] after:-z-10 lg:px-5 lg:py-3">
              <p className="text-sm font-medium text-[#DFE1F8]">
                {t("self-educate.self-educate.block1.head.tag")}
              </p>
            </div>
            <div className="my-8 lg:my-12">
              <h1 className="text-[26px] font-extrabold lg:text-[32px]">
                {t("self-educate.self-educate.block1.body.title")}
              </h1>
              <p className="mb-8 mt-2 text-lg font-normal leading-tight lg:mb-12 lg:mt-4">
                {t("self-educate.self-educate.block1.body.content")}
              </p>
            </div>
            <ul className="list-disc pl-5 text-base font-semibold lg:text-lg">
              <li className="mb-3">
                <p className="ml-1">
                  {t("self-educate.self-educate.block1.body.list.item1")}
                </p>
              </li>
              <li className="mb-3">
                <p className="ml-1">
                  {t("self-educate.self-educate.block1.body.list.item2")}
                </p>
              </li>
              <li className="mb-3">
                <p className="ml-1">
                  {t("self-educate.self-educate.block1.body.list.item3")}
                </p>
              </li>
              <li className="mb-3">
                <p className="ml-1">
                  {t("self-educate.self-educate.block1.body.list.item4")}
                </p>
              </li>
              <li>
                <p className="ml-1">
                  {t("self-educate.self-educate.block1.body.list.item5")}
                </p>
              </li>
            </ul>
            <a
              href="#buy"
              className="hover-bg mb-8 mt-[48px] block w-full rounded-xl bg-[#5A61F0] px-10 py-4 text-center text-lg font-semibold lg:mb-0 lg:mr-32 lg:w-max lg:py-5 lg:text-[22px] xl:mr-10"
            >
              {t("self-educate.self-educate.block1.body.button")}
            </a>
          </div>
          <div className="mb-6 rounded-3xl bg-light-gradient p-5 text-black lg:mb-10 lg:p-32 xl:mb-0 xl:w-[48%] xl:p-[30px] xl:pb-10">
            <h1 className="text-[20px] font-extrabold lg:text-[24px]">
              {t("self-educate.self-educate.block2.title")}
            </h1>
            <div className="flex flex-wrap justify-between">
              <div className="mt-5 flex items-start sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/self-educate/list-type.svg"} alt="" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t("self-educate.self-educate.block2.list.item1.title")}
                  </p>
                  <p>
                    {t("self-educate.self-educate.block2.list.item1.content")}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/self-educate/list-type.svg"} alt="" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t("self-educate.self-educate.block2.list.item2.title")}
                  </p>
                  <p>
                    {t("self-educate.self-educate.block2.list.item2.content")}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/self-educate/list-type.svg"} alt="" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t("self-educate.self-educate.block2.list.item3.title")}
                  </p>
                  <p>
                    {t("self-educate.self-educate.block2.list.item3.content")}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/self-educate/list-type.svg"} alt="" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t("self-educate.self-educate.block2.list.item4.title")}
                  </p>
                  <p>
                    {t("self-educate.self-educate.block2.list.item4.content")}
                  </p>
                </div>
              </div>
              <div className="mb-[30px] mt-5 flex items-start sm:mb-0 sm:w-[45%] lg:mt-8 lg:w-[48%]">
                <img src={"/assets/self-educate/list-type.svg"} alt="" />
                <div className="ml-2">
                  <p className="mb-2 text-lg font-semibold">
                    {t("self-educate.self-educate.block2.list.item6.title")}
                  </p>
                  <p>
                    {t("self-educate.self-educate.block2.list.item6.content")}
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
