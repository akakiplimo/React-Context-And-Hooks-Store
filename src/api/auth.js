const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// A fake authenticator to mock async api call
export async function apiLogin(name) {
    await delay(2000);
    if (name === 'John' || 'Abu') return true;
    throw new Error("User not found!");
}