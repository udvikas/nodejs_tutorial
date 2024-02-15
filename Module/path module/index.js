const path = require("path");
const showBaseName = path.basename("/foo/bar/baz/asdf/quux.html");
const showDirName = path.dirname("/foo/bar/baz/asdf/quux.html");
const showExtName = path.extname("/foo/bar/baz/asdf/quux.html");
console.log(showBaseName);
console.log(showDirName);
console.log(showExtName);
