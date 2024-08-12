export function getInitials(name: string): string {
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
