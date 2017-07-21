// Type definitions for jssip.js 3.0.13 
// Project: https://github.com/versatica/JsSIP
// Definitions by: seanchann.zhou <https://github.com/seanchann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.1


export class NameAddrHeader {
    constructor(uri: any, display_name: any, parameters: any);

    clearParams(): void;

    clone(): any;

    deleteParam(parameter: any): any;

    getParam(key: any): any;

    hasParam(key: any): any;

    setParam(key: any, value: any): void;

    toString(): any;

    //static parse(name_addr_header: any): any;
    static parse(name_addr_header: any): any;
}



export class UA {
    constructor(configuration: any);

    call(target: any, options: any): any;

    destroyTransaction(transaction: any): void;

    findDialog(call_id: any, from_tag: any, to_tag: any): any;

    findSession(request: any): any;

    get(parameter: any): any;

    isConnected(): any;

    isRegistered(): any;

    loadConfig(configuration: any): any;

    newMessage(data: any): void;

    newRTCSession(data: any): void;

    newTransaction(transaction: any): void;

    normalizeTarget(target: any): any;

    receiveRequest(request: any): void;

    register(): void;

    registered(data: any): void;

    registrationFailed(data: any): void;

    registrator(): any;

    sendMessage(target: any, body: any, options: any): any;

    set(parameter: any, value: any): any;

    start(): void;

    stop(): void;

    terminateSessions(options: any): void;

    unregister(options: any): void;

    unregistered(data: any): void;

    static C: {
        CONFIGURATION_ERROR: number;
        NETWORK_ERROR: number;
        STATUS_INIT: number;
        STATUS_NOT_READY: number;
        STATUS_READY: number;
        STATUS_USER_CLOSED: number;
    };

    static configuration_check: {
        mandatory: {
            uri: any;
        };
        optional: {
            authorization_user: any;
            connection_recovery_max_interval: any;
            connection_recovery_min_interval: any;
            contact_uri: any;
            display_name: any;
            ha1: any;
            instance_id: any;
            no_answer_timeout: any;
            password: any;
            realm: any;
            register: any;
            register_expires: any;
            registrar_server: any;
            session_timers: any;
            sockets: any;
            use_preloaded_route: any;
        };
    };

    static configuration_skeleton: {
        authorization_user: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        contact_uri: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        display_name: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        ha1: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        hostport_params: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        instance_id: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        jssip_id: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        no_answer_timeout: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        password: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        realm: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        register: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        register_expires: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        registrar_server: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        session_timers: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        sockets: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        uri: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        use_preloaded_route: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        via_core_value: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
        via_host: {
            configurable: boolean;
            value: string;
            writable: boolean;
        };
    };

}

export class URI {
    constructor(scheme: any, user: any, host: any, port: any, parameters: any, headers: any);

    clearHeaders(): void;

    clearParams(): void;

    clone(): any;

    deleteHeader(header: any): any;

    deleteParam(parameter: any): any;

    getHeader(name: any): any;

    getParam(key: any): any;

    hasHeader(name: any): any;

    hasParam(key: any): any;

    setHeader(name: any, value: any): void;

    setParam(key: any, value: any): void;

    toAor(show_port: any): any;

    toString(): any;

    static parse(uri: any): any;

}

export class WebSocketInterface {
    constructor(url: any);

    connect(): void;

    disconnect(): void;

    isConnected(): any;

    isConnecting(): any;

    send(message: any): any;

}

export const C: {
    ACCEPTED_BODY_TYPES: string;
    ACK: string;
    ALLOWED_METHODS: string;
    BYE: string;
    CANCEL: string;
    INFO: string;
    INVITE: string;
    MAX_FORWARDS: number;
    MESSAGE: string;
    MIN_SESSION_EXPIRES: number;
    NOTIFY: string;
    OPTIONS: string;
    REASON_PHRASE: {
        "100": string;
        "180": string;
        "181": string;
        "182": string;
        "183": string;
        "199": string;
        "200": string;
        "202": string;
        "204": string;
        "300": string;
        "301": string;
        "302": string;
        "305": string;
        "380": string;
        "400": string;
        "401": string;
        "402": string;
        "403": string;
        "404": string;
        "405": string;
        "406": string;
        "407": string;
        "408": string;
        "410": string;
        "412": string;
        "413": string;
        "414": string;
        "415": string;
        "416": string;
        "417": string;
        "420": string;
        "421": string;
        "422": string;
        "423": string;
        "424": string;
        "428": string;
        "429": string;
        "430": string;
        "433": string;
        "436": string;
        "437": string;
        "438": string;
        "439": string;
        "440": string;
        "469": string;
        "470": string;
        "478": string;
        "480": string;
        "481": string;
        "482": string;
        "483": string;
        "484": string;
        "485": string;
        "486": string;
        "487": string;
        "488": string;
        "489": string;
        "491": string;
        "493": string;
        "494": string;
        "500": string;
        "501": string;
        "502": string;
        "503": string;
        "504": string;
        "505": string;
        "513": string;
        "580": string;
        "600": string;
        "603": string;
        "604": string;
        "606": string;
    };
    REFER: string;
    REGISTER: string;
    SESSION_EXPIRES: number;
    SIP: string;
    SIPS: string;
    SIP_ERROR_CAUSES: {
        ADDRESS_INCOMPLETE: number[];
        AUTHENTICATION_ERROR: number[];
        BUSY: number[];
        INCOMPATIBLE_SDP: number[];
        NOT_FOUND: number[];
        REDIRECTED: number[];
        REJECTED: number[];
        UNAVAILABLE: number[];
    };
    SUBSCRIBE: string;
    UPDATE: string;
    USER_AGENT: string;
    causes: {
        ADDRESS_INCOMPLETE: string;
        AUTHENTICATION_ERROR: string;
        BAD_MEDIA_DESCRIPTION: string;
        BUSY: string;
        BYE: string;
        CANCELED: string;
        CONNECTION_ERROR: string;
        DIALOG_ERROR: string;
        EXPIRES: string;
        INCOMPATIBLE_SDP: string;
        INTERNAL_ERROR: string;
        MISSING_SDP: string;
        NOT_FOUND: string;
        NO_ACK: string;
        NO_ANSWER: string;
        REDIRECTED: string;
        REJECTED: string;
        REQUEST_TIMEOUT: string;
        RTP_TIMEOUT: string;
        SIP_FAILURE_CODE: string;
        UNAVAILABLE: string;
        USER_DENIED_MEDIA_ACCESS: string;
        WEBRTC_ERROR: string;
    };
};

