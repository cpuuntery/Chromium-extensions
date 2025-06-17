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


//improved version just remove the [shadowRoot.querySelector("div#card.enabled.dev-mode")]
//tested to work with chromium 117

//Hide enabled extensions
let elm_list = document.querySelector("body > extensions-manager").shadowRoot.querySelector("#items-list").shadowRoot.querySelector("#content-wrapper > div:nth-child(3)").querySelectorAll("extensions-item");
for ( let i=0; i < elm_list.length; i++)
{if (elm_list[i].shadowRoot.querySelector("div#card.enabled.dev-mode") !== null) {
  elm_list[i].remove()
}}


//Hide disabled extensions
let elm_list = document.querySelector("body > extensions-manager").shadowRoot.querySelector("#items-list").shadowRoot.querySelector("#content-wrapper > div:nth-child(3)").querySelectorAll("extensions-item");
for ( let i=0; i < elm_list.length; i++)
{if (elm_list[i].shadowRoot.querySelector("div#card.disabled.dev-mode") !== null) {
  elm_list[i].remove()
}}

