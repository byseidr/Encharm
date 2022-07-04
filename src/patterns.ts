const dec = (el: string): string =>
    `[^${decChars.join("")}]*${el}[^${decChars.join("")}]*`;

const falsyChars = ["👎", "❎", "❌", "✖", "0"];

const truthyChars = ["👍", "✅", "☑", "✔", "1"];

const decChars = ["a-z", "0-9", ...falsyChars, ...truthyChars];

export const div = `(?:${dec(":+")})+`;

export const arrDiv = /(?:\r?\n|\s*,\s*)/;

export const falsy = new RegExp(`(?:${falsyChars.join("|")})+|false`, "g");

export const block = "([\\s\\S]*?)[ ]*$";

export const blockValue = (key: string): RegExp =>
    new RegExp(intro(key) + block, "i");

export const intro = (key: string) =>
    key ? `(?<=^|\\s)${dec(key)}${div}` : "";

export const line = "(.*)[ ]*";

export const lineValue = (key: string): RegExp =>
    new RegExp(intro(key) + line, "i");

export const para = "([\\s\\S]*?)[ ]*(?:[\r\n]+.*" + div + "|$)";

export const paraValue = (key: string): RegExp =>
    new RegExp(intro(key) + para, "i");

export const sentence = "([^,]*)[ ]*";

export const sentenceValue = (key: string): RegExp =>
    new RegExp(intro(key) + sentence, "i");

export const truthy = new RegExp(`(?:${truthyChars.join("|")})+|true`, "g");

export const word = "([^\\s]*)[ ]*";

export const wordValue = (key: string): RegExp =>
    new RegExp(intro(key) + word, "i");
