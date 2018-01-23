let myfuncs = require("./bowling");


{
	sampleInp = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
	sampleParsed = [[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6],[3,6]];
	test("For given input the score should be 90",  ()=>{
		expect(myfuncs.parseFrames(sampleInp)).toEqual(sampleParsed);
	});

}





{
	sampleInp1 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3, 6, 3, 6];
	sampleParsed1 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,6],[3,6]];
	test("For given input the score should be 90",  ()=>{
		expect(myfuncs.parseFrames(sampleInp1)).toEqual(sampleParsed1);
	});

}


{
	sampleInp12 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3, 6, 10, 3, 4];
	sampleParsed12 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,6],[10,3,4]];
	test("For given input the score should be 90",  ()=>{
		expect(myfuncs.parseFrames(sampleInp12)).toEqual(sampleParsed12);
	});

}


{
	sampleInp13 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3, 6, 10, 10, 10];
	sampleParsed13 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,6],[10,10,10]];
	test("For given input the score should be 90",  ()=>{
		expect(myfuncs.parseFrames(sampleInp13)).toEqual(sampleParsed13);
	});

}


{
	sampleInp14 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3, 6, 5, 5, 10];
	sampleParsed14 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,6],[5,5,10]];
	test("For given input the score should be 90",  ()=>{
		expect(myfuncs.parseFrames(sampleInp14)).toEqual(sampleParsed14);
	});

}




{
	sampleInp2 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3, 6, 3, 6];
	sampleParsed2 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,6],[3,6]];
	sampleBegin = 1;

	test("For given input the strike score should be 9" , ()=>{
		expect(myfuncs.calcStrike(sampleParsed2,1)).toBe(9);
	});
}


{
	sampleInp3 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 2, 5, 3, 6];
	sampleParsed3 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[2,5],[3,6]];
	sampleBegin2 = 8;

	test("For given input the strike score should be 7" , ()=>{
		expect(myfuncs.calcStrike(sampleParsed3,8)).toBe(7);
	});
}


{
	sampleInp5 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3,5, 1,2];
	sampleParsed5 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,5],[1,2]];

	test("For given input the strike score should be 13" , ()=>{
		expect(myfuncs.score(sampleInp5)).toBe(110);
	});
}



{
	sampleInp6 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3,5, 10,10,10];
	sampleParsed6 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,5],[10,10,10]];

	test("For given input the strike score should be 13" , ()=>{
		expect(myfuncs.score(sampleInp6)).toBe(137);
	});
}



{
	sampleInp7 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10,10, 10,10,10];
	sampleParsed7 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[10],[10,10,10]];

	test("For given input the strike score should be 13" , ()=>{
		expect(myfuncs.score(sampleInp7)).toBe(171);
	});
}

