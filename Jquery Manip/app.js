$(document).ready(function () {
  let $firsth1 = $("#h1one");
  let $btn = $("<button>" + "Click Me!" + "</button>");
  $btn.appendTo("body");
  $btn.before($firsth1);
  $btn.click(function () {
    alert("Hey man");
  });
  let $secondh1 = $("#h1two");
  let $txt = $("<textarea>");
  let $anotherBtn = $("<button>" + "Text Click" + "</button>");
  $anotherBtn.appendTo("body");
  $anotherBtn.before($secondh1);
  $txt.appendTo("body");
  $anotherBtn.click(function () {
    alert($txt.val());
  });

  let $thirdh1 = $("#h1three");
let $div = $("<div></div>");
  $div.css({ width: "5em", height: "5em", background: "black" });
  $div.appendTo("body");
  $div.before($thirdh1);

  $div.hover(
    function () {
      $(this).css("background-color", "yellow");
    },
    function () {
      $(this).css("background-color", "black");
    }
  );

  let $fourthh1 = $("#h1four");
  let $p = $("<p>" + "Click me to change color!" + "</p>");
  $p.appendTo("body");
  $p.before($fourthh1)

  $p.click(function () {
    //$p.css('color', 'red')
    let randomColorR = Math.floor(Math.random() * 256);
    let randomColorG = Math.floor(Math.random() * 256);
    let randomColorB = Math.floor(Math.random() * 256);

    $p.css("color", `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`);
  });

  let $fifthh1 = $("#h1five");
  let $div2 = $("<div></div>");
  let myName = "Moshe ";
  let $btn2 = $("<button>" + "Name Click" + "</button>");
  $btn2.appendTo("body");
  $div2.appendTo("body");
  $btn2.before($fifthh1)

  $btn2.click(function () {
    let $span = $("<span>" + myName + "</span>");
    $span.appendTo($div2);
  });

  let $sixthh1 = $("#h1six");
  let $ul = $("<ul></ul>");
let $btn3 = $("<button>" + "Friends Click" + "</button>");
  $btn3.appendTo("body");
  $btn3.before($sixthh1)
  $ul.appendTo("body");

  $btn3.click(function () {
    let friends = [
      "Mo",
      "Jo",
      "Ho",
      "Lo",
      "Chad",
      "Isaac",
      "Bert",
      "Po",
      "Elon",
      "Danny",
    ];

    for (let i = 0; i < friends.length; i++) {
      let $li = $("<li>" + friends[i] + "</li>");
      $ul.append($li);
    }
  });
});
