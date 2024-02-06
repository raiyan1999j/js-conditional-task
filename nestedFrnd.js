function nestedFriend(myScore,frndScore){
    if(myScore >= 80){
        if(frndScore >= 80){
            console.log('go for lunch')
        }else if(frndScore < 80 && frndScore >= 60){
            console.log('good luck next time')
        }else if(frndScore < 60 && frndScore >= 40){
            console.log('unseen message')
        }else if(frndScore < 40){
            console.log('block them')
        }
    }else{
        console.log('sleep and act sad')
    }    
}

nestedFriend(70,60);