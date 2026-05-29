import { MOON_BLOCKS, MOON_BLOCKS_IMAGES } from '../constants.js';
import {
    moonCastGridDiv,
    moonDescriptionDiv,
    moonImgFrameDiv,
    moonOutcomeBoundsDiv,
    resetBtn,
    sticksPickedSubviewDiv,
} from './refs.js';
import {
    createImageElement,
    createTextElement,
    switchView
} from './helpers.js';
import { parseCastKey } from '../utils.js';

const CAST_LABELS = {
    1: 'First Cast:',
    2: 'Second Cast:',
    3: 'Third Cast:',
};

export const displayFortuneSticksResults = (fortuneStick) => {
    const sections = [
        {
            heading: 'POEM',
            content: fortuneStick.poem,
            className: 'picked-poem-text'
        },
        {
            heading: 'TRADITIONAL INTERPRETATION',
            content: fortuneStick.traditional,
            className: 'picked-traditional-text'
        },
        {
            heading: 'REFLECTION',
            content: fortuneStick.reflection,
            className: 'picked-reflection-text'
        },
    ];

    sections.forEach(({ heading, content, className }) => {
        sticksPickedSubviewDiv.append(createTextElement('h2', heading, 'picked-heading'));
        sticksPickedSubviewDiv.append(createTextElement('p', content, className));
    });

    switchView('subview');
};

export const displayMoonBlocksResults = (casts, outcome = null) => {
    const currentCast = casts[casts.length - 1];

    displayMoonImages(currentCast);
    displayMoonDescription(currentCast);
    displayMoonCastGrid(currentCast, casts.length);


    if (outcome) {
        displayMoonOutcome(outcome);
    }
};

const displayMoonCastGrid = (currentCast, castNumber) => {
    const spanLabel = createTextElement(
        'span',
        CAST_LABELS[castNumber],
        'moon-cast-text-label'
    );
    const spanText = createTextElement(
        'span',
        MOON_BLOCKS[currentCast].text,
        'moon-cast-text'
    )
    const pCast = createTextElement(
        'p',
        '',
        'moon-cast-text-row'
    );
    pCast.append(spanLabel);
    pCast.append(spanText);

    if (castNumber === 1) {
        const h2Results = createTextElement(
            'h2',
            'RESPONSES',
            'moon-cast-heading'
        );
        moonCastGridDiv.append(h2Results);
    }

    moonCastGridDiv.append(pCast);
}

const displayMoonDescription = (currentCast) => {
    let descriptionText = document.querySelector('.moon-description-text');

    if (!descriptionText) {
        descriptionText = createTextElement(
            'p',
            '',
            'moon-description-text'
        );
        moonDescriptionDiv.append(descriptionText);
    }
    descriptionText.innerText = MOON_BLOCKS[currentCast].description;
}

const displayMoonImages = (currentCast) => {
    // reset first
    moonImgFrameDiv.replaceChildren();

    const { lKey, rKey } = parseCastKey(currentCast);
    const left = MOON_BLOCKS_IMAGES[`left-${lKey}`];
    const right = MOON_BLOCKS_IMAGES[`right-${rKey}`];
    const leftImage = createImageElement(left.src, 'l-block-img', left.alt);
    const rightImage = createImageElement(right.src, 'r-block-img', right.alt);

    moonImgFrameDiv.append(leftImage);
    moonImgFrameDiv.append(rightImage);
};

const displayMoonOutcome = (outcome) => {
    const pOutcome = createTextElement(
        'p',
        outcome.text,
        'moon-outcome-text'
    );
    moonOutcomeBoundsDiv.append(pOutcome);

    if (outcome.showFortuneSticks) {
        resetBtn.disabled = true;
        setTimeout(() => {
            switchView('sticks');
            resetBtn.disabled = false;
        }, 1500);
    }
}