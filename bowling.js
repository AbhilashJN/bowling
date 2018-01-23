let frames = [];

/*

function roll(numberOfPins)
{
frames.

}
*/


function score(frameArray)
{
	let score = 0;
	let modArray = parseFrames(frameArray);
	


	return score;
}


function parseFrames(frameArray)
{
	let modArray=[];
	for(let i=0;i<frameArray.length;i++)
	{
		if(frameArray[i]===10)   //is a strike i.e. 1 throw in frame
		{
			modArray.push([frameArray[i]]);
		}
		else      //is not a strike i.e. 2 throws in frame
		{
			modArray.push([frameArray[i],frameArray[i+1]]);
			i++;
		}
	}

	return modArray;
}



module.exports = { parseFrames: parseFrames , score: score};