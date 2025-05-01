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
import { Plus } from "lucide-react";
import { createStudentRegisteration } from "@/actions/action";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

async function StudentRegistration() {
  const courseOfferings = await prisma.courseOffering.findMany({
    orderBy: { id: "asc" },
    include: { course: true, courseType: true },
  });
  const studentRegistrations = await prisma.studentRegisteration.findMany({
    orderBy: { id: "asc" },
    include: { courseOffering: true },
  });

  return (
    <section>
      <div className="flex justify-start items-center">
        <h1 className="text-3xl font-bold text-orange-500">
          Student Registration
        </h1>
      </div>
      <div className="flex justify-end items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Plus /> Add Student Registration
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Student Registration</DialogTitle>
            </DialogHeader>
            <form action={createStudentRegisteration}>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  placeholder="Enter Student Name"
                  className="border border-gray-300 rounded-md p-2"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="border border-gray-300 rounded-md p-2"
                  required
                />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  className="border border-gray-300 rounded-md p-2"
                  required
                />
                <label htmlFor="courseOfferingId">Select Course Offering</label>
                <select
                  name="courseOfferingId"
                  id="courseOfferingId"
                  className="w-full border rounded p-2"
                >
                  <option value="">Select Course Offering</option>
                  {courseOfferings.map((offering) => (
                    <option key={offering.id} value={offering.id}>
                      {offering.course.name} - {offering.courseType.name}
                    </option>
                  ))}
                </select>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Add Course Type</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-4 h-[calc(100vh-300px)] overflow-y-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className=" ">
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone Number</th>
              <th className="border border-gray-300 p-2">Course Offering</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentRegistrations.map((registration, index) => (
              <tr key={registration.id}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">
                  {registration.studentName}
                </td>
                <td className="border border-gray-300 p-2">
                  {registration.email}
                </td>
                <td className="border border-gray-300 p-2">
                  {registration.phoneNumber}
                </td>
                <td className="border border-gray-300 p-2 flex justify-end">
                  <div className="flex gap-2">
                    <Button variant="destructive">Delete</Button>
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

export default StudentRegistration;
