let num = 0;
const nm = ["nodejs","react","jquery","figma","plan"]

setInterval(
    addnum,
    1000
)
function addnum(){
    console.log(`${nm[num]}"훈련중"`)
    num++;
    num = num % nm.length
    

}