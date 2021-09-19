import assert from "assert"
import { Message } from "../index.js"

describe("message", () => {

	it("instance", () => {
		const token = new Message()
		assert.deepEqual(token.fragments, [])
		assert.deepEqual(token.users, [])
		assert.deepEqual(token.channels, [])
		assert.throws(() => {
			token.users = ""
			token.fragments = ""
			token.channels = ""
		})
	})

})
