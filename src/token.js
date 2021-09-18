/** @module token */

/**
 * @memberof: module:token
 */
class Token {

	/**
	 * @typedef {TokenType} string
	 * @type {TokenType}
	 */
	static TYPE = {
		TEXT: "TEXT",
		CHANNEL: "CHANNEL",
		USER: "USER",
	}

	/**
	 * @param {string}    buffer
	 * @param {string}    bufferIndex
	 * @param {TokenType} type
	 */
	constructor(type, buffer, bufferIndex) {
		this._type = type
		this._buffer = buffer
		this._bufferIndex = bufferIndex
	}

	/**
	 * @type {TokenType}
	 */
	get type() {
		return this._type
	}

	/**
	 * @type {string}
	 */
	get buffer() {
		return this._buffer
	}

	/**
	 * @type {number}
	 */
	get bufferIndex() {
		return this._bufferIndex
	}

}

export default Token
