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
	sampleInp14 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 4, 6, 10];
	sampleParsed14 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[4,6,10]];
	test("For given input the score should be 90",  ()=>{
		expect(myfuncs.parseFrames(sampleInp14)).toEqual(sampleParsed14);
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
	sampleInp31 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10,10,2,5];
	sampleParsed31 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[10],[5,5]];

	test("For given input the strike score should be 10" , ()=>{
		expect(myfuncs.calcStrike(sampleParsed31,9)).toBe(10);
	});
}




{
	sampleInp5 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3,5, 1,2];
	sampleParsed5 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,5],[1,2]];

	test("For given input the score should be 110" , ()=>{
		expect(myfuncs.score(sampleInp5)).toBe(110);
	});
}



{
	sampleInp6 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10, 3,5, 10,10,10];
	sampleParsed6 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[3,5],[10,10,10]];

	test("For given input the score should be 137" , ()=>{
		expect(myfuncs.score(sampleInp6)).toBe(137);
	});
}



{
	sampleInp7 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10,10, 10,10,10];
	sampleParsed7 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[10],[10,10,10]];

	test("For given input the score should be 171" , ()=>{
		expect(myfuncs.score(sampleInp7)).toBe(171);
	});
}



{
	sampleInp8 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10,5,5,10,2,0];
	sampleParsed8 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[5,5],[10,2,0]];

	test("For given input the score should be 133" , ()=>{
		expect(myfuncs.score(sampleInp8)).toBe(133);
	});
}



{
	sampleInp9 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10,5,5, 5,5,3];
	sampleParsed9 = [[10],[3,6],[2,8],[3,6],[3,7],[3,6],[3,6],[10],[5,5],[5,5,3]];

	test("For given input the score should be 129" , ()=>{
		expect(myfuncs.score(sampleInp9)).toBe(129);
	});
}





{
	wrongInp = [1,2,3,4,5,6];
	test("given input contains less than 10 elements , should return null", ()=>{
		expect(myfuncs.score(wrongInp)).toBe(null);
	});



}


{
	wrongInp2 = [10, 3, 6, 2, 8, 3, 6, 3, 7, 3, 6, 3, 6, 10,5,5,10,2,0,1];
	test("given input contains more than 3 elements in the last frame, should return null", ()=>{
		expect(myfuncs.score(wrongInp2)).toBe(null);
	});



}
