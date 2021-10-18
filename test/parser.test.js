import assert from "assert"
import Parser from "../src/parser.js"

describe("parser", () => {

	it("parse", () => {

		const message = Parser.parse("@dsadsadas dsadsa")

		assert.strictEqual(message.fragments[0].type, "USER")
		assert.strictEqual(message.fragments[0].content, "@dsadsadas")

		assert.strictEqual(message.fragments[1].type, "TEXT")
		assert.strictEqual(message.fragments[1].content, " dsadsa")

		assert.deepEqual(message.users, ["dsadsadas"])
		assert.deepEqual(message.channels, [])

		const message_ = Parser.parse("#dsadsadas dsadsa")

		assert.strictEqual(message_.fragments[0].type, "CHANNEL")
		assert.strictEqual(message_.fragments[0].content, "#dsadsadas")

		assert.strictEqual(message_.fragments[1].type, "TEXT")
		assert.strictEqual(message_.fragments[1].content, " dsadsa")

		assert.deepEqual(message_.channels, ["dsadsadas"])
		assert.deepEqual(message_.users, [])

		const message__ = Parser.parse("@dsadsads #dsadsa @d #d")

		assert.strictEqual(message__.fragments[0].type, "USER")
		assert.strictEqual(message__.fragments[0].content, "@dsadsads")

		assert.strictEqual(message__.fragments[1].type, "TEXT")
		assert.strictEqual(message__.fragments[1].content, " ")

		assert.strictEqual(message__.fragments[2].type, "CHANNEL")
		assert.strictEqual(message__.fragments[2].content, "#dsadsa")

		assert.strictEqual(message__.fragments[3].type, "TEXT")
		assert.strictEqual(message__.fragments[3].content, " ")

		assert.strictEqual(message__.fragments[4].type, "USER")
		assert.strictEqual(message__.fragments[4].content, "@d")

		assert.strictEqual(message__.fragments[5].type, "TEXT")
		assert.strictEqual(message__.fragments[5].content, " ")

		assert.strictEqual(message__.fragments[6].type, "CHANNEL")
		assert.strictEqual(message__.fragments[6].content, "#d")

		assert.deepEqual(message__.channels, ["dsadsa", "d"])
		assert.deepEqual(message__.users, ["dsadsads", "d"])

		const message___ = Parser.parse("dsadsa #dsadsadas dsadsa")

		assert.strictEqual(message___.fragments[0].type, "TEXT")
		assert.strictEqual(message___.fragments[0].content, "dsadsa ")

		assert.strictEqual(message___.fragments[1].type, "CHANNEL")
		assert.strictEqual(message___.fragments[1].content, "#dsadsadas")

		assert.strictEqual(message___.fragments[2].type, "TEXT")
		assert.strictEqual(message___.fragments[2].content, " dsadsa")

		assert.deepEqual(message___.channels, ["dsadsadas"])
		assert.deepEqual(message___.users, [])


		const message____ = Parser.parse(`dsadsa #dsadsadas
		dsadsa
		#dsads`)

		assert.strictEqual(message____.fragments[0].type, "TEXT")
		assert.strictEqual(message____.fragments[0].content, "dsadsa ")

		assert.strictEqual(message____.fragments[1].type, "CHANNEL")
		assert.strictEqual(message____.fragments[1].content, "#dsadsadas")

		assert.strictEqual(message____.fragments[2].type, "TEXT")
		assert.strictEqual(message____.fragments[2].content, "\n\t\tdsadsa\n\t\t")

		assert.strictEqual(message____.fragments[3].type, "CHANNEL")
		assert.strictEqual(message____.fragments[3].content, "#dsads")

		assert.deepEqual(message____.channels, ["dsadsadas", "dsads"])
		assert.deepEqual(message____.users, [])


		const message_____ = Parser.parse(`@dsadsa#dsads`)

		assert.strictEqual(message_____.fragments[0].type, "TEXT")
		assert.strictEqual(message_____.fragments[0].content, "@dsadsa#dsads")

		assert.deepEqual(message_____.channels, [])
		assert.deepEqual(message_____.users, [])


		const message______ = Parser.parse(`#fFSFSD #dsadsaDas #dFsads @dsaFGDSG`)

		assert.strictEqual(message______.fragments[0].type, "CHANNEL")
		assert.strictEqual(message______.fragments[0].content, "#fFSFSD")

		assert.strictEqual(message______.fragments[1].type, "TEXT")
		assert.strictEqual(message______.fragments[1].content, " ")

		assert.strictEqual(message______.fragments[2].type, "CHANNEL")
		assert.strictEqual(message______.fragments[2].content, "#dsadsaDas")

		assert.strictEqual(message______.fragments[3].type, "TEXT")
		assert.strictEqual(message______.fragments[3].content, " ")

		assert.strictEqual(message______.fragments[4].type, "CHANNEL")
		assert.strictEqual(message______.fragments[4].content, "#dFsads")

		assert.strictEqual(message______.fragments[5].type, "TEXT")
		assert.strictEqual(message______.fragments[5].content, " ")

		assert.strictEqual(message______.fragments[6].type, "USER")
		assert.strictEqual(message______.fragments[6].content, "@dsaFGDSG")

		assert.deepEqual(message______.channels, ["fFSFSD", "dsadsaDas", "dFsads"])
		assert.deepEqual(message______.users, ["dsaFGDSG"])

	})

})
