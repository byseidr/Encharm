import * as patterns from "./patterns";

export const getMatch = (
    content: string,
    pattern: RegExp,
    defaultVal: any = null
) => {
    let result: any = defaultVal;
    let matches: RegExpMatchArray | null = content?.match(pattern);
    if (matches?.[1]) {
        result = /^\d+$/.test(matches[1]) ? +matches[1] : matches[1];
    }
    return result;
};

export const getStringBool = (content: string) => {
    let result = null;
    if (content) {
        content = content
            ?.replace?.(patterns.falsy, "n")
            ?.replace?.(/[^n]+/g, "y");
        result = content?.charAt?.(0) ?? null;
    }
    return result;
};
