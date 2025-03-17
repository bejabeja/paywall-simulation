export async function getUser(userId) {
    try {
        const response = await fetch(`/api/user/${userId}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const userData = await response.json();
        if (userData.error) {
            throw new Error(userData.message);
        }

        return userData;
    } catch (error) {
        return null;
    }
}