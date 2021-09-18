import Tokenizer from "../src/tokenizer.js"

export function tokenize(test) {
	test.expect(57)

	const tokens = Tokenizer.tokenize("@dsadsadas dsadsa")

	test.strictEqual(tokens[0].type, "USER")
	test.strictEqual(tokens[0].buffer, "@dsadsadas")
	test.strictEqual(tokens[0].bufferIndex, 0)

	test.strictEqual(tokens[1].type, "TEXT")
	test.strictEqual(tokens[1].buffer, " dsadsa")
	test.strictEqual(tokens[1].bufferIndex, 10)

	const tokens_ = Tokenizer.tokenize("#dsadsadas dsadsa")

	test.strictEqual(tokens_[0].type, "CHANNEL")
	test.strictEqual(tokens_[0].buffer, "#dsadsadas")
	test.strictEqual(tokens_[0].bufferIndex, 0)

	test.strictEqual(tokens_[1].type, "TEXT")
	test.strictEqual(tokens_[1].buffer, " dsadsa")
	test.strictEqual(tokens_[1].bufferIndex, 10)

	const tokens__ = Tokenizer.tokenize("@dsadsads #dsadsa @d #d")

	test.strictEqual(tokens__[0].type, "USER")
	test.strictEqual(tokens__[0].buffer, "@dsadsads")
	test.strictEqual(tokens__[0].bufferIndex, 0)

	test.strictEqual(tokens__[1].type, "TEXT")
	test.strictEqual(tokens__[1].buffer, " ")
	test.strictEqual(tokens__[1].bufferIndex, 9)

	test.strictEqual(tokens__[2].type, "CHANNEL")
	test.strictEqual(tokens__[2].buffer, "#dsadsa")
	test.strictEqual(tokens__[2].bufferIndex, 10)

	test.strictEqual(tokens__[3].type, "TEXT")
	test.strictEqual(tokens__[3].buffer, " ")
	test.strictEqual(tokens__[3].bufferIndex, 17)

	test.strictEqual(tokens__[4].type, "USER")
	test.strictEqual(tokens__[4].buffer, "@d")
	test.strictEqual(tokens__[4].bufferIndex, 18)

	test.strictEqual(tokens__[5].type, "TEXT")
	test.strictEqual(tokens__[5].buffer, " ")
	test.strictEqual(tokens__[5].bufferIndex, 20)

	test.strictEqual(tokens__[6].type, "CHANNEL")
	test.strictEqual(tokens__[6].buffer, "#d")
	test.strictEqual(tokens__[6].bufferIndex, 21)

	const tokens___ = Tokenizer.tokenize("dsadsa #dsadsadas dsadsa")

	test.strictEqual(tokens___[0].type, "TEXT")
	test.strictEqual(tokens___[0].buffer, "dsadsa ")
	test.strictEqual(tokens___[0].bufferIndex, 0)

	test.strictEqual(tokens___[1].type, "CHANNEL")
	test.strictEqual(tokens___[1].buffer, "#dsadsadas")
	test.strictEqual(tokens___[1].bufferIndex, 7)

	test.strictEqual(tokens___[2].type, "TEXT")
	test.strictEqual(tokens___[2].buffer, " dsadsa")
	test.strictEqual(tokens___[2].bufferIndex, 17)

	const tokens____ = Tokenizer.tokenize(`dsadsa #dsadsadas
		dsadsa
		#dsads`)

	test.strictEqual(tokens____[0].type, "TEXT")
	test.strictEqual(tokens____[0].buffer, "dsadsa ")
	test.strictEqual(tokens____[0].bufferIndex, 0)

	test.strictEqual(tokens____[1].type, "CHANNEL")
	test.strictEqual(tokens____[1].buffer, "#dsadsadas")
	test.strictEqual(tokens____[1].bufferIndex, 7)

	test.strictEqual(tokens____[2].type, "TEXT")
	test.strictEqual(tokens____[2].buffer, "\n\t\tdsadsa\n\t\t")
	test.strictEqual(tokens____[2].bufferIndex, 17)

	test.strictEqual(tokens____[3].type, "CHANNEL")
	test.strictEqual(tokens____[3].buffer, "#dsads")
	test.strictEqual(tokens____[3].bufferIndex, 29)

	const tokens_____ = Tokenizer.tokenize(`@dsadsa#dsads`)

	test.strictEqual(tokens_____[0].type, "TEXT")
	test.strictEqual(tokens_____[0].buffer, "@dsadsa#dsads")
	test.strictEqual(tokens_____[0].bufferIndex, 0)

	test.done()
}
