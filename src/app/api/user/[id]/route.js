import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, context) {
    try {
        const params = await context.params;

        if (!params || !params.id) {
            return NextResponse.json({ message: "User ID is required" }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: params.id
            },
            include: {
                selectedPlan: true,
            },
        });


        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        delete user.password;
        return NextResponse.json(user, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
    }
}