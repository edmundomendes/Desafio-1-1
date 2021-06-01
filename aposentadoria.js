const nome = 'Rebeca'
const sexo = 'Feminino'
const idade = 48
const contribuicao = 23

total = (idade + contribuicao)

if((sexo == 'Feminino') && (contribuicao >= 30) || (sexo == 'Masculino') && (contribuicao >= 35)){
    //Se alterar a idade + 30 anpos de contribuição cai nesse IF
    if((sexo == 'Feminino') && (total >= 85 ) || (sexo == 'Masculino') && (total >= 95)){
        console.log(`${nome}, you can retire because of your age`)       
    }else{
    //Se alterar somente a contribuição para 30 cai nesse ELSE
        console.log(`${nome}, you can retire because of make enough contribution`)
    }
}else{
    console.log(`${nome}, you can't retire`)
}
