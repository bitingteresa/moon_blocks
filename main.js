import {
    castBtn,
    moonViewDiv,
    questionInput,
    resetBtn,
    shakeBtn,
    sticksImgFrameDiv,
} from "./dom/refs.js";
import {
    carouselMovement,
    hideCastBtn,
    resetResults,
    setActiveSessionBtns,
    scrollToResults,
    scrollToInput,
} from "./dom/helpers.js";
import {
    displayMoonBlocksResults, displayFortuneSticksResults,
} from "./dom/view.js";
import {
    calculateFate,
    createFateMap,
    getCastKey,
    shakeSticks,
    updateFateMap
} from "./utils.js";
import { initIncenseCursor } from "./dom/smoke.js";

let currentSession = null;

const performCast = () => {
    const castKey = getCastKey(questionInput.value);
    currentSession.casts = [...currentSession.casts, castKey];
    updateFateMap(currentSession.fateMap, castKey);

    const isFinalCast = currentSession.casts.length >= 3;
    if (isFinalCast) {
        currentSession.outcome = calculateFate(currentSession.fateMap);
        hideCastBtn();
    }

    displayMoonBlocksResults(currentSession.casts, currentSession.outcome);
};

document.getElementById('cast-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.blur();

    if (!currentSession) {
        questionInput.disabled = true;

        setActiveSessionBtns(true);

        currentSession = {
            question: questionInput.value,
            casts: [],
            fateMap: createFateMap(),
            outcome: null,
        };
        performCast();
        scrollToResults();
    }
});

castBtn.addEventListener('click', performCast);

resetBtn.addEventListener('click', () => {
    questionInput.disabled = false;
    questionInput.value = '';

    resetResults();
    setActiveSessionBtns(false);
    scrollToInput();
    currentSession = null;
});

shakeBtn.addEventListener('click', () => {
    const stick = shakeSticks();

    displayFortuneSticksResults(stick);
});

shakeBtn.addEventListener('mouseenter', () => {
    sticksImgFrameDiv.classList.add('shake');
});

shakeBtn.addEventListener('mouseleave', () => {
    sticksImgFrameDiv.classList.remove('shake');
})

initIncenseCursor(moonViewDiv);
carouselMovement();