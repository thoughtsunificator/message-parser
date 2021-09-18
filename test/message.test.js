import { Message } from "../index.js"

export function instance(test) {
	const token = new Message()
	test.expect(4)
	test.deepEqual(token.fragments, [])
	test.deepEqual(token.users, [])
	test.deepEqual(token.channels, [])
	test.throws(() => {
		token.users = ""
		token.fragments = ""
		token.channels = ""
	})
	test.done()
}
