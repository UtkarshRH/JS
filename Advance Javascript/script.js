const requestUrl = "https://api.github.com/users/UtkarshRH";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);

    // Here we get the url of the image
    const avatarUrl = data.avatar_url;
    console.log(avatarUrl);

    // now here we get the content
    const name = data.name;
    console.log(name);
    const userFollowers = data.followers;
    console.log(userFollowers);
    const userFollowing = data.following;

    // here we select the content
    const imgEle = document.querySelector(".card img");
    const userName = document.querySelector(".card h4");
    const userFollower = document.querySelector(".card p");
    const userFollowings = document.querySelectorAll(".card p")[1];

    // here we add the content to the card
    imgEle.src = avatarUrl;
    userName.textContent = name;
    userFollower.textContent = `Followers: ${userFollowers}`;
    userFollowings.textContent = `Following : ${userFollowing}`;
  }
};
xhr.send();
