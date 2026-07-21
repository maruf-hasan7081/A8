export function formatDate(value) {
    if (!value)
        return "Not available";
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime()))
        return "Not available";
    return new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(date);
}
export function safeCallbackUrl(value) {
    if (!value || !value.startsWith("/") || value.startsWith("//")) {
        return "/";
    }
    return value;
}
