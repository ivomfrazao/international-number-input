import internationalNumberInput from "../InternationalNumberInput";

export function forEachInstance(method: string): void {
	const { instances } = internationalNumberInput;
	Object.values(instances).forEach((instance) => instance[method]());
};

//* Load the utils script.
export function loadUtils(path: string): Promise<unknown> | null {
	//* 2 Options:
	//* 1) Not already started loading (start)
	//* 2) Already started loading (do nothing - just wait for the onload callback to fire, which will
	//* trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
	if (
		!internationalNumberInput.utils &&
		!internationalNumberInput.startedLoadingUtilsScript
	) {
		//* Only do this once.
		internationalNumberInput.startedLoadingUtilsScript = true;

		return new Promise((resolve, reject) => {
			import(path)
				.then(({ default: utils }) => {
					internationalNumberInput.utils = utils;
					forEachInstance("handleUtils");
					resolve(true);
				})
				.catch(() => {
					forEachInstance("rejectUtilsScriptPromise");
					reject();
				});
		});
	}
	return null;
};