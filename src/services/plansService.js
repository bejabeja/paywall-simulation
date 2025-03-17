

export async function getPlans() {
    try {
        const response = await fetch("/api/plans");
        if (!response.ok) {
            throw new Error("Failed to fetch plans");
        }

        return await response.json();
    } catch (error) {
        return [];
    }
}