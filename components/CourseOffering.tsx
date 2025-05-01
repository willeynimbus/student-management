import { Plus, PencilLine, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  createCourseOffering,
  updateCourseOffering,
  deleteCourseOffering,
} from "@/actions/action";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

async function CourseOffering() {
  const courses = await prisma.course.findMany({ orderBy: { id: "asc" } });
  const courseTypes = await prisma.courseType.findMany({
    orderBy: { id: "asc" },
  });

  const courseOfferings = await prisma.courseOffering.findMany({
    orderBy: { id: "asc" },
    include: { course: true, courseType: true },
  });

  return (
    <section>
      <div className="flex justify-start items-center">
        <h1 className="text-3xl font-bold text-orange-500">Course Offering</h1>
      </div>
      <div className="flex justify-end items-center">
        <Dialog>
          <DialogTrigger>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Plus />
              Add Course Offering
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Course Offering</DialogTitle>
            </DialogHeader>
            <form action={createCourseOffering} className="space-y-4">
              <div>
                <label htmlFor="courseId" className="block mb-1 font-medium">
                  Select Course
                </label>
                <select
                  name="courseId"
                  id="courseId"
                  className="w-full border rounded p-2"
                >
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="courseTypeId"
                  className="block mb-1 font-medium"
                >
                  Select Course Type
                </label>
                <select
                  name="courseTypeId"
                  id="courseTypeId"
                  className="w-full border rounded p-2"
                >
                  <option value="">Select Course Type</option>
                  {courseTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-4 h-[calc(100vh-300px)] overflow-y-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2 font-semibold">ID</th>
              <th className="border border-gray-300 p-2 font-semibold">
                Course
              </th>
              <th className="border border-gray-300 p-2 font-semibold">
                Course Type
              </th>
              <th className="border border-gray-300 p-2 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {courseOfferings.map((offering, index) => (
              <tr key={offering.id}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">
                  {offering.course.name}
                </td>
                <td className="border border-gray-300 p-2">
                  {offering.courseType.name}
                </td>
                <td className="border border-gray-300 p-2 flex justify-end">
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <PencilLine className="mr-1" /> Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Course Offering</DialogTitle>
                        </DialogHeader>
                        <form action={updateCourseOffering}>
                          <input type="hidden" name="id" value={offering.id} />
                          <div className="flex flex-col gap-4 mt-2">
                            <label htmlFor="courseId">Select Course</label>
                            <select
                              name="courseId"
                              defaultValue={offering.courseId}
                              className="border border-gray-300 rounded-md p-2"
                            >
                              {courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                  {course.name}
                                </option>
                              ))}
                            </select>
                            <label htmlFor="courseTypeId">
                              Select Course Type
                            </label>
                            <select
                              name="courseTypeId"
                              defaultValue={offering.courseTypeId}
                              className="border border-gray-300 rounded-md p-2"
                            >
                              {courseTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                  {type.name}
                                </option>
                              ))}
                            </select>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button type="submit">Update</Button>
                            </DialogFooter>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>

                    <form action={deleteCourseOffering}>
                      <input type="hidden" name="id" value={offering.id} />
                      <Button
                        type="submit"
                        variant="destructive"
                        className="bg-red-500"
                      >
                        <Trash2 className="mr-1" /> Delete
                      </Button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CourseOffering;
