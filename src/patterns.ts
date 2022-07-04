const dec = (el: string): string =>
    `[^${decChars.join("")}]*${el}[^${decChars.join("")}]*`;

const falsyChars = ["👎", "❎", "❌", "✖", "0"];

const truthyChars = ["👍", "✅", "☑", "✔", "1"];

const decChars = ["a-z", "0-9", ...falsyChars, ...truthyChars];

export const div = `(?:${dec(":+")})+`;

export const arrDiv = /(?:\r?\n|\s*,\s*)/;

export const falsy = new RegExp(`(?:${falsyChars.join("|")})+|false`, "g");

export const block = (prefix: RegExp = /[ ]*/, suffix: RegExp = /[ ]*/) =>
    new RegExp(`${prefix.source}([\\s\\S]*?)${suffix.source}$`, "i");

export const blockValue = (key: string): RegExp =>
    new RegExp(block(intro(key)), "i");

export const intro = (key: string): RegExp =>
    new RegExp(key ? `(?<=^|\\s)${dec(key)}${div}` : "");

export const line = (prefix: RegExp = /[ ]*/, suffix: RegExp = /[ ]*/) =>
    new RegExp(`${prefix.source}(.*)${suffix.source}`, "i");

export const lineValue = (key: string): RegExp =>
    new RegExp(line(intro(key)), "i");

export const para = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*(?:[\r\n]+|$)/
) => new RegExp(`${prefix.source}([\\s\\S]*?)${suffix.source}`, "i");

export const paraValue = (key: string): RegExp =>
    new RegExp(para(intro(key), new RegExp(`[ ]*(?:[\r\n]+.*${div}|$)`)), "i");

export const sentence = (prefix: RegExp = /[ ]*/, suffix: RegExp = /[ ]*/) =>
    new RegExp(`${prefix.source}([^,]*)${suffix.source}`, "i");

export const sentenceValue = (key: string): RegExp =>
    new RegExp(sentence(intro(key)), "i");

export const truthy = new RegExp(`(?:${truthyChars.join("|")})+|true`, "g");

export const word = (prefix: RegExp = /[ ]*/, suffix: RegExp = /[ ]*/) =>
    new RegExp(`${prefix.source}([^\\s]*)${suffix.source}`, "i");

export const wordValue = (key: string): RegExp =>
    new RegExp(word(intro(key)), "i");
