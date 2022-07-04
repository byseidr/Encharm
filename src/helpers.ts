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
