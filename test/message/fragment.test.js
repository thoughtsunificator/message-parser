import assert from "assert"
import { Fragment } from "../../index.js"

describe("fragment", () => {

	it("instance", () => {
		const token = new Fragment("text", "cxz")
		assert.strictEqual(token.type, "text")
		assert.strictEqual(token.content, "cxz")
		assert.throws(() => {
			token.type = ""
			token.content = ""
		})
	})

})
