const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.plan.create({
        data: {
            name: "Free",
            price: 0,
            priceTextAnually: "per month, billed annually",
            priceTextMonthly: "per month, billed monthly",
            buttonText: "Get Free",
            features: {
                create: [
                    { text: "Explore public itineraries" },
                    { text: "Preview itineraries (limited access)" },
                    { text: "Social interactions (likes, comments)" },
                    { text: "Create and save basic itineraries" },
                    { text: "Access to travel blogs" },
                ],
            },
        },
    });

    await prisma.plan.create({
        data: {
            name: "Basic",
            price: 9.99,
            priceTextAnually: "per month, billed annually",
            priceTextMonthly: "per month, billed monthly",
            buttonText: "Get Basic",
            features: {
                create: [
                    { text: "Everything in Free" },
                    { text: "Download itineraries (PDF/Google Maps)" },
                    { text: "Price alerts for flights & hotels" },
                    { text: "Advanced travel recommendations" },
                    { text: "Private travel communities" },
                ],
            },
        },
    });

    await prisma.plan.create({
        data: {
            name: "Pro",
            price: 19.99,
            priceTextAnually: "per month, billed annually",
            priceTextMonthly: "per month, billed monthly",
            buttonText: "Get Pro",
            features: {
                create: [
                    { text: "Everything in Basic" },
                    { text: "Access premium itineraries" },
                    { text: "AI-powered itinerary generator" },
                    { text: "Chat with travel experts" },
                    { text: "Exclusive VIP perks & discounts" },
                ],
            },
        },
    });

    console.log("Data seeded successfully");
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
