/** @module message/fragment */

/**
	* @memberof: module:message/fragment
	*/
class Fragment {

	/**
	 * @param {TokenType} type
	 * @param {string} content
	 */
	constructor(type, content) {
		this._type = type
		this._content = content
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
	get content() {
		return this._content
	}

}

export default Fragment
