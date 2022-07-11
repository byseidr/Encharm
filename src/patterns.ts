const dec = (el: string): string =>
    `[^${decChars.join("")}]*${el}[^${decChars.join("")}]*`;

const falsyChars = ["👎", "❎", "❌", "✖", "0"];

const truthyChars = ["👍", "✅", "☑", "✔", "1"];

const decChars = ["a-z", "0-9", ...falsyChars, ...truthyChars];

export const div = `(?:${dec(":+")})+`;

export const arrDiv = /(?:\r?\n|\s*,\s*)/;

export const falsy = new RegExp(`(?:${falsyChars.join("|")})+|false`, "g");

export const block = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*/,
    core: RegExp = /([\s\S]*?)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}$`, "i");

export const blockValue = (
    key: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): RegExp => new RegExp(block(intro(key), suffix, core), "i");

export const intro = (key: string): RegExp =>
    new RegExp(key ? `(?<=^|\\s)${dec(key)}${div}` : "");

export const line = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*/,
    core: RegExp = /(.*)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}`, "i");

export const lineValue = (
    key: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): RegExp => new RegExp(line(intro(key), suffix, core), "i");

export const para = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*(?:[\r\n][ \t]*[\r\n]+|$)/,
    core: RegExp = /([\s\S]*?)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}`, "i");

export const paraValue = (
    key: string,
    suffix: RegExp = new RegExp(`[ ]*(?:[\r\n]+.*${div}|$)`),
    core: RegExp | undefined = undefined
): RegExp => new RegExp(para(intro(key), suffix, core), "i");

export const sentence = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*/,
    core: RegExp = /([^,]*)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}`, "i");

export const sentenceValue = (
    key: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): RegExp => new RegExp(sentence(intro(key), suffix, core), "i");

export const truthy = new RegExp(`(?:${truthyChars.join("|")})+|true`, "g");

export const word = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*/,
    core: RegExp = /([^\s]*)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}`, "i");

export const wordValue = (
    key: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): RegExp => new RegExp(word(intro(key), suffix, core), "i");
