import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { PencilLine, Plus, Trash2 } from "lucide-react";
import { createCourse, deleteCourse, updateCourse } from "@/actions/action";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

async function Course() {
  const courses = await prisma.course.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <section>
      <div className="flex justify-start items-center">
        <h1 className="text-3xl font-bold text-orange-500">Courses</h1>
      </div>
      <div className="flex justify-end items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Plus /> Add Courses
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Courses</DialogTitle>
            </DialogHeader>
            <div>
              <form action={createCourse}>
                <div className="flex flex-col gap-4">
                  <label htmlFor="name">Course Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="eg: English, Hindi, Urdu"
                    className="border border-gray-300 rounded-md p-2"
                    required
                  />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Add Course</Button>
                  </DialogFooter>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-4 h-[calc(100vh-300px)] overflow-y-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className=" ">
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((courses, index) => (
              <tr key={courses.id}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2 flex justify-between items-center">
                  <div>
                    <h1>{courses.name}</h1>
                  </div>
                  <div className="space-x-2 flex">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <PencilLine className="mr-1" /> Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Course Name</DialogTitle>
                        </DialogHeader>
                        <form action={updateCourse}>
                          <input type="hidden" name="id" value={courses.id} />
                          <div className="flex flex-col gap-4 mt-2">
                            <label htmlFor="name">Course Name</label>
                            <input
                              type="text"
                              name="name"
                              defaultValue={courses.name}
                              className="border border-gray-300 rounded-md p-2"
                            />
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
                    <form action={deleteCourse}>
                      <input type="hidden" name="id" value={courses.id} />
                      <Button
                        type="submit"
                        variant="default"
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

export default Course;
