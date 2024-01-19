async function run(username) {
  const userDetails = await fetch(`https://api.github.com/users/${username}`);
  const userData = await userDetails.json();
  console.log(userData);
  const responce = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = await responce.json();
  console.log(data[0]);

  document
    .getElementById("user_photo")
    .setAttribute("src", userData.avatar_url);
  document.getElementById("user_name").innerHTML = userData.name;
  document.getElementById("user_bio").innerHTML = userData.bio;
  document.getElementById("user_location").innerHTML = userData.location;
  if (userData.twitter_username === null)
    document.getElementById("user_twitter").innerHTML = "None";
  else {
    let x_url = "https://twitter.com/" + userData.twitter_username;
    document.getElementById("user_twitter").innerHTML = x_url;
  }
  document.getElementById("user_url").innerHTML = userData.html_url;

  var html = "<ul>";
  for (let i = 0; i < data.length; i++) {
    html += "<li>";
    html += "<ul>";
    html += "<li>" + data[i].name + "</li>";
    html += "<li>" + data[i].description + "</li>";
    html += "<li>" + data[i].topics + "</li>";
    html += "</ul>";
    html += "</li>";
  }
  html += "</ul>";
  document.getElementById("repo").innerHTML = html;
}
function fun() {
  const user = document.getElementById("username").value;
  console.log(user);
  run(user);
}
// fun();
function Page_size() {
  const limit = document.getElementById("page_limit").value;
  if (limit < 10 || limit > 100) alert("Page size must be between 10 and 100");
  else console.log("limit is : " + limit);
}
