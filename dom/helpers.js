import {
    castBtn,
    moonCastGridDiv,
    moonDescriptionDiv,
    moonImgFrameDiv,
    moonOutcomeBoundsDiv,
    moonViewDiv,
    questionInput,
    resetBtn,
    startSessionBtn,
    sticksIntroSubviewDiv,
    sticksPickedSubviewDiv,
    sticksViewDiv,
} from "./refs.js";

export const createImageElement = (src, className, altText) => {
    const divWrapper = document.createElement('div');
    divWrapper.classList.add(`${className}-frame`);
    const img = document.createElement('img');
    img.classList.add(className);
    img.src = src;
    img.alt = altText;
    divWrapper.append(img);

    return divWrapper;
}

export const createTextElement = (element, text, className) => {
    const newElement = document.createElement(element);
    newElement.innerText = text;
    newElement.classList.add(className);

    return newElement;
};

export const hideCastBtn = () => {
    castBtn.style.display = 'none';
}

export const resetResults = () => {
    moonImgFrameDiv.replaceChildren();
    moonDescriptionDiv.replaceChildren();
    moonCastGridDiv.replaceChildren();
    moonOutcomeBoundsDiv.replaceChildren();
    sticksPickedSubviewDiv.replaceChildren();
    switchView('moon');
}

export const setActiveSessionBtns = (active) => {
    startSessionBtn.style.display = active ? 'none' : 'block';
    castBtn.style.display = active ? 'block' : 'none';
    resetBtn.style.display = active ? 'block' : 'none';
}

export const scrollToInput = () => {
    questionInput.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export const scrollToResults = () => {
    moonViewDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export const switchView = (view) => {
    switch (view) {
        case 'moon':
            sticksViewDiv.classList.remove('active');
            sticksViewDiv.setAttribute('aria-hidden', 'true');
            moonViewDiv.classList.add('active');
            moonViewDiv.setAttribute('aria-hidden', 'false');
            sticksPickedSubviewDiv.classList.remove('active');
            sticksIntroSubviewDiv.classList.add('active');
            break;
        case 'sticks':
            sticksViewDiv.classList.add('active');
            sticksViewDiv.setAttribute('aria-hidden', 'false');
            moonViewDiv.classList.remove('active');
            moonViewDiv.setAttribute('aria-hidden', 'true');
            break;
        case 'subview':
            // don't need aria-hidden because this has no fade in animation
            // just a css display: none -> display: flex
            sticksIntroSubviewDiv.classList.remove('active');
            sticksPickedSubviewDiv.classList.add('active');
            break;
    }
}
