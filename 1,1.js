

    let today = new Date (),
    newYearDate = new Date (today.getFullYear()+1,0,1);

document.wtite('<p>today: '+ today.toLocaleString()+'</p>');
document.wtite('<p>newYearDate: '+ newYearDate.toLocaleString()+'</p>');
document.wtite('<p>newYearDate - today: '+ (newYearDate - today)+'</p>');
document.wtite('<p>newYearDate.getTime() - today.getTime(): '+ (newYearDat.getTime() - today.getTime())+'</p>');

