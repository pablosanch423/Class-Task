const pictures = [
    './images/ada-lovelace.png',
    './images/Alan_Turing_Aged_16.jpg',
    './images/babbge-5b8587cac9e77c0025e6f233.png',
    './images/steve-jobs.jpg.cf.jpg',
    './images/0x0.jpg',  
    './images/7e6404c50dfbbf5acb3a94fac45acd9a.jfif',
    
]

const names = [
    'Ada Lovelace',
    'Alan Turing',
    'Charles Babbage',
    'Steve Jobs',
    'Bill Gates',
    'Elon Musk',
]


const body = document.body;

body.style.display = 'grid';
body.style.gridTemplateColumns = 'auto auto auto';
body.style.columnGap = '75px';
body.style.width = '98vw';
body.style.height ='98vh';
body.style.justifyContent = 'center'
body.style.alignItems = 'center';


for(let o = 0; o < 6; o++){
    const divs = document.createElement('div');
    divs.className = 'card'
    body.append(divs)
}

const divs = document.querySelectorAll('.card')


for (let i = 0; i < divs.length; i++) {
    const div = document.createElement('div')
    div.style.width = '400px';
    div.style.length = '400px';
    divs[i].append(div)
    let picture = document.createElement('img')
    picture.src = pictures[i];
    picture.height = '340'
    picture.width ='340'
    picture.style.objectFit = 'cover';
    div.append(picture)

    let name = document.createElement('p');
    name.innerHTML = names[i];
    div.append(name)
}

