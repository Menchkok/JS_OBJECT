
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
    'Place of work' : 'metalworking plant',
    'job title': 'turner',
},
};
console.log(copyMyPerson.occupation['job title'])




