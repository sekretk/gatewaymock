/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AuditRequest = (function() {

    /**
     * Properties of an AuditRequest.
     * @exports IAuditRequest
     * @interface IAuditRequest
     * @property {number|null} [ClientId] AuditRequest ClientId
     */

    /**
     * Constructs a new AuditRequest.
     * @exports AuditRequest
     * @classdesc Represents an AuditRequest.
     * @implements IAuditRequest
     * @constructor
     * @param {IAuditRequest=} [properties] Properties to set
     */
    function AuditRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuditRequest ClientId.
     * @member {number} ClientId
     * @memberof AuditRequest
     * @instance
     */
    AuditRequest.prototype.ClientId = 0;

    /**
     * Creates a new AuditRequest instance using the specified properties.
     * @function create
     * @memberof AuditRequest
     * @static
     * @param {IAuditRequest=} [properties] Properties to set
     * @returns {AuditRequest} AuditRequest instance
     */
    AuditRequest.create = function create(properties) {
        return new AuditRequest(properties);
    };

    /**
     * Encodes the specified AuditRequest message. Does not implicitly {@link AuditRequest.verify|verify} messages.
     * @function encode
     * @memberof AuditRequest
     * @static
     * @param {IAuditRequest} message AuditRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuditRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ClientId != null && Object.hasOwnProperty.call(message, "ClientId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ClientId);
        return writer;
    };

    /**
     * Encodes the specified AuditRequest message, length delimited. Does not implicitly {@link AuditRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuditRequest
     * @static
     * @param {IAuditRequest} message AuditRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuditRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuditRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AuditRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuditRequest} AuditRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuditRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuditRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ClientId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuditRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuditRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuditRequest} AuditRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuditRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AuditRequest message.
     * @function verify
     * @memberof AuditRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AuditRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            if (!$util.isInteger(message.ClientId))
                return "ClientId: integer expected";
        return null;
    };

    /**
     * Creates an AuditRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuditRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuditRequest} AuditRequest
     */
    AuditRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.AuditRequest)
            return object;
        var message = new $root.AuditRequest();
        if (object.ClientId != null)
            message.ClientId = object.ClientId | 0;
        return message;
    };

    /**
     * Creates a plain object from an AuditRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuditRequest
     * @static
     * @param {AuditRequest} message AuditRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuditRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ClientId = 0;
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            object.ClientId = message.ClientId;
        return object;
    };

    /**
     * Converts this AuditRequest to JSON.
     * @function toJSON
     * @memberof AuditRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuditRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AuditRequest;
})();

$root.Notification = (function() {

    /**
     * Properties of a Notification.
     * @exports INotification
     * @interface INotification
     * @property {string|null} [Id] Notification Id
     * @property {NotificationItemType|null} [Topic] Notification Topic
     * @property {string|null} [CustomHeader] Notification CustomHeader
     * @property {string|null} [Message] Notification Message
     * @property {string|null} [Date] Notification Date
     * @property {string|null} [RelatedOrder] Notification RelatedOrder
     * @property {number|null} [ClientId] Notification ClientId
     */

    /**
     * Constructs a new Notification.
     * @exports Notification
     * @classdesc Represents a Notification.
     * @implements INotification
     * @constructor
     * @param {INotification=} [properties] Properties to set
     */
    function Notification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Notification Id.
     * @member {string} Id
     * @memberof Notification
     * @instance
     */
    Notification.prototype.Id = "";

    /**
     * Notification Topic.
     * @member {NotificationItemType} Topic
     * @memberof Notification
     * @instance
     */
    Notification.prototype.Topic = 0;

    /**
     * Notification CustomHeader.
     * @member {string} CustomHeader
     * @memberof Notification
     * @instance
     */
    Notification.prototype.CustomHeader = "";

    /**
     * Notification Message.
     * @member {string} Message
     * @memberof Notification
     * @instance
     */
    Notification.prototype.Message = "";

    /**
     * Notification Date.
     * @member {string} Date
     * @memberof Notification
     * @instance
     */
    Notification.prototype.Date = "";

    /**
     * Notification RelatedOrder.
     * @member {string} RelatedOrder
     * @memberof Notification
     * @instance
     */
    Notification.prototype.RelatedOrder = "";

    /**
     * Notification ClientId.
     * @member {number} ClientId
     * @memberof Notification
     * @instance
     */
    Notification.prototype.ClientId = 0;

    /**
     * Creates a new Notification instance using the specified properties.
     * @function create
     * @memberof Notification
     * @static
     * @param {INotification=} [properties] Properties to set
     * @returns {Notification} Notification instance
     */
    Notification.create = function create(properties) {
        return new Notification(properties);
    };

    /**
     * Encodes the specified Notification message. Does not implicitly {@link Notification.verify|verify} messages.
     * @function encode
     * @memberof Notification
     * @static
     * @param {INotification} message Notification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Notification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Id);
        if (message.Topic != null && Object.hasOwnProperty.call(message, "Topic"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Topic);
        if (message.CustomHeader != null && Object.hasOwnProperty.call(message, "CustomHeader"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.CustomHeader);
        if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Message);
        if (message.Date != null && Object.hasOwnProperty.call(message, "Date"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Date);
        if (message.RelatedOrder != null && Object.hasOwnProperty.call(message, "RelatedOrder"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.RelatedOrder);
        if (message.ClientId != null && Object.hasOwnProperty.call(message, "ClientId"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ClientId);
        return writer;
    };

    /**
     * Encodes the specified Notification message, length delimited. Does not implicitly {@link Notification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Notification
     * @static
     * @param {INotification} message Notification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Notification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Notification message from the specified reader or buffer.
     * @function decode
     * @memberof Notification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Notification} Notification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Notification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Notification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Id = reader.string();
                break;
            case 2:
                message.Topic = reader.int32();
                break;
            case 3:
                message.CustomHeader = reader.string();
                break;
            case 4:
                message.Message = reader.string();
                break;
            case 5:
                message.Date = reader.string();
                break;
            case 6:
                message.RelatedOrder = reader.string();
                break;
            case 7:
                message.ClientId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Notification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Notification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Notification} Notification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Notification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Notification message.
     * @function verify
     * @memberof Notification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Notification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Id != null && message.hasOwnProperty("Id"))
            if (!$util.isString(message.Id))
                return "Id: string expected";
        if (message.Topic != null && message.hasOwnProperty("Topic"))
            switch (message.Topic) {
            default:
                return "Topic: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                break;
            }
        if (message.CustomHeader != null && message.hasOwnProperty("CustomHeader"))
            if (!$util.isString(message.CustomHeader))
                return "CustomHeader: string expected";
        if (message.Message != null && message.hasOwnProperty("Message"))
            if (!$util.isString(message.Message))
                return "Message: string expected";
        if (message.Date != null && message.hasOwnProperty("Date"))
            if (!$util.isString(message.Date))
                return "Date: string expected";
        if (message.RelatedOrder != null && message.hasOwnProperty("RelatedOrder"))
            if (!$util.isString(message.RelatedOrder))
                return "RelatedOrder: string expected";
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            if (!$util.isInteger(message.ClientId))
                return "ClientId: integer expected";
        return null;
    };

    /**
     * Creates a Notification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Notification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Notification} Notification
     */
    Notification.fromObject = function fromObject(object) {
        if (object instanceof $root.Notification)
            return object;
        var message = new $root.Notification();
        if (object.Id != null)
            message.Id = String(object.Id);
        switch (object.Topic) {
        case "NOTIFICATIONITEMTYPE_SENT":
        case 0:
            message.Topic = 0;
            break;
        case "NOTIFICATIONITEMTYPE_FILLED":
        case 1:
            message.Topic = 1;
            break;
        case "NOTIFICATIONITEMTYPE_REJECTED":
        case 2:
            message.Topic = 2;
            break;
        case "NOTIFICATIONITEMTYPE_SUSPENDED":
        case 3:
            message.Topic = 3;
            break;
        case "NOTIFICATIONITEMTYPE_TRADINGDISABLED":
        case 4:
            message.Topic = 4;
            break;
        case "NOTIFICATIONITEMTYPE_CANCELLED":
        case 5:
            message.Topic = 5;
            break;
        case "NOTIFICATIONITEMTYPE_EXPIRED":
        case 6:
            message.Topic = 6;
            break;
        case "NOTIFICATIONITEMTYPE_ORDERCHANGED":
        case 7:
            message.Topic = 7;
            break;
        case "NOTIFICATIONITEMTYPE_BACKTOACTIVE":
        case 8:
            message.Topic = 8;
            break;
        case "NOTIFICATIONITEMTYPE_UNKNOWN":
        case 9:
            message.Topic = 9;
            break;
        }
        if (object.CustomHeader != null)
            message.CustomHeader = String(object.CustomHeader);
        if (object.Message != null)
            message.Message = String(object.Message);
        if (object.Date != null)
            message.Date = String(object.Date);
        if (object.RelatedOrder != null)
            message.RelatedOrder = String(object.RelatedOrder);
        if (object.ClientId != null)
            message.ClientId = object.ClientId | 0;
        return message;
    };

    /**
     * Creates a plain object from a Notification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Notification
     * @static
     * @param {Notification} message Notification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Notification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Id = "";
            object.Topic = options.enums === String ? "NOTIFICATIONITEMTYPE_SENT" : 0;
            object.CustomHeader = "";
            object.Message = "";
            object.Date = "";
            object.RelatedOrder = "";
            object.ClientId = 0;
        }
        if (message.Id != null && message.hasOwnProperty("Id"))
            object.Id = message.Id;
        if (message.Topic != null && message.hasOwnProperty("Topic"))
            object.Topic = options.enums === String ? $root.NotificationItemType[message.Topic] : message.Topic;
        if (message.CustomHeader != null && message.hasOwnProperty("CustomHeader"))
            object.CustomHeader = message.CustomHeader;
        if (message.Message != null && message.hasOwnProperty("Message"))
            object.Message = message.Message;
        if (message.Date != null && message.hasOwnProperty("Date"))
            object.Date = message.Date;
        if (message.RelatedOrder != null && message.hasOwnProperty("RelatedOrder"))
            object.RelatedOrder = message.RelatedOrder;
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            object.ClientId = message.ClientId;
        return object;
    };

    /**
     * Converts this Notification to JSON.
     * @function toJSON
     * @memberof Notification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Notification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Notification;
})();

$root.AuditResponse = (function() {

    /**
     * Properties of an AuditResponse.
     * @exports IAuditResponse
     * @interface IAuditResponse
     * @property {Array.<INotification>|null} [Notifications] AuditResponse Notifications
     * @property {UpdateType|null} [Type] AuditResponse Type
     */

    /**
     * Constructs a new AuditResponse.
     * @exports AuditResponse
     * @classdesc Represents an AuditResponse.
     * @implements IAuditResponse
     * @constructor
     * @param {IAuditResponse=} [properties] Properties to set
     */
    function AuditResponse(properties) {
        this.Notifications = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuditResponse Notifications.
     * @member {Array.<INotification>} Notifications
     * @memberof AuditResponse
     * @instance
     */
    AuditResponse.prototype.Notifications = $util.emptyArray;

    /**
     * AuditResponse Type.
     * @member {UpdateType} Type
     * @memberof AuditResponse
     * @instance
     */
    AuditResponse.prototype.Type = 0;

    /**
     * Creates a new AuditResponse instance using the specified properties.
     * @function create
     * @memberof AuditResponse
     * @static
     * @param {IAuditResponse=} [properties] Properties to set
     * @returns {AuditResponse} AuditResponse instance
     */
    AuditResponse.create = function create(properties) {
        return new AuditResponse(properties);
    };

    /**
     * Encodes the specified AuditResponse message. Does not implicitly {@link AuditResponse.verify|verify} messages.
     * @function encode
     * @memberof AuditResponse
     * @static
     * @param {IAuditResponse} message AuditResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuditResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Notifications != null && message.Notifications.length)
            for (var i = 0; i < message.Notifications.length; ++i)
                $root.Notification.encode(message.Notifications[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Type);
        return writer;
    };

    /**
     * Encodes the specified AuditResponse message, length delimited. Does not implicitly {@link AuditResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuditResponse
     * @static
     * @param {IAuditResponse} message AuditResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuditResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuditResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AuditResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuditResponse} AuditResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuditResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuditResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Notifications && message.Notifications.length))
                    message.Notifications = [];
                message.Notifications.push($root.Notification.decode(reader, reader.uint32()));
                break;
            case 2:
                message.Type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuditResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuditResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuditResponse} AuditResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuditResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AuditResponse message.
     * @function verify
     * @memberof AuditResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AuditResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Notifications != null && message.hasOwnProperty("Notifications")) {
            if (!Array.isArray(message.Notifications))
                return "Notifications: array expected";
            for (var i = 0; i < message.Notifications.length; ++i) {
                var error = $root.Notification.verify(message.Notifications[i]);
                if (error)
                    return "Notifications." + error;
            }
        }
        if (message.Type != null && message.hasOwnProperty("Type"))
            switch (message.Type) {
            default:
                return "Type: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates an AuditResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuditResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuditResponse} AuditResponse
     */
    AuditResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.AuditResponse)
            return object;
        var message = new $root.AuditResponse();
        if (object.Notifications) {
            if (!Array.isArray(object.Notifications))
                throw TypeError(".AuditResponse.Notifications: array expected");
            message.Notifications = [];
            for (var i = 0; i < object.Notifications.length; ++i) {
                if (typeof object.Notifications[i] !== "object")
                    throw TypeError(".AuditResponse.Notifications: object expected");
                message.Notifications[i] = $root.Notification.fromObject(object.Notifications[i]);
            }
        }
        switch (object.Type) {
        case "UPDATETYPE_INCREMENT":
        case 0:
            message.Type = 0;
            break;
        case "UPDATETYPE_SNAPSHOT":
        case 1:
            message.Type = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from an AuditResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuditResponse
     * @static
     * @param {AuditResponse} message AuditResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuditResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Notifications = [];
        if (options.defaults)
            object.Type = options.enums === String ? "UPDATETYPE_INCREMENT" : 0;
        if (message.Notifications && message.Notifications.length) {
            object.Notifications = [];
            for (var j = 0; j < message.Notifications.length; ++j)
                object.Notifications[j] = $root.Notification.toObject(message.Notifications[j], options);
        }
        if (message.Type != null && message.hasOwnProperty("Type"))
            object.Type = options.enums === String ? $root.UpdateType[message.Type] : message.Type;
        return object;
    };

    /**
     * Converts this AuditResponse to JSON.
     * @function toJSON
     * @memberof AuditResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuditResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AuditResponse;
})();

/**
 * TradeSide enum.
 * @exports TradeSide
 * @enum {number}
 * @property {number} TRADESIDE_SELL=0 TRADESIDE_SELL value
 * @property {number} TRADESIDE_BUY=1 TRADESIDE_BUY value
 */
$root.TradeSide = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TRADESIDE_SELL"] = 0;
    values[valuesById[1] = "TRADESIDE_BUY"] = 1;
    return values;
})();

/**
 * QuoteSide enum.
 * @exports QuoteSide
 * @enum {number}
 * @property {number} QUOTESIDE_BID=0 QUOTESIDE_BID value
 * @property {number} QUOTESIDE_OFFER=1 QUOTESIDE_OFFER value
 */
$root.QuoteSide = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "QUOTESIDE_BID"] = 0;
    values[valuesById[1] = "QUOTESIDE_OFFER"] = 1;
    return values;
})();

/**
 * SpotType enum.
 * @exports SpotType
 * @enum {number}
 * @property {number} SPOTTYPE_MARKET=0 SPOTTYPE_MARKET value
 * @property {number} SPOTTYPE_FULL=1 SPOTTYPE_FULL value
 * @property {number} SPOTTYPE_STOP=2 SPOTTYPE_STOP value
 * @property {number} SPOTTYPE_GTC=3 SPOTTYPE_GTC value
 * @property {number} SPOTTYPE_IOC=4 SPOTTYPE_IOC value
 */
$root.SpotType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SPOTTYPE_MARKET"] = 0;
    values[valuesById[1] = "SPOTTYPE_FULL"] = 1;
    values[valuesById[2] = "SPOTTYPE_STOP"] = 2;
    values[valuesById[3] = "SPOTTYPE_GTC"] = 3;
    values[valuesById[4] = "SPOTTYPE_IOC"] = 4;
    return values;
})();

/**
 * SpotOrderState enum.
 * @exports SpotOrderState
 * @enum {number}
 * @property {number} SPOTORDERSTATE_EXECUTING=0 SPOTORDERSTATE_EXECUTING value
 * @property {number} SPOTORDERSTATE_FILLED=1 SPOTORDERSTATE_FILLED value
 * @property {number} SPOTORDERSTATE_PARTIALLYFILLED=2 SPOTORDERSTATE_PARTIALLYFILLED value
 * @property {number} SPOTORDERSTATE_CANCELLED=3 SPOTORDERSTATE_CANCELLED value
 * @property {number} SPOTORDERSTATE_REJECTED=4 SPOTORDERSTATE_REJECTED value
 * @property {number} SPOTORDERSTATE_SUSPENDED=5 SPOTORDERSTATE_SUSPENDED value
 */
$root.SpotOrderState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SPOTORDERSTATE_EXECUTING"] = 0;
    values[valuesById[1] = "SPOTORDERSTATE_FILLED"] = 1;
    values[valuesById[2] = "SPOTORDERSTATE_PARTIALLYFILLED"] = 2;
    values[valuesById[3] = "SPOTORDERSTATE_CANCELLED"] = 3;
    values[valuesById[4] = "SPOTORDERSTATE_REJECTED"] = 4;
    values[valuesById[5] = "SPOTORDERSTATE_SUSPENDED"] = 5;
    return values;
})();

/**
 * UpdateType enum.
 * @exports UpdateType
 * @enum {number}
 * @property {number} UPDATETYPE_INCREMENT=0 UPDATETYPE_INCREMENT value
 * @property {number} UPDATETYPE_SNAPSHOT=1 UPDATETYPE_SNAPSHOT value
 */
$root.UpdateType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UPDATETYPE_INCREMENT"] = 0;
    values[valuesById[1] = "UPDATETYPE_SNAPSHOT"] = 1;
    return values;
})();

/**
 * NotificationItemType enum.
 * @exports NotificationItemType
 * @enum {number}
 * @property {number} NOTIFICATIONITEMTYPE_SENT=0 NOTIFICATIONITEMTYPE_SENT value
 * @property {number} NOTIFICATIONITEMTYPE_FILLED=1 NOTIFICATIONITEMTYPE_FILLED value
 * @property {number} NOTIFICATIONITEMTYPE_REJECTED=2 NOTIFICATIONITEMTYPE_REJECTED value
 * @property {number} NOTIFICATIONITEMTYPE_SUSPENDED=3 NOTIFICATIONITEMTYPE_SUSPENDED value
 * @property {number} NOTIFICATIONITEMTYPE_TRADINGDISABLED=4 NOTIFICATIONITEMTYPE_TRADINGDISABLED value
 * @property {number} NOTIFICATIONITEMTYPE_CANCELLED=5 NOTIFICATIONITEMTYPE_CANCELLED value
 * @property {number} NOTIFICATIONITEMTYPE_EXPIRED=6 NOTIFICATIONITEMTYPE_EXPIRED value
 * @property {number} NOTIFICATIONITEMTYPE_ORDERCHANGED=7 NOTIFICATIONITEMTYPE_ORDERCHANGED value
 * @property {number} NOTIFICATIONITEMTYPE_BACKTOACTIVE=8 NOTIFICATIONITEMTYPE_BACKTOACTIVE value
 * @property {number} NOTIFICATIONITEMTYPE_UNKNOWN=9 NOTIFICATIONITEMTYPE_UNKNOWN value
 */
$root.NotificationItemType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOTIFICATIONITEMTYPE_SENT"] = 0;
    values[valuesById[1] = "NOTIFICATIONITEMTYPE_FILLED"] = 1;
    values[valuesById[2] = "NOTIFICATIONITEMTYPE_REJECTED"] = 2;
    values[valuesById[3] = "NOTIFICATIONITEMTYPE_SUSPENDED"] = 3;
    values[valuesById[4] = "NOTIFICATIONITEMTYPE_TRADINGDISABLED"] = 4;
    values[valuesById[5] = "NOTIFICATIONITEMTYPE_CANCELLED"] = 5;
    values[valuesById[6] = "NOTIFICATIONITEMTYPE_EXPIRED"] = 6;
    values[valuesById[7] = "NOTIFICATIONITEMTYPE_ORDERCHANGED"] = 7;
    values[valuesById[8] = "NOTIFICATIONITEMTYPE_BACKTOACTIVE"] = 8;
    values[valuesById[9] = "NOTIFICATIONITEMTYPE_UNKNOWN"] = 9;
    return values;
})();

/**
 * ValueType enum.
 * @exports ValueType
 * @enum {number}
 * @property {number} VALUETYPE_DATE=0 VALUETYPE_DATE value
 * @property {number} VALUETYPE_PRICE=1 VALUETYPE_PRICE value
 * @property {number} VALUETYPE_QUANTITY=2 VALUETYPE_QUANTITY value
 */
