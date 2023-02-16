import * as $$ from "richierich";
import slugify from "slugify";

import * as helpers from "./helpers";
import * as patterns from "./patterns";

const daysInAWeek = 7;
const hoursInADay = 24;
const minutesInAnHour = 60;
const secondsInAMinute = 60;
const secondsInAnHour = minutesInAnHour * secondsInAMinute;
const secondsInADay = hoursInADay * secondsInAnHour;
const secondsInAWeek = daysInAWeek * secondsInADay;

export const bool = (
    content: string,
    string: boolean = false,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string | boolean => {
    content = line(content, prefix, suffix, core);
    return string
        ? helpers.getStringBool(content)
        : helpers.getTrueBool(content);
};

export const boolValue = (
    key: string,
    content: string,
    string: boolean = false,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string | boolean => {
    content = lineValue(key, content, suffix, core);
    return string
        ? helpers.getStringBool(content)
        : helpers.getTrueBool(content);
};

export const days = (
    content: string | number,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = int(content, prefix, suffix, core);
    return result && result === result ? result * secondsInADay : null;
};

export const daysValue = (
    key: string,
    content: string | number,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = intValue(key, content, suffix, core);
    return result && result === result ? result * secondsInADay : null;
};

export const hours = (
    content: string | number,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = int(content, prefix, suffix, core);
    return result && result === result ? result * secondsInAnHour : null;
};

export const hoursValue = (
    key: string,
    content: string | number,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = intValue(key, content, suffix, core);
    return result && result === result ? result * secondsInAnHour : null;
};

export const int = (
    content: string | number,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: string | number = $$.isNum(content)
        ? content
        : line(<string>content, prefix, suffix, core);
    result = Math.ceil(Number(result));
    return result && result === result ? result : null;
};

export const intValue = (
    key: string,
    content: string | number,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: string | number = lineValue(key, <string>content, suffix, core);
    result = Math.ceil(Number(result));
    return result && result === result ? result : null;
};

export const line = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result = helpers.getMatch(content, patterns.line(prefix, suffix, core));
    result = result?.trim?.() ?? result;
    return result;
};

export const lineArr = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string[] => {
    let result: string = line(content, prefix, suffix, core);
    return result?.split?.(patterns.arrDiv)?.filter?.(Boolean) ?? [];
};

export const lineArrValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string[] => {
    let result: string = lineValue(key, content, suffix, core);
    return result?.split?.(patterns.arrDiv)?.filter?.(Boolean) ?? [];
};

export const lineKey = (
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result = helpers.getMatch(content, patterns.lineKey(suffix, core));
    result = result?.trim?.() ?? result;
    return result;
};

export const lineObj = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): { [key: string]: string } => {
    let result: { [key: string]: string } = {};
    let arr: string[] = lineArr(content, prefix, suffix, core);
    arr.forEach((el) => {
        const key = lineKey(el);
        if (key) result[key] = lineValue(key, el);
    });
    return result;
};

export const lineValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result = helpers.getMatch(
        content,
        patterns.lineValue(key, suffix, core)
    );
    result = result?.trim?.() ?? result;
    return result;
};

export const minutes = (
    content: string | number,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = int(content, prefix, suffix, core);
    return result && result === result ? result * secondsInAMinute : null;
};

export const minutesValue = (
    key: string,
    content: string | number,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = intValue(key, content, suffix, core);
    return result && result === result ? result * secondsInAMinute : null;
};

export const para = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => helpers.getMatch(content, patterns.para(prefix, suffix, core));

export const paraArr = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string[] => {
    let result: string = para(content, prefix, suffix, core);
    return result?.split?.(patterns.paraArrDiv)?.filter?.(Boolean) ?? [];
};

export const paraArrValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string[] => {
    let result: string = paraValue(key, content, suffix, core);
    return result?.split?.(patterns.paraArrDiv)?.filter?.(Boolean) ?? [];
};

export const paraKey = (
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => helpers.getMatch(content, patterns.paraKey(suffix, core));

export const paraObj = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): { [key: string]: string } => {
    let result: { [key: string]: string } = {};
    let arr: string[] = paraArr(content, prefix, suffix, core);
    let lastKey: string | null = null;
    arr.forEach((el) => {
        const key = paraKey(el);
        const value = paraValue(key, el);
        if (key) {
            result[key] = value;
            lastKey = key;
        } else if (lastKey) result[lastKey] += `\n${value}`;
    });
    return result;
};

