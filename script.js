const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);

storedUser.나이 = 30;
localStorage.setItem("user", JSON.stringify(storedUser));

localStorage.removeItem("user");
const deletedUser = localStorage.getItem("user");
console.log(deletedUser);

function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

fetchPosts();
