
$("#user-btn").click(function () {
  getUserById();
});

async function getUserById() {
  const userId = $("#user-id").val();

  const url = "http://localhost:8080/user?id=" + userId;
  const res = await fetch(url, { method: "GET" });
  const finalRes = await res.json();
  console.log(finalRes);

  // $('#result-data').html('<h1>'+ finalRes.name + ' '+ finalRes.email + '</h1>');
  $("#lb-name").text(finalRes.name);
  $("#lb-email").text(finalRes.email);
  $("#lb-password").text(finalRes.password);
  $("#lb-img").html('<img class="cl-img" src="data:image/jpeg;base64,' + finalRes.image +'"  alt="">');
  $(".usr-prof").css("display", "block");
}

async function allResultData() {
  const url = "http://localhost:8082/get-all";
  const resultData = await fetch(url, { method: "GET" });
  const finalData = await resultData.json();
  let allNames = "";
  for (let i = 0; i < finalData.length; i++) {
    allNames =
      allNames +
      "<h1>" +
      finalData[i].id +
      " " +
      finalData[i].firstName +
      " " +
      finalData[i].lastName +
      "</h1>";
  }

  $("#all-result-data").html(allNames);
}

async function deleteUser() {
  const userId = $("#delete-id").val();
  const url = "http://localhost:8082/delete-user/" + userId;
  await fetch(url, { method: "DELETE" });

  allResultData();
}

async function registerUser() {
  const name = $("#inp-name").val();
  const email = $("#inp-email").val();
  const password = $("#inp-password").val();
  const image = $("#inp-image")[0].files[0];

  const url = "http://localhost:8080/register";

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("image", image);

  const res = await fetch(url, { method: "POST", body: formData })
    .then((response) => response.text()) // Extract the response text
    .then((data) => {
      console.log("Response:", data); // Print the response data
      $("#reg-response").text(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