export const paraValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => helpers.getMatch(content, patterns.paraValue(key, suffix, core));

export const seconds = (
    content: string | number,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = int(content, prefix, suffix, core);
    return result && result === result ? result : null;
};

export const secondsValue = (
    key: string,
    content: string | number,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = intValue(key, content, suffix, core);
    return result && result === result ? result : null;
};

export const sentence = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result = helpers.getMatch(
        content,
        patterns.sentence(prefix, suffix, core)
    );
    result = result?.trim?.() ?? result;
    return result;
};

export const sentenceArr = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string[] => {
    let result: string = sentence(content, prefix, suffix, core);
    return result?.split?.(patterns.arrDiv)?.filter?.(Boolean) ?? [];
};

export const sentenceArrValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string[] => {
    let result: string = sentenceValue(key, content, suffix, core);
    return result?.split?.(patterns.arrDiv)?.filter?.(Boolean) ?? [];
};

export const sentenceKey = (
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result = helpers.getMatch(content, patterns.sentenceKey(suffix, core));
    result = result?.trim?.() ?? result;
    return result;
};

export const sentenceObj = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): { [key: string]: string } => {
    let result: { [key: string]: string } = {};
    let arr: string[] = sentenceArr(content, prefix, suffix, core);
    arr.forEach((el) => {
        const key = sentenceKey(el);
        if (key) result[key] = sentenceValue(key, el);
    });
    return result;
};

export const sentenceValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result = helpers.getMatch(
        content,
        patterns.sentenceValue(key, suffix, core)
    );
    result = result?.trim?.() ?? result;
    return result;
};

export const slug = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result: string = line(content, prefix, suffix, core);
    if (result) result = slugify(result);
    return result;
};

export const slugValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result: string = lineValue(key, content, suffix, core);
    if (result) result = slugify(result);
    return result;
};

export const string = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => helpers.getMatch(content, patterns.string(prefix, suffix, core));

export const stringValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => helpers.getMatch(content, patterns.stringValue(key, suffix, core));

export const url = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result: string = line(content, prefix, suffix, core);
    result = $$.isUrl(result) ? result : "";
    return result;
};

export const urlValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result: string = lineValue(key, content, suffix, core);
    result = $$.isUrl(result) ? result : "";
    return result;
};

export const weeks = (
    content: string | number,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = int(content, prefix, suffix, core);
    return result && result === result ? result * secondsInAWeek : null;
};

export const weeksValue = (
    key: string,
    content: string | number,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): number | null => {
    let result: number | null = intValue(key, content, suffix, core);
    return result && result === result ? result * secondsInAWeek : null;
};

export const word = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result = helpers.getMatch(content, patterns.word(prefix, suffix, core));
    result = result?.trim?.() ?? result;
    return result;
};

export const wordArr = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string[] => {
    let result: string = word(content, prefix, suffix, core);
    return result?.split?.(patterns.wordArrDiv)?.filter?.(Boolean) ?? [];
};

export const wordArrValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string[] => {
    let result: string = wordValue(key, content, suffix, core);
    return result?.split?.(patterns.wordArrDiv)?.filter?.(Boolean) ?? [];
};

export const wordKey = (
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result = helpers.getMatch(content, patterns.wordKey(suffix, core));
    result = result?.trim?.() ?? result;
    return result;
};

export const wordObj = (
    content: string,
    prefix: RegExp | undefined = undefined,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): { [key: string]: string } => {
    let result: { [key: string]: string } = {};
    let arr: string[] = wordArr(content, prefix, suffix, core);
    arr.forEach((el) => {
        const key = wordKey(el);
        if (key) result[key] = wordValue(key, el);
    });
    return result;
};

export const wordValue = (
    key: string,
    content: string,
    suffix: RegExp | undefined = undefined,
    core: RegExp | undefined = undefined
): string => {
    let result = helpers.getMatch(
        content,
        patterns.wordValue(key, suffix, core)
    );
    result = result?.trim?.() ?? result;
    return result;
};
