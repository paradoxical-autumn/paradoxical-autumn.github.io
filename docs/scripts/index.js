import { byLetter, byWord } from "./splitting.js";

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true

if (!isReduced) {
    console.log("motion OK!")
    const splitTargets = document.querySelectorAll('[split-by]')

    splitTargets.forEach(node => {
        const type = node.getAttribute('split-by')

        let nodes = null;

        if (type === 'letter') {
            nodes = byLetter(node.textContent)
        }
        else if (type === 'word') {
            nodes = byWord(node.textContent)
        }

        if (nodes) {
            node.firstChild.replaceWith(...nodes)
        }
    })
}