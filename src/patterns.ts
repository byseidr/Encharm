const dec = (el: string): string =>
    `[^${decChars.join("")}]*${el}[^${decChars.join("")}]*`;

const falsyChars = ["👎", "❎", "❌", "✖", "0"];

const truthyChars = ["👍", "✅", "☑", "✔", "1"];

const decChars = ["a-z", "0-9", ...falsyChars, ...truthyChars];

export const div = `(?:${dec(":+")})+`;

export const arrDiv = /(?:\r?\n|\s*,\s*)/;

export const paraArrDiv = /(?:\r?\n)/;

export const wordArrDiv = /(?: +)/;

export const falsy = new RegExp(`(?:${falsyChars.join("|")})+|false`, "g");

export const intro = (key: string): RegExp =>
    new RegExp(key ? `(?<=^|\\s)${dec(key)}${div}` : "", "u");

export const line = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*/,
    core: RegExp = /(.*)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}`, "iu");

export const lineKey = (
    suffix: RegExp = new RegExp(`[ ]*(?: \\S+${div}|$)`, "u"),
    core: RegExp = /.*?/
): RegExp => new RegExp(line(intro("(.+)"), suffix, core), "imu");

export const lineValue = (
    key: string,
    suffix: RegExp = new RegExp(`[ ]*(?: \\S+${div}|$)`, "u"),
    core: RegExp = /(.*?)/
): RegExp => new RegExp(line(intro(key), suffix, core), "imu");

export const para = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*(?:[\r\n][ \t]*[\r\n]+|$)/,
    core: RegExp = /([\s\S]*?)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}`, "iu");

export const paraKey = (
    suffix: RegExp = new RegExp(`[ ]*(?:[\r\n]+.+${div}|$)`, "u"),
    core: RegExp | undefined = /[\s\S]*?/
): RegExp => new RegExp(para(intro("(.+)"), suffix, core), "iu");

export const paraValue = (
    key: string,
    suffix: RegExp = new RegExp(`[ ]*(?:[\r\n]+.+${div}|$)`, "u"),
    core: RegExp | undefined = undefined
): RegExp => new RegExp(para(intro(key), suffix, core), "iu");

export const sentence = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*/,
    core: RegExp = /([^,]*)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}`, "iu");

export const sentenceKey = (
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = /[^,]*/
): RegExp => new RegExp(sentence(intro("(.+)"), suffix, core), "iu");

export const sentenceValue = (
    key: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): RegExp => new RegExp(sentence(intro(key), suffix, core), "iu");

export const string = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*/,
    core: RegExp = /([\s\S]*?)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}$`, "iu");

export const stringValue = (
    key: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): RegExp => new RegExp(string(intro(key), suffix, core), "iu");

export const truthy = new RegExp(`(?:${truthyChars.join("|")})+|true`, "g");

export const word = (
    prefix: RegExp = /[ ]*/,
    suffix: RegExp = /[ ]*/,
    core: RegExp = /([^\s]*)/
) => new RegExp(`${prefix.source}${core.source}${suffix.source}`, "iu");

export const wordKey = (
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = /[^\s]*/
): RegExp => new RegExp(word(intro("(.+)"), suffix, core), "iu");

export const wordValue = (
    key: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): RegExp => new RegExp(word(intro(key), suffix, core), "iu");
