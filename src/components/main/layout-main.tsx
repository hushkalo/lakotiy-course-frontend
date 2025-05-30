import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { CourseCost } from "./blocks/course-cost";
import { CourseForYou } from "./blocks/course-for-you";
import { QuestionsAndAnswers } from "./blocks/questions-and-answers";
import { WelcomeBlock } from "./blocks/welcome-block";
import { WhatWillYouLearn } from "./blocks/what-will-you-learn";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { FullCourseProgram } from "@/components/main/blocks/full-course-program.tsx";
import { GetCourse } from "@/components/main/blocks/get-course.tsx";
import { HowDoIGetTheCourse } from "@/components/main/blocks/how-do-i-get-the-course.tsx";
import { SelfStudy } from "@/components/main/blocks/self-study.tsx";
import { cn } from "@/lib/utils.ts";

export function MainLayout() {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    async function fetchQuantity() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/api/course/quantity"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuantity(data.quantity);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchQuantity();
  }, []);
  const links = [
    {
      linkId: "#course",
      nameLink: "header.navigation.for-course",
    },
    {
      linkId: "#learn",
      nameLink: "header.navigation.what-do-you-learn",
    },
    {
      linkId: "#program",
      nameLink: "header.navigation.program",
    },
    {
      linkId: "#getCourse",
      nameLink: "header.navigation.how-get-course",
    },
    {
      linkId: "#cost",
      nameLink: "header.navigation.cost",
    },
    {
      linkId: "#buy",
      nameLink: "header.navigation.buy",
    },
    {
      linkId: "#questions",
      nameLink: "header.navigation.questions",
    },
  ];
  return (
    <>
      <Header links={links} />
      <main className="h-full w-full">
        <WelcomeBlock />
        <CourseForYou />
        <WhatWillYouLearn />
        <SelfStudy />
        <FullCourseProgram />
        <HowDoIGetTheCourse />
        <CourseCost />
        <GetCourse />
        <QuestionsAndAnswers />
      </main>
      <Footer />
      <div
        className={cn(
          "border-1 fixed bottom-1 right-1 z-50 rounded border-white bg-red-600 p-4 text-white",
          {
            hidden: isLoading,
          }
        )}
      >
        <p className="text-white">
          {t("badge.text", {
            quantity: quantity,
          })}
        </p>
      </div>
    </>
  );
}
