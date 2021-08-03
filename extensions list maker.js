let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
document.querySelector("extensions-manager").shadowRoot.querySelector("#items-list").shadowRoot.querySelector("div.items-container").querySelectorAll("extensions-item").forEach(x => document.querySelector("#output").textContent += x.shadowRoot.querySelector("#name").textContent + '\n')
