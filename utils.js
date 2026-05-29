import {
    FORTUNE_STICKS,
    MOON_BLOCKS,
    OUTCOMES,
} from "./constants.js";

export const calculateFate = (fateMap) => {
    const yes = fateMap.get('y');
    const no = fateMap.get('n');
    const laughing = fateMap.get('l');

    if (yes >= 2) return OUTCOMES.yes;
    if (no >= 2) return OUTCOMES.no;
    return OUTCOMES.laughing;
};

export const createFateMap = () => new Map(
    [
        ['y', 0],
        ['n', 0],
        ['l', 0]
    ]
);

export const getCastKey = (inputValue) => {
    // force yes to trigger sticks view
    if (inputValue.toLowerCase() === 'lucky') {
        return '0,1';
    }

    return `${getRandomNumber()},${getRandomNumber()}`;
};

export const getRandomNumber = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

export const parseCastKey = (str) => {
    const [lKey, rKey] = str.split(',');

    return { lKey, rKey };
}

export const updateFateMap = (fateMap, cast) => {
    const key = MOON_BLOCKS[cast].shorthand;
    fateMap.set(key, fateMap.get(key) + 1);

    return fateMap;
};


export const shakeSticks = () => {
    const stickNumber = getRandomNumber(1, 64);

    return FORTUNE_STICKS[stickNumber];
};