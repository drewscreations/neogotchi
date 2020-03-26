const exampleArr = [5, 6, 9, 10, 4, 7, 11, 2] //should be (11-4) 7
getTrades = (arr) => {
	let maxDiff = 0;
	let min = arr[0];
 	let max=arr[1];
	for (let i=0; i<arr.length; i++){
		if (arr[i]<min){
            min=arr[i];
            if(i<arr.length){
                max=arr[i+1];
            }
            
		};
		if (arr[i]>max){
			max=arr[i];
        };
        const checkDiff = max-min;
        console.log('check diff',checkDiff)
        maxDiff = maxDiff < checkDiff ? checkDiff : maxDiff;
    }
    console.log('max dif',maxDiff)
}

getTrades(exampleArr)