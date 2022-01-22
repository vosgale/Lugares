export const CREATE = async (body: any) =>
  fetch("http://localhost:3002/countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

export const LIST = async () =>
  fetch("http://localhost:3002/countries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
export const EDIT = async (body: any, id: number) =>
  fetch(`http://localhost:3002/countries/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

export const DELETE = async (id: number) =>
  fetch(`http://localhost:3002/countries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
// .then((response) => response.json())
// .then((data) => {
//   console.log("Success:", data);
// })
// .catch((error) => {
//   console.error("Error:", error);
// });
