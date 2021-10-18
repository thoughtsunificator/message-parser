import assert from "assert"
import Tokenizer from "../src/tokenizer.js"

describe("tokenize", () => {

	it("tokenize", () => {

		const tokens = Tokenizer.tokenize("@dsadsadas dsadsa")

		assert.strictEqual(tokens[0].type, "USER")
		assert.strictEqual(tokens[0].buffer, "@dsadsadas")
		assert.strictEqual(tokens[0].bufferIndex, 0)

		assert.strictEqual(tokens[1].type, "TEXT")
		assert.strictEqual(tokens[1].buffer, " dsadsa")
		assert.strictEqual(tokens[1].bufferIndex, 10)

		const tokens_ = Tokenizer.tokenize("#dsadsadas dsadsa")

		assert.strictEqual(tokens_[0].type, "CHANNEL")
		assert.strictEqual(tokens_[0].buffer, "#dsadsadas")
		assert.strictEqual(tokens_[0].bufferIndex, 0)

		assert.strictEqual(tokens_[1].type, "TEXT")
		assert.strictEqual(tokens_[1].buffer, " dsadsa")
		assert.strictEqual(tokens_[1].bufferIndex, 10)

		const tokens__ = Tokenizer.tokenize("@dsadsads #dsadsa @d #d")

		assert.strictEqual(tokens__[0].type, "USER")
		assert.strictEqual(tokens__[0].buffer, "@dsadsads")
		assert.strictEqual(tokens__[0].bufferIndex, 0)

		assert.strictEqual(tokens__[1].type, "TEXT")
		assert.strictEqual(tokens__[1].buffer, " ")
		assert.strictEqual(tokens__[1].bufferIndex, 9)

		assert.strictEqual(tokens__[2].type, "CHANNEL")
		assert.strictEqual(tokens__[2].buffer, "#dsadsa")
		assert.strictEqual(tokens__[2].bufferIndex, 10)

		assert.strictEqual(tokens__[3].type, "TEXT")
		assert.strictEqual(tokens__[3].buffer, " ")
		assert.strictEqual(tokens__[3].bufferIndex, 17)

		assert.strictEqual(tokens__[4].type, "USER")
		assert.strictEqual(tokens__[4].buffer, "@d")
		assert.strictEqual(tokens__[4].bufferIndex, 18)

		assert.strictEqual(tokens__[5].type, "TEXT")
		assert.strictEqual(tokens__[5].buffer, " ")
		assert.strictEqual(tokens__[5].bufferIndex, 20)

		assert.strictEqual(tokens__[6].type, "CHANNEL")
		assert.strictEqual(tokens__[6].buffer, "#d")
		assert.strictEqual(tokens__[6].bufferIndex, 21)

		const tokens___ = Tokenizer.tokenize("dsadsa #dsadsadas dsadsa")

		assert.strictEqual(tokens___[0].type, "TEXT")
		assert.strictEqual(tokens___[0].buffer, "dsadsa ")
		assert.strictEqual(tokens___[0].bufferIndex, 0)

		assert.strictEqual(tokens___[1].type, "CHANNEL")
		assert.strictEqual(tokens___[1].buffer, "#dsadsadas")
		assert.strictEqual(tokens___[1].bufferIndex, 7)

		assert.strictEqual(tokens___[2].type, "TEXT")
		assert.strictEqual(tokens___[2].buffer, " dsadsa")
		assert.strictEqual(tokens___[2].bufferIndex, 17)

		const tokens____ = Tokenizer.tokenize(`dsadsa #dsadsadas
		dsadsa
		#dsads`)

		assert.strictEqual(tokens____[0].type, "TEXT")
		assert.strictEqual(tokens____[0].buffer, "dsadsa ")
		assert.strictEqual(tokens____[0].bufferIndex, 0)

		assert.strictEqual(tokens____[1].type, "CHANNEL")
		assert.strictEqual(tokens____[1].buffer, "#dsadsadas")
		assert.strictEqual(tokens____[1].bufferIndex, 7)

		assert.strictEqual(tokens____[2].type, "TEXT")
		assert.strictEqual(tokens____[2].buffer, "\n\t\tdsadsa\n\t\t")
		assert.strictEqual(tokens____[2].bufferIndex, 17)

		assert.strictEqual(tokens____[3].type, "CHANNEL")
		assert.strictEqual(tokens____[3].buffer, "#dsads")
		assert.strictEqual(tokens____[3].bufferIndex, 29)

		const tokens_____ = Tokenizer.tokenize(`@dsadsa#dsads`)

		assert.strictEqual(tokens_____[0].type, "TEXT")
		assert.strictEqual(tokens_____[0].buffer, "@dsadsa#dsads")
		assert.strictEqual(tokens_____[0].bufferIndex, 0)

		const tokens______ = Tokenizer.tokenize(`#fFSFSD #dsadsaDas #dFsads @dsaFGDSG`)

		assert.strictEqual(tokens______[0].type, "CHANNEL")
		assert.strictEqual(tokens______[0].buffer, "#fFSFSD")
		assert.strictEqual(tokens______[0].bufferIndex, 0)

		assert.strictEqual(tokens______[1].type, "TEXT")
		assert.strictEqual(tokens______[1].buffer, " ")
		assert.strictEqual(tokens______[1].bufferIndex, 7)

		assert.strictEqual(tokens______[2].type, "CHANNEL")
		assert.strictEqual(tokens______[2].buffer, "#dsadsaDas")
		assert.strictEqual(tokens______[2].bufferIndex, 8)

		assert.strictEqual(tokens______[3].type, "TEXT")
		assert.strictEqual(tokens______[3].buffer, " ")
		assert.strictEqual(tokens______[3].bufferIndex, 18)

		assert.strictEqual(tokens______[4].type, "CHANNEL")
		assert.strictEqual(tokens______[4].buffer, "#dFsads")
		assert.strictEqual(tokens______[4].bufferIndex, 19)

		assert.strictEqual(tokens______[5].type, "TEXT")
		assert.strictEqual(tokens______[5].buffer, " ")
		assert.strictEqual(tokens______[5].bufferIndex, 26)

		assert.strictEqual(tokens______[6].type, "USER")
		assert.strictEqual(tokens______[6].buffer, "@dsaFGDSG")
		assert.strictEqual(tokens______[6].bufferIndex, 27)

	})

})
