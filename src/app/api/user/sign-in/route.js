import { prisma } from "@/libs/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            },
            include: {
                selectedPlan: true,
            },
        });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
        }

        delete user.password;
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error signin user" }, { status: 500 });
    }
}