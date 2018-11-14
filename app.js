let fs=require('fs')

fs.readFile('./flower.txt',(err,data)=>{
  if(err) return;
     var txt= []
        txt.push(data.toString())
        words=txt.join('\n')
        tokens=words.split('\n')
        tokens.sort()
        var wordsStartS=[],wordsStartR=[],fivletter=[]
        for (var i=0; i<tokens.length;i++){
            var str=tokens[i]
             txt1=str.toLowerCase()
             if (txt1.charAt(0)==='s'){
                 wordsStartS.push(txt1)
                 }
            if (txt1.charAt(0)==='r'){
                 wordsStartR.push(txt1)
                 }
                 if (txt1.length ===5){
                    fivletter.push(txt1)
                    }   
        }
   rows=tokens.length
   sflowers=wordsStartS.length
   sflowerR=wordsStartR.length
   fivltr=fivletter.length
   console.log("Number of lines")
   console.log(rows)
   console.log("Number of roses starting with S letter")
   console.log(sflowers)
   console.log(wordsStartS)
   console.log("Number of roses starting with my name Rana R letter")
   console.log(sflowerR)
   console.log(wordsStartR)
   console.log("Number of roses with 5 letters")
   console.log(fivltr)
   console.log(fivletter)
})

