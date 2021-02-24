function getGithubInfo(user, handleUserData) {
  //1. Create an instance of XMLHttpRequest class and send a GET request using it.
  // The function should finally return the object(it now contains the response!)
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      return handleUserData(this);
    } else {
      return handleUserData(this);
    }
  };
  xhttp.open("GET", `https://api.github.com/users/${user}`, true);
  xhttp.send();
}

function showUser(userData) {
  //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
  $("img.profile-pic").attr("src", userData.avatar_url);
  $("#id").text(userData.id);
  $("#name").text(userData.login);
  $("#repos").text(userData.public_repos);
  $("#followers").text(userData.followers);
  const date = new Date(userData.created_at);
  $("#date").text(
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear()
  );
  $("a.btn-repo").attr("href", userData.repos_url);
  $("a.btn-profile").attr("href", userData.html_url);
  $("a.btn-follow").attr("href", userData.followers_url);
  $(".result").show();
  $("#error").hide();
}

function noSuchUser(username) {
  //3. set the elements such that a suitable message is displayed
  $("#error").text("There are no records");
  $("#error").show();
}

$(document).ready(function () {
  $(".result").hide();
  $("#error").hide();
  $(document).on("keypress", "#username", function (e) {
    //check if the enter(i.e return) key is pressed
    $("#error").hide();
    $(".result").hide();
    if (e.which == 13) {
      //get what the user enters
      username = $(this).val();
      //reset the text typed in the input
      $(this).val("");
      //get the user's information and store the respsonse
      getGithubInfo(username, (response) => {
        console.log(response);
        //if the response is successful show the user's details
        if (response.status == 200) {
          showUser(JSON.parse(response.responseText));
          //else display suitable message
        } else {
          noSuchUser(username);
        }
      });
    }
  });
});
