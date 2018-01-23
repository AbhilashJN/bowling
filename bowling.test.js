let myfuncs = require("./bowling");

let sampleInp;
let sampleParsed;

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




