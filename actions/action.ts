'use server';

import { PrismaClient } from '@/app/generated/prisma';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function createCourseType(formData: FormData) {
    await prisma.courseType.create({
        data: {
            name: formData.get('name') as string,
        },
    });
    revalidatePath('/dashboard/coursetype');
}

export async function updateCourseType(formData: FormData) {
    const id = Number(formData.get('id'));
    const name = formData.get('name') as string;

    if (!id || !name) return;

    await prisma.courseType.update({
        where: { id },
        data: { name },
    });

    revalidatePath('/dashboard/coursetype');
}

export async function deleteCourseType(formData: FormData) {
    const id = Number(formData.get('id'));
    if (!id) return;

    await prisma.courseType.delete({
        where: {
            id,
        },
    });

    revalidatePath('/dashboard/coursetype');
}


export async function createCourse(formData: FormData) {
    await prisma.course.create({
        data: {
            name: formData.get('name') as string,
        },
    });
    revalidatePath('/dashboard/course');
}

export async function updateCourse(formData: FormData) {
    const id = Number(formData.get('id'));
    const name = formData.get('name') as string;

    if (!id || !name) return;

    await prisma.course.update({
        where: { id },
        data: { name },
    });

    revalidatePath('/dashboard/course');
}

export async function deleteCourse(formData: FormData) {
    const id = Number(formData.get('id'));
    if (!id) return;

    await prisma.course.delete({
        where: {
            id,
        },
    });

    revalidatePath('/dashboard/course');
}

export async function createCourseOffering(formData: FormData) {
    await prisma.courseOffering.create({
        data: {
            courseId: Number(formData.get('courseId')),
            courseTypeId: Number(formData.get('courseTypeId')),
        },
    });
    revalidatePath('/dashboard/courseoffering');
}

export async function updateCourseOffering(formData: FormData) {
    const id = Number(formData.get('id'));
    const courseId = Number(formData.get('courseId'));
    const courseTypeId = Number(formData.get('courseTypeId'));

    if (!id || !courseId || !courseTypeId) return;

    await prisma.courseOffering.update({
        where: { id },
        data: { courseId, courseTypeId },
    });

    revalidatePath('/dashboard/courseoffering');
}

export async function deleteCourseOffering(formData: FormData) {
    const id = Number(formData.get('id'));
    if (!id) return;

    await prisma.courseOffering.delete({
        where: {
            id,
        },
    });

    revalidatePath('/dashboard/courseoffering');
}

export async function createStudentRegisteration(formData: FormData) {
    await prisma.studentRegisteration.create({
        data: {
            studentName: formData.get('studentName') as string,
            email: formData.get('email') as string,
            phoneNumber: formData.get('phoneNumber') as string,
            courseOfferingId: Number(formData.get('courseOfferingId')),
        },
    });
    revalidatePath('/dashboard/studentregisteration');
}

export async function updateStudentRegisteration(formData: FormData) {
    const id = Number(formData.get('id'));
    const studentName = formData.get('studentName') as string;
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const courseOfferingId = Number(formData.get('courseOfferingId'));

    if (!id || !studentName || !email || !phoneNumber || !courseOfferingId) return;

    await prisma.studentRegisteration.update({
        where: { id },
        data: { studentName, email, phoneNumber, courseOfferingId },
    });

    revalidatePath('/dashboard/studentregisteration');
}

export async function deleteStudentRegisteration(formData: FormData) {
    const id = Number(formData.get('id'));
    if (!id) return;

    await prisma.studentRegisteration.delete({
        where: {
            id,
        },
    });

    revalidatePath('/dashboard/studentregisteration');
}