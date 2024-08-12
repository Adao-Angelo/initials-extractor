"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitials = getInitials;
function getInitials(name) {
    if (!name || typeof name !== "string") {
        throw new Error("Invalid name");
    }
    const nameSplit = name.split(" ");
    if (nameSplit.length < 2) {
        return nameSplit[0].charAt(0).toUpperCase();
    }
    const firstInitial = nameSplit[0].charAt(0).toUpperCase();
    const lastInitial = nameSplit[nameSplit.length - 1].charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
}
//# sourceMappingURL=index.js.map