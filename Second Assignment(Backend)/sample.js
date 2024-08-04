const htmlContent = '<p>This is World of World</p>' ;
const plainText =  'This is World of World';
const plainTextPosition = [
    {
        start: 5,
        end: 7
    },
    {
        start: 17,
        end: 23
    }
];



function highlightHTMLContent(htmlContent, plainText, plainTextPosition){
    
for(const position of plainTextPosition){
    const start = position.start;
    const end = position.end;
    const replacement = "Web";
    console.log(plainText.substring(start,end));

    htmlContent = htmlContent.replace(plainText.substring(start,end), replacement);

    /* String.prototype.replaceAt = function (start,end,replacement) {
        console.log(this.substring(0,start) + replacement + this.substring(end));
        return this.substring(start) + replacement + this.substring(end);
    }
    console.log(htmlContent.replaceAt(start,end,replacement));
    //htmlContent = htmlContent.replaceAt(start,end,replacement); */
    
}
return htmlContent;
}

const result = highlightHTMLContent(htmlContent, plainText, plainTextPosition);
console.log(result);