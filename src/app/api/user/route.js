import { prisma } from "@/libs/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, name, lastName, password, isSubscribed } = body;

        if (!email || !name || !password) {
            return NextResponse.json({ message: "Email, name and password are required" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                lastName,
                password: hashedPassword,
                isSubscribed
            },
        });

        delete newUser.password;

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating user" }, { status: 500 });
    }
}


