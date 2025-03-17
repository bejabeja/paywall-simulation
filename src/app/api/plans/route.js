import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const plans = await prisma.plan.findMany({
            include: {
                features: true,
            },
        });

        return NextResponse.json(plans, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching plans" }, { status: 500 });
    }
}
