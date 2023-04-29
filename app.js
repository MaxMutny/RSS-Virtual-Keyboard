let container = document.createElement("div")
container.setAttribute("class", "container")

let body = document.querySelector("body")

let textarea = document.createElement("textarea")
textarea.setAttribute("class", "textarea")


body.prepend(container)

container.append(textarea)



