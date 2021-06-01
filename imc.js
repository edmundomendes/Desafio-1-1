const nome ='Edmundo'
const peso = 84
const altura =  1.88
const sexo = 'Masculino'

imc = peso / Math.pow(altura,2)

if(imc >= 30){
    console.log(`${nome}, you are above the regular weight`)
}else{
    console.log(`${nome}, you are not above the regular weight`)
}