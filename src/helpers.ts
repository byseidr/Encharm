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
