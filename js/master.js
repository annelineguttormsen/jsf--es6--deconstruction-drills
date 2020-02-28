
// question

var obj = {
    name: "Name",
};
// standard
var name = obj.name;
// desconstruct
var {name} = obj;


// question

var obj = {
    name: "Name",
    age: 24,
    job: "Dolphin shaver",
};
// standard
var name = obj.name;
var age = obj.age;
var job = obj.job;
// desconstruct
let {name, age, job} = obj;

// question

var obj = {
    name: "Name",
    age: 24,
    job: "Dolphin shaver",
};
// standard
var name = obj.name;
var job = obj.job;
// desconstruct
let {name, job} = obj;

// question

var apiResult = {
    articles: [{
        id: 1, title: "title", intro: "content",
    }],
    errorMessage: null,
    timeStamp: "2020-01-12 12:34",
};
// standard
var articles = apiResult.articles;
var errorMessage = apiResult.errorMessage;
var timeStamp = apiResult.timeStamp;
// desconstruct
let {articles, errorMessage, timeStamp} = apiResult;


// question

var apiResult = {
    articles: [{
        id: 1, title: "title", intro: "content",
    }],
    errorMessage: null,
    timeStamp: "2020-01-12 12:34",
};
// standard
var articles = apiResult.articles;
var errorMessage = apiResult.errorMessage;
// desconstruct
let {articles, errorMessage} = apiResult;

/**
 * Parameter deconstruction
 */

// question

var obj = {
    name: "Name",
};
testFunction(obj);
// standard
function testFunction(obj) {
    var name = obj.name;

    // function code...
}
// desconstruct
function testFunction({ name }) {
    // function code...
    let name = { name };
}


// question

var obj = {
    name: "Name",
    age: 24,
    job: "Dolphin shaver",
};
testFunction(obj);
// standard
function testFunction(obj) {
    var name = obj.name;
    var age = obj.age;
    var job = obj.job;
    // function code...
}
// desconstruct
function testFunction({name, age, job}) {
    let name = {name};
    let age = {age};
    let job = {job};
}


// question

var obj = {
    name: "Name",
    age: 24,
    job: "Dolphin shaver",
};
testFunction(obj);
// standard
function testFunction(obj) {
    var name = obj.name;
    var job = obj.job;
    // function code...
}
// desconstruct
function testFunction({name,job}) {
    let name = {name};
    let job = {job};
}



// question

var apiResult = {
    articles: [{
        id: 1, title: "title", intro: "content",
    }],
    errorMessage: null,
    timeStamp: "2020-01-12 12:34",
};
testFunction(apiResult);
// standard
function testFunction(apiResult) {
    var articles = apiResult.articles;
    var errorMessage = apiResult.errorMessage;
    var timeStamp = apiResult.timeStamp;
    // function code...
}
// desconstruct
function testFunction({articles, errorMessage,timeStamp}) {
    let articles = {articles};
    let errorMessage = {errorMessage};
    let timeStamp = {timeStamp};
}


// question

var apiResult = {
    articles: [{
        id: 1, title: "title", intro: "content",
    }],
    errorMessage: null,
    timeStamp: "2020-01-12 12:34",
};
testFunction(apiResult);
// standard
function testFunction(apiResult) {
    var articles = apiResult.articles;
    var errorMessage = apiResult.errorMessage;
    // function code...
}
// desconstruct
function testFunction({articles,errorMessage}) {
    let articles = {articles};
    let errorMessage = {errorMessage}
}