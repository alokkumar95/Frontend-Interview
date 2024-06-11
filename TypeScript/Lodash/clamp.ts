function clamp(value:number,lower:number,upper:number){

    if(value>=lower&&value<=upper) return value;
    else if(value<lower) return lower;
    return upper;
}