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

export function MainLayout() {
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
    </>
  );
}