export const name: string;

export const version: string;

export function debug(namespace: any, ...args: any[]): any;

export namespace Exceptions {
    function ConfigurationError(parameter: any, value: any): void;

    function InvalidStateError(status: any): void;

    function NotReadyError(message: any): void;

    function NotSupportedError(message: any): void;

    namespace ConfigurationError {
        namespace prototype {
            const message: string;

            const name: string;

            const stack: string;

            function toString(): any;

        }

    }

    namespace InvalidStateError {
        namespace prototype {
            const message: string;

            const name: string;

            const stack: string;

            function toString(): any;

        }

    }

    namespace NotReadyError {
        namespace prototype {
            const message: string;

            const name: string;

            const stack: string;

            function toString(): any;

        }

    }

    namespace NotSupportedError {
        namespace prototype {
            const message: string;

            const name: string;

            const stack: string;

            function toString(): any;

        }

    }

}

export namespace Grammar {
    class SyntaxError {
        constructor(expected: any, found: any, offset: any, line: any, column: any);

        // Native method; no parameter or return type inference available
        toString(): any;

    }

    function parse(input: any, startRule: any): any;

    function toSource(): any;

    // namespace SyntaxError {
    //     namespace prototype {
    //         const message: string;

    //         const name: string;

    //         function toString(): any;

    //     }

    // }

    namespace parse {
        const prototype: {
        };

    }

    namespace toSource {
        const prototype: {
        };

    }

}


export namespace Utils {
    function calculateMD5(string: any): any;

    function closeMediaStream(stream: any): void;

    function createRandomToken(size: any, base: any): any;

    function escapeUser(user: any): any;

    function getRandomTestNetIP(): any;

    function hasMethods(obj: any, ...args: any[]): any;

    function headerize(string: any): any;

    function hostType(host: any): any;

    function isDecimal(num: any): any;

    function isEmpty(value: any): any;

    function isFunction(fn: any): any;

    function isString(str: any): any;

    function newTag(): any;

    function newUUID(): any;

    function normalizeTarget(target: any, domain: any): any;

    function sipErrorCause(status_code: any): any;

    function str_utf8_length(string: any): any;

    namespace calculateMD5 {
        const prototype: {
        };

    }

    namespace closeMediaStream {
        const prototype: {
        };

    }

    namespace createRandomToken {
        const prototype: {
        };

    }

    namespace escapeUser {
        const prototype: {
        };

    }

    namespace getRandomTestNetIP {
        const prototype: {
        };

    }

    namespace hasMethods {
        const prototype: {
        };

    }

    namespace headerize {
        const prototype: {
        };

    }

    namespace hostType {
        const prototype: {
        };

    }

    namespace isDecimal {
        const prototype: {
        };

    }

    namespace isEmpty {
        const prototype: {
        };

    }

    namespace isFunction {
        const prototype: {
        };

    }

    namespace isString {
        const prototype: {
        };

    }

    namespace newTag {
        const prototype: {
        };

    }

    namespace newUUID {
        const prototype: {
        };

    }

    namespace normalizeTarget {
        const prototype: {
        };

    }

    namespace sipErrorCause {
        const prototype: {
        };

    }

    namespace str_utf8_length {
        const prototype: {
        };

    }

}


export namespace adapter {
    const browserDetails: {
        browser: string;
        version: any;
    };

    function disableLog(bool: any): any;

    function extractVersion(uastring: any, expr: any, pos: any): any;

    namespace disableLog {
        const prototype: {
        };

    }

    namespace extractVersion {
        const prototype: {
        };

    }

}

export namespace debug {
    const colors: number[];

    // Circular reference from jssip.debug
    const debug: any;

    // Circular reference from jssip.debug
    //const  default: any;

    const inspectOpts: {
    };

    const names: any[];

    const prototype: {
    };

    const skips: any[];

    function coerce(val: any): any;

    function disable(): void;

    function enable(namespaces: any): void;

    function enabled(name: any): any;

    function formatArgs(args: any): void;

    function humanize(val: any, options: any): any;

    function init(debug: any): void;

    function load(): any;

    function log(...args: any[]): any;

    function save(namespaces: any): void;

    function useColors(): any;

    namespace coerce {
        const prototype: {
        };

    }

    namespace disable {
        const prototype: {
        };

    }

    namespace enable {
        const prototype: {
        };

    }

    namespace enabled {
        const prototype: {
        };

    }

    namespace formatArgs {
        const prototype: {
        };

    }

    namespace formatters {
        function O(v: any): any;

        function o(v: any): any;

        namespace O {
            const prototype: {
            };

        }

        namespace o {
            const prototype: {
            };

        }

    }

    namespace humanize {
        const prototype: {
        };

    }

    namespace init {
        const prototype: {
        };

    }

    namespace load {
        const prototype: {
        };

    }

    namespace log {
        const prototype: {
        };

    }

    namespace save {
        const prototype: {
        };

    }

    namespace useColors {
        const prototype: {
        };

    }

}
