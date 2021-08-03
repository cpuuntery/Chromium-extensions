#Hide enabled extensions

let elm_list = document.querySelector("extensions-manager").shadowRoot.querySelector("#items-list").shadowRoot.querySelector("div.items-container").querySelectorAll("extensions-item");
for ( let i=0; i < elm_list.length; i++)
{if (elm_list[i].shadowRoot.querySelector("div#card.enabled.dev-mode") !== null) {
  elm_list[i].shadowRoot.querySelector("div#card.enabled.dev-mode").remove()
}}



#Hide disabled extensions

let elm_list = document.querySelector("extensions-manager").shadowRoot.querySelector("#items-list").shadowRoot.querySelector("div.items-container").querySelectorAll("extensions-item");
for ( let i=0; i < elm_list.length; i++)
{if (elm_list[i].shadowRoot.querySelector("div#card.disabled.dev-mode") !== null) {
  elm_list[i].shadowRoot.querySelector("div#card.disabled.dev-mode").remove()
}}
