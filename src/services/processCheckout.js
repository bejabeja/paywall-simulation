export async function processCheckout(checkoutData) {
    try {
        const res = await fetch("/api/checkout", {
            method: "POST",
            body: JSON.stringify(checkoutData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = await res.json();

        if (!res.ok) {

            throw new Error(responseData.message);
        }

        return responseData;
    } catch (error) {
        throw error;
    }
}