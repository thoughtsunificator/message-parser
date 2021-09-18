import Token from "../src/token.js"

export function type(test) {
	test.expect(3)
	test.strictEqual(Token.TYPE.TEXT, "TEXT")
	test.strictEqual(Token.TYPE.CHANNEL, "CHANNEL")
	test.strictEqual(Token.TYPE.USER, "USER")
	test.done()
}

export function instance(test) {
	const token = new Token(Token.TYPE.TEXT, "cxz", 11)
	test.expect(4)
	test.strictEqual(token.type, Token.TYPE.TEXT)
	test.strictEqual(token.buffer, "cxz")
	test.strictEqual(token.bufferIndex, 11)
	test.throws(() => {
		token.type = ""
		token.buffer = ""
		token.bufferIndex = ""
	})
	test.done()
}
