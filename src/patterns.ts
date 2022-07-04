const dec = (el: string): string =>
    `[^${decChars.join("")}]*${el}[^${decChars.join("")}]*`;

const falsyChars = ["👎", "❎", "❌", "✖", "0"];

const truthyChars = ["👍", "✅", "☑", "✔", "1"];

const decChars = ["a-z", "0-9", ...falsyChars, ...truthyChars];

export const div = `(?:${dec(":+")})+`;

export const arrDiv = /(?:\r?\n|\s*,\s*)/;

export const falsy = new RegExp(`(?:${falsyChars.join("|")})+|false`, "g");

export const block = (prefix: string = "[ ]*", suffix: string = "[ ]*") =>
    `${prefix}([\\s\\S]*?)${suffix}$`;

export const blockValue = (key: string): RegExp =>
    new RegExp(block(intro(key)), "i");

export const intro = (key: string) =>
    key ? `(?<=^|\\s)${dec(key)}${div}` : "";

export const line = (prefix: string = "[ ]*", suffix: string = "[ ]*") =>
    `${prefix}(.*)${suffix}`;

export const lineValue = (key: string): RegExp =>
    new RegExp(line(intro(key)), "i");

export const para = (
    prefix: string = "[ ]*",
    suffix: string = "[ ]*(?:[\r\n]+|$)"
) => `${prefix}([\\s\\S]*?)${suffix}`;

export const paraValue = (key: string): RegExp =>
    new RegExp(para(intro(key), `[ ]*(?:[\r\n]+.*${div}|$)`), "i");

export const sentence = (prefix: string = "[ ]*", suffix: string = "[ ]*") =>
    `${prefix}([^,]*)${suffix}`;

export const sentenceValue = (key: string): RegExp =>
    new RegExp(sentence(intro(key)), "i");

export const truthy = new RegExp(`(?:${truthyChars.join("|")})+|true`, "g");

export const word = (prefix: string = "[ ]*", suffix: string = "[ ]*") =>
    `${prefix}([^\\s]*)${suffix}`;

export const wordValue = (key: string): RegExp =>
    new RegExp(word(intro(key)), "i");
