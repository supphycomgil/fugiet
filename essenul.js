// Assuming legend.encode[part] is an object with potential `update` property
let _legend$encode$part$u, _legend$encode$part;
if ((_legend$encode$part = legend.encode[part]) !== null && _legend$encode$part !== undefined) {
    _legend$encode$part$u = _legend$encode$part.update;
} else {
    _legend$encode$part$u = {};
}
// _legend$encode$part$u now holds the desired object or an empty object if not found
