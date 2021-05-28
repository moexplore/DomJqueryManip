document.addEventListener("DOMContentLoaded", function () {
  let btn = document.createElement("button");
  btn.innerText = "Clickety Click";

  document.body.appendChild(btn);
  let firsth1 = document.getElementById('h1one')
  btn.before(firsth1)

  btn.addEventListener("click", function () {
    alert("First Task Done!");
  });
  let secondh1 = document.getElementById('h1two')
  let anotherBtn = document.createElement("button");
  anotherBtn.innerText = "TextBox Click";
  document.body.appendChild(anotherBtn);
  anotherBtn.before(secondh1)
  let txt = document.createElement('textarea')
  document.body.appendChild(txt)

  anotherBtn.addEventListener("click", function () {
    alert(txt.value);
  });

  let thirdh1 = document.getElementById('h1three')
  let div = document.createElement("div");
  div.style.background = "black";
  div.style.width = "10em";
  div.style.height = "5em";
  document.body.appendChild(div)
  div.before(thirdh1)

  div.addEventListener("mouseenter", function () {
    div.style.background = "orange";
  });
  div.addEventListener("mouseleave", function () {
    div.style.background = "black";
  });

  let fourthh1 = document.getElementById('h1four')
  let p = document.createElement("p");
  document.body.appendChild(p);
  p.before(fourthh1)
  p.innerText = "Yo man.  Here's some text";
  p.style.cursor = "pointer";

  p.addEventListener("click", function () {
    //p.style.color = 'red'
    let randomColorR = Math.floor(Math.random() * 256);
    let randomColorG = Math.floor(Math.random() * 256);
    let randomColorB = Math.floor(Math.random() * 256);

    p.style.color = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`;
  });

  let fifthh1 = document.getElementById('h1five')
  let btn2 = document.createElement("button");
  document.body.appendChild(btn2);
  btn2.before(fifthh1)
  btn2.innerText = "More clicks";
  let div2 = document.createElement("div");
  document.body.appendChild(div2);
  let myName = "Moshe ";

  btn2.addEventListener("click", function () {
    let span = document.createElement("span");
    span.innerText = myName;
    div2.appendChild(span);
  });

  let sixthh1 = document.getElementById('h1six')
  let btn3 = document.createElement("button");
  btn3.innerText = 'Friends Click'
  let ul = document.createElement("ul");
  document.body.appendChild(btn3)
  btn3.before(sixthh1)
  document.body.appendChild(ul)
  
  btn3.addEventListener("click", function () {
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
        
        for (let i=0; i<friends.length; i++){
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = friends[i]
    }
  });

});
