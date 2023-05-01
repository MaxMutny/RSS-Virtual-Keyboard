let container = document.createElement("div")
container.setAttribute("class", "container")

let body = document.querySelector("body")

let textarea = document.createElement("textarea")
textarea.setAttribute("class", "textarea")


body.prepend(container)

container.append(textarea)


const keyboard =
{
   
    Backquote: {keyEn: "`", CapsLoskEn: "`", ShiftEn: "~", keyRu: "ё", CapsLoskRu: "Ё", ShiftRu: "Ё"},
    Digit1: {keyEn: "1", CapsLoskEn: "1", ShiftEn: "!", keyRu: "1", CapsLoskRu: "1", ShiftRu: "!"},
    Digit2: {keyEn: "2", CapsLoskEn: "2", ShiftEn: "@", keyRu: "2", CapsLoskRu: "2", ShiftRu: '"'},
    Digit3: {keyEn: "3", CapsLoskEn: "3", ShiftEn: "#", keyRu: "3", CapsLoskRu: "3", ShiftRu: "№"},
    Digit4: {keyEn: "4", CapsLoskEn: "4", ShiftEn: "$", keyRu: "4", CapsLoskRu: "4", ShiftRu: ";"},
    Digit5: {keyEn: "5", CapsLoskEn: "5", ShiftEn: "%", keyRu: "5", CapsLoskRu: "5", ShiftRu: "%"},
    Digit6: {keyEn: "6", CapsLoskEn: "6", ShiftEn: "^", keyRu: "6", CapsLoskRu: "6", ShiftRu: ":"},
    Digit7: {keyEn: "7", CapsLoskEn: "7", ShiftEn: "&", keyRu: "7", CapsLoskRu: "7", ShiftRu: "?"},
    Digit8: {keyEn: "8", CapsLoskEn: "8", ShiftEn: "*", keyRu: "8", CapsLoskRu: "8", ShiftRu: "*"},
    Digit9: {keyEn: "9", CapsLoskEn: "9", ShiftEn: "(", keyRu: "9", CapsLoskRu: "9", ShiftRu: "("},
    Digit0: {keyEn: "0", CapsLoskEn: "0", ShiftEn: ")", keyRu: "0", CapsLoskRu: "0", ShiftRu: ")"},
    Minus: {keyEn: "-", CapsLoskEn: "-", ShiftEn: "_", keyRu: "-", CapsLoskRu: "-", ShiftRu: "_"},
    Equal: {keyEn: "=", CapsLoskEn: "=", ShiftEn: "+", keyRu: "=", CapsLoskRu: "=", ShiftRu: "+"},
    Backspace: {keyEn: "Backspace", CapsLoskEn: "Backspace", ShiftEn: "Backspace", keyRu: "Backspace", CapsLoskRu: "Backspace", ShiftRu: "Backspace"},
    Tab: {keyEn: "Tab", CapsLoskEn: "    ", ShiftEn: "   ", keyRu: "   ", CapsLoskRu: "    ", ShiftRu: "   "},
    KeyQ: {keyEn: "q", CapsLoskEn: "Q", ShiftEn: "Q", keyRu: "й", CapsLoskRu: "Й", ShiftRu: "Й"},
    KeyW: {keyEn: "w", CapsLoskEn: "W", ShiftEn: "W", keyRu: "ц", CapsLoskRu: "Ц", ShiftRu: "Ц"},
    KeyE: {keyEn: "e", CapsLoskEn: "E", ShiftEn: "E", keyRu: "у", CapsLoskRu: "У", ShiftRu: "У"},
    KeyR: {keyEn: "r", CapsLoskEn: "R", ShiftEn: "R", keyRu: "к", CapsLoskRu: "К", ShiftRu: "К"},
    KeyT: {keyEn: "t", CapsLoskEn: "T", ShiftEn: "T", keyRu: "е", CapsLoskRu: "Е", ShiftRu: "Е"},
    KeyY: {keyEn: "y", CapsLoskEn: "Y", ShiftEn: "Y", keyRu: "н", CapsLoskRu: "Н", ShiftRu: "Н"},
    KeyU: {keyEn: "u", CapsLoskEn: "U", ShiftEn: "U", keyRu: "г", CapsLoskRu: "Г", ShiftRu: "Г"},
    KeyI: {keyEn: "i", CapsLoskEn: "I", ShiftEn: "I", keyRu: "ш", CapsLoskRu: "Ш", ShiftRu: "Ш"},
    KeyO: {keyEn: "o", CapsLoskEn: "O", ShiftEn: "O", keyRu: "щ", CapsLoskRu: "Щ", ShiftRu: "Щ"},
    KeyP: {keyEn: "p", CapsLoskEn: "P", ShiftEn: "P", keyRu: "з", CapsLoskRu: "З", ShiftRu: "З"},
    BracketLeft: {keyEn: "[", CapsLoskEn: "[", ShiftEn: "{", keyRu: "х", CapsLoskRu: "Х", ShiftRu: "Х"},
    BracketRight: {keyEn: "]", CapsLoskEn: "]", ShiftEn: "}", keyRu: "ъ", CapsLoskRu: "Ъ", ShiftRu: "Ъ"},
    Backslash: {keyEn: "\\", CapsLoskEn: "\\", ShiftEn: "|", keyRu: "\\", CapsLoskRu: "\\", ShiftRu: "/"},
    CapsLock: {keyEn: "CapsLock", CapsLoskEn: "CapsLock", ShiftEn: "CapsLock", keyRu: "CapsLock", CapsLoskRu: "CapsLock", ShiftRu: "CapsLock"},
    KeyA: {keyEn: "a", CapsLoskEn: "A", ShiftEn: "A", keyRu: "ф", CapsLoskRu: "Ф", ShiftRu: "Ф"},
    KeyS: {keyEn: "s", CapsLoskEn: "S", ShiftEn: "S", keyRu: "ы", CapsLoskRu: "Ы", ShiftRu: "Ы"},
    KeyD: {keyEn: "d", CapsLoskEn: "D", ShiftEn: "D", keyRu: "в", CapsLoskRu: "В", ShiftRu: "В"},
    KeyF: {keyEn: "f", CapsLoskEn: "F", ShiftEn: "F", keyRu: "а", CapsLoskRu: "А", ShiftRu: "А"},
    KeyG: {keyEn: "g", CapsLoskEn: "G", ShiftEn: "G", keyRu: "п", CapsLoskRu: "П", ShiftRu: "П"},
    KeyH: {keyEn: "h", CapsLoskEn: "H", ShiftEn: "H", keyRu: "р", CapsLoskRu: "Р", ShiftRu: "Р"},
    KeyJ: {keyEn: "j", CapsLoskEn: "J", ShiftEn: "J", keyRu: "о", CapsLoskRu: "О", ShiftRu: "О"},
    KeyK: {keyEn: "k", CapsLoskEn: "K", ShiftEn: "K", keyRu: "л", CapsLoskRu: "Л", ShiftRu: "Л"},
    KeyL: {keyEn: "l", CapsLoskEn: "L", ShiftEn: "L", keyRu: "д", CapsLoskRu: "Д", ShiftRu: "Д"},
    Semicolon: {keyEn: ";", CapsLoskEn: ";", ShiftEn: ":", keyRu: "ж", CapsLoskRu: "Ж", ShiftRu: "Ж"},
    Quote: {keyEn: "'", CapsLoskEn: "'", ShiftEn: '"', keyRu: "э", CapsLoskRu: "Э", ShiftRu: "Э"},
    Enter: {keyEn: "Enter", CapsLoskEn: "Enter", ShiftEn: "Enter", keyRu: "Enter", CapsLoskRu: "Enter", ShiftRu: "Enter"},
    ShiftLeft: {keyEn: "Shift", CapsLoskEn: "Shift", ShiftEn: "Shift", keyRu: "Shift", CapsLoskRu: "Shift", ShiftRu: "Shift"},
    KeyZ: {keyEn: "z", CapsLoskEn: "Z", ShiftEn: "Z", keyRu: "я", CapsLoskRu: "Я", ShiftRu: "Я"},
    KeyX: {keyEn: "x", CapsLoskEn: "X", ShiftEn: "X", keyRu: "ч", CapsLoskRu: "Ч", ShiftRu: "Ч"},
    KeyC: {keyEn: "c", CapsLoskEn: "C", ShiftEn: "C", keyRu: "с", CapsLoskRu: "С", ShiftRu: "С"},
    KeyV: {keyEn: "v", CapsLoskEn: "V", ShiftEn: "V", keyRu: "м", CapsLoskRu: "М", ShiftRu: "М"},
    KeyB: {keyEn: "b", CapsLoskEn: "B", ShiftEn: "B", keyRu: "и", CapsLoskRu: "И", ShiftRu: "И"},
    KeyN: {keyEn: "n", CapsLoskEn: "N", ShiftEn: "N", keyRu: "т", CapsLoskRu: "Т", ShiftRu: "Т"},
    KeyM: {keyEn: "m", CapsLoskEn: "M", ShiftEn: "M", keyRu: "ь", CapsLoskRu: "Ь", ShiftRu: "Ь"},
    Comma: {keyEn: ",", CapsLoskEn: ",", ShiftEn: "<", keyRu: "б", CapsLoskRu: "Б", ShiftRu: "Б"},
    Period: {keyEn: ".", CapsLoskEn: ".", ShiftEn: ">", keyRu: "ю", CapsLoskRu: "Ю", ShiftRu: "Ю"},
    Slash: {keyEn: "/", CapsLoskEn: "/", ShiftEn: "?", keyRu: ".", CapsLoskRu: ".", ShiftRu: ","},
    ArrowUp: {keyEn: "ArrowUp", CapsLoskEn: "ArrowUp", ShiftEn: "ArrowUp", keyRu: "ArrowUp", CapsLoskRu: "ArrowUp", ShiftRu: "ArrowUp"},
    ShiftRight: {keyEn: "Shift", CapsLoskEn: "Shift", ShiftEn: "Shift", keyRu: "Shift", CapsLoskRu: "Shift", ShiftRu: "Shift"},
    ControlLeft: {keyEn: "Control", CapsLoskEn: "Control", ShiftEn: "Control", keyRu: "Control", CapsLoskRu: "Control", ShiftRu: "Control"},
    Win: {keyEn: "Win", CapsLoskEn: "", ShiftEn: "", keyRu: "Win", CapsLoskRu: "", ShiftRu: ""},
    AltLeft: {keyEn: "Alt", CapsLoskEn: "Alt", ShiftEn: "Alt", keyRu: "Alt", CapsLoskRu: "Alt", ShiftRu: "Alt"},
    Space: {keyEn: " ", CapsLoskEn: " ", ShiftEn: " ", keyRu: " ", CapsLoskRu: " ", ShiftRu: " "},
    AltRight: {keyEn: "Alt", CapsLoskEn: "Alt", ShiftEn: "Alt", keyRu: "Alt", CapsLoskRu: "Alt", ShiftRu: "Alt"},
    ArrowLeft: {keyEn: "ArrowLeft", CapsLoskEn: "ArrowLeft", ShiftEn: "ArrowLeft", keyRu: "ArrowLeft", CapsLoskRu: "ArrowLeft", ShiftRu: "ArrowLeft"},
    ArrowDown: {keyEn: "ArrowDown", CapsLoskEn: "ArrowDown", ShiftEn: "ArrowDown", keyRu: "ArrowDown", CapsLoskRu: "ArrowDown", ShiftRu: "ArrowDown"},
    ArrowRight: {keyEn: "ArrowRight", CapsLoskEn: "ArrowRight", ShiftEn: "ArrowRight", keyRu: "ArrowRight", CapsLoskRu: "ArrowRight", ShiftRu: "ArrowRight"},
    ControlRight: {keyEn: "Control", CapsLoskEn: "Control", ShiftEn: "Control", keyRu: "Control", CapsLoskRu: "Control", ShiftRu: "Control"},


}


var langwInit = "keyEn"
function createButton (name)
{
    let button = document.createElement("div")
    button.classList.add("button")
    button.textContent = name
    button.onmousedown = () => {
        button.classList.add('button--active')
        textarea.value += name; 
        
        }
    button.onmouseup = ()  =>{
        button.classList.remove('button--active')
    }

    button.onmouseleave = ()  =>{
        button.classList.remove('button--active')
    }

    return button
}

function createKeyboard (lang)
{
    let content = document.createElement("div")
    content.classList.add("contentainer-key")
    
    for (const key in keyboard) 
    {
        content.append(createButton(keyboard[key][lang]))
    }

 return content;

}

container.append(createKeyboard(langwInit));


