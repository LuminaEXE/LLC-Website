class LOG {
	static getSender() {
		//@ts-ignore
		return `nmf LOG: ${console.trace().split('\n')[2].split(' ')[5].replace('(', '').replace(')', '')}`;
	}
	static test() {
		console.log("nmf LOG: test");
	}
}

export default LOG;