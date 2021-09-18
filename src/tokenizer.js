/** @module tokenizer */

import Token from "./token.js"

/**
 * @memberof: module:tokenizer
 */
class Tokenizer {

	/**
	 * @type {string}
	 */
	static CHANNEL_PREFIX = "#"
	/**
	 * @type {string}
	 */
	static USER_PREFIX = "@"
	/**
	 * @type {Array}
	 */
	static SEPARATOR_CHARACTERS = ["\t", "\n", "\r\n", " "]
	/**
	 * @type {array}
	 */
	static CHANNEL_ALLOWED_CHARACTERS = [..."abcdefghijklmnopqrstuvwxyz1234567890"]
	/**
	 * @type {array}
	 */
	static USER_ALLOWED_CHARACTERS = [..."abcdefghijklmnopqrstuvwxyz1234567890-_"]

	/**
	 * @param   {string} text
	 * @returns {Token[]}
	 */
	static tokenize(text) {
		const characters = [ ...text ]
		const tokens = []
		let buffer = ""
		for(const [index, character] of characters.entries()) {

			buffer += character

			let nextCharacter = null
			if(index + 1 <= characters.length - 1) {
				nextCharacter = characters[index + 1]
			}

			let lastToken = tokens[tokens.length - 1]

			if(buffer[0] === Tokenizer.CHANNEL_PREFIX && buffer.length > 1 && (nextCharacter === null || Tokenizer.SEPARATOR_CHARACTERS.includes(nextCharacter))
				&& (!lastToken || Tokenizer.SEPARATOR_CHARACTERS.includes(lastToken.buffer.slice(-1)))) {
				tokens.push(new Token(Token.TYPE.CHANNEL, buffer, index - buffer.length + 1))
				buffer = ""
			} else if(buffer[0] === Tokenizer.USER_PREFIX && buffer.length > 1 && (nextCharacter === null || Tokenizer.SEPARATOR_CHARACTERS.includes(nextCharacter))
				&& (!lastToken || Tokenizer.SEPARATOR_CHARACTERS.includes(lastToken.buffer.slice(-1)))) {
				tokens.push(new Token(Token.TYPE.USER, buffer, index - buffer.length + 1))
				buffer = ""
			} else if(!Tokenizer.USER_ALLOWED_CHARACTERS.includes(nextCharacter) && !Tokenizer.CHANNEL_ALLOWED_CHARACTERS.includes(nextCharacter)) {
				if(lastToken && lastToken.type === Token.TYPE.TEXT) {
					let newBuffer = tokens[tokens.length - 1].buffer + buffer
					let bufferIndex = index - buffer.length - tokens[tokens.length - 1].buffer.length + 1
					tokens[tokens.length - 1] = new Token(Token.TYPE.TEXT, newBuffer, bufferIndex)
				} else {
					tokens.push(new Token(Token.TYPE.TEXT, buffer, index - buffer.length + 1))
				}
				buffer = ""
			}

		}
		return tokens
	}

}

export default Tokenizer
