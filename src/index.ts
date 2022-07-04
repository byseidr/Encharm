import slugify from "slugify";

import * as helpers from "./helpers";
import * as patterns from "./patterns";

export const arr = (
    content: string,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): string[] => {
    let result: string = para(content, prefix, suffix);
    return result?.split?.(patterns.arrDiv)?.filter?.(Boolean) ?? [];
};

export const arrValue = (key: string, content: string): string[] => {
    let result: string = paraValue(key, content);
    return result?.split?.(patterns.arrDiv)?.filter?.(Boolean) ?? [];
};

export const bool = (
    content: string,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): string | null => {
    let result = null;
    content = line(content, prefix, suffix);
    if (content) {
        content = content.replace(patterns.falsy, "n").replace(/[^n]+/g, "y");
        result = content.charAt(0);
    }
    return result;
};

export const boolValue = (key: string, content: string): string | null => {
    let result = null;
    content = lineValue(key, content);
    if (content) {
        content = content.replace(patterns.falsy, "n").replace(/[^n]+/g, "y");
        result = content.charAt(0);
    }
    return result;
};

export const days = (
    content: string | number,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): number | null => {
    let result: number | null = int(content, prefix, suffix);
    return result && result === result ? result * 1440 : null;
};

export const daysValue = (
    key: string,
    content: string | number
): number | null => {
    let result: number | null = intValue(key, content);
    return result && result === result ? result * 1440 : null;
};

export const block = (
    content: string,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): string => helpers.getMatch(content, patterns.block(prefix, suffix));

export const blockValue = (key: string, content: string): string =>
    helpers.getMatch(content, patterns.blockValue(key));

export const hours = (
    content: string | number,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): number | null => {
    let result: number | null = int(content, prefix, suffix);
    return result && result === result ? result * 60 : null;
};

export const hoursValue = (
    key: string,
    content: string | number
): number | null => {
    let result: number | null = intValue(key, content);
    return result && result === result ? result * 60 : null;
};

export const int = (
    content: string | number,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): number | null => {
    let result: string | number = line(<string>content, prefix, suffix);
    result = Math.ceil(Number(content));
    return result && result === result ? result : null;
};

export const intValue = (
    key: string,
    content: string | number
): number | null => {
    let result: string | number = lineValue(key, <string>content);
    result = Math.ceil(Number(content));
    return result && result === result ? result : null;
};

export const line = (
    content: string,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): string => {
    let result = helpers.getMatch(content, patterns.line(prefix, suffix));
    result = result?.trim?.() ?? result;
    return result;
};

export const lineValue = (key: string, content: string): string => {
    let result = helpers.getMatch(content, patterns.lineValue(key));
    result = result?.trim?.() ?? result;
    return result;
};

export const slug = (
    content: string,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): string => {
    let result: string = line(content, prefix, suffix);
    if (result) result = slugify(result);
    return result;
};

export const slugValue = (key: string, content: string): string => {
    let result: string = lineValue(key, content);
    if (result) result = slugify(result);
    return result;
};

export const para = (
    content: string,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): string => helpers.getMatch(content, patterns.para(prefix, suffix));

export const paraValue = (key: string, content: string): string =>
    helpers.getMatch(content, patterns.paraValue(key));

export const sentence = (
    content: string,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): string => {
    let result = helpers.getMatch(content, patterns.sentence(prefix, suffix));
    result = result?.trim?.() ?? result;
    return result;
};

export const sentenceValue = (key: string, content: string): string => {
    let result = helpers.getMatch(content, patterns.sentenceValue(key));
    result = result?.trim?.() ?? result;
    return result;
};

export const url = (
    content: string,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): string => {
    let result: string = line(content, prefix, suffix);
    result = /https?:\/\//.test(result) ? result : "";
    return result;
};

export const urlValue = (key: string, content: string): string => {
    let result: string = lineValue(key, content);
    result = /https?:\/\//.test(result) ? result : "";
    return result;
};

export const weeks = (
    content: string | number,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): number | null => {
    let result: number | null = int(content, prefix, suffix);
    return result && result === result ? result * 10080 : null;
};

export const weeksValue = (
    key: string,
    content: string | number
): number | null => {
    let result: number | null = intValue(key, content);
    return result && result === result ? result * 10080 : null;
};

export const word = (
    content: string,
    prefix: RegExp = /(?:)/,
    suffix: RegExp = /(?:)/
): string => {
    let result = helpers.getMatch(content, patterns.word(prefix, suffix));
    result = result?.trim?.() ?? result;
    return result;
};

export const wordValue = (key: string, content: string): string => {
    let result = helpers.getMatch(content, patterns.wordValue(key));
    result = result?.trim?.() ?? result;
    return result;
};
