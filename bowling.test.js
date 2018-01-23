let myfuncs = require("./bowling");

let sampleInp;
let sampleParsed;
let sampleBegin;
let sampleBegin2;



sampleInp = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
sampleParsed = [[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]];
test("For given input the score should be 90",  ()=>{
	expect(myfuncs.parseFrames(sampleInp)).toEqual(sampleParsed);
});


sampleInp = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3, 6, 3, 6];
sampleParsed = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,6],[3,6]];
test("For given input the score should be 90",  ()=>{
	expect(myfuncs.parseFrames(sampleInp)).toEqual(sampleParsed);
});







sampleInp = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3, 6, 3, 6];
sampleParsed = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,6],[3,6]];
sampleBegin = 1;

test("For given input the strike score should be 19" , ()=>{
	expect(myfuncs.calcStrike(sampleParsed,sampleBegin)).toBe(9);
});




sampleInp = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 2, 5, 3, 6];
sampleParsed = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[2,5],[3,6]];
sampleBegin2 = 8;

test("For given input the strike score should be 19" , ()=>{
	expect(myfuncs.calcStrike(sampleParsed,sampleBegin2)).toBe(7);
});

