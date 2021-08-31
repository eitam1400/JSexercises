function guessCity(capital, coastal, famous, ancient) { //function reads your mind of the city you are thinking of right now :)
    if(ancient && famous && capital)
        return "Jerusalem";
    else if(famous && coastal){
        return "Tel Aviv";
    } else if(coastal && ancient){
        return "Acre";
    } else if(ancient){
        return "Katzrin";
    } else{
        return "Zikim";
    }
}

