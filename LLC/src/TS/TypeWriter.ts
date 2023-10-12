class TypeWriter {
	static  write(
		text: string, 
		speed: number, 
		element: HTMLElement | null, 
		_addSpace?: boolean,
		$delay: number = 0,
		afterRun: Function = function() {}
		): [boolean, string] | undefined {
		if(!TypeWriter.getHasWriten()) {
			if (element == null) {
				return [false, "Element is null"];
			}
			let delay = setTimeout(function() {
				if(_addSpace) { element.innerHTML += " "; }

				let wasSuccesful = true;
				let i = 0;
				let timer = setInterval(function() {
					if (i < text.length) {
						element.innerHTML += text.charAt(i);
						i++;
					} else {
						wasSuccesful = false;
						clearInterval(timer);
					}
				}, speed);

				if(wasSuccesful) {
					afterRun();
					return [true, "Succesfully wrote text"];
				} else return [false, "Failed to write text"];
			}
			, $delay);
		} else return [false, "Already writen text"];
	}
	static removeElement (element: HTMLElement | null, $delay: number = 0): [boolean, string] | undefined {
		if (element == null) {
			return [false, "Element is null"];
		}
		let delay = setTimeout(function() {
			element.remove();
			return [true, "Succesfully removed element"];
		}, $delay);
	}
	static setHasWriten($v: boolean = true) {
		if($v) localStorage.setItem("hasWriten", "true");
		else localStorage.setItem("hasWriten", "flase");
	}
	static getHasWriten(): boolean {
		localStorage.getItem("hasWriten");
		if(localStorage.getItem("hasWriten") == "true") {
			return true;
		} else return false;
	}
}

export default TypeWriter;