let el = document.createElement("script");
el.src = "app.js";
document.body.appendChild(el);
appendScript("app.js");
greet.innerHTML = `あなたの点数は${score}です`