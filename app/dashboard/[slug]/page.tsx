import Course from "@/components/Course";
import CourseOffering from "@/components/CourseOffering";
import CourseType from "@/components/CourseType";
import StudentRegistration from "@/components/StudentRegistration";
import { notFound } from "next/navigation";

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const componentMap: Record<string, React.ReactNode> = {
    coursetype: <CourseType />,
    course: <Course />,
    courseoffering: <CourseOffering />,
    studentregisteration: <StudentRegistration />,
  };

  const content = componentMap[params.slug];

  if (!content) {
    notFound();
  }

  return content;
}
