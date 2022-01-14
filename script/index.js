document.querySelectorAll('.dev-title').forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        document.querySelectorAll('.dev-title').forEach(element=>{
            element.classList.remove('active');
        });

        item.classList.add('active');

        let container = document.querySelectorAll('.dev-container');
        container.forEach(item=>{
            if(item.classList.contains('active')){
                item.classList.remove('active');
            }
        });

        container[index].classList.add('active');
    });
});

const skills = ['html', 'css', 'javascript', 'react', 'react native', 'node js', 'express js', 
'electron js', 'symfony', 'vanilla php', 'django', 'django restframework', 'python',
'flutter', 'mysql', 'adobe photoshop', 'adobe after effect', 'adobe illustrator'];

document.querySelectorAll('div').forEach(item=>{
    if(item.hasAttribute('data-skills')){
        let string = '';
        skills.forEach(item=>string+=`<div class="dev-list">${item}</div>`);
        item.innerHTML = string;
    }
});