import { useTranslation } from "react-i18next";

export function StackTechnology() {
  const { t } = useTranslation();
  return (
    <div className="mt-20 lg:mt-[100px]">
      <h1 className="mb-8 text-[32px] font-bold text-white lg:mb-[52px] lg:text-[54px]">
        {t("main.stack-technology.title")}
      </h1>
      <div className="h-[108px]"></div>
    </div>
  );
}