$root.ValueType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "VALUETYPE_DATE"] = 0;
    values[valuesById[1] = "VALUETYPE_PRICE"] = 1;
    values[valuesById[2] = "VALUETYPE_QUANTITY"] = 2;
    return values;
})();

/**
 * RequestType enum.
 * @exports RequestType
 * @enum {number}
 * @property {number} REQUESTTYPE_UNKNOWN=0 REQUESTTYPE_UNKNOWN value
 * @property {number} REQUESTTYPE_SUBSCRIBE=1 REQUESTTYPE_SUBSCRIBE value
 * @property {number} REQUESTTYPE_UNSUBSCRIBE=2 REQUESTTYPE_UNSUBSCRIBE value
 */
$root.RequestType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "REQUESTTYPE_UNKNOWN"] = 0;
    values[valuesById[1] = "REQUESTTYPE_SUBSCRIBE"] = 1;
    values[valuesById[2] = "REQUESTTYPE_UNSUBSCRIBE"] = 2;
    return values;
})();

/**
 * InstrumentType enum.
 * @exports InstrumentType
 * @enum {number}
 * @property {number} INSTRUMENTTYPE_UNKNOWN=0 INSTRUMENTTYPE_UNKNOWN value
 * @property {number} INSTRUMENTTYPE_SPOT=1 INSTRUMENTTYPE_SPOT value
 * @property {number} INSTRUMENTTYPE_FORWARD=2 INSTRUMENTTYPE_FORWARD value
 * @property {number} INSTRUMENTTYPE_SPOTFORWARD=3 INSTRUMENTTYPE_SPOTFORWARD value
 */
$root.InstrumentType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "INSTRUMENTTYPE_UNKNOWN"] = 0;
    values[valuesById[1] = "INSTRUMENTTYPE_SPOT"] = 1;
    values[valuesById[2] = "INSTRUMENTTYPE_FORWARD"] = 2;
    values[valuesById[3] = "INSTRUMENTTYPE_SPOTFORWARD"] = 3;
    return values;
})();

