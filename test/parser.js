import Parser from "../src/parser.js"

export function parse(test) {
	test.expect(50)

	const message = Parser.parse("@dsadsadas dsadsa")

	test.strictEqual(message.fragments[0].type, "USER")
	test.strictEqual(message.fragments[0].content, "@dsadsadas")

	test.strictEqual(message.fragments[1].type, "TEXT")
	test.strictEqual(message.fragments[1].content, " dsadsa")

	test.deepEqual(message.users, ["dsadsadas"])
	test.deepEqual(message.channels, [])

	const message_ = Parser.parse("#dsadsadas dsadsa")

	test.strictEqual(message_.fragments[0].type, "CHANNEL")
	test.strictEqual(message_.fragments[0].content, "#dsadsadas")

	test.strictEqual(message_.fragments[1].type, "TEXT")
	test.strictEqual(message_.fragments[1].content, " dsadsa")

	test.deepEqual(message_.channels, ["dsadsadas"])
	test.deepEqual(message_.users, [])

	const message__ = Parser.parse("@dsadsads #dsadsa @d #d")

	test.strictEqual(message__.fragments[0].type, "USER")
	test.strictEqual(message__.fragments[0].content, "@dsadsads")

	test.strictEqual(message__.fragments[1].type, "TEXT")
	test.strictEqual(message__.fragments[1].content, " ")

	test.strictEqual(message__.fragments[2].type, "CHANNEL")
	test.strictEqual(message__.fragments[2].content, "#dsadsa")

	test.strictEqual(message__.fragments[3].type, "TEXT")
	test.strictEqual(message__.fragments[3].content, " ")

	test.strictEqual(message__.fragments[4].type, "USER")
	test.strictEqual(message__.fragments[4].content, "@d")

	test.strictEqual(message__.fragments[5].type, "TEXT")
	test.strictEqual(message__.fragments[5].content, " ")

	test.strictEqual(message__.fragments[6].type, "CHANNEL")
	test.strictEqual(message__.fragments[6].content, "#d")

	test.deepEqual(message__.channels, ["dsadsa", "d"])
	test.deepEqual(message__.users, ["dsadsads", "d"])

	const message___ = Parser.parse("dsadsa #dsadsadas dsadsa")

	test.strictEqual(message___.fragments[0].type, "TEXT")
	test.strictEqual(message___.fragments[0].content, "dsadsa ")

	test.strictEqual(message___.fragments[1].type, "CHANNEL")
	test.strictEqual(message___.fragments[1].content, "#dsadsadas")

	test.strictEqual(message___.fragments[2].type, "TEXT")
	test.strictEqual(message___.fragments[2].content, " dsadsa")

	test.deepEqual(message___.channels, ["dsadsadas"])
	test.deepEqual(message___.users, [])


	const message____ = Parser.parse(`dsadsa #dsadsadas
		dsadsa
		#dsads`)

	test.strictEqual(message____.fragments[0].type, "TEXT")
	test.strictEqual(message____.fragments[0].content, "dsadsa ")

	test.strictEqual(message____.fragments[1].type, "CHANNEL")
	test.strictEqual(message____.fragments[1].content, "#dsadsadas")

	test.strictEqual(message____.fragments[2].type, "TEXT")
	test.strictEqual(message____.fragments[2].content, "\n\t\tdsadsa\n\t\t")

	test.strictEqual(message____.fragments[3].type, "CHANNEL")
	test.strictEqual(message____.fragments[3].content, "#dsads")

	test.deepEqual(message____.channels, ["dsadsadas", "dsads"])
	test.deepEqual(message____.users, [])


	const message_____ = Parser.parse(`@dsadsa#dsads`)

	test.strictEqual(message_____.fragments[0].type, "TEXT")
	test.strictEqual(message_____.fragments[0].content, "@dsadsa#dsads")

	test.deepEqual(message_____.channels, [])
	test.deepEqual(message_____.users, [])

	test.done()
}
