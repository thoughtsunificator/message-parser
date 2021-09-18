/** @module parser */

import Tokenizer from "./tokenizer.js"
import Token from "./token.js"
import Fragment from "./message/fragment.js"
import Message from "./message.js"

/**
 * @memberof: module:parser
 */
class Parser {

	static parse(text) {
		const tokens = Tokenizer.tokenize(text)
		const message = new Message()
		for(const token of tokens) {
			if(token.type === Token.TYPE.USER) {
				message.users.push(token.buffer.slice(Tokenizer.CHANNEL_PREFIX.length))
			} else if(token.type === Token.TYPE.CHANNEL) {
				message.channels.push(token.buffer.slice(Tokenizer.USER_PREFIX.length))
			}
			message.fragments.push(new Fragment(token.type, token.buffer))
		}
		return message
	}

}

export default Parser
