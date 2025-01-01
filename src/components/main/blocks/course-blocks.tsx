import { useTranslation } from "react-i18next";

export function CourseLecturers() {
  const { t } = useTranslation();
  return (
    <div
      id="lecturers"
      className="bg-white pb-[60px] pt-[60px] lg:pb-20 lg:pt-[100px]"
    >
      <div className="container m-auto px-4 lg:px-5">
        <div className="w-full">
          <h1 className="mb-[30px] text-[32px] font-bold lg:mb-[80px] lg:text-[54px]">
            {t("main.course-lecturers.title")}
          </h1>
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="lg:relative lg:w-[43%] xl:w-[35%]">
              <span className="bg-gradient relative hidden h-[247px] w-[247px] rounded-full bg-black bg-cover lg:block" />

              <div className="absolute right-0 top-0 hidden rounded-full border-[3px] border-white lg:block">
                <div className="bg-gradient relative h-[247px] w-[247px] rounded-full bg-black bg-cover" />
              </div>
              <div className="flex flex-col lg:flex-row lg:pt-[34px]">
                <div className="flex items-center lg:pr-[84px]">
                  <span className="bg-gradient relative h-[164px] w-[164px] rounded-full bg-black bg-cover lg:hidden" />
                  <div className="pl-4 lg:pl-0">
                    <p className="text-lg font-bold">
                      {t("main.course-lecturers.block1.lecture1-name")}
                    </p>
                    <div className="flex justify-between pt-4 lg:justify-start lg:pt-6">
                      <a
                        href="https://instagram.com/qa.masters?igshid=YmM0MjE2YWMzOA=="
                        target="_blank"
                        rel="noreferrer"
                        className="h-[42px] w-[42px] rounded-2xl transition duration-500 lg:h-[44px] lg:w-[52px] lg:hover:bg-[#5a61f051]"
                      >
                        <img
                          src={
                            "/assets/main/course-lecturers-block/instagram.svg"
                          }
                          alt="Instagram"
                          className=""
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/dimaoleiko/"
                        target="_blank"
                        rel="noreferrer"
                        className="h-[42px] w-[42px] rounded-2xl transition duration-500 lg:mx-2 lg:h-[44px] lg:w-[52px] lg:hover:bg-[#5a61f051]"
                      >
                        <img
                          src={
                            "/assets/main/course-lecturers-block/linkedin.svg"
                          }
                          alt="LinkedIn"
                        />
                      </a>
                      <a
                        href="https://t.me/qa_masters_admin"
                        target="_blank"
                        rel="noreferrer"
                        className="h-[42px] w-[42px] rounded-2xl transition duration-500 lg:h-[44px] lg:w-[52px] lg:hover:bg-[#5a61f051]"
                      >
                        <img
                          src={
                            "/assets/main/course-lecturers-block/telegram.svg"
                          }
                          alt="Telegram"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-center lg:pr-[84px]">
                  <span className="bg-gradient bg-bg-black relative h-[164px] w-[164px] rounded-full bg-cover lg:hidden" />
                  <div className="pr-4 lg:pr-0">
                    <p className="text-lg font-bold">
                      {t("main.course-lecturers.block1.lecture2-name")}
                    </p>
                    <div className="flex justify-between pt-4 lg:justify-start lg:pt-6">
                      <a
                        href="https://instagram.com/qa.masters?igshid=YmM0MjE2YWMzOA=="
                        target="_blank"
                        rel="noreferrer"
                        className="h-[42px] w-[42px] rounded-2xl transition duration-500 lg:h-[44px] lg:w-[52px] lg:hover:bg-[#5a61f051]"
                      >
                        <img
                          src={
                            "/assets/main/course-lecturers-block/instagram.svg"
                          }
                          alt="Instagram"
                          className=""
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/tarasruskyi/"
                        target="_blank"
                        rel="noreferrer"
                        className="h-[42px] w-[42px] rounded-2xl transition duration-500 lg:mx-2 lg:h-[44px] lg:w-[52px] lg:hover:bg-[#5a61f051]"
                      >
                        <img
                          src={
                            "/assets/main/course-lecturers-block/linkedin.svg"
                          }
                          alt="LinkedIn"
                        />
                      </a>
                      <a
                        href="https://t.me/qa_masters_admin"
                        target="_blank"
                        rel="noreferrer"
                        className="h-[42px] w-[42px] rounded-2xl transition duration-500 lg:h-[44px] lg:w-[52px] lg:hover:bg-[#5a61f051]"
                      >
                        <img
                          src={
                            "/assets/main/course-lecturers-block/telegram.svg"
                          }
                          alt="Telegram"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-[30px] lg:w-[53%] lg:pt-0">
              <div>
                <img
                  src={"/assets/main/course-lecturers-block/comma.svg"}
                  alt="comme"
                />
              </div>
              <p className="mt-5 text-lg font-normal leading-tight">
                {t("main.course-lecturers.block2.text1")}
              </p>
              <p className="mt-6 text-lg font-normal leading-tight">
                {t("main.course-lecturers.block2.text2")}
              </p>
              <div className="mt-5 self-end lg:mt-[41px]">
                <img
                  src={"/assets/main/course-lecturers-block/comma.svg"}
                  alt="comme"
                  className="-scale-x-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
