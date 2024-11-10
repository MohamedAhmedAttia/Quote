//2 array variables, one to store 10 quotes,andthe other to store speakers of each quote, each quote index matches each speaker index 
var quotes = [ "“Be yourself; everyone else is already taken.”" , "“So many books, so little time.”" , "“A room without books is like a body without a soul.”" , "“Be the change that you wish to see in the world.”" , "“It does not do to dwell on dreams and forget to live.”" , "“Good friends, good books, and a sleepy conscience: this is the ideal life.”" , "Life is what happens to us while we are making other plans.”" , "“I have not failed. I've just found 10,000 ways that won't work.”" , "“A day without sunshine is like, you know, night.”" , "“That which does not kill us makes us stronger.”"]  
var speakers = [ "― Oscar Wilde" , "― Frank Zappa" , "― Marcus Tullius Cicero" , "― Mahatma Gandhi" , "― J.K. Rowling, From Harry Potter and the Sorcerer's Stone" , "― Mark Twain" , "― Allen Saunders" ,"― Thomas A. Edison" , "― Steve Martin" , "― Friedrich Nietzsche"]

//thevariable that store the index of the quote and speker arrays
var qoute_index;


//the function that will make qoute and speaker appears on document
function generate_quote(){
    var random= Math.floor(Math.random()*10);  //a variable to avoid quotes repeating

    if (qoute_index == random){  //a condition to avoid quotes repeating
        generate_quote();
    }
    else{
        qoute_index=random;
         document.getElementById("quote").innerHTML=quotes[qoute_index];
         document.getElementById("speaker").innerHTML=speakers[qoute_index];
    }
}

