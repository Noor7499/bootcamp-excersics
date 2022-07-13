let posts = [{ name: "noor", text: "have a nice " }];
const render = function () {
  for (let post of posts) {
    $(".posts").append(`<p class=post>${post.name}:${post.text}</p>`);
  }
};

$("button").click(function () {
  const name = $("#name").val();
  const text = $("#text").val();

  posts.push({ name: name, text: text });
  $(".posts").text("");
  render();
});

render();
