let frames = [];

/*

function roll(numberOfPins)
{
frames.

}
*/


function calcScore(frameArray)
{
	let score = 0;
	let modArray = parseFrames(frameArray);
	console.log(modArray);

	for(let i=0;i<modArray.length;i++)
	{
		console.log(i , modArray[i]);
        
		if(modArray[i].length===1) // is a strike
		{
			console.log("here1");
			score+=10;
			score+= calcStrike(modArray,i+1);    //add next two scores
			
		}
		else if (modArray[i].length===2)
		{
			if(modArray[i][0]+modArray[i][1] === 10)   //is a spare
			{
				score+=10;
				score+=modArray[i+1][0];
			}
			else{
				console.log("here");
				score += (modArray[i][0]+modArray[i][1]);   //is open
			}
		}
        
		else if (modArray[i].length===3)
		{      //last frame had 3 throws          
                    
			score += (modArray[i][0]+modArray[i][1]+modArray[i][2]);
		}
		console.log(score);
	}

	return score;
}


function parseFrames(frameArray)
{
	let modArray=[];
	let frameCount=0;

	for(let i=0;i<frameArray.length;i++)
	{
		if(frameArray[i]===10)   //is a strike i.e. 1 throw in frame
		{
			modArray.push([frameArray[i]]);
		}
		else      //is not a strike i.e. 2 throws in frame
		{
			modArray.push([frameArray[i],frameArray[i+1]]);
			i=i+1;
		}
		frameCount+=1;
		if (frameCount===9)    //now add the last frame
		{
			modArray.push(frameArray.slice(i+1));
			break;
		}
	}

	return modArray;
}



function calcStrike(parsedArray , begin)
{
	console.log(parsedArray,begin);
	console.log(parsedArray[begin] , parsedArray[begin].length);
	let currScore =0;
	if(parsedArray[begin].length===1)
	{
        
		console.log("1" , parsedArray[begin]);
		currScore += 10;
		currScore += parsedArray[begin+1][0];
	}
	else if(parsedArray[begin].length>1)
	{
		currScore += parsedArray[begin][0];
		currScore += parsedArray[begin][1];
        
	}

    
	return currScore;
}


module.exports = { 
	parseFrames: parseFrames,
	calcStrike: calcStrike,
	score: calcScore
};
