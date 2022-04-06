const boom7 = n => {
    for(i=1; i<=n; i++){
        if(i % 7 === 0 && i === 7){
            console.log(`BOOM-BOOM`);
        }
        else if(i % 7 === 0){
            console.log(`BOOM`);
        }
        else{
            console.log(i);
        };
    };
};

boom7(18);