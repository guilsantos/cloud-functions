"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloHttp = void 0;
var escapeHtml = require("escape-html");
exports.helloHttp = function (req, res) {
    var request = {
        body: req.body,
        query: req.query
    };
    console.log('req', request);
    res.send("Hello every body in the " + escapeHtml(req.query.name || req.body.name || 'World') + "!");
};
//# sourceMappingURL=index.js.map