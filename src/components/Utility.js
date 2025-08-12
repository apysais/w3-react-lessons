function generateUniqueIdWithTimestamp() {
    const timestamp = Date.now();
    const randomPart = Math.random().toString(36).substring(2, 15); // A random alphanumeric string
    return `${timestamp}-${randomPart}`;
}

export { generateUniqueIdWithTimestamp };