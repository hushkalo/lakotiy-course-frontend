import { useTranslation } from "react-i18next";

export function CourseForYou() {
  const { t } = useTranslation();
  const list = [
    {
      text: "main.course-for-you.blocks.block2.content.list.item1",
    },
    {
      text: "main.course-for-you.blocks.block2.content.list.item2",
    },
    {
      text: "main.course-for-you.blocks.block2.content.list.item3",
    },
  ];
  return (
    <div
      id="course"
      className="bg-white pb-[60px] pt-[60px] lg:pb-20 lg:pt-[100px]"
    >
      <div className="container m-auto px-4 lg:px-5">
        <div className="w-full">
          <h1 className="mb-[30px] text-[32px] font-bold lg:mb-[50px] lg:text-[54px]">
            {t("main.course-for-you.title")}
          </h1>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="rounded-3xl bg-[#F8F8F8] px-5 py-6 lg:w-1/3">
              <img
                src={"/assets/main/course-for-you-block/step1.svg"}
                alt="step1"
              />
              <h3 className="mb-4 mt-6 text-xl font-bold lg:mt-[30px] lg:text-2xl">
                {t("main.course-for-you.blocks.block1.title")}
              </h3>
              <p className="text-lg font-normal leading-tight">
                {t("main.course-for-you.blocks.block1.content")}
              </p>
            </div>
            <div className="my-4 rounded-3xl bg-[#F8F8F8] p-6 lg:mx-10 lg:my-0 lg:w-1/3">
              <img
                src={"/assets/main/course-for-you-block/step2.svg"}
                alt="step2"
              />
              <h3 className="mt-6 text-xl font-bold lg:mt-[30px] lg:text-2xl">
                {t("main.course-for-you.blocks.block2.title")}
              </h3>
              <p className="my-4">
                {t("main.course-for-you.blocks.block2.content.title")}
              </p>
              <ul className="list-none">
                {list.map((item, index) => (
                  <li key={index} className="flex items-start lg:items-center">
                    <img
                      src={"/assets/list/icon.svg"}
                      alt="list type"
                      className="mt-[6px] lg:mt-0"
                    />
                    <p className="pl-[6px] text-lg">{t(item.text)}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[#F8F8F8] p-6 lg:w-1/3">
              <img
                src={"/assets/main/course-for-you-block/step3.svg"}
                alt="step3"
              />
              <h3 className="mb-4 mt-6 text-xl font-bold lg:mt-[30px] lg:text-2xl">
                {t("main.course-for-you.blocks.block3.title")}
              </h3>
              <p className="text-lg font-normal leading-tight">
                {t("main.course-for-you.blocks.block3.content")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
