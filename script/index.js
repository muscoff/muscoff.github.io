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