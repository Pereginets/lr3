let msDiff = meYearDate - today ,
    days= Math.floor (msDiff / (24*60*60*1000)),
    hours= Math.floor ((msDiff / (1000*60*60))%24),
    mins= Math.floor ((msDiff / 1000/60)%60),
    secs= Math.floor ((msDiff / 1000)%60);

document.write('<p> до нового року: '+ days +':' + hours +' :' + mins + ':' + secs ' </p>');