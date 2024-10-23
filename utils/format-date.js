export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("tr-TR", { month: "long" });
  const year = date.getFullYear().toString().padStart(4, "0");

  return `${day} ${month} ${year}`;
};
