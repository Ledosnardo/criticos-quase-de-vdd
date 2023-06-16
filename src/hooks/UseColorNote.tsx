export const UseColorNote = (note: number): string => {
    const golden = '#f2bc0a';
    const green = '#008000';
    const liteGreen = '#3efa19';
    const yellow = '#ffff00';
    const orange = '#ffa500';
    const red = '#f00';

    if(note === 10){
        return golden;
    } else if(note >= 9 && note < 10){
        return green;
    } else if(note >= 7 && note < 9){
        return liteGreen;
    } else if(note >= 5 && note < 7){
        return yellow;
    } else if(note >= 4 && note < 5){
        return orange;
    } else {
        return red;
    }
}