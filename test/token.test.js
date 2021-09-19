import assert from "assert"
import Token from "../src/token.js"

describe("token", () => {

	it("type", () => {
		assert.strictEqual(Token.TYPE.TEXT, "TEXT")
		assert.strictEqual(Token.TYPE.CHANNEL, "CHANNEL")
		assert.strictEqual(Token.TYPE.USER, "USER")
	})

	it("instance", () => {
		const token = new Token(Token.TYPE.TEXT, "cxz", 11)
		assert.strictEqual(token.type, Token.TYPE.TEXT)
		assert.strictEqual(token.buffer, "cxz")
		assert.strictEqual(token.bufferIndex, 11)
		assert.throws(() => {
			token.type = ""
			token.buffer = ""
			token.bufferIndex = ""
		})
	})

})
