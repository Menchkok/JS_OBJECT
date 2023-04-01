const result = document.getElementById('result');

const myPerson = {
    fullName:'Artem',
    age:29,
    anyInfoAboutYourPlace:{
        country:'Russia',
        city:'Tomsk',
        adress:'Baranchuk',
    },
    hasCats:true,
    hobbies:['WARHAMMER 40000','CrossFit','Hunting'],
    greeting:()=>{
        return `Hey, my name is ${this.fullName}`
    },
};

const copyMyPerson = {...myPerson,
occupation:{
    'Place of work' : 'Metalworking plant',
    'Job title': 'Turner',
},
};
console.log(copyMyPerson.occupation['Job title'])

result.innerHTML = `Result - ${copyMyPerson.occupation['Job title']}`;




