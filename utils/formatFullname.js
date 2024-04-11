module.exports = (fullName) => {
  if (typeof fullName !== "string") return "Error";
  if (!fullName) return "Error";
  const splitedName = fullName.split(" ");
  if (splitedName.length !== 2) return "Error";
  const [firstName, lastName] = splitedName;
  if (!firstName || !lastName) return "Error";
  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    " " +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
};
