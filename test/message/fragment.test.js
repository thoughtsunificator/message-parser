import { Fragment } from "../../index.js"

export function instance(test) {
	const token = new Fragment("text", "cxz")
	test.expect(3)
	test.strictEqual(token.type, "text")
	test.strictEqual(token.content, "cxz")
	test.throws(() => {
		token.type = ""
		token.content = ""
	})
	test.done()
}
