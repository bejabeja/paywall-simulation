export async function signInUser(data) {
    try {
        const res = await fetch(`/api/user/sign-in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
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

export async function signUpUser(data) {
    try {
        const res = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = await res.json();

        if (!res.ok) {
            throw new Error(responseData.message || "Error creating user");
        }

        return responseData;
    } catch (error) {
        throw error;
    }
}