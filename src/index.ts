import slugify from "slugify";

import * as helpers from "./helpers";
import * as patterns from "./patterns";

export const arrValue = (key: string, content: string): string[] => {
    let result: string = paraValue(key, content);
    return result?.split?.(patterns.arrDiv)?.filter?.(Boolean) ?? [];
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

export const daysValue = (
    key: string,
    content: string | number
): number | null => {
    let result: number | null = intValue(key, content);
    return result && result === result ? result * 1440 : null;
};

export const blockValue = (key: string, content: string): string =>
    helpers.getMatch(content, patterns.blockValue(key));

export const hoursValue = (
    key: string,
    content: string | number
): number | null => {
    let result: number | null = intValue(key, content);
    return result && result === result ? result * 60 : null;
};

export const intValue = (
    key: string,
    content: string | number
): number | null => {
    let result: string | number = lineValue(key, <string>content);
    result = Math.ceil(Number(content));
    return result && result === result ? result : null;
};

export const lineValue = (key: string, content: string): string => {
    let result = helpers.getMatch(content, patterns.lineValue(key));
    result = result?.trim?.() ?? result;
    return result;
};

export const slugValue = (key: string, content: string): string => {
    let result: string = lineValue(key, content);
    if (result) result = slugify(result);
    return result;
};

export const paraValue = (key: string, content: string): string =>
    helpers.getMatch(content, patterns.paraValue(key));

export const urlValue = (key: string, content: string): string => {
    let result: string = lineValue(key, content);
    result = /https?:\/\//.test(result) ? result : "";
    return result;
};

export const weeksValue = (
    key: string,
    content: string | number
): number | null => {
    let result: number | null = intValue(key, content);
    return result && result === result ? result * 10080 : null;
};

export const wordValue = (key: string, content: string): string => {
    let result = helpers.getMatch(content, patterns.wordValue(key));
    result = result?.trim?.() ?? result;
    return result;
};
