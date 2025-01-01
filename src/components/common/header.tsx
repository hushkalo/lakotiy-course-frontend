import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { managerLink } from "@/components/contants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface IHeaderProps {
  links: {
    linkId: string;
    nameLink: string;
  }[];
}

export function Header({ links }: IHeaderProps) {
  const { t } = useTranslation();
  useEffect(() => {
    if (location.hash) {
      location.href = location.hash;
    }
  }, []);
  return (
    <header className="fixed z-50 w-full bg-[#0c0c0c] lg:bg-[#0c0c0cf6]">
      <div className="container m-auto flex items-center justify-between p-3 lg:px-5 lg:pt-7">
        <Link href="/" className="h-[37px] w-[99px] lg:h-[72px] lg:w-[179px]">
          <img src={"/assets/header/logo-master.svg"} alt="Logo Master" />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-inherit">
              <img src={"/assets/header/menu.svg"} alt="Burger svg" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            isHiddenIconClose
            className="flex h-dvh w-sidebar flex-col justify-between rounded-bl-2xl rounded-tl-2xl bg-white p-4"
          >
            <div>
              <SheetHeader>
                <SheetTitle className="sr-only">Burger</SheetTitle>
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <img
                      src={"/assets/header/logo-master-mobile.svg"}
                      className="h-[47px] w-[119px]"
                      alt="Logo Master"
                    />
                  </Link>

                  <SheetClose>
                    <img src={"/assets/header/close.svg"} alt="Close" />
                  </SheetClose>
                </div>
              </SheetHeader>
              <div className="flex flex-col justify-between">
                <nav className="mt-[40px]">
                  <ul className="flex list-none flex-col text-[#0C0C0C]">
                    {links.map(({ linkId, nameLink }, i) => (
                      <li
                        key={i}
                        className="border-0 border-b border-[#D2D2D2] py-4 text-lg font-medium"
                      >
                        <SheetClose asChild>
                          <Link href={linkId}>{t(nameLink)}</Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <SheetFooter className="block w-full">
              <Button asChild className="h-auto w-full px-10 py-4">
                <a href={managerLink} target="_blank" rel="noreferrer">
                  {t("header.button.content")}
                </a>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
