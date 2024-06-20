let num =[3, 54, 1, 2, 4]

for(let i=0; i<num.length; i++ ){
    console.log(num[i])
}

//Foreach loop
num.forEach((element) => {
    console.log(element * element)
})

//for of loop
for(let i of num){
    console.log(i)
}

//for..in
for(let i in num){
    console.log(num[i])
}
