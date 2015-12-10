# uglify-sandbox

## Setting

### install Uglify.js

`$ npm install -g uglify-js`

## Using By CLI

`uglifyjs -c -o ./app.min.js --source-map ./app.js.map ./app.js`

## Using By API

minify.js

```
//minify.js
var UglifyJS = require("uglify-js");
var result = UglifyJS.minify("./app.js", {
    outSourceMap: "app.js.map"
});
console.log(result.code);
console.log(result.map);
```

`node minify.js`

## Minify Result

```app.js
function sum(array) {
  var result = 0;
  for(var i in array) {
    result += array[i];
  }
  return result;
}
 
var array = new Array(1,2,3,4,5);
console.log("result=", sum(array));
```

```app.min.js
function sum(array){var result=0;for(var i in array)result+=array[i];return result}var array=new Array(1,2,3,4,5);console.log("result=",sum(array));
//# sourceMappingURL=./app.js.map
```
