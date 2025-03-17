import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {

    try {
        const body = await request.json();
        const { userId, selectedPlan, name, email, phone, address, country, cardDetails } = body;

        if (!cardDetails?.number || cardDetails.number.length !== 16) {
            await prisma.paymentTransaction.create({
                data: {
                    userId,
                    name,
                    email,
                    phone,
                    address,
                    country,
                    selectedPlanId: selectedPlan.id,
                    price: selectedPlan.price,
                    paymentStatus: "failed",
                }
            })

            const user = await prisma.user.findUnique({
                where: { id: userId },
                include: {
                    selectedPlan: true,
                }
            });

            delete user.password
            return NextResponse.json({ message: "Invalid card details", status: 'failed' }, { status: 400 });
        }

        await prisma.paymentTransaction.create({
            data: {
                userId,
                name,
                email,
                phone,
                address,
                country,
                selectedPlanId: selectedPlan.id,
                price: selectedPlan.price,
                paymentStatus: "success",
            },
        });

        const user = await prisma.user.update({
            where: { id: userId },
            data: { isSubscribed: true, selectedPlanId: selectedPlan.id },
            include: {
                selectedPlan: true,
            }
        });

        delete user.password
        return NextResponse.json(
            {
                message: "Payment successful",
                status: 'success',
                user: user,
            },
            { status: 201 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error processing payment" }, { status: 500 });

    }
}