
const imageList = [
    "https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1559650656-5d1d361ad10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1617355405361-29f0f0a3d737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
];
const containerOfImages = document.querySelector(".img-container")
const lis = document.querySelectorAll("li");
const arrLi = Array.from(lis)
const img = document.querySelector('img')


arrLi.forEach(li => {
    const siblings = Array.from(li.parentNode.children).filter(el => el !== li);
    function changeImage(e) {
        img.src = `${imageList[e.target.dataset.index]}`

    }
    let changeColor = () => {
        if (!li.classList.contains('active')) {
            li.classList.add('active');
            siblings.forEach(el => el.classList.remove('active'));
            const tl = gsap.timeline();



            tl.fromTo('img', { x: -100, rotate: '20', duration: 0.2, ease: Strong.easeOut }, { x: 0, rotate: '0' })





        } else {
            li.classList.remove('active');
        }
    };

    li.addEventListener("mouseover", changeColor);
    li.addEventListener("mouseover", changeImage);
});


