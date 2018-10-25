var text = `I want to change 'single' quotes 
to double 'without affect contractions 
aren't' like isn't can't they're change`
 var test = /(\s{1,}')|('[^'\w+])/g;
 console.log(text.replace(test," \" "))