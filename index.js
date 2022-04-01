function superbowlWin(array) {
const record = array.find(function(game){
    return game.result === `W`
})
if (record === undefined) {
    return undefined
}
else {
    return record.year;
}
}
