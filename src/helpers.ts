import * as patterns from "./patterns";

export const getMatch = (
    content: string,
    pattern: RegExp,
    defaultVal: any = null
) => {
    let result: any = defaultVal;
    let matches: RegExpMatchArray | null = content?.match(pattern);
    return matches?.[1] ?? result;
};

export const getStringBool = (content: string): string => {
    let result = "n";
    if (content) {
        content = content
            ?.replace?.(patterns.falsy, "n")
            ?.replace?.(/[^n]+/g, "y");
        result = content?.charAt?.(0) ?? result;
    }
    return result;
};

export const getTrueBool = (content: string): boolean => {
    let result = false;
    if (content) {
        content = getStringBool(content);
        result = content === "y" ? true : result;
    }
    return result;
};
