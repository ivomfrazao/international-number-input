/**
 * Creates a DOM element, sets its attributes and appends in a container element in a single atomic action.
 * @param tagName The name of an element.
 * @param attributes An object of key/value pairs of attributes to set to the element.
 * @param container The container where we want to place the element created.
 * @returns The new element.
 */
export function createDOMElement (tagName: string, attributes: object | null, container?: HTMLElement): HTMLElement {
	const el = document.createElement(tagName);
	if (attributes) {
		Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
	}
	if (container) {
		container.appendChild(el);
	}
	return el;
};