import { useTranslation } from "react-i18next";

import { managerLink } from "@/components/contants";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      id="contacts"
      className="w-full bg-[#0c0c0c] pb-[30px] pt-12 lg:pt-[100px]"
    >
      <div className="container m-auto px-4 lg:px-5">
        <div className="mb-[38px] flex flex-col justify-between lg:mb-[58px] lg:flex-row">
          <div className="order-1 mr-[183px] flex w-full flex-col items-center font-normal text-white lg:w-[120px] lg:items-start xl:w-[202px] 2xl:w-[25%]">
            <a href="/">
              <img src={"/assets/header/logo-master.svg"} alt="Logo" />
            </a>
            <p className="mt-[14px] text-sm lg:mt-[18px] xl:pr-16">
              {t("footer.logo-text")}
            </p>
            <a
              rel="noreferrer"
              href={managerLink}
              target="_blank"
              className="hover-bg mt-[55px] rounded-xl bg-[#5A61F0] px-10 py-4 text-lg font-semibold lg:py-5 lg:text-[22px]"
            >
              {t("footer.button")}
            </a>
          </div>
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="order-4 hidden h-[68px] w-[68px] items-center justify-center self-end rounded-xl bg-[#ffffff17] transition duration-500 hover:opacity-80 lg:flex"
          >
            <img
              src={"/assets/main/what-will-learn-block/arrow-up.svg"}
              alt="Arrow up"
            />
          </button>
        </div>
        <hr className="line mb-[30px]" />
        <div className="flex flex-col items-center text-sm font-normal text-[#9E9E9E] lg:flex-row lg:items-start lg:justify-center lg:text-base">
          <p>{t("footer.terms.text1")}</p>
          <div className="ml-3 mt-2 flex lg:mt-0">
            <a
              href="/terms"
              target="_blank"
              className="yakor underline hover:no-underline"
            >
              <p>{t("footer.terms.text2")}</p>
            </a>
            <p className="mx-1">{t("footer.terms.text3")}</p>
            <a
              href="/terms"
              target="_blank"
              className="yakor underline hover:no-underline"
            >
              <p>{t("footer.terms.text4")}</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
