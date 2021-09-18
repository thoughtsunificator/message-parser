/** @module message */

/**
	* @memberof: module:message
	*/
class Message {

	constructor() {
		this._fragments = []
		this._users = []
		this._channels = []
	}

	/**
	 * @type {Fragment[]}
	 */
	get fragments() {
		return this._fragments
	}

	/**
	 * @type {Array.<string>}
	 */
	get users() {
		return this._users
	}

	/**
	 * @type {Array.<string>}
	 */
	get channels() {
		return this._channels
	}

}

export default Message