$root.ResponseError = (function() {

    /**
     * Properties of a ResponseError.
     * @exports IResponseError
     * @interface IResponseError
     * @property {number|null} [errorCode] ResponseError errorCode
     * @property {google.protobuf.IStringValue|null} [errorMessage] ResponseError errorMessage
     */

    /**
     * Constructs a new ResponseError.
     * @exports ResponseError
     * @classdesc Represents a ResponseError.
     * @implements IResponseError
     * @constructor
     * @param {IResponseError=} [properties] Properties to set
     */
    function ResponseError(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResponseError errorCode.
     * @member {number} errorCode
     * @memberof ResponseError
     * @instance
     */
    ResponseError.prototype.errorCode = 0;

    /**
     * ResponseError errorMessage.
     * @member {google.protobuf.IStringValue|null|undefined} errorMessage
     * @memberof ResponseError
     * @instance
     */
    ResponseError.prototype.errorMessage = null;

    /**
     * Creates a new ResponseError instance using the specified properties.
     * @function create
     * @memberof ResponseError
     * @static
     * @param {IResponseError=} [properties] Properties to set
     * @returns {ResponseError} ResponseError instance
     */
    ResponseError.create = function create(properties) {
        return new ResponseError(properties);
    };

    /**
     * Encodes the specified ResponseError message. Does not implicitly {@link ResponseError.verify|verify} messages.
     * @function encode
     * @memberof ResponseError
     * @static
     * @param {IResponseError} message ResponseError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseError.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
        if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
            $root.google.protobuf.StringValue.encode(message.errorMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ResponseError message, length delimited. Does not implicitly {@link ResponseError.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseError
     * @static
     * @param {IResponseError} message ResponseError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseError.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseError message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseError} ResponseError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseError.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.errorCode = reader.int32();
                break;
            case 2:
                message.errorMessage = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseError message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseError} ResponseError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseError.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseError message.
     * @function verify
     * @memberof ResponseError
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseError.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode))
                return "errorCode: integer expected";
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage")) {
            var error = $root.google.protobuf.StringValue.verify(message.errorMessage);
            if (error)
                return "errorMessage." + error;
        }
        return null;
    };

    /**
     * Creates a ResponseError message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseError
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseError} ResponseError
     */
    ResponseError.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseError)
            return object;
        var message = new $root.ResponseError();
        if (object.errorCode != null)
            message.errorCode = object.errorCode | 0;
        if (object.errorMessage != null) {
            if (typeof object.errorMessage !== "object")
                throw TypeError(".ResponseError.errorMessage: object expected");
            message.errorMessage = $root.google.protobuf.StringValue.fromObject(object.errorMessage);
        }
        return message;
    };

    /**
     * Creates a plain object from a ResponseError message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseError
     * @static
     * @param {ResponseError} message ResponseError
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseError.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.errorCode = 0;
            object.errorMessage = null;
        }
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            object.errorCode = message.errorCode;
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
            object.errorMessage = $root.google.protobuf.StringValue.toObject(message.errorMessage, options);
        return object;
    };

    /**
     * Converts this ResponseError to JSON.
     * @function toJSON
     * @memberof ResponseError
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseError.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ResponseError;
})();

$root.EnvelopeRequest = (function() {

    /**
     * Properties of an EnvelopeRequest.
     * @exports IEnvelopeRequest
     * @interface IEnvelopeRequest
     * @property {number|null} [requestId] EnvelopeRequest requestId
     * @property {RequestType|null} [requestType] EnvelopeRequest requestType
     * @property {number|null} [nestedMsgType] EnvelopeRequest nestedMsgType
     * @property {google.protobuf.IBytesValue|null} [nestedMessage] EnvelopeRequest nestedMessage
     */

    /**
     * Constructs a new EnvelopeRequest.
     * @exports EnvelopeRequest
     * @classdesc Represents an EnvelopeRequest.
     * @implements IEnvelopeRequest
     * @constructor
     * @param {IEnvelopeRequest=} [properties] Properties to set
     */
    function EnvelopeRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnvelopeRequest requestId.
     * @member {number} requestId
     * @memberof EnvelopeRequest
     * @instance
     */
    EnvelopeRequest.prototype.requestId = 0;

    /**
     * EnvelopeRequest requestType.
     * @member {RequestType} requestType
     * @memberof EnvelopeRequest
     * @instance
     */
    EnvelopeRequest.prototype.requestType = 0;

    /**
     * EnvelopeRequest nestedMsgType.
     * @member {number} nestedMsgType
     * @memberof EnvelopeRequest
     * @instance
     */
    EnvelopeRequest.prototype.nestedMsgType = 0;

    /**
     * EnvelopeRequest nestedMessage.
     * @member {google.protobuf.IBytesValue|null|undefined} nestedMessage
     * @memberof EnvelopeRequest
     * @instance
     */
    EnvelopeRequest.prototype.nestedMessage = null;

    /**
     * Creates a new EnvelopeRequest instance using the specified properties.
     * @function create
     * @memberof EnvelopeRequest
     * @static
     * @param {IEnvelopeRequest=} [properties] Properties to set
     * @returns {EnvelopeRequest} EnvelopeRequest instance
     */
    EnvelopeRequest.create = function create(properties) {
        return new EnvelopeRequest(properties);
    };

    /**
     * Encodes the specified EnvelopeRequest message. Does not implicitly {@link EnvelopeRequest.verify|verify} messages.
     * @function encode
     * @memberof EnvelopeRequest
     * @static
     * @param {IEnvelopeRequest} message EnvelopeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnvelopeRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.requestId);
        if (message.requestType != null && Object.hasOwnProperty.call(message, "requestType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.requestType);
        if (message.nestedMsgType != null && Object.hasOwnProperty.call(message, "nestedMsgType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nestedMsgType);
        if (message.nestedMessage != null && Object.hasOwnProperty.call(message, "nestedMessage"))
            $root.google.protobuf.BytesValue.encode(message.nestedMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EnvelopeRequest message, length delimited. Does not implicitly {@link EnvelopeRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnvelopeRequest
     * @static
     * @param {IEnvelopeRequest} message EnvelopeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnvelopeRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnvelopeRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EnvelopeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnvelopeRequest} EnvelopeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnvelopeRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnvelopeRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.requestId = reader.int32();
                break;
            case 2:
                message.requestType = reader.int32();
                break;
            case 3:
                message.nestedMsgType = reader.int32();
                break;
            case 4:
                message.nestedMessage = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EnvelopeRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnvelopeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnvelopeRequest} EnvelopeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnvelopeRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnvelopeRequest message.
     * @function verify
     * @memberof EnvelopeRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnvelopeRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
        if (message.requestType != null && message.hasOwnProperty("requestType"))
            switch (message.requestType) {
            default:
                return "requestType: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.nestedMsgType != null && message.hasOwnProperty("nestedMsgType"))
            if (!$util.isInteger(message.nestedMsgType))
                return "nestedMsgType: integer expected";
        if (message.nestedMessage != null && message.hasOwnProperty("nestedMessage")) {
            var error = $root.google.protobuf.BytesValue.verify(message.nestedMessage);
            if (error)
                return "nestedMessage." + error;
        }
        return null;
    };

    /**
     * Creates an EnvelopeRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnvelopeRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnvelopeRequest} EnvelopeRequest
     */
    EnvelopeRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.EnvelopeRequest)
            return object;
        var message = new $root.EnvelopeRequest();
        if (object.requestId != null)
            message.requestId = object.requestId | 0;
        switch (object.requestType) {
        case "REQUESTTYPE_UNKNOWN":
        case 0:
            message.requestType = 0;
            break;
        case "REQUESTTYPE_SUBSCRIBE":
        case 1:
            message.requestType = 1;
            break;
        case "REQUESTTYPE_UNSUBSCRIBE":
        case 2:
            message.requestType = 2;
            break;
        }
        if (object.nestedMsgType != null)
            message.nestedMsgType = object.nestedMsgType | 0;
        if (object.nestedMessage != null) {
            if (typeof object.nestedMessage !== "object")
                throw TypeError(".EnvelopeRequest.nestedMessage: object expected");
            message.nestedMessage = $root.google.protobuf.BytesValue.fromObject(object.nestedMessage);
        }
        return message;
    };

    /**
     * Creates a plain object from an EnvelopeRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnvelopeRequest
     * @static
     * @param {EnvelopeRequest} message EnvelopeRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnvelopeRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = 0;
            object.requestType = options.enums === String ? "REQUESTTYPE_UNKNOWN" : 0;
            object.nestedMsgType = 0;
            object.nestedMessage = null;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.requestType != null && message.hasOwnProperty("requestType"))
            object.requestType = options.enums === String ? $root.RequestType[message.requestType] : message.requestType;
        if (message.nestedMsgType != null && message.hasOwnProperty("nestedMsgType"))
            object.nestedMsgType = message.nestedMsgType;
        if (message.nestedMessage != null && message.hasOwnProperty("nestedMessage"))
            object.nestedMessage = $root.google.protobuf.BytesValue.toObject(message.nestedMessage, options);
        return object;
    };

    /**
     * Converts this EnvelopeRequest to JSON.
     * @function toJSON
     * @memberof EnvelopeRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnvelopeRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnvelopeRequest;
})();

$root.EnvelopeResponse = (function() {

    /**
     * Properties of an EnvelopeResponse.
     * @exports IEnvelopeResponse
     * @interface IEnvelopeResponse
     * @property {number|null} [requestId] EnvelopeResponse requestId
     * @property {number|null} [responseId] EnvelopeResponse responseId
     * @property {IResponseError|null} [error] EnvelopeResponse error
     * @property {google.protobuf.IBytesValue|null} [nestedMessage] EnvelopeResponse nestedMessage
     * @property {boolean|null} [terminal] EnvelopeResponse terminal
     */

    /**
     * Constructs a new EnvelopeResponse.
     * @exports EnvelopeResponse
     * @classdesc Represents an EnvelopeResponse.
     * @implements IEnvelopeResponse
     * @constructor
     * @param {IEnvelopeResponse=} [properties] Properties to set
     */
    function EnvelopeResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnvelopeResponse requestId.
     * @member {number} requestId
     * @memberof EnvelopeResponse
     * @instance
     */
    EnvelopeResponse.prototype.requestId = 0;

    /**
     * EnvelopeResponse responseId.
     * @member {number} responseId
     * @memberof EnvelopeResponse
     * @instance
     */
    EnvelopeResponse.prototype.responseId = 0;

    /**
     * EnvelopeResponse error.
     * @member {IResponseError|null|undefined} error
     * @memberof EnvelopeResponse
     * @instance
     */
    EnvelopeResponse.prototype.error = null;

    /**
     * EnvelopeResponse nestedMessage.
     * @member {google.protobuf.IBytesValue|null|undefined} nestedMessage
     * @memberof EnvelopeResponse
     * @instance
     */
    EnvelopeResponse.prototype.nestedMessage = null;

    /**
     * EnvelopeResponse terminal.
     * @member {boolean} terminal
     * @memberof EnvelopeResponse
     * @instance
     */
    EnvelopeResponse.prototype.terminal = false;

    /**
     * Creates a new EnvelopeResponse instance using the specified properties.
     * @function create
     * @memberof EnvelopeResponse
     * @static
     * @param {IEnvelopeResponse=} [properties] Properties to set
     * @returns {EnvelopeResponse} EnvelopeResponse instance
     */
    EnvelopeResponse.create = function create(properties) {
        return new EnvelopeResponse(properties);
    };

    /**
     * Encodes the specified EnvelopeResponse message. Does not implicitly {@link EnvelopeResponse.verify|verify} messages.
     * @function encode
     * @memberof EnvelopeResponse
     * @static
     * @param {IEnvelopeResponse} message EnvelopeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnvelopeResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.requestId);
        if (message.responseId != null && Object.hasOwnProperty.call(message, "responseId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.responseId);
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            $root.ResponseError.encode(message.error, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.nestedMessage != null && Object.hasOwnProperty.call(message, "nestedMessage"))
            $root.google.protobuf.BytesValue.encode(message.nestedMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.terminal != null && Object.hasOwnProperty.call(message, "terminal"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.terminal);
        return writer;
    };

    /**
     * Encodes the specified EnvelopeResponse message, length delimited. Does not implicitly {@link EnvelopeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnvelopeResponse
     * @static
     * @param {IEnvelopeResponse} message EnvelopeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnvelopeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnvelopeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EnvelopeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnvelopeResponse} EnvelopeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnvelopeResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnvelopeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.requestId = reader.int32();
                break;
            case 2:
                message.responseId = reader.int32();
                break;
            case 3:
                message.error = $root.ResponseError.decode(reader, reader.uint32());
                break;
            case 4:
                message.nestedMessage = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                break;
            case 5:
                message.terminal = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EnvelopeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnvelopeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnvelopeResponse} EnvelopeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnvelopeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnvelopeResponse message.
     * @function verify
     * @memberof EnvelopeResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnvelopeResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
        if (message.responseId != null && message.hasOwnProperty("responseId"))
            if (!$util.isInteger(message.responseId))
                return "responseId: integer expected";
        if (message.error != null && message.hasOwnProperty("error")) {
            var error = $root.ResponseError.verify(message.error);
            if (error)
                return "error." + error;
        }
        if (message.nestedMessage != null && message.hasOwnProperty("nestedMessage")) {
            var error = $root.google.protobuf.BytesValue.verify(message.nestedMessage);
            if (error)
                return "nestedMessage." + error;
        }
        if (message.terminal != null && message.hasOwnProperty("terminal"))
            if (typeof message.terminal !== "boolean")
                return "terminal: boolean expected";
        return null;
    };

    /**
     * Creates an EnvelopeResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnvelopeResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnvelopeResponse} EnvelopeResponse
     */
    EnvelopeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.EnvelopeResponse)
            return object;
        var message = new $root.EnvelopeResponse();
        if (object.requestId != null)
            message.requestId = object.requestId | 0;
        if (object.responseId != null)
            message.responseId = object.responseId | 0;
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".EnvelopeResponse.error: object expected");
            message.error = $root.ResponseError.fromObject(object.error);
        }
        if (object.nestedMessage != null) {
            if (typeof object.nestedMessage !== "object")
                throw TypeError(".EnvelopeResponse.nestedMessage: object expected");
            message.nestedMessage = $root.google.protobuf.BytesValue.fromObject(object.nestedMessage);
        }
        if (object.terminal != null)
            message.terminal = Boolean(object.terminal);
        return message;
    };

    /**
     * Creates a plain object from an EnvelopeResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnvelopeResponse
     * @static
     * @param {EnvelopeResponse} message EnvelopeResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnvelopeResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = 0;
            object.responseId = 0;
            object.error = null;
            object.nestedMessage = null;
            object.terminal = false;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.responseId != null && message.hasOwnProperty("responseId"))
            object.responseId = message.responseId;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = $root.ResponseError.toObject(message.error, options);
        if (message.nestedMessage != null && message.hasOwnProperty("nestedMessage"))
            object.nestedMessage = $root.google.protobuf.BytesValue.toObject(message.nestedMessage, options);
        if (message.terminal != null && message.hasOwnProperty("terminal"))
            object.terminal = message.terminal;
        return object;
    };

    /**
     * Converts this EnvelopeResponse to JSON.
     * @function toJSON
     * @memberof EnvelopeResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnvelopeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnvelopeResponse;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                var message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                var message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                var message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                var message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                var message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                var message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                var message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                var message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                var message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

$root.FirmInstrumentInfo = (function() {

    /**
     * Properties of a FirmInstrumentInfo.
     * @exports IFirmInstrumentInfo
     * @interface IFirmInstrumentInfo
     * @property {string|null} [Symbol] FirmInstrumentInfo Symbol
     * @property {number|null} [RoundLot] FirmInstrumentInfo RoundLot
     * @property {number|null} [MinTradeVolume] FirmInstrumentInfo MinTradeVolume
     * @property {number|null} [FractionSize] FirmInstrumentInfo FractionSize
     * @property {boolean|null} [ExtraDigitSupport] FirmInstrumentInfo ExtraDigitSupport
     * @property {InstrumentType|null} [InstrumentType] FirmInstrumentInfo InstrumentType
     * @property {Array.<string>|null} [Tenors] FirmInstrumentInfo Tenors
     * @property {number|null} [SettlementPeriod] FirmInstrumentInfo SettlementPeriod
     * @property {Array.<string>|null} [Holidays] FirmInstrumentInfo Holidays
     */

    /**
     * Constructs a new FirmInstrumentInfo.
     * @exports FirmInstrumentInfo
     * @classdesc Represents a FirmInstrumentInfo.
     * @implements IFirmInstrumentInfo
     * @constructor
     * @param {IFirmInstrumentInfo=} [properties] Properties to set
     */
    function FirmInstrumentInfo(properties) {
        this.Tenors = [];
        this.Holidays = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FirmInstrumentInfo Symbol.
     * @member {string} Symbol
     * @memberof FirmInstrumentInfo
     * @instance
     */
    FirmInstrumentInfo.prototype.Symbol = "";

    /**
     * FirmInstrumentInfo RoundLot.
     * @member {number} RoundLot
     * @memberof FirmInstrumentInfo
     * @instance
     */
    FirmInstrumentInfo.prototype.RoundLot = 0;

    /**
     * FirmInstrumentInfo MinTradeVolume.
     * @member {number} MinTradeVolume
     * @memberof FirmInstrumentInfo
     * @instance
     */
    FirmInstrumentInfo.prototype.MinTradeVolume = 0;

    /**
     * FirmInstrumentInfo FractionSize.
     * @member {number} FractionSize
     * @memberof FirmInstrumentInfo
     * @instance
     */
    FirmInstrumentInfo.prototype.FractionSize = 0;

    /**
     * FirmInstrumentInfo ExtraDigitSupport.
     * @member {boolean} ExtraDigitSupport
     * @memberof FirmInstrumentInfo
     * @instance
     */
    FirmInstrumentInfo.prototype.ExtraDigitSupport = false;

    /**
     * FirmInstrumentInfo InstrumentType.
     * @member {InstrumentType} InstrumentType
     * @memberof FirmInstrumentInfo
     * @instance
     */
    FirmInstrumentInfo.prototype.InstrumentType = 0;

    /**
     * FirmInstrumentInfo Tenors.
     * @member {Array.<string>} Tenors
     * @memberof FirmInstrumentInfo
     * @instance
     */
    FirmInstrumentInfo.prototype.Tenors = $util.emptyArray;

    /**
     * FirmInstrumentInfo SettlementPeriod.
     * @member {number} SettlementPeriod
     * @memberof FirmInstrumentInfo
     * @instance
     */
    FirmInstrumentInfo.prototype.SettlementPeriod = 0;

    /**
     * FirmInstrumentInfo Holidays.
     * @member {Array.<string>} Holidays
     * @memberof FirmInstrumentInfo
     * @instance
     */
    FirmInstrumentInfo.prototype.Holidays = $util.emptyArray;

    /**
     * Creates a new FirmInstrumentInfo instance using the specified properties.
     * @function create
     * @memberof FirmInstrumentInfo
     * @static
     * @param {IFirmInstrumentInfo=} [properties] Properties to set
     * @returns {FirmInstrumentInfo} FirmInstrumentInfo instance
     */
    FirmInstrumentInfo.create = function create(properties) {
        return new FirmInstrumentInfo(properties);
    };

    /**
     * Encodes the specified FirmInstrumentInfo message. Does not implicitly {@link FirmInstrumentInfo.verify|verify} messages.
     * @function encode
     * @memberof FirmInstrumentInfo
     * @static
     * @param {IFirmInstrumentInfo} message FirmInstrumentInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FirmInstrumentInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Symbol != null && Object.hasOwnProperty.call(message, "Symbol"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Symbol);
        if (message.RoundLot != null && Object.hasOwnProperty.call(message, "RoundLot"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoundLot);
        if (message.MinTradeVolume != null && Object.hasOwnProperty.call(message, "MinTradeVolume"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.MinTradeVolume);
        if (message.FractionSize != null && Object.hasOwnProperty.call(message, "FractionSize"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.FractionSize);
        if (message.ExtraDigitSupport != null && Object.hasOwnProperty.call(message, "ExtraDigitSupport"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.ExtraDigitSupport);
        if (message.InstrumentType != null && Object.hasOwnProperty.call(message, "InstrumentType"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.InstrumentType);
        if (message.Tenors != null && message.Tenors.length)
            for (var i = 0; i < message.Tenors.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Tenors[i]);
        if (message.SettlementPeriod != null && Object.hasOwnProperty.call(message, "SettlementPeriod"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.SettlementPeriod);
        if (message.Holidays != null && message.Holidays.length)
            for (var i = 0; i < message.Holidays.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.Holidays[i]);
        return writer;
    };

    /**
     * Encodes the specified FirmInstrumentInfo message, length delimited. Does not implicitly {@link FirmInstrumentInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FirmInstrumentInfo
     * @static
     * @param {IFirmInstrumentInfo} message FirmInstrumentInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FirmInstrumentInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FirmInstrumentInfo message from the specified reader or buffer.
     * @function decode
     * @memberof FirmInstrumentInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FirmInstrumentInfo} FirmInstrumentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FirmInstrumentInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FirmInstrumentInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Symbol = reader.string();
                break;
            case 2:
                message.RoundLot = reader.int32();
                break;
            case 3:
                message.MinTradeVolume = reader.int32();
                break;
            case 4:
                message.FractionSize = reader.int32();
                break;
            case 5:
                message.ExtraDigitSupport = reader.bool();
                break;
            case 6:
                message.InstrumentType = reader.int32();
                break;
            case 7:
                if (!(message.Tenors && message.Tenors.length))
                    message.Tenors = [];
                message.Tenors.push(reader.string());
                break;
            case 8:
                message.SettlementPeriod = reader.int32();
                break;
            case 9:
                if (!(message.Holidays && message.Holidays.length))
                    message.Holidays = [];
                message.Holidays.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FirmInstrumentInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FirmInstrumentInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FirmInstrumentInfo} FirmInstrumentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FirmInstrumentInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FirmInstrumentInfo message.
     * @function verify
     * @memberof FirmInstrumentInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FirmInstrumentInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Symbol != null && message.hasOwnProperty("Symbol"))
            if (!$util.isString(message.Symbol))
                return "Symbol: string expected";
        if (message.RoundLot != null && message.hasOwnProperty("RoundLot"))
            if (!$util.isInteger(message.RoundLot))
                return "RoundLot: integer expected";
        if (message.MinTradeVolume != null && message.hasOwnProperty("MinTradeVolume"))
            if (!$util.isInteger(message.MinTradeVolume))
                return "MinTradeVolume: integer expected";
        if (message.FractionSize != null && message.hasOwnProperty("FractionSize"))
            if (!$util.isInteger(message.FractionSize))
                return "FractionSize: integer expected";
        if (message.ExtraDigitSupport != null && message.hasOwnProperty("ExtraDigitSupport"))
            if (typeof message.ExtraDigitSupport !== "boolean")
                return "ExtraDigitSupport: boolean expected";
        if (message.InstrumentType != null && message.hasOwnProperty("InstrumentType"))
            switch (message.InstrumentType) {
            default:
                return "InstrumentType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.Tenors != null && message.hasOwnProperty("Tenors")) {
            if (!Array.isArray(message.Tenors))
                return "Tenors: array expected";
            for (var i = 0; i < message.Tenors.length; ++i)
                if (!$util.isString(message.Tenors[i]))
                    return "Tenors: string[] expected";
        }
        if (message.SettlementPeriod != null && message.hasOwnProperty("SettlementPeriod"))
            if (!$util.isInteger(message.SettlementPeriod))
                return "SettlementPeriod: integer expected";
        if (message.Holidays != null && message.hasOwnProperty("Holidays")) {
            if (!Array.isArray(message.Holidays))
                return "Holidays: array expected";
            for (var i = 0; i < message.Holidays.length; ++i)
                if (!$util.isString(message.Holidays[i]))
                    return "Holidays: string[] expected";
        }
        return null;
    };

    /**
     * Creates a FirmInstrumentInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FirmInstrumentInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FirmInstrumentInfo} FirmInstrumentInfo
     */
    FirmInstrumentInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.FirmInstrumentInfo)
            return object;
        var message = new $root.FirmInstrumentInfo();
        if (object.Symbol != null)
            message.Symbol = String(object.Symbol);
        if (object.RoundLot != null)
            message.RoundLot = object.RoundLot | 0;
        if (object.MinTradeVolume != null)
            message.MinTradeVolume = object.MinTradeVolume | 0;
        if (object.FractionSize != null)
            message.FractionSize = object.FractionSize | 0;
        if (object.ExtraDigitSupport != null)
            message.ExtraDigitSupport = Boolean(object.ExtraDigitSupport);
        switch (object.InstrumentType) {
        case "INSTRUMENTTYPE_UNKNOWN":
        case 0:
            message.InstrumentType = 0;
            break;
        case "INSTRUMENTTYPE_SPOT":
        case 1:
            message.InstrumentType = 1;
            break;
        case "INSTRUMENTTYPE_FORWARD":
        case 2:
            message.InstrumentType = 2;
            break;
        case "INSTRUMENTTYPE_SPOTFORWARD":
        case 3:
            message.InstrumentType = 3;
            break;
        }
        if (object.Tenors) {
            if (!Array.isArray(object.Tenors))
                throw TypeError(".FirmInstrumentInfo.Tenors: array expected");
            message.Tenors = [];
            for (var i = 0; i < object.Tenors.length; ++i)
                message.Tenors[i] = String(object.Tenors[i]);
        }
        if (object.SettlementPeriod != null)
            message.SettlementPeriod = object.SettlementPeriod | 0;
        if (object.Holidays) {
            if (!Array.isArray(object.Holidays))
                throw TypeError(".FirmInstrumentInfo.Holidays: array expected");
            message.Holidays = [];
            for (var i = 0; i < object.Holidays.length; ++i)
                message.Holidays[i] = String(object.Holidays[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a FirmInstrumentInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FirmInstrumentInfo
     * @static
     * @param {FirmInstrumentInfo} message FirmInstrumentInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FirmInstrumentInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.Tenors = [];
            object.Holidays = [];
        }
        if (options.defaults) {
            object.Symbol = "";
            object.RoundLot = 0;
            object.MinTradeVolume = 0;
            object.FractionSize = 0;
            object.ExtraDigitSupport = false;
            object.InstrumentType = options.enums === String ? "INSTRUMENTTYPE_UNKNOWN" : 0;
            object.SettlementPeriod = 0;
        }
        if (message.Symbol != null && message.hasOwnProperty("Symbol"))
            object.Symbol = message.Symbol;
        if (message.RoundLot != null && message.hasOwnProperty("RoundLot"))
            object.RoundLot = message.RoundLot;
        if (message.MinTradeVolume != null && message.hasOwnProperty("MinTradeVolume"))
            object.MinTradeVolume = message.MinTradeVolume;
        if (message.FractionSize != null && message.hasOwnProperty("FractionSize"))
            object.FractionSize = message.FractionSize;
        if (message.ExtraDigitSupport != null && message.hasOwnProperty("ExtraDigitSupport"))
            object.ExtraDigitSupport = message.ExtraDigitSupport;
        if (message.InstrumentType != null && message.hasOwnProperty("InstrumentType"))
            object.InstrumentType = options.enums === String ? $root.InstrumentType[message.InstrumentType] : message.InstrumentType;
        if (message.Tenors && message.Tenors.length) {
            object.Tenors = [];
            for (var j = 0; j < message.Tenors.length; ++j)
                object.Tenors[j] = message.Tenors[j];
        }
        if (message.SettlementPeriod != null && message.hasOwnProperty("SettlementPeriod"))
            object.SettlementPeriod = message.SettlementPeriod;
        if (message.Holidays && message.Holidays.length) {
            object.Holidays = [];
            for (var j = 0; j < message.Holidays.length; ++j)
                object.Holidays[j] = message.Holidays[j];
        }
        return object;
    };

    /**
     * Converts this FirmInstrumentInfo to JSON.
     * @function toJSON
     * @memberof FirmInstrumentInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FirmInstrumentInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FirmInstrumentInfo;
})();

$root.Firm = (function() {

    /**
     * Properties of a Firm.
     * @exports IFirm
     * @interface IFirm
     * @property {number|null} [Id] Firm Id
     * @property {string|null} [Name] Firm Name
     * @property {google.protobuf.IStringValue|null} [ExternalRef] Firm ExternalRef
     * @property {boolean|null} [InHouse] Firm InHouse
     * @property {Array.<IFirmInstrumentInfo>|null} [Instruments] Firm Instruments
     */

    /**
     * Constructs a new Firm.
     * @exports Firm
     * @classdesc Represents a Firm.
     * @implements IFirm
     * @constructor
     * @param {IFirm=} [properties] Properties to set
     */
    function Firm(properties) {
        this.Instruments = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Firm Id.
     * @member {number} Id
     * @memberof Firm
     * @instance
     */
    Firm.prototype.Id = 0;

    /**
     * Firm Name.
     * @member {string} Name
     * @memberof Firm
     * @instance
     */
    Firm.prototype.Name = "";

    /**
     * Firm ExternalRef.
     * @member {google.protobuf.IStringValue|null|undefined} ExternalRef
     * @memberof Firm
     * @instance
     */
    Firm.prototype.ExternalRef = null;

    /**
     * Firm InHouse.
     * @member {boolean} InHouse
     * @memberof Firm
     * @instance
     */
    Firm.prototype.InHouse = false;

    /**
     * Firm Instruments.
     * @member {Array.<IFirmInstrumentInfo>} Instruments
     * @memberof Firm
     * @instance
     */
    Firm.prototype.Instruments = $util.emptyArray;

    /**
     * Creates a new Firm instance using the specified properties.
     * @function create
     * @memberof Firm
     * @static
     * @param {IFirm=} [properties] Properties to set
     * @returns {Firm} Firm instance
     */
    Firm.create = function create(properties) {
        return new Firm(properties);
    };

    /**
     * Encodes the specified Firm message. Does not implicitly {@link Firm.verify|verify} messages.
     * @function encode
     * @memberof Firm
     * @static
     * @param {IFirm} message Firm message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Firm.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
        if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
        if (message.ExternalRef != null && Object.hasOwnProperty.call(message, "ExternalRef"))
            $root.google.protobuf.StringValue.encode(message.ExternalRef, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.InHouse != null && Object.hasOwnProperty.call(message, "InHouse"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.InHouse);
        if (message.Instruments != null && message.Instruments.length)
            for (var i = 0; i < message.Instruments.length; ++i)
                $root.FirmInstrumentInfo.encode(message.Instruments[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Firm message, length delimited. Does not implicitly {@link Firm.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Firm
     * @static
     * @param {IFirm} message Firm message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Firm.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Firm message from the specified reader or buffer.
     * @function decode
     * @memberof Firm
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Firm} Firm
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Firm.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Firm();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Id = reader.int32();
                break;
            case 2:
                message.Name = reader.string();
                break;
            case 3:
                message.ExternalRef = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                break;
            case 4:
                message.InHouse = reader.bool();
                break;
            case 5:
                if (!(message.Instruments && message.Instruments.length))
                    message.Instruments = [];
                message.Instruments.push($root.FirmInstrumentInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Firm message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Firm
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Firm} Firm
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Firm.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Firm message.
     * @function verify
     * @memberof Firm
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Firm.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Id != null && message.hasOwnProperty("Id"))
            if (!$util.isInteger(message.Id))
                return "Id: integer expected";
        if (message.Name != null && message.hasOwnProperty("Name"))
            if (!$util.isString(message.Name))
                return "Name: string expected";
        if (message.ExternalRef != null && message.hasOwnProperty("ExternalRef")) {
            var error = $root.google.protobuf.StringValue.verify(message.ExternalRef);
            if (error)
                return "ExternalRef." + error;
        }
        if (message.InHouse != null && message.hasOwnProperty("InHouse"))
            if (typeof message.InHouse !== "boolean")
                return "InHouse: boolean expected";
        if (message.Instruments != null && message.hasOwnProperty("Instruments")) {
            if (!Array.isArray(message.Instruments))
                return "Instruments: array expected";
            for (var i = 0; i < message.Instruments.length; ++i) {
                var error = $root.FirmInstrumentInfo.verify(message.Instruments[i]);
                if (error)
                    return "Instruments." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Firm message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Firm
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Firm} Firm
     */
    Firm.fromObject = function fromObject(object) {
        if (object instanceof $root.Firm)
            return object;
        var message = new $root.Firm();
        if (object.Id != null)
            message.Id = object.Id | 0;
        if (object.Name != null)
            message.Name = String(object.Name);
        if (object.ExternalRef != null) {
            if (typeof object.ExternalRef !== "object")
                throw TypeError(".Firm.ExternalRef: object expected");
            message.ExternalRef = $root.google.protobuf.StringValue.fromObject(object.ExternalRef);
        }
        if (object.InHouse != null)
            message.InHouse = Boolean(object.InHouse);
        if (object.Instruments) {
            if (!Array.isArray(object.Instruments))
                throw TypeError(".Firm.Instruments: array expected");
            message.Instruments = [];
            for (var i = 0; i < object.Instruments.length; ++i) {
                if (typeof object.Instruments[i] !== "object")
                    throw TypeError(".Firm.Instruments: object expected");
                message.Instruments[i] = $root.FirmInstrumentInfo.fromObject(object.Instruments[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Firm message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Firm
     * @static
     * @param {Firm} message Firm
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Firm.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Instruments = [];
        if (options.defaults) {
            object.Id = 0;
            object.Name = "";
            object.ExternalRef = null;
            object.InHouse = false;
        }
        if (message.Id != null && message.hasOwnProperty("Id"))
            object.Id = message.Id;
        if (message.Name != null && message.hasOwnProperty("Name"))
            object.Name = message.Name;
        if (message.ExternalRef != null && message.hasOwnProperty("ExternalRef"))
            object.ExternalRef = $root.google.protobuf.StringValue.toObject(message.ExternalRef, options);
        if (message.InHouse != null && message.hasOwnProperty("InHouse"))
            object.InHouse = message.InHouse;
        if (message.Instruments && message.Instruments.length) {
            object.Instruments = [];
            for (var j = 0; j < message.Instruments.length; ++j)
                object.Instruments[j] = $root.FirmInstrumentInfo.toObject(message.Instruments[j], options);
        }
        return object;
    };

    /**
     * Converts this Firm to JSON.
     * @function toJSON
     * @memberof Firm
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Firm.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Firm;
})();

$root.FirmsInstrumentsRequest = (function() {

    /**
     * Properties of a FirmsInstrumentsRequest.
     * @exports IFirmsInstrumentsRequest
     * @interface IFirmsInstrumentsRequest
     */

    /**
     * Constructs a new FirmsInstrumentsRequest.
     * @exports FirmsInstrumentsRequest
     * @classdesc Represents a FirmsInstrumentsRequest.
     * @implements IFirmsInstrumentsRequest
     * @constructor
     * @param {IFirmsInstrumentsRequest=} [properties] Properties to set
     */
    function FirmsInstrumentsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new FirmsInstrumentsRequest instance using the specified properties.
     * @function create
     * @memberof FirmsInstrumentsRequest
     * @static
     * @param {IFirmsInstrumentsRequest=} [properties] Properties to set
     * @returns {FirmsInstrumentsRequest} FirmsInstrumentsRequest instance
     */
    FirmsInstrumentsRequest.create = function create(properties) {
        return new FirmsInstrumentsRequest(properties);
    };

    /**
     * Encodes the specified FirmsInstrumentsRequest message. Does not implicitly {@link FirmsInstrumentsRequest.verify|verify} messages.
     * @function encode
     * @memberof FirmsInstrumentsRequest
     * @static
     * @param {IFirmsInstrumentsRequest} message FirmsInstrumentsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FirmsInstrumentsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified FirmsInstrumentsRequest message, length delimited. Does not implicitly {@link FirmsInstrumentsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FirmsInstrumentsRequest
     * @static
     * @param {IFirmsInstrumentsRequest} message FirmsInstrumentsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FirmsInstrumentsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FirmsInstrumentsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FirmsInstrumentsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FirmsInstrumentsRequest} FirmsInstrumentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FirmsInstrumentsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FirmsInstrumentsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FirmsInstrumentsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FirmsInstrumentsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FirmsInstrumentsRequest} FirmsInstrumentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FirmsInstrumentsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FirmsInstrumentsRequest message.
     * @function verify
     * @memberof FirmsInstrumentsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FirmsInstrumentsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a FirmsInstrumentsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FirmsInstrumentsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FirmsInstrumentsRequest} FirmsInstrumentsRequest
     */
    FirmsInstrumentsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.FirmsInstrumentsRequest)
            return object;
        return new $root.FirmsInstrumentsRequest();
    };

    /**
     * Creates a plain object from a FirmsInstrumentsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FirmsInstrumentsRequest
     * @static
     * @param {FirmsInstrumentsRequest} message FirmsInstrumentsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FirmsInstrumentsRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this FirmsInstrumentsRequest to JSON.
     * @function toJSON
     * @memberof FirmsInstrumentsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FirmsInstrumentsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FirmsInstrumentsRequest;
})();

$root.FirmsInstrumentsResponse = (function() {

    /**
     * Properties of a FirmsInstrumentsResponse.
     * @exports IFirmsInstrumentsResponse
     * @interface IFirmsInstrumentsResponse
     * @property {Array.<IFirm>|null} [Firms] FirmsInstrumentsResponse Firms
     */

    /**
     * Constructs a new FirmsInstrumentsResponse.
     * @exports FirmsInstrumentsResponse
     * @classdesc Represents a FirmsInstrumentsResponse.
     * @implements IFirmsInstrumentsResponse
     * @constructor
     * @param {IFirmsInstrumentsResponse=} [properties] Properties to set
     */
    function FirmsInstrumentsResponse(properties) {
        this.Firms = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FirmsInstrumentsResponse Firms.
     * @member {Array.<IFirm>} Firms
     * @memberof FirmsInstrumentsResponse
     * @instance
     */
    FirmsInstrumentsResponse.prototype.Firms = $util.emptyArray;

    /**
     * Creates a new FirmsInstrumentsResponse instance using the specified properties.
     * @function create
     * @memberof FirmsInstrumentsResponse
     * @static
     * @param {IFirmsInstrumentsResponse=} [properties] Properties to set
     * @returns {FirmsInstrumentsResponse} FirmsInstrumentsResponse instance
     */
    FirmsInstrumentsResponse.create = function create(properties) {
        return new FirmsInstrumentsResponse(properties);
    };

    /**
     * Encodes the specified FirmsInstrumentsResponse message. Does not implicitly {@link FirmsInstrumentsResponse.verify|verify} messages.
     * @function encode
     * @memberof FirmsInstrumentsResponse
     * @static
     * @param {IFirmsInstrumentsResponse} message FirmsInstrumentsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FirmsInstrumentsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Firms != null && message.Firms.length)
            for (var i = 0; i < message.Firms.length; ++i)
                $root.Firm.encode(message.Firms[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FirmsInstrumentsResponse message, length delimited. Does not implicitly {@link FirmsInstrumentsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FirmsInstrumentsResponse
     * @static
     * @param {IFirmsInstrumentsResponse} message FirmsInstrumentsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FirmsInstrumentsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FirmsInstrumentsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FirmsInstrumentsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FirmsInstrumentsResponse} FirmsInstrumentsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FirmsInstrumentsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FirmsInstrumentsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Firms && message.Firms.length))
                    message.Firms = [];
                message.Firms.push($root.Firm.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FirmsInstrumentsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FirmsInstrumentsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FirmsInstrumentsResponse} FirmsInstrumentsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FirmsInstrumentsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FirmsInstrumentsResponse message.
     * @function verify
     * @memberof FirmsInstrumentsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FirmsInstrumentsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Firms != null && message.hasOwnProperty("Firms")) {
            if (!Array.isArray(message.Firms))
                return "Firms: array expected";
            for (var i = 0; i < message.Firms.length; ++i) {
                var error = $root.Firm.verify(message.Firms[i]);
                if (error)
                    return "Firms." + error;
            }
        }
        return null;
    };

    /**
     * Creates a FirmsInstrumentsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FirmsInstrumentsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FirmsInstrumentsResponse} FirmsInstrumentsResponse
     */
    FirmsInstrumentsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.FirmsInstrumentsResponse)
            return object;
        var message = new $root.FirmsInstrumentsResponse();
        if (object.Firms) {
            if (!Array.isArray(object.Firms))
                throw TypeError(".FirmsInstrumentsResponse.Firms: array expected");
            message.Firms = [];
            for (var i = 0; i < object.Firms.length; ++i) {
                if (typeof object.Firms[i] !== "object")
                    throw TypeError(".FirmsInstrumentsResponse.Firms: object expected");
                message.Firms[i] = $root.Firm.fromObject(object.Firms[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a FirmsInstrumentsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FirmsInstrumentsResponse
     * @static
     * @param {FirmsInstrumentsResponse} message FirmsInstrumentsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FirmsInstrumentsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Firms = [];
        if (message.Firms && message.Firms.length) {
            object.Firms = [];
            for (var j = 0; j < message.Firms.length; ++j)
                object.Firms[j] = $root.Firm.toObject(message.Firms[j], options);
        }
        return object;
    };

    /**
     * Converts this FirmsInstrumentsResponse to JSON.
     * @function toJSON
     * @memberof FirmsInstrumentsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FirmsInstrumentsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FirmsInstrumentsResponse;
})();

$root.ForwardQuoteRequest = (function() {

    /**
     * Properties of a ForwardQuoteRequest.
     * @exports IForwardQuoteRequest
     * @interface IForwardQuoteRequest
     * @property {number|null} [ClientId] ForwardQuoteRequest ClientId
     * @property {number|null} [Quantity] ForwardQuoteRequest Quantity
     * @property {string|null} [Instrument] ForwardQuoteRequest Instrument
     * @property {string|null} [BaseCurrency] ForwardQuoteRequest BaseCurrency
     * @property {string|null} [Tenor] ForwardQuoteRequest Tenor
     */

    /**
     * Constructs a new ForwardQuoteRequest.
     * @exports ForwardQuoteRequest
     * @classdesc Represents a ForwardQuoteRequest.
     * @implements IForwardQuoteRequest
     * @constructor
     * @param {IForwardQuoteRequest=} [properties] Properties to set
     */
    function ForwardQuoteRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ForwardQuoteRequest ClientId.
     * @member {number} ClientId
     * @memberof ForwardQuoteRequest
     * @instance
     */
    ForwardQuoteRequest.prototype.ClientId = 0;

    /**
     * ForwardQuoteRequest Quantity.
     * @member {number} Quantity
     * @memberof ForwardQuoteRequest
     * @instance
     */
    ForwardQuoteRequest.prototype.Quantity = 0;

    /**
     * ForwardQuoteRequest Instrument.
     * @member {string} Instrument
     * @memberof ForwardQuoteRequest
     * @instance
     */
    ForwardQuoteRequest.prototype.Instrument = "";

    /**
     * ForwardQuoteRequest BaseCurrency.
     * @member {string} BaseCurrency
     * @memberof ForwardQuoteRequest
     * @instance
     */
    ForwardQuoteRequest.prototype.BaseCurrency = "";

    /**
     * ForwardQuoteRequest Tenor.
     * @member {string} Tenor
     * @memberof ForwardQuoteRequest
     * @instance
     */
    ForwardQuoteRequest.prototype.Tenor = "";

    /**
     * Creates a new ForwardQuoteRequest instance using the specified properties.
     * @function create
     * @memberof ForwardQuoteRequest
     * @static
     * @param {IForwardQuoteRequest=} [properties] Properties to set
     * @returns {ForwardQuoteRequest} ForwardQuoteRequest instance
     */
    ForwardQuoteRequest.create = function create(properties) {
        return new ForwardQuoteRequest(properties);
    };

    /**
     * Encodes the specified ForwardQuoteRequest message. Does not implicitly {@link ForwardQuoteRequest.verify|verify} messages.
     * @function encode
     * @memberof ForwardQuoteRequest
     * @static
     * @param {IForwardQuoteRequest} message ForwardQuoteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ForwardQuoteRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ClientId != null && Object.hasOwnProperty.call(message, "ClientId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ClientId);
        if (message.Quantity != null && Object.hasOwnProperty.call(message, "Quantity"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.Quantity);
        if (message.Instrument != null && Object.hasOwnProperty.call(message, "Instrument"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Instrument);
        if (message.BaseCurrency != null && Object.hasOwnProperty.call(message, "BaseCurrency"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.BaseCurrency);
        if (message.Tenor != null && Object.hasOwnProperty.call(message, "Tenor"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Tenor);
        return writer;
    };

    /**
     * Encodes the specified ForwardQuoteRequest message, length delimited. Does not implicitly {@link ForwardQuoteRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ForwardQuoteRequest
     * @static
     * @param {IForwardQuoteRequest} message ForwardQuoteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ForwardQuoteRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ForwardQuoteRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ForwardQuoteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ForwardQuoteRequest} ForwardQuoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ForwardQuoteRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ForwardQuoteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ClientId = reader.int32();
                break;
            case 2:
                message.Quantity = reader.float();
                break;
            case 3:
                message.Instrument = reader.string();
                break;
            case 4:
                message.BaseCurrency = reader.string();
                break;
            case 5:
                message.Tenor = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ForwardQuoteRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ForwardQuoteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ForwardQuoteRequest} ForwardQuoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ForwardQuoteRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ForwardQuoteRequest message.
     * @function verify
     * @memberof ForwardQuoteRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ForwardQuoteRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            if (!$util.isInteger(message.ClientId))
                return "ClientId: integer expected";
        if (message.Quantity != null && message.hasOwnProperty("Quantity"))
            if (typeof message.Quantity !== "number")
                return "Quantity: number expected";
        if (message.Instrument != null && message.hasOwnProperty("Instrument"))
            if (!$util.isString(message.Instrument))
                return "Instrument: string expected";
        if (message.BaseCurrency != null && message.hasOwnProperty("BaseCurrency"))
            if (!$util.isString(message.BaseCurrency))
                return "BaseCurrency: string expected";
        if (message.Tenor != null && message.hasOwnProperty("Tenor"))
            if (!$util.isString(message.Tenor))
                return "Tenor: string expected";
        return null;
    };

    /**
     * Creates a ForwardQuoteRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ForwardQuoteRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ForwardQuoteRequest} ForwardQuoteRequest
     */
    ForwardQuoteRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ForwardQuoteRequest)
            return object;
        var message = new $root.ForwardQuoteRequest();
        if (object.ClientId != null)
            message.ClientId = object.ClientId | 0;
        if (object.Quantity != null)
            message.Quantity = Number(object.Quantity);
        if (object.Instrument != null)
            message.Instrument = String(object.Instrument);
        if (object.BaseCurrency != null)
            message.BaseCurrency = String(object.BaseCurrency);
        if (object.Tenor != null)
            message.Tenor = String(object.Tenor);
        return message;
    };

    /**
     * Creates a plain object from a ForwardQuoteRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ForwardQuoteRequest
     * @static
     * @param {ForwardQuoteRequest} message ForwardQuoteRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ForwardQuoteRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ClientId = 0;
            object.Quantity = 0;
            object.Instrument = "";
            object.BaseCurrency = "";
            object.Tenor = "";
        }
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            object.ClientId = message.ClientId;
        if (message.Quantity != null && message.hasOwnProperty("Quantity"))
            object.Quantity = options.json && !isFinite(message.Quantity) ? String(message.Quantity) : message.Quantity;
        if (message.Instrument != null && message.hasOwnProperty("Instrument"))
            object.Instrument = message.Instrument;
        if (message.BaseCurrency != null && message.hasOwnProperty("BaseCurrency"))
            object.BaseCurrency = message.BaseCurrency;
        if (message.Tenor != null && message.hasOwnProperty("Tenor"))
            object.Tenor = message.Tenor;
        return object;
    };

    /**
     * Converts this ForwardQuoteRequest to JSON.
     * @function toJSON
     * @memberof ForwardQuoteRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ForwardQuoteRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ForwardQuoteRequest;
})();

$root.ForwardQuote = (function() {

    /**
     * Properties of a ForwardQuote.
     * @exports IForwardQuote
     * @interface IForwardQuote
     * @property {number|null} [Rate] ForwardQuote Rate
     * @property {number|null} [Spot] ForwardQuote Spot
     * @property {number|null} [Points] ForwardQuote Points
     */

    /**
     * Constructs a new ForwardQuote.
     * @exports ForwardQuote
     * @classdesc Represents a ForwardQuote.
     * @implements IForwardQuote
     * @constructor
     * @param {IForwardQuote=} [properties] Properties to set
     */
    function ForwardQuote(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ForwardQuote Rate.
     * @member {number} Rate
     * @memberof ForwardQuote
     * @instance
     */
    ForwardQuote.prototype.Rate = 0;

    /**
     * ForwardQuote Spot.
     * @member {number} Spot
     * @memberof ForwardQuote
     * @instance
     */
    ForwardQuote.prototype.Spot = 0;

    /**
     * ForwardQuote Points.
     * @member {number} Points
     * @memberof ForwardQuote
     * @instance
     */
    ForwardQuote.prototype.Points = 0;

    /**
     * Creates a new ForwardQuote instance using the specified properties.
     * @function create
     * @memberof ForwardQuote
     * @static
     * @param {IForwardQuote=} [properties] Properties to set
     * @returns {ForwardQuote} ForwardQuote instance
     */
    ForwardQuote.create = function create(properties) {
        return new ForwardQuote(properties);
    };

    /**
     * Encodes the specified ForwardQuote message. Does not implicitly {@link ForwardQuote.verify|verify} messages.
     * @function encode
     * @memberof ForwardQuote
     * @static
     * @param {IForwardQuote} message ForwardQuote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ForwardQuote.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Rate != null && Object.hasOwnProperty.call(message, "Rate"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.Rate);
        if (message.Spot != null && Object.hasOwnProperty.call(message, "Spot"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.Spot);
        if (message.Points != null && Object.hasOwnProperty.call(message, "Points"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.Points);
        return writer;
    };

    /**
     * Encodes the specified ForwardQuote message, length delimited. Does not implicitly {@link ForwardQuote.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ForwardQuote
     * @static
     * @param {IForwardQuote} message ForwardQuote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ForwardQuote.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ForwardQuote message from the specified reader or buffer.
     * @function decode
     * @memberof ForwardQuote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ForwardQuote} ForwardQuote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ForwardQuote.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ForwardQuote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Rate = reader.float();
                break;
            case 2:
                message.Spot = reader.float();
                break;
            case 3:
                message.Points = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ForwardQuote message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ForwardQuote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ForwardQuote} ForwardQuote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ForwardQuote.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ForwardQuote message.
     * @function verify
     * @memberof ForwardQuote
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ForwardQuote.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            if (typeof message.Rate !== "number")
                return "Rate: number expected";
        if (message.Spot != null && message.hasOwnProperty("Spot"))
            if (typeof message.Spot !== "number")
                return "Spot: number expected";
        if (message.Points != null && message.hasOwnProperty("Points"))
            if (typeof message.Points !== "number")
                return "Points: number expected";
        return null;
    };

    /**
     * Creates a ForwardQuote message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ForwardQuote
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ForwardQuote} ForwardQuote
     */
    ForwardQuote.fromObject = function fromObject(object) {
        if (object instanceof $root.ForwardQuote)
            return object;
        var message = new $root.ForwardQuote();
        if (object.Rate != null)
            message.Rate = Number(object.Rate);
        if (object.Spot != null)
            message.Spot = Number(object.Spot);
        if (object.Points != null)
            message.Points = Number(object.Points);
        return message;
    };

    /**
     * Creates a plain object from a ForwardQuote message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ForwardQuote
     * @static
     * @param {ForwardQuote} message ForwardQuote
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ForwardQuote.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Rate = 0;
            object.Spot = 0;
            object.Points = 0;
        }
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            object.Rate = options.json && !isFinite(message.Rate) ? String(message.Rate) : message.Rate;
        if (message.Spot != null && message.hasOwnProperty("Spot"))
            object.Spot = options.json && !isFinite(message.Spot) ? String(message.Spot) : message.Spot;
        if (message.Points != null && message.hasOwnProperty("Points"))
            object.Points = options.json && !isFinite(message.Points) ? String(message.Points) : message.Points;
        return object;
    };

    /**
     * Converts this ForwardQuote to JSON.
     * @function toJSON
     * @memberof ForwardQuote
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ForwardQuote.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ForwardQuote;
})();

$root.ForwardQuoteResponse = (function() {

    /**
     * Properties of a ForwardQuoteResponse.
     * @exports IForwardQuoteResponse
     * @interface IForwardQuoteResponse
     * @property {IForwardQuote|null} [Ask] ForwardQuoteResponse Ask
     * @property {IForwardQuote|null} [Bid] ForwardQuoteResponse Bid
     */

    /**
     * Constructs a new ForwardQuoteResponse.
     * @exports ForwardQuoteResponse
     * @classdesc Represents a ForwardQuoteResponse.
     * @implements IForwardQuoteResponse
     * @constructor
     * @param {IForwardQuoteResponse=} [properties] Properties to set
     */
    function ForwardQuoteResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ForwardQuoteResponse Ask.
     * @member {IForwardQuote|null|undefined} Ask
     * @memberof ForwardQuoteResponse
     * @instance
     */
    ForwardQuoteResponse.prototype.Ask = null;

    /**
     * ForwardQuoteResponse Bid.
     * @member {IForwardQuote|null|undefined} Bid
     * @memberof ForwardQuoteResponse
     * @instance
     */
    ForwardQuoteResponse.prototype.Bid = null;

    /**
     * Creates a new ForwardQuoteResponse instance using the specified properties.
     * @function create
     * @memberof ForwardQuoteResponse
     * @static
     * @param {IForwardQuoteResponse=} [properties] Properties to set
     * @returns {ForwardQuoteResponse} ForwardQuoteResponse instance
     */
    ForwardQuoteResponse.create = function create(properties) {
        return new ForwardQuoteResponse(properties);
    };

    /**
     * Encodes the specified ForwardQuoteResponse message. Does not implicitly {@link ForwardQuoteResponse.verify|verify} messages.
     * @function encode
     * @memberof ForwardQuoteResponse
     * @static
     * @param {IForwardQuoteResponse} message ForwardQuoteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ForwardQuoteResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Ask != null && Object.hasOwnProperty.call(message, "Ask"))
            $root.ForwardQuote.encode(message.Ask, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.Bid != null && Object.hasOwnProperty.call(message, "Bid"))
            $root.ForwardQuote.encode(message.Bid, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ForwardQuoteResponse message, length delimited. Does not implicitly {@link ForwardQuoteResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ForwardQuoteResponse
     * @static
     * @param {IForwardQuoteResponse} message ForwardQuoteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ForwardQuoteResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ForwardQuoteResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ForwardQuoteResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ForwardQuoteResponse} ForwardQuoteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ForwardQuoteResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ForwardQuoteResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Ask = $root.ForwardQuote.decode(reader, reader.uint32());
                break;
            case 2:
                message.Bid = $root.ForwardQuote.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ForwardQuoteResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ForwardQuoteResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ForwardQuoteResponse} ForwardQuoteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ForwardQuoteResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ForwardQuoteResponse message.
     * @function verify
     * @memberof ForwardQuoteResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ForwardQuoteResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Ask != null && message.hasOwnProperty("Ask")) {
            var error = $root.ForwardQuote.verify(message.Ask);
            if (error)
                return "Ask." + error;
        }
        if (message.Bid != null && message.hasOwnProperty("Bid")) {
            var error = $root.ForwardQuote.verify(message.Bid);
            if (error)
                return "Bid." + error;
        }
        return null;
    };

    /**
     * Creates a ForwardQuoteResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ForwardQuoteResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ForwardQuoteResponse} ForwardQuoteResponse
     */
    ForwardQuoteResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ForwardQuoteResponse)
            return object;
        var message = new $root.ForwardQuoteResponse();
        if (object.Ask != null) {
            if (typeof object.Ask !== "object")
                throw TypeError(".ForwardQuoteResponse.Ask: object expected");
            message.Ask = $root.ForwardQuote.fromObject(object.Ask);
        }
        if (object.Bid != null) {
            if (typeof object.Bid !== "object")
                throw TypeError(".ForwardQuoteResponse.Bid: object expected");
            message.Bid = $root.ForwardQuote.fromObject(object.Bid);
        }
        return message;
    };

    /**
     * Creates a plain object from a ForwardQuoteResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ForwardQuoteResponse
     * @static
     * @param {ForwardQuoteResponse} message ForwardQuoteResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ForwardQuoteResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Ask = null;
            object.Bid = null;
        }
        if (message.Ask != null && message.hasOwnProperty("Ask"))
            object.Ask = $root.ForwardQuote.toObject(message.Ask, options);
        if (message.Bid != null && message.hasOwnProperty("Bid"))
            object.Bid = $root.ForwardQuote.toObject(message.Bid, options);
        return object;
    };

    /**
     * Converts this ForwardQuoteResponse to JSON.
     * @function toJSON
     * @memberof ForwardQuoteResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ForwardQuoteResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ForwardQuoteResponse;
})();

$root.LimitsRequest = (function() {

    /**
     * Properties of a LimitsRequest.
     * @exports ILimitsRequest
     * @interface ILimitsRequest
     */

    /**
     * Constructs a new LimitsRequest.
     * @exports LimitsRequest
     * @classdesc Represents a LimitsRequest.
     * @implements ILimitsRequest
     * @constructor
     * @param {ILimitsRequest=} [properties] Properties to set
     */
    function LimitsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LimitsRequest instance using the specified properties.
     * @function create
     * @memberof LimitsRequest
     * @static
     * @param {ILimitsRequest=} [properties] Properties to set
     * @returns {LimitsRequest} LimitsRequest instance
     */
    LimitsRequest.create = function create(properties) {
        return new LimitsRequest(properties);
    };

    /**
     * Encodes the specified LimitsRequest message. Does not implicitly {@link LimitsRequest.verify|verify} messages.
     * @function encode
     * @memberof LimitsRequest
     * @static
     * @param {ILimitsRequest} message LimitsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LimitsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LimitsRequest message, length delimited. Does not implicitly {@link LimitsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LimitsRequest
     * @static
     * @param {ILimitsRequest} message LimitsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LimitsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LimitsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof LimitsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LimitsRequest} LimitsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LimitsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LimitsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LimitsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LimitsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LimitsRequest} LimitsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LimitsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LimitsRequest message.
     * @function verify
     * @memberof LimitsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LimitsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LimitsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LimitsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LimitsRequest} LimitsRequest
     */
    LimitsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.LimitsRequest)
            return object;
        return new $root.LimitsRequest();
    };

    /**
     * Creates a plain object from a LimitsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LimitsRequest
     * @static
     * @param {LimitsRequest} message LimitsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LimitsRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LimitsRequest to JSON.
     * @function toJSON
     * @memberof LimitsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LimitsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LimitsRequest;
})();

$root.Limit = (function() {

    /**
     * Properties of a Limit.
     * @exports ILimit
     * @interface ILimit
     * @property {string|null} [Symbol] Limit Symbol
     * @property {number|null} [Limit] Limit Limit
     * @property {number|null} [Consumed] Limit Consumed
     */

    /**
     * Constructs a new Limit.
     * @exports Limit
     * @classdesc Represents a Limit.
     * @implements ILimit
     * @constructor
     * @param {ILimit=} [properties] Properties to set
     */
    function Limit(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Limit Symbol.
     * @member {string} Symbol
     * @memberof Limit
     * @instance
     */
    Limit.prototype.Symbol = "";

    /**
     * Limit Limit.
     * @member {number} Limit
     * @memberof Limit
     * @instance
     */
    Limit.prototype.Limit = 0;

    /**
     * Limit Consumed.
     * @member {number} Consumed
     * @memberof Limit
     * @instance
     */
    Limit.prototype.Consumed = 0;

    /**
     * Creates a new Limit instance using the specified properties.
     * @function create
     * @memberof Limit
     * @static
     * @param {ILimit=} [properties] Properties to set
     * @returns {Limit} Limit instance
     */
    Limit.create = function create(properties) {
        return new Limit(properties);
    };

    /**
     * Encodes the specified Limit message. Does not implicitly {@link Limit.verify|verify} messages.
     * @function encode
     * @memberof Limit
     * @static
     * @param {ILimit} message Limit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Limit.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Symbol != null && Object.hasOwnProperty.call(message, "Symbol"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Symbol);
        if (message.Limit != null && Object.hasOwnProperty.call(message, "Limit"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.Limit);
        if (message.Consumed != null && Object.hasOwnProperty.call(message, "Consumed"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.Consumed);
        return writer;
    };

    /**
     * Encodes the specified Limit message, length delimited. Does not implicitly {@link Limit.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Limit
     * @static
     * @param {ILimit} message Limit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Limit.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Limit message from the specified reader or buffer.
     * @function decode
     * @memberof Limit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Limit} Limit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Limit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Limit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Symbol = reader.string();
                break;
            case 2:
                message.Limit = reader.double();
                break;
            case 3:
                message.Consumed = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Limit message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Limit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Limit} Limit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Limit.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Limit message.
     * @function verify
     * @memberof Limit
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Limit.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Symbol != null && message.hasOwnProperty("Symbol"))
            if (!$util.isString(message.Symbol))
                return "Symbol: string expected";
        if (message.Limit != null && message.hasOwnProperty("Limit"))
            if (typeof message.Limit !== "number")
                return "Limit: number expected";
        if (message.Consumed != null && message.hasOwnProperty("Consumed"))
            if (typeof message.Consumed !== "number")
                return "Consumed: number expected";
        return null;
    };

    /**
     * Creates a Limit message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Limit
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Limit} Limit
     */
    Limit.fromObject = function fromObject(object) {
        if (object instanceof $root.Limit)
            return object;
        var message = new $root.Limit();
        if (object.Symbol != null)
            message.Symbol = String(object.Symbol);
        if (object.Limit != null)
            message.Limit = Number(object.Limit);
        if (object.Consumed != null)
            message.Consumed = Number(object.Consumed);
        return message;
    };

    /**
     * Creates a plain object from a Limit message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Limit
     * @static
     * @param {Limit} message Limit
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Limit.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Symbol = "";
            object.Limit = 0;
            object.Consumed = 0;
        }
        if (message.Symbol != null && message.hasOwnProperty("Symbol"))
            object.Symbol = message.Symbol;
        if (message.Limit != null && message.hasOwnProperty("Limit"))
            object.Limit = options.json && !isFinite(message.Limit) ? String(message.Limit) : message.Limit;
        if (message.Consumed != null && message.hasOwnProperty("Consumed"))
            object.Consumed = options.json && !isFinite(message.Consumed) ? String(message.Consumed) : message.Consumed;
        return object;
    };

    /**
     * Converts this Limit to JSON.
     * @function toJSON
     * @memberof Limit
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Limit.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Limit;
})();

$root.LimitsResponse = (function() {

    /**
     * Properties of a LimitsResponse.
     * @exports ILimitsResponse
     * @interface ILimitsResponse
     * @property {Array.<ILimit>|null} [Limits] LimitsResponse Limits
     */

    /**
     * Constructs a new LimitsResponse.
     * @exports LimitsResponse
     * @classdesc Represents a LimitsResponse.
     * @implements ILimitsResponse
     * @constructor
     * @param {ILimitsResponse=} [properties] Properties to set
     */
    function LimitsResponse(properties) {
        this.Limits = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LimitsResponse Limits.
     * @member {Array.<ILimit>} Limits
     * @memberof LimitsResponse
     * @instance
     */
    LimitsResponse.prototype.Limits = $util.emptyArray;

    /**
     * Creates a new LimitsResponse instance using the specified properties.
     * @function create
     * @memberof LimitsResponse
     * @static
     * @param {ILimitsResponse=} [properties] Properties to set
     * @returns {LimitsResponse} LimitsResponse instance
     */
    LimitsResponse.create = function create(properties) {
        return new LimitsResponse(properties);
    };

    /**
     * Encodes the specified LimitsResponse message. Does not implicitly {@link LimitsResponse.verify|verify} messages.
     * @function encode
     * @memberof LimitsResponse
     * @static
     * @param {ILimitsResponse} message LimitsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LimitsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Limits != null && message.Limits.length)
            for (var i = 0; i < message.Limits.length; ++i)
                $root.Limit.encode(message.Limits[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LimitsResponse message, length delimited. Does not implicitly {@link LimitsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LimitsResponse
     * @static
     * @param {ILimitsResponse} message LimitsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LimitsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LimitsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof LimitsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LimitsResponse} LimitsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LimitsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LimitsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Limits && message.Limits.length))
                    message.Limits = [];
                message.Limits.push($root.Limit.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LimitsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LimitsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LimitsResponse} LimitsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LimitsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LimitsResponse message.
     * @function verify
     * @memberof LimitsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LimitsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Limits != null && message.hasOwnProperty("Limits")) {
            if (!Array.isArray(message.Limits))
                return "Limits: array expected";
            for (var i = 0; i < message.Limits.length; ++i) {
                var error = $root.Limit.verify(message.Limits[i]);
                if (error)
                    return "Limits." + error;
            }
        }
        return null;
    };

    /**
     * Creates a LimitsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LimitsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LimitsResponse} LimitsResponse
     */
    LimitsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.LimitsResponse)
            return object;
        var message = new $root.LimitsResponse();
        if (object.Limits) {
            if (!Array.isArray(object.Limits))
                throw TypeError(".LimitsResponse.Limits: array expected");
            message.Limits = [];
            for (var i = 0; i < object.Limits.length; ++i) {
                if (typeof object.Limits[i] !== "object")
                    throw TypeError(".LimitsResponse.Limits: object expected");
                message.Limits[i] = $root.Limit.fromObject(object.Limits[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a LimitsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LimitsResponse
     * @static
     * @param {LimitsResponse} message LimitsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LimitsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Limits = [];
        if (message.Limits && message.Limits.length) {
            object.Limits = [];
            for (var j = 0; j < message.Limits.length; ++j)
                object.Limits[j] = $root.Limit.toObject(message.Limits[j], options);
        }
        return object;
    };

    /**
     * Converts this LimitsResponse to JSON.
     * @function toJSON
     * @memberof LimitsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LimitsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LimitsResponse;
})();

/**
 * MessageTypes enum.
 * @exports MessageTypes
 * @enum {number}
 * @property {number} FirmsInstruments=0 FirmsInstruments value
 * @property {number} SpotQuote=1 SpotQuote value
 * @property {number} PlaceSpotOrder=2 PlaceSpotOrder value
 * @property {number} Limits=3 Limits value
 * @property {number} Audit=4 Audit value
 * @property {number} SpotOrders=5 SpotOrders value
 * @property {number} Persistance=6 Persistance value
 * @property {number} PersistanceSave=7 PersistanceSave value
 * @property {number} ForwardQuote=8 ForwardQuote value
 * @property {number} TenorResolve=9 TenorResolve value
 */
$root.MessageTypes = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "FirmsInstruments"] = 0;
    values[valuesById[1] = "SpotQuote"] = 1;
    values[valuesById[2] = "PlaceSpotOrder"] = 2;
    values[valuesById[3] = "Limits"] = 3;
    values[valuesById[4] = "Audit"] = 4;
    values[valuesById[5] = "SpotOrders"] = 5;
    values[valuesById[6] = "Persistance"] = 6;
    values[valuesById[7] = "PersistanceSave"] = 7;
    values[valuesById[8] = "ForwardQuote"] = 8;
    values[valuesById[9] = "TenorResolve"] = 9;
    return values;
})();

$root.PersistanceRequest = (function() {

    /**
     * Properties of a PersistanceRequest.
     * @exports IPersistanceRequest
     * @interface IPersistanceRequest
     * @property {Array.<IPersistanceItem>|null} [ItemsToSave] PersistanceRequest ItemsToSave
     */

    /**
     * Constructs a new PersistanceRequest.
     * @exports PersistanceRequest
     * @classdesc Represents a PersistanceRequest.
     * @implements IPersistanceRequest
     * @constructor
     * @param {IPersistanceRequest=} [properties] Properties to set
     */
    function PersistanceRequest(properties) {
        this.ItemsToSave = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PersistanceRequest ItemsToSave.
     * @member {Array.<IPersistanceItem>} ItemsToSave
     * @memberof PersistanceRequest
     * @instance
     */
    PersistanceRequest.prototype.ItemsToSave = $util.emptyArray;

    /**
     * Creates a new PersistanceRequest instance using the specified properties.
     * @function create
     * @memberof PersistanceRequest
     * @static
     * @param {IPersistanceRequest=} [properties] Properties to set
     * @returns {PersistanceRequest} PersistanceRequest instance
     */
    PersistanceRequest.create = function create(properties) {
        return new PersistanceRequest(properties);
    };

    /**
     * Encodes the specified PersistanceRequest message. Does not implicitly {@link PersistanceRequest.verify|verify} messages.
     * @function encode
     * @memberof PersistanceRequest
     * @static
     * @param {IPersistanceRequest} message PersistanceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ItemsToSave != null && message.ItemsToSave.length)
            for (var i = 0; i < message.ItemsToSave.length; ++i)
                $root.PersistanceItem.encode(message.ItemsToSave[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PersistanceRequest message, length delimited. Does not implicitly {@link PersistanceRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PersistanceRequest
     * @static
     * @param {IPersistanceRequest} message PersistanceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PersistanceRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PersistanceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PersistanceRequest} PersistanceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PersistanceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ItemsToSave && message.ItemsToSave.length))
                    message.ItemsToSave = [];
                message.ItemsToSave.push($root.PersistanceItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PersistanceRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PersistanceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PersistanceRequest} PersistanceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PersistanceRequest message.
     * @function verify
     * @memberof PersistanceRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PersistanceRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ItemsToSave != null && message.hasOwnProperty("ItemsToSave")) {
            if (!Array.isArray(message.ItemsToSave))
                return "ItemsToSave: array expected";
            for (var i = 0; i < message.ItemsToSave.length; ++i) {
                var error = $root.PersistanceItem.verify(message.ItemsToSave[i]);
                if (error)
                    return "ItemsToSave." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PersistanceRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PersistanceRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PersistanceRequest} PersistanceRequest
     */
    PersistanceRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PersistanceRequest)
            return object;
        var message = new $root.PersistanceRequest();
        if (object.ItemsToSave) {
            if (!Array.isArray(object.ItemsToSave))
                throw TypeError(".PersistanceRequest.ItemsToSave: array expected");
            message.ItemsToSave = [];
            for (var i = 0; i < object.ItemsToSave.length; ++i) {
                if (typeof object.ItemsToSave[i] !== "object")
                    throw TypeError(".PersistanceRequest.ItemsToSave: object expected");
                message.ItemsToSave[i] = $root.PersistanceItem.fromObject(object.ItemsToSave[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PersistanceRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PersistanceRequest
     * @static
     * @param {PersistanceRequest} message PersistanceRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PersistanceRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ItemsToSave = [];
        if (message.ItemsToSave && message.ItemsToSave.length) {
            object.ItemsToSave = [];
            for (var j = 0; j < message.ItemsToSave.length; ++j)
                object.ItemsToSave[j] = $root.PersistanceItem.toObject(message.ItemsToSave[j], options);
        }
        return object;
    };

    /**
     * Converts this PersistanceRequest to JSON.
     * @function toJSON
     * @memberof PersistanceRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PersistanceRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PersistanceRequest;
})();

$root.PersistanceResponse = (function() {

    /**
     * Properties of a PersistanceResponse.
     * @exports IPersistanceResponse
     * @interface IPersistanceResponse
     * @property {boolean|null} [Status] PersistanceResponse Status
     */

    /**
     * Constructs a new PersistanceResponse.
     * @exports PersistanceResponse
     * @classdesc Represents a PersistanceResponse.
     * @implements IPersistanceResponse
     * @constructor
     * @param {IPersistanceResponse=} [properties] Properties to set
     */
    function PersistanceResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PersistanceResponse Status.
     * @member {boolean} Status
     * @memberof PersistanceResponse
     * @instance
     */
    PersistanceResponse.prototype.Status = false;

    /**
     * Creates a new PersistanceResponse instance using the specified properties.
     * @function create
     * @memberof PersistanceResponse
     * @static
     * @param {IPersistanceResponse=} [properties] Properties to set
     * @returns {PersistanceResponse} PersistanceResponse instance
     */
    PersistanceResponse.create = function create(properties) {
        return new PersistanceResponse(properties);
    };

    /**
     * Encodes the specified PersistanceResponse message. Does not implicitly {@link PersistanceResponse.verify|verify} messages.
     * @function encode
     * @memberof PersistanceResponse
     * @static
     * @param {IPersistanceResponse} message PersistanceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Status != null && Object.hasOwnProperty.call(message, "Status"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Status);
        return writer;
    };

    /**
     * Encodes the specified PersistanceResponse message, length delimited. Does not implicitly {@link PersistanceResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PersistanceResponse
     * @static
     * @param {IPersistanceResponse} message PersistanceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PersistanceResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PersistanceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PersistanceResponse} PersistanceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PersistanceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Status = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PersistanceResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PersistanceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PersistanceResponse} PersistanceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PersistanceResponse message.
     * @function verify
     * @memberof PersistanceResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PersistanceResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Status != null && message.hasOwnProperty("Status"))
            if (typeof message.Status !== "boolean")
                return "Status: boolean expected";
        return null;
    };

    /**
     * Creates a PersistanceResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PersistanceResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PersistanceResponse} PersistanceResponse
     */
    PersistanceResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PersistanceResponse)
            return object;
        var message = new $root.PersistanceResponse();
        if (object.Status != null)
            message.Status = Boolean(object.Status);
        return message;
    };

    /**
     * Creates a plain object from a PersistanceResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PersistanceResponse
     * @static
     * @param {PersistanceResponse} message PersistanceResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PersistanceResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.Status = false;
        if (message.Status != null && message.hasOwnProperty("Status"))
            object.Status = message.Status;
        return object;
    };

    /**
     * Converts this PersistanceResponse to JSON.
     * @function toJSON
     * @memberof PersistanceResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PersistanceResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PersistanceResponse;
})();

$root.PersistanceItem = (function() {

    /**
     * Properties of a PersistanceItem.
     * @exports IPersistanceItem
     * @interface IPersistanceItem
     * @property {string|null} [Key] PersistanceItem Key
     * @property {string|null} [Value] PersistanceItem Value
     */

    /**
     * Constructs a new PersistanceItem.
     * @exports PersistanceItem
     * @classdesc Represents a PersistanceItem.
     * @implements IPersistanceItem
     * @constructor
     * @param {IPersistanceItem=} [properties] Properties to set
     */
    function PersistanceItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PersistanceItem Key.
     * @member {string} Key
     * @memberof PersistanceItem
     * @instance
     */
    PersistanceItem.prototype.Key = "";

    /**
     * PersistanceItem Value.
     * @member {string} Value
     * @memberof PersistanceItem
     * @instance
     */
    PersistanceItem.prototype.Value = "";

    /**
     * Creates a new PersistanceItem instance using the specified properties.
     * @function create
     * @memberof PersistanceItem
     * @static
     * @param {IPersistanceItem=} [properties] Properties to set
     * @returns {PersistanceItem} PersistanceItem instance
     */
    PersistanceItem.create = function create(properties) {
        return new PersistanceItem(properties);
    };

    /**
     * Encodes the specified PersistanceItem message. Does not implicitly {@link PersistanceItem.verify|verify} messages.
     * @function encode
     * @memberof PersistanceItem
     * @static
     * @param {IPersistanceItem} message PersistanceItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Key != null && Object.hasOwnProperty.call(message, "Key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Key);
        if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Value);
        return writer;
    };

    /**
     * Encodes the specified PersistanceItem message, length delimited. Does not implicitly {@link PersistanceItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PersistanceItem
     * @static
     * @param {IPersistanceItem} message PersistanceItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PersistanceItem message from the specified reader or buffer.
     * @function decode
     * @memberof PersistanceItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PersistanceItem} PersistanceItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PersistanceItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Key = reader.string();
                break;
            case 2:
                message.Value = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PersistanceItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PersistanceItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PersistanceItem} PersistanceItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PersistanceItem message.
     * @function verify
     * @memberof PersistanceItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PersistanceItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Key != null && message.hasOwnProperty("Key"))
            if (!$util.isString(message.Key))
                return "Key: string expected";
        if (message.Value != null && message.hasOwnProperty("Value"))
            if (!$util.isString(message.Value))
                return "Value: string expected";
        return null;
    };

    /**
     * Creates a PersistanceItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PersistanceItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PersistanceItem} PersistanceItem
     */
    PersistanceItem.fromObject = function fromObject(object) {
        if (object instanceof $root.PersistanceItem)
            return object;
        var message = new $root.PersistanceItem();
        if (object.Key != null)
            message.Key = String(object.Key);
        if (object.Value != null)
            message.Value = String(object.Value);
        return message;
    };

    /**
     * Creates a plain object from a PersistanceItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PersistanceItem
     * @static
     * @param {PersistanceItem} message PersistanceItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PersistanceItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Key = "";
            object.Value = "";
        }
        if (message.Key != null && message.hasOwnProperty("Key"))
            object.Key = message.Key;
        if (message.Value != null && message.hasOwnProperty("Value"))
            object.Value = message.Value;
        return object;
    };

    /**
     * Converts this PersistanceItem to JSON.
     * @function toJSON
     * @memberof PersistanceItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PersistanceItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PersistanceItem;
})();

$root.PersistanceSaveRequest = (function() {

    /**
     * Properties of a PersistanceSaveRequest.
     * @exports IPersistanceSaveRequest
     * @interface IPersistanceSaveRequest
     * @property {Array.<IPersistanceItem>|null} [Items] PersistanceSaveRequest Items
     */

    /**
     * Constructs a new PersistanceSaveRequest.
     * @exports PersistanceSaveRequest
     * @classdesc Represents a PersistanceSaveRequest.
     * @implements IPersistanceSaveRequest
     * @constructor
     * @param {IPersistanceSaveRequest=} [properties] Properties to set
     */
    function PersistanceSaveRequest(properties) {
        this.Items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PersistanceSaveRequest Items.
     * @member {Array.<IPersistanceItem>} Items
     * @memberof PersistanceSaveRequest
     * @instance
     */
    PersistanceSaveRequest.prototype.Items = $util.emptyArray;

    /**
     * Creates a new PersistanceSaveRequest instance using the specified properties.
     * @function create
     * @memberof PersistanceSaveRequest
     * @static
     * @param {IPersistanceSaveRequest=} [properties] Properties to set
     * @returns {PersistanceSaveRequest} PersistanceSaveRequest instance
     */
    PersistanceSaveRequest.create = function create(properties) {
        return new PersistanceSaveRequest(properties);
    };

    /**
     * Encodes the specified PersistanceSaveRequest message. Does not implicitly {@link PersistanceSaveRequest.verify|verify} messages.
     * @function encode
     * @memberof PersistanceSaveRequest
     * @static
     * @param {IPersistanceSaveRequest} message PersistanceSaveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceSaveRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Items != null && message.Items.length)
            for (var i = 0; i < message.Items.length; ++i)
                $root.PersistanceItem.encode(message.Items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PersistanceSaveRequest message, length delimited. Does not implicitly {@link PersistanceSaveRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PersistanceSaveRequest
     * @static
     * @param {IPersistanceSaveRequest} message PersistanceSaveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceSaveRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PersistanceSaveRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PersistanceSaveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PersistanceSaveRequest} PersistanceSaveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceSaveRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PersistanceSaveRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Items && message.Items.length))
                    message.Items = [];
                message.Items.push($root.PersistanceItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PersistanceSaveRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PersistanceSaveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PersistanceSaveRequest} PersistanceSaveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceSaveRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PersistanceSaveRequest message.
     * @function verify
     * @memberof PersistanceSaveRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PersistanceSaveRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Items != null && message.hasOwnProperty("Items")) {
            if (!Array.isArray(message.Items))
                return "Items: array expected";
            for (var i = 0; i < message.Items.length; ++i) {
                var error = $root.PersistanceItem.verify(message.Items[i]);
                if (error)
                    return "Items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PersistanceSaveRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PersistanceSaveRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PersistanceSaveRequest} PersistanceSaveRequest
     */
    PersistanceSaveRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PersistanceSaveRequest)
            return object;
        var message = new $root.PersistanceSaveRequest();
        if (object.Items) {
            if (!Array.isArray(object.Items))
                throw TypeError(".PersistanceSaveRequest.Items: array expected");
            message.Items = [];
            for (var i = 0; i < object.Items.length; ++i) {
                if (typeof object.Items[i] !== "object")
                    throw TypeError(".PersistanceSaveRequest.Items: object expected");
                message.Items[i] = $root.PersistanceItem.fromObject(object.Items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PersistanceSaveRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PersistanceSaveRequest
     * @static
     * @param {PersistanceSaveRequest} message PersistanceSaveRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PersistanceSaveRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Items = [];
        if (message.Items && message.Items.length) {
            object.Items = [];
            for (var j = 0; j < message.Items.length; ++j)
                object.Items[j] = $root.PersistanceItem.toObject(message.Items[j], options);
        }
        return object;
    };

    /**
     * Converts this PersistanceSaveRequest to JSON.
     * @function toJSON
     * @memberof PersistanceSaveRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PersistanceSaveRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PersistanceSaveRequest;
})();

$root.PersistanceSaveResponse = (function() {

    /**
     * Properties of a PersistanceSaveResponse.
     * @exports IPersistanceSaveResponse
     * @interface IPersistanceSaveResponse
     * @property {boolean|null} [Status] PersistanceSaveResponse Status
     */

    /**
     * Constructs a new PersistanceSaveResponse.
     * @exports PersistanceSaveResponse
     * @classdesc Represents a PersistanceSaveResponse.
     * @implements IPersistanceSaveResponse
     * @constructor
     * @param {IPersistanceSaveResponse=} [properties] Properties to set
     */
    function PersistanceSaveResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PersistanceSaveResponse Status.
     * @member {boolean} Status
     * @memberof PersistanceSaveResponse
     * @instance
     */
    PersistanceSaveResponse.prototype.Status = false;

    /**
     * Creates a new PersistanceSaveResponse instance using the specified properties.
     * @function create
     * @memberof PersistanceSaveResponse
     * @static
     * @param {IPersistanceSaveResponse=} [properties] Properties to set
     * @returns {PersistanceSaveResponse} PersistanceSaveResponse instance
     */
    PersistanceSaveResponse.create = function create(properties) {
        return new PersistanceSaveResponse(properties);
    };

    /**
     * Encodes the specified PersistanceSaveResponse message. Does not implicitly {@link PersistanceSaveResponse.verify|verify} messages.
     * @function encode
     * @memberof PersistanceSaveResponse
     * @static
     * @param {IPersistanceSaveResponse} message PersistanceSaveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceSaveResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Status != null && Object.hasOwnProperty.call(message, "Status"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Status);
        return writer;
    };

    /**
     * Encodes the specified PersistanceSaveResponse message, length delimited. Does not implicitly {@link PersistanceSaveResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PersistanceSaveResponse
     * @static
     * @param {IPersistanceSaveResponse} message PersistanceSaveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PersistanceSaveResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PersistanceSaveResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PersistanceSaveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PersistanceSaveResponse} PersistanceSaveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceSaveResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PersistanceSaveResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Status = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PersistanceSaveResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PersistanceSaveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PersistanceSaveResponse} PersistanceSaveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PersistanceSaveResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PersistanceSaveResponse message.
     * @function verify
     * @memberof PersistanceSaveResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PersistanceSaveResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Status != null && message.hasOwnProperty("Status"))
            if (typeof message.Status !== "boolean")
                return "Status: boolean expected";
        return null;
    };

    /**
     * Creates a PersistanceSaveResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PersistanceSaveResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PersistanceSaveResponse} PersistanceSaveResponse
     */
    PersistanceSaveResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PersistanceSaveResponse)
            return object;
        var message = new $root.PersistanceSaveResponse();
        if (object.Status != null)
            message.Status = Boolean(object.Status);
        return message;
    };

    /**
     * Creates a plain object from a PersistanceSaveResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PersistanceSaveResponse
     * @static
     * @param {PersistanceSaveResponse} message PersistanceSaveResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PersistanceSaveResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.Status = false;
        if (message.Status != null && message.hasOwnProperty("Status"))
            object.Status = message.Status;
        return object;
    };

    /**
     * Converts this PersistanceSaveResponse to JSON.
     * @function toJSON
     * @memberof PersistanceSaveResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PersistanceSaveResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PersistanceSaveResponse;
})();

$root.PlaceSpotOrderRequest = (function() {

    /**
     * Properties of a PlaceSpotOrderRequest.
     * @exports IPlaceSpotOrderRequest
     * @interface IPlaceSpotOrderRequest
     * @property {string|null} [Symbol] PlaceSpotOrderRequest Symbol
     * @property {TradeSide|null} [Side] PlaceSpotOrderRequest Side
     * @property {SpotType|null} [Type] PlaceSpotOrderRequest Type
     * @property {string|null} [BaseCurrency] PlaceSpotOrderRequest BaseCurrency
     * @property {number|null} [Price] PlaceSpotOrderRequest Price
     * @property {number|null} [Quantity] PlaceSpotOrderRequest Quantity
     * @property {number|null} [ClientId] PlaceSpotOrderRequest ClientId
     */

    /**
     * Constructs a new PlaceSpotOrderRequest.
     * @exports PlaceSpotOrderRequest
     * @classdesc Represents a PlaceSpotOrderRequest.
     * @implements IPlaceSpotOrderRequest
     * @constructor
     * @param {IPlaceSpotOrderRequest=} [properties] Properties to set
     */
    function PlaceSpotOrderRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlaceSpotOrderRequest Symbol.
     * @member {string} Symbol
     * @memberof PlaceSpotOrderRequest
     * @instance
     */
    PlaceSpotOrderRequest.prototype.Symbol = "";

    /**
     * PlaceSpotOrderRequest Side.
     * @member {TradeSide} Side
     * @memberof PlaceSpotOrderRequest
     * @instance
     */
    PlaceSpotOrderRequest.prototype.Side = 0;

    /**
     * PlaceSpotOrderRequest Type.
     * @member {SpotType} Type
     * @memberof PlaceSpotOrderRequest
     * @instance
     */
    PlaceSpotOrderRequest.prototype.Type = 0;

    /**
     * PlaceSpotOrderRequest BaseCurrency.
     * @member {string} BaseCurrency
     * @memberof PlaceSpotOrderRequest
     * @instance
     */
    PlaceSpotOrderRequest.prototype.BaseCurrency = "";

    /**
     * PlaceSpotOrderRequest Price.
     * @member {number} Price
     * @memberof PlaceSpotOrderRequest
     * @instance
     */
    PlaceSpotOrderRequest.prototype.Price = 0;

    /**
     * PlaceSpotOrderRequest Quantity.
     * @member {number} Quantity
     * @memberof PlaceSpotOrderRequest
     * @instance
     */
    PlaceSpotOrderRequest.prototype.Quantity = 0;

    /**
     * PlaceSpotOrderRequest ClientId.
     * @member {number} ClientId
     * @memberof PlaceSpotOrderRequest
     * @instance
     */
    PlaceSpotOrderRequest.prototype.ClientId = 0;

    /**
     * Creates a new PlaceSpotOrderRequest instance using the specified properties.
     * @function create
     * @memberof PlaceSpotOrderRequest
     * @static
     * @param {IPlaceSpotOrderRequest=} [properties] Properties to set
     * @returns {PlaceSpotOrderRequest} PlaceSpotOrderRequest instance
     */
    PlaceSpotOrderRequest.create = function create(properties) {
        return new PlaceSpotOrderRequest(properties);
    };

    /**
     * Encodes the specified PlaceSpotOrderRequest message. Does not implicitly {@link PlaceSpotOrderRequest.verify|verify} messages.
     * @function encode
     * @memberof PlaceSpotOrderRequest
     * @static
     * @param {IPlaceSpotOrderRequest} message PlaceSpotOrderRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlaceSpotOrderRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Symbol != null && Object.hasOwnProperty.call(message, "Symbol"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Symbol);
        if (message.Side != null && Object.hasOwnProperty.call(message, "Side"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Side);
        if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
        if (message.BaseCurrency != null && Object.hasOwnProperty.call(message, "BaseCurrency"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.BaseCurrency);
        if (message.Price != null && Object.hasOwnProperty.call(message, "Price"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.Price);
        if (message.Quantity != null && Object.hasOwnProperty.call(message, "Quantity"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.Quantity);
        if (message.ClientId != null && Object.hasOwnProperty.call(message, "ClientId"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ClientId);
        return writer;
    };

    /**
     * Encodes the specified PlaceSpotOrderRequest message, length delimited. Does not implicitly {@link PlaceSpotOrderRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlaceSpotOrderRequest
     * @static
     * @param {IPlaceSpotOrderRequest} message PlaceSpotOrderRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlaceSpotOrderRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlaceSpotOrderRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PlaceSpotOrderRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlaceSpotOrderRequest} PlaceSpotOrderRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlaceSpotOrderRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlaceSpotOrderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Symbol = reader.string();
                break;
            case 2:
                message.Side = reader.int32();
                break;
            case 3:
                message.Type = reader.int32();
                break;
            case 4:
                message.BaseCurrency = reader.string();
                break;
            case 5:
                message.Price = reader.double();
                break;
            case 6:
                message.Quantity = reader.double();
                break;
            case 7:
                message.ClientId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlaceSpotOrderRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlaceSpotOrderRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlaceSpotOrderRequest} PlaceSpotOrderRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlaceSpotOrderRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlaceSpotOrderRequest message.
     * @function verify
     * @memberof PlaceSpotOrderRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlaceSpotOrderRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Symbol != null && message.hasOwnProperty("Symbol"))
            if (!$util.isString(message.Symbol))
                return "Symbol: string expected";
        if (message.Side != null && message.hasOwnProperty("Side"))
            switch (message.Side) {
            default:
                return "Side: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.Type != null && message.hasOwnProperty("Type"))
            switch (message.Type) {
            default:
                return "Type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.BaseCurrency != null && message.hasOwnProperty("BaseCurrency"))
            if (!$util.isString(message.BaseCurrency))
                return "BaseCurrency: string expected";
        if (message.Price != null && message.hasOwnProperty("Price"))
            if (typeof message.Price !== "number")
                return "Price: number expected";
        if (message.Quantity != null && message.hasOwnProperty("Quantity"))
            if (typeof message.Quantity !== "number")
                return "Quantity: number expected";
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            if (!$util.isInteger(message.ClientId))
                return "ClientId: integer expected";
        return null;
    };

    /**
     * Creates a PlaceSpotOrderRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlaceSpotOrderRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlaceSpotOrderRequest} PlaceSpotOrderRequest
     */
    PlaceSpotOrderRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PlaceSpotOrderRequest)
            return object;
        var message = new $root.PlaceSpotOrderRequest();
        if (object.Symbol != null)
            message.Symbol = String(object.Symbol);
        switch (object.Side) {
        case "TRADESIDE_SELL":
        case 0:
            message.Side = 0;
            break;
        case "TRADESIDE_BUY":
        case 1:
            message.Side = 1;
            break;
        }
        switch (object.Type) {
        case "SPOTTYPE_MARKET":
        case 0:
            message.Type = 0;
            break;
        case "SPOTTYPE_FULL":
        case 1:
            message.Type = 1;
            break;
        case "SPOTTYPE_STOP":
        case 2:
            message.Type = 2;
            break;
        case "SPOTTYPE_GTC":
        case 3:
            message.Type = 3;
            break;
        case "SPOTTYPE_IOC":
        case 4:
            message.Type = 4;
            break;
        }
        if (object.BaseCurrency != null)
            message.BaseCurrency = String(object.BaseCurrency);
        if (object.Price != null)
            message.Price = Number(object.Price);
        if (object.Quantity != null)
            message.Quantity = Number(object.Quantity);
        if (object.ClientId != null)
            message.ClientId = object.ClientId | 0;
        return message;
    };

    /**
     * Creates a plain object from a PlaceSpotOrderRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlaceSpotOrderRequest
     * @static
     * @param {PlaceSpotOrderRequest} message PlaceSpotOrderRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlaceSpotOrderRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Symbol = "";
            object.Side = options.enums === String ? "TRADESIDE_SELL" : 0;
            object.Type = options.enums === String ? "SPOTTYPE_MARKET" : 0;
            object.BaseCurrency = "";
            object.Price = 0;
            object.Quantity = 0;
            object.ClientId = 0;
        }
        if (message.Symbol != null && message.hasOwnProperty("Symbol"))
            object.Symbol = message.Symbol;
        if (message.Side != null && message.hasOwnProperty("Side"))
            object.Side = options.enums === String ? $root.TradeSide[message.Side] : message.Side;
        if (message.Type != null && message.hasOwnProperty("Type"))
            object.Type = options.enums === String ? $root.SpotType[message.Type] : message.Type;
        if (message.BaseCurrency != null && message.hasOwnProperty("BaseCurrency"))
            object.BaseCurrency = message.BaseCurrency;
        if (message.Price != null && message.hasOwnProperty("Price"))
            object.Price = options.json && !isFinite(message.Price) ? String(message.Price) : message.Price;
        if (message.Quantity != null && message.hasOwnProperty("Quantity"))
            object.Quantity = options.json && !isFinite(message.Quantity) ? String(message.Quantity) : message.Quantity;
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            object.ClientId = message.ClientId;
        return object;
    };

    /**
     * Converts this PlaceSpotOrderRequest to JSON.
     * @function toJSON
     * @memberof PlaceSpotOrderRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlaceSpotOrderRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlaceSpotOrderRequest;
})();

$root.PlaceSpotOrderResponse = (function() {

    /**
     * Properties of a PlaceSpotOrderResponse.
     * @exports IPlaceSpotOrderResponse
     * @interface IPlaceSpotOrderResponse
     * @property {boolean|null} [Accepted] PlaceSpotOrderResponse Accepted
     * @property {string|null} [Reason] PlaceSpotOrderResponse Reason
     */

    /**
     * Constructs a new PlaceSpotOrderResponse.
     * @exports PlaceSpotOrderResponse
     * @classdesc Represents a PlaceSpotOrderResponse.
     * @implements IPlaceSpotOrderResponse
     * @constructor
     * @param {IPlaceSpotOrderResponse=} [properties] Properties to set
     */
    function PlaceSpotOrderResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlaceSpotOrderResponse Accepted.
     * @member {boolean} Accepted
     * @memberof PlaceSpotOrderResponse
     * @instance
     */
    PlaceSpotOrderResponse.prototype.Accepted = false;

    /**
     * PlaceSpotOrderResponse Reason.
     * @member {string} Reason
     * @memberof PlaceSpotOrderResponse
     * @instance
     */
    PlaceSpotOrderResponse.prototype.Reason = "";

    /**
     * Creates a new PlaceSpotOrderResponse instance using the specified properties.
     * @function create
     * @memberof PlaceSpotOrderResponse
     * @static
     * @param {IPlaceSpotOrderResponse=} [properties] Properties to set
     * @returns {PlaceSpotOrderResponse} PlaceSpotOrderResponse instance
     */
    PlaceSpotOrderResponse.create = function create(properties) {
        return new PlaceSpotOrderResponse(properties);
    };

    /**
     * Encodes the specified PlaceSpotOrderResponse message. Does not implicitly {@link PlaceSpotOrderResponse.verify|verify} messages.
     * @function encode
     * @memberof PlaceSpotOrderResponse
     * @static
     * @param {IPlaceSpotOrderResponse} message PlaceSpotOrderResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlaceSpotOrderResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Accepted != null && Object.hasOwnProperty.call(message, "Accepted"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Accepted);
        if (message.Reason != null && Object.hasOwnProperty.call(message, "Reason"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Reason);
        return writer;
    };

    /**
     * Encodes the specified PlaceSpotOrderResponse message, length delimited. Does not implicitly {@link PlaceSpotOrderResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlaceSpotOrderResponse
     * @static
     * @param {IPlaceSpotOrderResponse} message PlaceSpotOrderResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlaceSpotOrderResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlaceSpotOrderResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PlaceSpotOrderResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlaceSpotOrderResponse} PlaceSpotOrderResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlaceSpotOrderResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlaceSpotOrderResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Accepted = reader.bool();
                break;
            case 2:
                message.Reason = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlaceSpotOrderResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlaceSpotOrderResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlaceSpotOrderResponse} PlaceSpotOrderResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlaceSpotOrderResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlaceSpotOrderResponse message.
     * @function verify
     * @memberof PlaceSpotOrderResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlaceSpotOrderResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Accepted != null && message.hasOwnProperty("Accepted"))
            if (typeof message.Accepted !== "boolean")
                return "Accepted: boolean expected";
        if (message.Reason != null && message.hasOwnProperty("Reason"))
            if (!$util.isString(message.Reason))
                return "Reason: string expected";
        return null;
    };

    /**
     * Creates a PlaceSpotOrderResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlaceSpotOrderResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlaceSpotOrderResponse} PlaceSpotOrderResponse
     */
    PlaceSpotOrderResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PlaceSpotOrderResponse)
            return object;
        var message = new $root.PlaceSpotOrderResponse();
        if (object.Accepted != null)
            message.Accepted = Boolean(object.Accepted);
        if (object.Reason != null)
            message.Reason = String(object.Reason);
        return message;
    };

    /**
     * Creates a plain object from a PlaceSpotOrderResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlaceSpotOrderResponse
     * @static
     * @param {PlaceSpotOrderResponse} message PlaceSpotOrderResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlaceSpotOrderResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Accepted = false;
            object.Reason = "";
        }
        if (message.Accepted != null && message.hasOwnProperty("Accepted"))
            object.Accepted = message.Accepted;
        if (message.Reason != null && message.hasOwnProperty("Reason"))
            object.Reason = message.Reason;
        return object;
    };

    /**
     * Converts this PlaceSpotOrderResponse to JSON.
     * @function toJSON
     * @memberof PlaceSpotOrderResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlaceSpotOrderResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlaceSpotOrderResponse;
})();

$root.SpotOrdersRequest = (function() {

    /**
     * Properties of a SpotOrdersRequest.
     * @exports ISpotOrdersRequest
     * @interface ISpotOrdersRequest
     * @property {number|null} [ClientId] SpotOrdersRequest ClientId
     */

    /**
     * Constructs a new SpotOrdersRequest.
     * @exports SpotOrdersRequest
     * @classdesc Represents a SpotOrdersRequest.
     * @implements ISpotOrdersRequest
     * @constructor
     * @param {ISpotOrdersRequest=} [properties] Properties to set
     */
    function SpotOrdersRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SpotOrdersRequest ClientId.
     * @member {number} ClientId
     * @memberof SpotOrdersRequest
     * @instance
     */
    SpotOrdersRequest.prototype.ClientId = 0;

    /**
     * Creates a new SpotOrdersRequest instance using the specified properties.
     * @function create
     * @memberof SpotOrdersRequest
     * @static
     * @param {ISpotOrdersRequest=} [properties] Properties to set
     * @returns {SpotOrdersRequest} SpotOrdersRequest instance
     */
    SpotOrdersRequest.create = function create(properties) {
        return new SpotOrdersRequest(properties);
    };

    /**
     * Encodes the specified SpotOrdersRequest message. Does not implicitly {@link SpotOrdersRequest.verify|verify} messages.
     * @function encode
     * @memberof SpotOrdersRequest
     * @static
     * @param {ISpotOrdersRequest} message SpotOrdersRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotOrdersRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ClientId != null && Object.hasOwnProperty.call(message, "ClientId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ClientId);
        return writer;
    };

    /**
     * Encodes the specified SpotOrdersRequest message, length delimited. Does not implicitly {@link SpotOrdersRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SpotOrdersRequest
     * @static
     * @param {ISpotOrdersRequest} message SpotOrdersRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotOrdersRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SpotOrdersRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SpotOrdersRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SpotOrdersRequest} SpotOrdersRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotOrdersRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SpotOrdersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ClientId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SpotOrdersRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SpotOrdersRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SpotOrdersRequest} SpotOrdersRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotOrdersRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SpotOrdersRequest message.
     * @function verify
     * @memberof SpotOrdersRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SpotOrdersRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            if (!$util.isInteger(message.ClientId))
                return "ClientId: integer expected";
        return null;
    };

    /**
     * Creates a SpotOrdersRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SpotOrdersRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SpotOrdersRequest} SpotOrdersRequest
     */
    SpotOrdersRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SpotOrdersRequest)
            return object;
        var message = new $root.SpotOrdersRequest();
        if (object.ClientId != null)
            message.ClientId = object.ClientId | 0;
        return message;
    };

    /**
     * Creates a plain object from a SpotOrdersRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SpotOrdersRequest
     * @static
     * @param {SpotOrdersRequest} message SpotOrdersRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SpotOrdersRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ClientId = 0;
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            object.ClientId = message.ClientId;
        return object;
    };

    /**
     * Converts this SpotOrdersRequest to JSON.
     * @function toJSON
     * @memberof SpotOrdersRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SpotOrdersRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SpotOrdersRequest;
})();

$root.SpotOrder = (function() {

    /**
     * Properties of a SpotOrder.
     * @exports ISpotOrder
     * @interface ISpotOrder
     * @property {string|null} [OrderId] SpotOrder OrderId
     * @property {SpotOrderState|null} [State] SpotOrder State
     * @property {number|null} [FillPercent] SpotOrder FillPercent
     * @property {SpotType|null} [SpotType] SpotOrder SpotType
     * @property {string|null} [Symbol] SpotOrder Symbol
     * @property {TradeSide|null} [Side] SpotOrder Side
     * @property {string|null} [CreatedBy] SpotOrder CreatedBy
     * @property {number|null} [ClientId] SpotOrder ClientId
     * @property {number|null} [RequestedAmount] SpotOrder RequestedAmount
     * @property {number|null} [LeftAmount] SpotOrder LeftAmount
     * @property {number|null} [FilledAmount] SpotOrder FilledAmount
     * @property {string|null} [BaseCurrency] SpotOrder BaseCurrency
     * @property {number|null} [RequestedPrice] SpotOrder RequestedPrice
     * @property {number|null} [FilledPrice] SpotOrder FilledPrice
     * @property {string|null} [CreatedDate] SpotOrder CreatedDate
     * @property {string|null} [ValueDate] SpotOrder ValueDate
     * @property {string|null} [UpdateDate] SpotOrder UpdateDate
     */

    /**
     * Constructs a new SpotOrder.
     * @exports SpotOrder
     * @classdesc Represents a SpotOrder.
     * @implements ISpotOrder
     * @constructor
     * @param {ISpotOrder=} [properties] Properties to set
     */
    function SpotOrder(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SpotOrder OrderId.
     * @member {string} OrderId
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.OrderId = "";

    /**
     * SpotOrder State.
     * @member {SpotOrderState} State
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.State = 0;

    /**
     * SpotOrder FillPercent.
     * @member {number} FillPercent
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.FillPercent = 0;

    /**
     * SpotOrder SpotType.
     * @member {SpotType} SpotType
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.SpotType = 0;

    /**
     * SpotOrder Symbol.
     * @member {string} Symbol
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.Symbol = "";

    /**
     * SpotOrder Side.
     * @member {TradeSide} Side
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.Side = 0;

    /**
     * SpotOrder CreatedBy.
     * @member {string} CreatedBy
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.CreatedBy = "";

    /**
     * SpotOrder ClientId.
     * @member {number} ClientId
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.ClientId = 0;

    /**
     * SpotOrder RequestedAmount.
     * @member {number} RequestedAmount
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.RequestedAmount = 0;

    /**
     * SpotOrder LeftAmount.
     * @member {number} LeftAmount
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.LeftAmount = 0;

    /**
     * SpotOrder FilledAmount.
     * @member {number} FilledAmount
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.FilledAmount = 0;

    /**
     * SpotOrder BaseCurrency.
     * @member {string} BaseCurrency
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.BaseCurrency = "";

    /**
     * SpotOrder RequestedPrice.
     * @member {number} RequestedPrice
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.RequestedPrice = 0;

    /**
     * SpotOrder FilledPrice.
     * @member {number} FilledPrice
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.FilledPrice = 0;

    /**
     * SpotOrder CreatedDate.
     * @member {string} CreatedDate
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.CreatedDate = "";

    /**
     * SpotOrder ValueDate.
     * @member {string} ValueDate
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.ValueDate = "";

    /**
     * SpotOrder UpdateDate.
     * @member {string} UpdateDate
     * @memberof SpotOrder
     * @instance
     */
    SpotOrder.prototype.UpdateDate = "";

    /**
     * Creates a new SpotOrder instance using the specified properties.
     * @function create
     * @memberof SpotOrder
     * @static
     * @param {ISpotOrder=} [properties] Properties to set
     * @returns {SpotOrder} SpotOrder instance
     */
    SpotOrder.create = function create(properties) {
        return new SpotOrder(properties);
    };

    /**
     * Encodes the specified SpotOrder message. Does not implicitly {@link SpotOrder.verify|verify} messages.
     * @function encode
     * @memberof SpotOrder
     * @static
     * @param {ISpotOrder} message SpotOrder message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotOrder.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.OrderId != null && Object.hasOwnProperty.call(message, "OrderId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.OrderId);
        if (message.State != null && Object.hasOwnProperty.call(message, "State"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.State);
        if (message.FillPercent != null && Object.hasOwnProperty.call(message, "FillPercent"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.FillPercent);
        if (message.SpotType != null && Object.hasOwnProperty.call(message, "SpotType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.SpotType);
        if (message.Symbol != null && Object.hasOwnProperty.call(message, "Symbol"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Symbol);
        if (message.Side != null && Object.hasOwnProperty.call(message, "Side"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Side);
        if (message.CreatedBy != null && Object.hasOwnProperty.call(message, "CreatedBy"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.CreatedBy);
        if (message.ClientId != null && Object.hasOwnProperty.call(message, "ClientId"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.ClientId);
        if (message.RequestedAmount != null && Object.hasOwnProperty.call(message, "RequestedAmount"))
            writer.uint32(/* id 9, wireType 1 =*/73).double(message.RequestedAmount);
        if (message.LeftAmount != null && Object.hasOwnProperty.call(message, "LeftAmount"))
            writer.uint32(/* id 10, wireType 1 =*/81).double(message.LeftAmount);
        if (message.FilledAmount != null && Object.hasOwnProperty.call(message, "FilledAmount"))
            writer.uint32(/* id 11, wireType 1 =*/89).double(message.FilledAmount);
        if (message.BaseCurrency != null && Object.hasOwnProperty.call(message, "BaseCurrency"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.BaseCurrency);
        if (message.RequestedPrice != null && Object.hasOwnProperty.call(message, "RequestedPrice"))
            writer.uint32(/* id 13, wireType 1 =*/105).double(message.RequestedPrice);
        if (message.FilledPrice != null && Object.hasOwnProperty.call(message, "FilledPrice"))
            writer.uint32(/* id 14, wireType 1 =*/113).double(message.FilledPrice);
        if (message.CreatedDate != null && Object.hasOwnProperty.call(message, "CreatedDate"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.CreatedDate);
        if (message.ValueDate != null && Object.hasOwnProperty.call(message, "ValueDate"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.ValueDate);
        if (message.UpdateDate != null && Object.hasOwnProperty.call(message, "UpdateDate"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.UpdateDate);
        return writer;
    };

    /**
     * Encodes the specified SpotOrder message, length delimited. Does not implicitly {@link SpotOrder.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SpotOrder
     * @static
     * @param {ISpotOrder} message SpotOrder message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotOrder.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SpotOrder message from the specified reader or buffer.
     * @function decode
     * @memberof SpotOrder
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SpotOrder} SpotOrder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotOrder.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SpotOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.OrderId = reader.string();
                break;
            case 2:
                message.State = reader.int32();
                break;
            case 3:
                message.FillPercent = reader.double();
                break;
            case 4:
                message.SpotType = reader.int32();
                break;
            case 5:
                message.Symbol = reader.string();
                break;
            case 6:
                message.Side = reader.int32();
                break;
            case 7:
                message.CreatedBy = reader.string();
                break;
            case 8:
                message.ClientId = reader.int32();
                break;
            case 9:
                message.RequestedAmount = reader.double();
                break;
            case 10:
                message.LeftAmount = reader.double();
                break;
            case 11:
                message.FilledAmount = reader.double();
                break;
            case 12:
                message.BaseCurrency = reader.string();
                break;
            case 13:
                message.RequestedPrice = reader.double();
                break;
            case 14:
                message.FilledPrice = reader.double();
                break;
            case 15:
                message.CreatedDate = reader.string();
                break;
            case 16:
                message.ValueDate = reader.string();
                break;
            case 17:
                message.UpdateDate = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SpotOrder message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SpotOrder
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SpotOrder} SpotOrder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotOrder.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SpotOrder message.
     * @function verify
     * @memberof SpotOrder
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SpotOrder.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.OrderId != null && message.hasOwnProperty("OrderId"))
            if (!$util.isString(message.OrderId))
                return "OrderId: string expected";
        if (message.State != null && message.hasOwnProperty("State"))
            switch (message.State) {
            default:
                return "State: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        if (message.FillPercent != null && message.hasOwnProperty("FillPercent"))
            if (typeof message.FillPercent !== "number")
                return "FillPercent: number expected";
        if (message.SpotType != null && message.hasOwnProperty("SpotType"))
            switch (message.SpotType) {
            default:
                return "SpotType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.Symbol != null && message.hasOwnProperty("Symbol"))
            if (!$util.isString(message.Symbol))
                return "Symbol: string expected";
        if (message.Side != null && message.hasOwnProperty("Side"))
            switch (message.Side) {
            default:
                return "Side: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.CreatedBy != null && message.hasOwnProperty("CreatedBy"))
            if (!$util.isString(message.CreatedBy))
                return "CreatedBy: string expected";
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            if (!$util.isInteger(message.ClientId))
                return "ClientId: integer expected";
        if (message.RequestedAmount != null && message.hasOwnProperty("RequestedAmount"))
            if (typeof message.RequestedAmount !== "number")
                return "RequestedAmount: number expected";
        if (message.LeftAmount != null && message.hasOwnProperty("LeftAmount"))
            if (typeof message.LeftAmount !== "number")
                return "LeftAmount: number expected";
        if (message.FilledAmount != null && message.hasOwnProperty("FilledAmount"))
            if (typeof message.FilledAmount !== "number")
                return "FilledAmount: number expected";
        if (message.BaseCurrency != null && message.hasOwnProperty("BaseCurrency"))
            if (!$util.isString(message.BaseCurrency))
                return "BaseCurrency: string expected";
        if (message.RequestedPrice != null && message.hasOwnProperty("RequestedPrice"))
            if (typeof message.RequestedPrice !== "number")
                return "RequestedPrice: number expected";
        if (message.FilledPrice != null && message.hasOwnProperty("FilledPrice"))
            if (typeof message.FilledPrice !== "number")
                return "FilledPrice: number expected";
        if (message.CreatedDate != null && message.hasOwnProperty("CreatedDate"))
            if (!$util.isString(message.CreatedDate))
                return "CreatedDate: string expected";
        if (message.ValueDate != null && message.hasOwnProperty("ValueDate"))
            if (!$util.isString(message.ValueDate))
                return "ValueDate: string expected";
        if (message.UpdateDate != null && message.hasOwnProperty("UpdateDate"))
            if (!$util.isString(message.UpdateDate))
                return "UpdateDate: string expected";
        return null;
    };

    /**
     * Creates a SpotOrder message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SpotOrder
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SpotOrder} SpotOrder
     */
    SpotOrder.fromObject = function fromObject(object) {
        if (object instanceof $root.SpotOrder)
            return object;
        var message = new $root.SpotOrder();
        if (object.OrderId != null)
            message.OrderId = String(object.OrderId);
        switch (object.State) {
        case "SPOTORDERSTATE_EXECUTING":
        case 0:
            message.State = 0;
            break;
        case "SPOTORDERSTATE_FILLED":
        case 1:
            message.State = 1;
            break;
        case "SPOTORDERSTATE_PARTIALLYFILLED":
        case 2:
            message.State = 2;
            break;
        case "SPOTORDERSTATE_CANCELLED":
        case 3:
            message.State = 3;
            break;
        case "SPOTORDERSTATE_REJECTED":
        case 4:
            message.State = 4;
            break;
        case "SPOTORDERSTATE_SUSPENDED":
        case 5:
            message.State = 5;
            break;
        }
        if (object.FillPercent != null)
            message.FillPercent = Number(object.FillPercent);
        switch (object.SpotType) {
        case "SPOTTYPE_MARKET":
        case 0:
            message.SpotType = 0;
            break;
        case "SPOTTYPE_FULL":
        case 1:
            message.SpotType = 1;
            break;
        case "SPOTTYPE_STOP":
        case 2:
            message.SpotType = 2;
            break;
        case "SPOTTYPE_GTC":
        case 3:
            message.SpotType = 3;
            break;
        case "SPOTTYPE_IOC":
        case 4:
            message.SpotType = 4;
            break;
        }
        if (object.Symbol != null)
            message.Symbol = String(object.Symbol);
        switch (object.Side) {
        case "TRADESIDE_SELL":
        case 0:
            message.Side = 0;
            break;
        case "TRADESIDE_BUY":
        case 1:
            message.Side = 1;
            break;
        }
        if (object.CreatedBy != null)
            message.CreatedBy = String(object.CreatedBy);
        if (object.ClientId != null)
            message.ClientId = object.ClientId | 0;
        if (object.RequestedAmount != null)
            message.RequestedAmount = Number(object.RequestedAmount);
        if (object.LeftAmount != null)
            message.LeftAmount = Number(object.LeftAmount);
        if (object.FilledAmount != null)
            message.FilledAmount = Number(object.FilledAmount);
        if (object.BaseCurrency != null)
            message.BaseCurrency = String(object.BaseCurrency);
        if (object.RequestedPrice != null)
            message.RequestedPrice = Number(object.RequestedPrice);
        if (object.FilledPrice != null)
            message.FilledPrice = Number(object.FilledPrice);
        if (object.CreatedDate != null)
            message.CreatedDate = String(object.CreatedDate);
        if (object.ValueDate != null)
            message.ValueDate = String(object.ValueDate);
        if (object.UpdateDate != null)
            message.UpdateDate = String(object.UpdateDate);
        return message;
    };

    /**
     * Creates a plain object from a SpotOrder message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SpotOrder
     * @static
     * @param {SpotOrder} message SpotOrder
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SpotOrder.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.OrderId = "";
            object.State = options.enums === String ? "SPOTORDERSTATE_EXECUTING" : 0;
            object.FillPercent = 0;
            object.SpotType = options.enums === String ? "SPOTTYPE_MARKET" : 0;
            object.Symbol = "";
            object.Side = options.enums === String ? "TRADESIDE_SELL" : 0;
            object.CreatedBy = "";
            object.ClientId = 0;
            object.RequestedAmount = 0;
            object.LeftAmount = 0;
            object.FilledAmount = 0;
            object.BaseCurrency = "";
            object.RequestedPrice = 0;
            object.FilledPrice = 0;
            object.CreatedDate = "";
            object.ValueDate = "";
            object.UpdateDate = "";
        }
        if (message.OrderId != null && message.hasOwnProperty("OrderId"))
            object.OrderId = message.OrderId;
        if (message.State != null && message.hasOwnProperty("State"))
            object.State = options.enums === String ? $root.SpotOrderState[message.State] : message.State;
        if (message.FillPercent != null && message.hasOwnProperty("FillPercent"))
            object.FillPercent = options.json && !isFinite(message.FillPercent) ? String(message.FillPercent) : message.FillPercent;
        if (message.SpotType != null && message.hasOwnProperty("SpotType"))
            object.SpotType = options.enums === String ? $root.SpotType[message.SpotType] : message.SpotType;
        if (message.Symbol != null && message.hasOwnProperty("Symbol"))
            object.Symbol = message.Symbol;
        if (message.Side != null && message.hasOwnProperty("Side"))
            object.Side = options.enums === String ? $root.TradeSide[message.Side] : message.Side;
        if (message.CreatedBy != null && message.hasOwnProperty("CreatedBy"))
            object.CreatedBy = message.CreatedBy;
        if (message.ClientId != null && message.hasOwnProperty("ClientId"))
            object.ClientId = message.ClientId;
        if (message.RequestedAmount != null && message.hasOwnProperty("RequestedAmount"))
            object.RequestedAmount = options.json && !isFinite(message.RequestedAmount) ? String(message.RequestedAmount) : message.RequestedAmount;
        if (message.LeftAmount != null && message.hasOwnProperty("LeftAmount"))
            object.LeftAmount = options.json && !isFinite(message.LeftAmount) ? String(message.LeftAmount) : message.LeftAmount;
        if (message.FilledAmount != null && message.hasOwnProperty("FilledAmount"))
            object.FilledAmount = options.json && !isFinite(message.FilledAmount) ? String(message.FilledAmount) : message.FilledAmount;
        if (message.BaseCurrency != null && message.hasOwnProperty("BaseCurrency"))
            object.BaseCurrency = message.BaseCurrency;
        if (message.RequestedPrice != null && message.hasOwnProperty("RequestedPrice"))
            object.RequestedPrice = options.json && !isFinite(message.RequestedPrice) ? String(message.RequestedPrice) : message.RequestedPrice;
        if (message.FilledPrice != null && message.hasOwnProperty("FilledPrice"))
            object.FilledPrice = options.json && !isFinite(message.FilledPrice) ? String(message.FilledPrice) : message.FilledPrice;
        if (message.CreatedDate != null && message.hasOwnProperty("CreatedDate"))
            object.CreatedDate = message.CreatedDate;
        if (message.ValueDate != null && message.hasOwnProperty("ValueDate"))
            object.ValueDate = message.ValueDate;
        if (message.UpdateDate != null && message.hasOwnProperty("UpdateDate"))
            object.UpdateDate = message.UpdateDate;
        return object;
    };

    /**
     * Converts this SpotOrder to JSON.
     * @function toJSON
     * @memberof SpotOrder
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SpotOrder.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SpotOrder;
})();

$root.SpotOrdersResponse = (function() {

    /**
     * Properties of a SpotOrdersResponse.
     * @exports ISpotOrdersResponse
     * @interface ISpotOrdersResponse
     * @property {Array.<ISpotOrder>|null} [Orders] SpotOrdersResponse Orders
     */

    /**
     * Constructs a new SpotOrdersResponse.
     * @exports SpotOrdersResponse
     * @classdesc Represents a SpotOrdersResponse.
     * @implements ISpotOrdersResponse
     * @constructor
     * @param {ISpotOrdersResponse=} [properties] Properties to set
     */
    function SpotOrdersResponse(properties) {
        this.Orders = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SpotOrdersResponse Orders.
     * @member {Array.<ISpotOrder>} Orders
     * @memberof SpotOrdersResponse
     * @instance
     */
    SpotOrdersResponse.prototype.Orders = $util.emptyArray;

    /**
     * Creates a new SpotOrdersResponse instance using the specified properties.
     * @function create
     * @memberof SpotOrdersResponse
     * @static
     * @param {ISpotOrdersResponse=} [properties] Properties to set
     * @returns {SpotOrdersResponse} SpotOrdersResponse instance
     */
    SpotOrdersResponse.create = function create(properties) {
        return new SpotOrdersResponse(properties);
    };

    /**
     * Encodes the specified SpotOrdersResponse message. Does not implicitly {@link SpotOrdersResponse.verify|verify} messages.
     * @function encode
     * @memberof SpotOrdersResponse
     * @static
     * @param {ISpotOrdersResponse} message SpotOrdersResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotOrdersResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Orders != null && message.Orders.length)
            for (var i = 0; i < message.Orders.length; ++i)
                $root.SpotOrder.encode(message.Orders[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SpotOrdersResponse message, length delimited. Does not implicitly {@link SpotOrdersResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SpotOrdersResponse
     * @static
     * @param {ISpotOrdersResponse} message SpotOrdersResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotOrdersResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SpotOrdersResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SpotOrdersResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SpotOrdersResponse} SpotOrdersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotOrdersResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SpotOrdersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Orders && message.Orders.length))
                    message.Orders = [];
                message.Orders.push($root.SpotOrder.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SpotOrdersResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SpotOrdersResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SpotOrdersResponse} SpotOrdersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotOrdersResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SpotOrdersResponse message.
     * @function verify
     * @memberof SpotOrdersResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SpotOrdersResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Orders != null && message.hasOwnProperty("Orders")) {
            if (!Array.isArray(message.Orders))
                return "Orders: array expected";
            for (var i = 0; i < message.Orders.length; ++i) {
                var error = $root.SpotOrder.verify(message.Orders[i]);
                if (error)
                    return "Orders." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SpotOrdersResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SpotOrdersResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SpotOrdersResponse} SpotOrdersResponse
     */
    SpotOrdersResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SpotOrdersResponse)
            return object;
        var message = new $root.SpotOrdersResponse();
        if (object.Orders) {
            if (!Array.isArray(object.Orders))
                throw TypeError(".SpotOrdersResponse.Orders: array expected");
            message.Orders = [];
            for (var i = 0; i < object.Orders.length; ++i) {
                if (typeof object.Orders[i] !== "object")
                    throw TypeError(".SpotOrdersResponse.Orders: object expected");
                message.Orders[i] = $root.SpotOrder.fromObject(object.Orders[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SpotOrdersResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SpotOrdersResponse
     * @static
     * @param {SpotOrdersResponse} message SpotOrdersResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SpotOrdersResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Orders = [];
        if (message.Orders && message.Orders.length) {
            object.Orders = [];
            for (var j = 0; j < message.Orders.length; ++j)
                object.Orders[j] = $root.SpotOrder.toObject(message.Orders[j], options);
        }
        return object;
    };

    /**
     * Converts this SpotOrdersResponse to JSON.
     * @function toJSON
     * @memberof SpotOrdersResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SpotOrdersResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SpotOrdersResponse;
})();

$root.SpotQuoteRequest = (function() {

    /**
     * Properties of a SpotQuoteRequest.
     * @exports ISpotQuoteRequest
     * @interface ISpotQuoteRequest
     * @property {number|null} [clientId] SpotQuoteRequest clientId
     * @property {number|null} [quantity] SpotQuoteRequest quantity
     * @property {string|null} [instrument] SpotQuoteRequest instrument
     * @property {string|null} [baseCurrency] SpotQuoteRequest baseCurrency
     * @property {SpotType|null} [SpotType] SpotQuoteRequest SpotType
     */

    /**
     * Constructs a new SpotQuoteRequest.
     * @exports SpotQuoteRequest
     * @classdesc Represents a SpotQuoteRequest.
     * @implements ISpotQuoteRequest
     * @constructor
     * @param {ISpotQuoteRequest=} [properties] Properties to set
     */
    function SpotQuoteRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SpotQuoteRequest clientId.
     * @member {number} clientId
     * @memberof SpotQuoteRequest
     * @instance
     */
    SpotQuoteRequest.prototype.clientId = 0;

    /**
     * SpotQuoteRequest quantity.
     * @member {number} quantity
     * @memberof SpotQuoteRequest
     * @instance
     */
    SpotQuoteRequest.prototype.quantity = 0;

    /**
     * SpotQuoteRequest instrument.
     * @member {string} instrument
     * @memberof SpotQuoteRequest
     * @instance
     */
    SpotQuoteRequest.prototype.instrument = "";

    /**
     * SpotQuoteRequest baseCurrency.
     * @member {string} baseCurrency
     * @memberof SpotQuoteRequest
     * @instance
     */
    SpotQuoteRequest.prototype.baseCurrency = "";

    /**
     * SpotQuoteRequest SpotType.
     * @member {SpotType} SpotType
     * @memberof SpotQuoteRequest
     * @instance
     */
    SpotQuoteRequest.prototype.SpotType = 0;

    /**
     * Creates a new SpotQuoteRequest instance using the specified properties.
     * @function create
     * @memberof SpotQuoteRequest
     * @static
     * @param {ISpotQuoteRequest=} [properties] Properties to set
     * @returns {SpotQuoteRequest} SpotQuoteRequest instance
     */
    SpotQuoteRequest.create = function create(properties) {
        return new SpotQuoteRequest(properties);
    };

    /**
     * Encodes the specified SpotQuoteRequest message. Does not implicitly {@link SpotQuoteRequest.verify|verify} messages.
     * @function encode
     * @memberof SpotQuoteRequest
     * @static
     * @param {ISpotQuoteRequest} message SpotQuoteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotQuoteRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientId);
        if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.quantity);
        if (message.instrument != null && Object.hasOwnProperty.call(message, "instrument"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.instrument);
        if (message.baseCurrency != null && Object.hasOwnProperty.call(message, "baseCurrency"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.baseCurrency);
        if (message.SpotType != null && Object.hasOwnProperty.call(message, "SpotType"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.SpotType);
        return writer;
    };

    /**
     * Encodes the specified SpotQuoteRequest message, length delimited. Does not implicitly {@link SpotQuoteRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SpotQuoteRequest
     * @static
     * @param {ISpotQuoteRequest} message SpotQuoteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotQuoteRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SpotQuoteRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SpotQuoteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SpotQuoteRequest} SpotQuoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotQuoteRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SpotQuoteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.clientId = reader.int32();
                break;
            case 2:
                message.quantity = reader.double();
                break;
            case 3:
                message.instrument = reader.string();
                break;
            case 4:
                message.baseCurrency = reader.string();
                break;
            case 5:
                message.SpotType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SpotQuoteRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SpotQuoteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SpotQuoteRequest} SpotQuoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotQuoteRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SpotQuoteRequest message.
     * @function verify
     * @memberof SpotQuoteRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SpotQuoteRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            if (!$util.isInteger(message.clientId))
                return "clientId: integer expected";
        if (message.quantity != null && message.hasOwnProperty("quantity"))
            if (typeof message.quantity !== "number")
                return "quantity: number expected";
        if (message.instrument != null && message.hasOwnProperty("instrument"))
            if (!$util.isString(message.instrument))
                return "instrument: string expected";
        if (message.baseCurrency != null && message.hasOwnProperty("baseCurrency"))
            if (!$util.isString(message.baseCurrency))
                return "baseCurrency: string expected";
        if (message.SpotType != null && message.hasOwnProperty("SpotType"))
            switch (message.SpotType) {
            default:
                return "SpotType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        return null;
    };

    /**
     * Creates a SpotQuoteRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SpotQuoteRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SpotQuoteRequest} SpotQuoteRequest
     */
    SpotQuoteRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SpotQuoteRequest)
            return object;
        var message = new $root.SpotQuoteRequest();
        if (object.clientId != null)
            message.clientId = object.clientId | 0;
        if (object.quantity != null)
            message.quantity = Number(object.quantity);
        if (object.instrument != null)
            message.instrument = String(object.instrument);
        if (object.baseCurrency != null)
            message.baseCurrency = String(object.baseCurrency);
        switch (object.SpotType) {
        case "SPOTTYPE_MARKET":
        case 0:
            message.SpotType = 0;
            break;
        case "SPOTTYPE_FULL":
        case 1:
            message.SpotType = 1;
            break;
        case "SPOTTYPE_STOP":
        case 2:
            message.SpotType = 2;
            break;
        case "SPOTTYPE_GTC":
        case 3:
            message.SpotType = 3;
            break;
        case "SPOTTYPE_IOC":
        case 4:
            message.SpotType = 4;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SpotQuoteRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SpotQuoteRequest
     * @static
     * @param {SpotQuoteRequest} message SpotQuoteRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SpotQuoteRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.clientId = 0;
            object.quantity = 0;
            object.instrument = "";
            object.baseCurrency = "";
            object.SpotType = options.enums === String ? "SPOTTYPE_MARKET" : 0;
        }
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            object.clientId = message.clientId;
        if (message.quantity != null && message.hasOwnProperty("quantity"))
            object.quantity = options.json && !isFinite(message.quantity) ? String(message.quantity) : message.quantity;
        if (message.instrument != null && message.hasOwnProperty("instrument"))
            object.instrument = message.instrument;
        if (message.baseCurrency != null && message.hasOwnProperty("baseCurrency"))
            object.baseCurrency = message.baseCurrency;
        if (message.SpotType != null && message.hasOwnProperty("SpotType"))
            object.SpotType = options.enums === String ? $root.SpotType[message.SpotType] : message.SpotType;
        return object;
    };

    /**
     * Converts this SpotQuoteRequest to JSON.
     * @function toJSON
     * @memberof SpotQuoteRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SpotQuoteRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SpotQuoteRequest;
})();

$root.SpotQuoteResponse = (function() {

    /**
     * Properties of a SpotQuoteResponse.
     * @exports ISpotQuoteResponse
     * @interface ISpotQuoteResponse
     * @property {number|null} [askPrice] SpotQuoteResponse askPrice
     * @property {number|null} [askTobAmount] SpotQuoteResponse askTobAmount
     * @property {number|null} [bidPrice] SpotQuoteResponse bidPrice
     * @property {number|null} [bidTobAmount] SpotQuoteResponse bidTobAmount
     */

    /**
     * Constructs a new SpotQuoteResponse.
     * @exports SpotQuoteResponse
     * @classdesc Represents a SpotQuoteResponse.
     * @implements ISpotQuoteResponse
     * @constructor
     * @param {ISpotQuoteResponse=} [properties] Properties to set
     */
    function SpotQuoteResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SpotQuoteResponse askPrice.
     * @member {number} askPrice
     * @memberof SpotQuoteResponse
     * @instance
     */
    SpotQuoteResponse.prototype.askPrice = 0;

    /**
     * SpotQuoteResponse askTobAmount.
     * @member {number} askTobAmount
     * @memberof SpotQuoteResponse
     * @instance
     */
    SpotQuoteResponse.prototype.askTobAmount = 0;

    /**
     * SpotQuoteResponse bidPrice.
     * @member {number} bidPrice
     * @memberof SpotQuoteResponse
     * @instance
     */
    SpotQuoteResponse.prototype.bidPrice = 0;

    /**
     * SpotQuoteResponse bidTobAmount.
     * @member {number} bidTobAmount
     * @memberof SpotQuoteResponse
     * @instance
     */
    SpotQuoteResponse.prototype.bidTobAmount = 0;

    /**
     * Creates a new SpotQuoteResponse instance using the specified properties.
     * @function create
     * @memberof SpotQuoteResponse
     * @static
     * @param {ISpotQuoteResponse=} [properties] Properties to set
     * @returns {SpotQuoteResponse} SpotQuoteResponse instance
     */
    SpotQuoteResponse.create = function create(properties) {
        return new SpotQuoteResponse(properties);
    };

    /**
     * Encodes the specified SpotQuoteResponse message. Does not implicitly {@link SpotQuoteResponse.verify|verify} messages.
     * @function encode
     * @memberof SpotQuoteResponse
     * @static
     * @param {ISpotQuoteResponse} message SpotQuoteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotQuoteResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.askPrice != null && Object.hasOwnProperty.call(message, "askPrice"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.askPrice);
        if (message.askTobAmount != null && Object.hasOwnProperty.call(message, "askTobAmount"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.askTobAmount);
        if (message.bidPrice != null && Object.hasOwnProperty.call(message, "bidPrice"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.bidPrice);
        if (message.bidTobAmount != null && Object.hasOwnProperty.call(message, "bidTobAmount"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.bidTobAmount);
        return writer;
    };

    /**
     * Encodes the specified SpotQuoteResponse message, length delimited. Does not implicitly {@link SpotQuoteResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SpotQuoteResponse
     * @static
     * @param {ISpotQuoteResponse} message SpotQuoteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpotQuoteResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SpotQuoteResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SpotQuoteResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SpotQuoteResponse} SpotQuoteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotQuoteResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SpotQuoteResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.askPrice = reader.float();
                break;
            case 2:
                message.askTobAmount = reader.double();
                break;
            case 3:
                message.bidPrice = reader.float();
                break;
            case 4:
                message.bidTobAmount = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SpotQuoteResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SpotQuoteResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SpotQuoteResponse} SpotQuoteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpotQuoteResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SpotQuoteResponse message.
     * @function verify
     * @memberof SpotQuoteResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SpotQuoteResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.askPrice != null && message.hasOwnProperty("askPrice"))
            if (typeof message.askPrice !== "number")
                return "askPrice: number expected";
        if (message.askTobAmount != null && message.hasOwnProperty("askTobAmount"))
            if (typeof message.askTobAmount !== "number")
                return "askTobAmount: number expected";
        if (message.bidPrice != null && message.hasOwnProperty("bidPrice"))
            if (typeof message.bidPrice !== "number")
                return "bidPrice: number expected";
        if (message.bidTobAmount != null && message.hasOwnProperty("bidTobAmount"))
            if (typeof message.bidTobAmount !== "number")
                return "bidTobAmount: number expected";
        return null;
    };

    /**
     * Creates a SpotQuoteResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SpotQuoteResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SpotQuoteResponse} SpotQuoteResponse
     */
    SpotQuoteResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SpotQuoteResponse)
            return object;
        var message = new $root.SpotQuoteResponse();
        if (object.askPrice != null)
            message.askPrice = Number(object.askPrice);
        if (object.askTobAmount != null)
            message.askTobAmount = Number(object.askTobAmount);
        if (object.bidPrice != null)
            message.bidPrice = Number(object.bidPrice);
        if (object.bidTobAmount != null)
            message.bidTobAmount = Number(object.bidTobAmount);
        return message;
    };

    /**
     * Creates a plain object from a SpotQuoteResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SpotQuoteResponse
     * @static
     * @param {SpotQuoteResponse} message SpotQuoteResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SpotQuoteResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.askPrice = 0;
            object.askTobAmount = 0;
            object.bidPrice = 0;
            object.bidTobAmount = 0;
        }
        if (message.askPrice != null && message.hasOwnProperty("askPrice"))
            object.askPrice = options.json && !isFinite(message.askPrice) ? String(message.askPrice) : message.askPrice;
        if (message.askTobAmount != null && message.hasOwnProperty("askTobAmount"))
            object.askTobAmount = options.json && !isFinite(message.askTobAmount) ? String(message.askTobAmount) : message.askTobAmount;
        if (message.bidPrice != null && message.hasOwnProperty("bidPrice"))
            object.bidPrice = options.json && !isFinite(message.bidPrice) ? String(message.bidPrice) : message.bidPrice;
        if (message.bidTobAmount != null && message.hasOwnProperty("bidTobAmount"))
            object.bidTobAmount = options.json && !isFinite(message.bidTobAmount) ? String(message.bidTobAmount) : message.bidTobAmount;
        return object;
    };

    /**
     * Converts this SpotQuoteResponse to JSON.
     * @function toJSON
     * @memberof SpotQuoteResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SpotQuoteResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SpotQuoteResponse;
})();

$root.TenorResolveRequest = (function() {

    /**
     * Properties of a TenorResolveRequest.
     * @exports ITenorResolveRequest
     * @interface ITenorResolveRequest
     * @property {Array.<ITenor>|null} [Tenors] TenorResolveRequest Tenors
     */

    /**
     * Constructs a new TenorResolveRequest.
     * @exports TenorResolveRequest
     * @classdesc Represents a TenorResolveRequest.
     * @implements ITenorResolveRequest
     * @constructor
     * @param {ITenorResolveRequest=} [properties] Properties to set
     */
    function TenorResolveRequest(properties) {
        this.Tenors = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TenorResolveRequest Tenors.
     * @member {Array.<ITenor>} Tenors
     * @memberof TenorResolveRequest
     * @instance
     */
    TenorResolveRequest.prototype.Tenors = $util.emptyArray;

    /**
     * Creates a new TenorResolveRequest instance using the specified properties.
     * @function create
     * @memberof TenorResolveRequest
     * @static
     * @param {ITenorResolveRequest=} [properties] Properties to set
     * @returns {TenorResolveRequest} TenorResolveRequest instance
     */
    TenorResolveRequest.create = function create(properties) {
        return new TenorResolveRequest(properties);
    };

    /**
     * Encodes the specified TenorResolveRequest message. Does not implicitly {@link TenorResolveRequest.verify|verify} messages.
     * @function encode
     * @memberof TenorResolveRequest
     * @static
     * @param {ITenorResolveRequest} message TenorResolveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TenorResolveRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Tenors != null && message.Tenors.length)
            for (var i = 0; i < message.Tenors.length; ++i)
                $root.Tenor.encode(message.Tenors[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TenorResolveRequest message, length delimited. Does not implicitly {@link TenorResolveRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TenorResolveRequest
     * @static
     * @param {ITenorResolveRequest} message TenorResolveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TenorResolveRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TenorResolveRequest message from the specified reader or buffer.
     * @function decode
     * @memberof TenorResolveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TenorResolveRequest} TenorResolveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TenorResolveRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TenorResolveRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Tenors && message.Tenors.length))
                    message.Tenors = [];
                message.Tenors.push($root.Tenor.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TenorResolveRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TenorResolveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TenorResolveRequest} TenorResolveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TenorResolveRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TenorResolveRequest message.
     * @function verify
     * @memberof TenorResolveRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TenorResolveRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Tenors != null && message.hasOwnProperty("Tenors")) {
            if (!Array.isArray(message.Tenors))
                return "Tenors: array expected";
            for (var i = 0; i < message.Tenors.length; ++i) {
                var error = $root.Tenor.verify(message.Tenors[i]);
                if (error)
                    return "Tenors." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TenorResolveRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TenorResolveRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TenorResolveRequest} TenorResolveRequest
     */
    TenorResolveRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.TenorResolveRequest)
            return object;
        var message = new $root.TenorResolveRequest();
        if (object.Tenors) {
            if (!Array.isArray(object.Tenors))
                throw TypeError(".TenorResolveRequest.Tenors: array expected");
            message.Tenors = [];
            for (var i = 0; i < object.Tenors.length; ++i) {
                if (typeof object.Tenors[i] !== "object")
                    throw TypeError(".TenorResolveRequest.Tenors: object expected");
                message.Tenors[i] = $root.Tenor.fromObject(object.Tenors[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TenorResolveRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TenorResolveRequest
     * @static
     * @param {TenorResolveRequest} message TenorResolveRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TenorResolveRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Tenors = [];
        if (message.Tenors && message.Tenors.length) {
            object.Tenors = [];
            for (var j = 0; j < message.Tenors.length; ++j)
                object.Tenors[j] = $root.Tenor.toObject(message.Tenors[j], options);
        }
        return object;
    };

    /**
     * Converts this TenorResolveRequest to JSON.
     * @function toJSON
     * @memberof TenorResolveRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TenorResolveRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TenorResolveRequest;
})();

$root.TenorResolveResponse = (function() {

    /**
     * Properties of a TenorResolveResponse.
     * @exports ITenorResolveResponse
     * @interface ITenorResolveResponse
     * @property {Array.<ITenor>|null} [Tenors] TenorResolveResponse Tenors
     */

    /**
     * Constructs a new TenorResolveResponse.
     * @exports TenorResolveResponse
     * @classdesc Represents a TenorResolveResponse.
     * @implements ITenorResolveResponse
     * @constructor
     * @param {ITenorResolveResponse=} [properties] Properties to set
     */
    function TenorResolveResponse(properties) {
        this.Tenors = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TenorResolveResponse Tenors.
     * @member {Array.<ITenor>} Tenors
     * @memberof TenorResolveResponse
     * @instance
     */
    TenorResolveResponse.prototype.Tenors = $util.emptyArray;

    /**
     * Creates a new TenorResolveResponse instance using the specified properties.
     * @function create
     * @memberof TenorResolveResponse
     * @static
     * @param {ITenorResolveResponse=} [properties] Properties to set
     * @returns {TenorResolveResponse} TenorResolveResponse instance
     */
    TenorResolveResponse.create = function create(properties) {
        return new TenorResolveResponse(properties);
    };

    /**
     * Encodes the specified TenorResolveResponse message. Does not implicitly {@link TenorResolveResponse.verify|verify} messages.
     * @function encode
     * @memberof TenorResolveResponse
     * @static
     * @param {ITenorResolveResponse} message TenorResolveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TenorResolveResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Tenors != null && message.Tenors.length)
            for (var i = 0; i < message.Tenors.length; ++i)
                $root.Tenor.encode(message.Tenors[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TenorResolveResponse message, length delimited. Does not implicitly {@link TenorResolveResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TenorResolveResponse
     * @static
     * @param {ITenorResolveResponse} message TenorResolveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TenorResolveResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TenorResolveResponse message from the specified reader or buffer.
     * @function decode
     * @memberof TenorResolveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TenorResolveResponse} TenorResolveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TenorResolveResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TenorResolveResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Tenors && message.Tenors.length))
                    message.Tenors = [];
                message.Tenors.push($root.Tenor.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TenorResolveResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TenorResolveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TenorResolveResponse} TenorResolveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TenorResolveResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TenorResolveResponse message.
     * @function verify
     * @memberof TenorResolveResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TenorResolveResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Tenors != null && message.hasOwnProperty("Tenors")) {
            if (!Array.isArray(message.Tenors))
                return "Tenors: array expected";
            for (var i = 0; i < message.Tenors.length; ++i) {
                var error = $root.Tenor.verify(message.Tenors[i]);
                if (error)
                    return "Tenors." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TenorResolveResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TenorResolveResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TenorResolveResponse} TenorResolveResponse
     */
    TenorResolveResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.TenorResolveResponse)
            return object;
        var message = new $root.TenorResolveResponse();
        if (object.Tenors) {
            if (!Array.isArray(object.Tenors))
                throw TypeError(".TenorResolveResponse.Tenors: array expected");
            message.Tenors = [];
            for (var i = 0; i < object.Tenors.length; ++i) {
                if (typeof object.Tenors[i] !== "object")
                    throw TypeError(".TenorResolveResponse.Tenors: object expected");
                message.Tenors[i] = $root.Tenor.fromObject(object.Tenors[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TenorResolveResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TenorResolveResponse
     * @static
     * @param {TenorResolveResponse} message TenorResolveResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TenorResolveResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Tenors = [];
        if (message.Tenors && message.Tenors.length) {
            object.Tenors = [];
            for (var j = 0; j < message.Tenors.length; ++j)
                object.Tenors[j] = $root.Tenor.toObject(message.Tenors[j], options);
        }
        return object;
    };

    /**
     * Converts this TenorResolveResponse to JSON.
     * @function toJSON
     * @memberof TenorResolveResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TenorResolveResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TenorResolveResponse;
})();

$root.Tenor = (function() {

    /**
     * Properties of a Tenor.
     * @exports ITenor
     * @interface ITenor
     * @property {string|null} [Instrument] Tenor Instrument
     * @property {string|null} [Tenor] Tenor Tenor
     * @property {string|null} [Date] Tenor Date
     */

    /**
     * Constructs a new Tenor.
     * @exports Tenor
     * @classdesc Represents a Tenor.
     * @implements ITenor
     * @constructor
     * @param {ITenor=} [properties] Properties to set
     */
    function Tenor(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Tenor Instrument.
     * @member {string} Instrument
     * @memberof Tenor
     * @instance
     */
    Tenor.prototype.Instrument = "";

    /**
     * Tenor Tenor.
     * @member {string} Tenor
     * @memberof Tenor
     * @instance
     */
    Tenor.prototype.Tenor = "";

    /**
     * Tenor Date.
     * @member {string} Date
     * @memberof Tenor
     * @instance
     */
    Tenor.prototype.Date = "";

    /**
     * Creates a new Tenor instance using the specified properties.
     * @function create
     * @memberof Tenor
     * @static
     * @param {ITenor=} [properties] Properties to set
     * @returns {Tenor} Tenor instance
     */
    Tenor.create = function create(properties) {
        return new Tenor(properties);
    };

    /**
     * Encodes the specified Tenor message. Does not implicitly {@link Tenor.verify|verify} messages.
     * @function encode
     * @memberof Tenor
     * @static
     * @param {ITenor} message Tenor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Tenor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Instrument != null && Object.hasOwnProperty.call(message, "Instrument"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Instrument);
        if (message.Tenor != null && Object.hasOwnProperty.call(message, "Tenor"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Tenor);
        if (message.Date != null && Object.hasOwnProperty.call(message, "Date"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Date);
        return writer;
    };

    /**
     * Encodes the specified Tenor message, length delimited. Does not implicitly {@link Tenor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Tenor
     * @static
     * @param {ITenor} message Tenor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Tenor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Tenor message from the specified reader or buffer.
     * @function decode
     * @memberof Tenor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Tenor} Tenor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Tenor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Tenor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Instrument = reader.string();
                break;
            case 2:
                message.Tenor = reader.string();
                break;
            case 3:
                message.Date = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Tenor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Tenor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Tenor} Tenor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Tenor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Tenor message.
     * @function verify
     * @memberof Tenor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Tenor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Instrument != null && message.hasOwnProperty("Instrument"))
            if (!$util.isString(message.Instrument))
                return "Instrument: string expected";
        if (message.Tenor != null && message.hasOwnProperty("Tenor"))
            if (!$util.isString(message.Tenor))
                return "Tenor: string expected";
        if (message.Date != null && message.hasOwnProperty("Date"))
            if (!$util.isString(message.Date))
                return "Date: string expected";
        return null;
    };

    /**
     * Creates a Tenor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Tenor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Tenor} Tenor
     */
    Tenor.fromObject = function fromObject(object) {
        if (object instanceof $root.Tenor)
            return object;
        var message = new $root.Tenor();
        if (object.Instrument != null)
            message.Instrument = String(object.Instrument);
        if (object.Tenor != null)
            message.Tenor = String(object.Tenor);
        if (object.Date != null)
            message.Date = String(object.Date);
        return message;
    };

    /**
     * Creates a plain object from a Tenor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Tenor
     * @static
     * @param {Tenor} message Tenor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Tenor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Instrument = "";
            object.Tenor = "";
            object.Date = "";
        }
        if (message.Instrument != null && message.hasOwnProperty("Instrument"))
            object.Instrument = message.Instrument;
        if (message.Tenor != null && message.hasOwnProperty("Tenor"))
            object.Tenor = message.Tenor;
        if (message.Date != null && message.hasOwnProperty("Date"))
            object.Date = message.Date;
        return object;
    };

    /**
     * Converts this Tenor to JSON.
     * @function toJSON
     * @memberof Tenor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Tenor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Tenor;
})();

export { $root as default };
