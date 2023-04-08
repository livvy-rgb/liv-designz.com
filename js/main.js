function init() {
    let current = 0;
    let directionForward = true;
    const items = document.querySelectorAll(".item");
    const nextBtn = document.querySelector(".card-slider .next");
    const prevBtn = document.querySelector(".card-slider .prev");

    // const getCurrentItem = () => {
    //     return;
    // };

    const getCard = (item) => {
        return item.querySelector(".card");
    };

    // anime.set(getCard(items), {
    //     translateX: "100vw",
    // });

    // anime.set(items[current], {
    //     translateX: 0,
    //     opacity: 1,
    // });

    // function updateClasses () {
    //     items.forEach((item, index) => {
    //         if(index == current) {
    //             item.classList.add("is-active");
    //         } else {
    //             item.classList.remove("is-active");
    //         }
    //     });
    // }

    const animate = {
        in(item) {
            const card = getCard(item);

            const tl = anime.timeline({
                duration: 1000,
                easing: "easeOutExpo",
            });

            tl.add({
                targets: card,
                translateX: directionForward ? ["100vw", 0] : ["-100vw", 0],
                rotate: [40, 0],
            });

            setTimeout(function () {
                item.classList.add("is-active");
            }, 20);

            return tl;
        },

        out(item) {
            const card = getCard(item);
            const duration = 1000;
            const tl = anime.timeline({
                duration: duration,
                easing: "cubicBezier(0.86, 0, 0.07, 1)",
            });

            tl.add({
                targets: card,
                translateX: directionForward ? [0, "100vw"] : [0, "-100vw"],
                rotate: [0, -40],
            });

            setTimeout(function () {
                item.classList.remove("is-active");
            }, duration - 50);

            return tl;
        },
    };

    function next() {
        directionForward = true

        animate.out(items[current]);
        current = (current + 1) % items.length;
        console.log(`Current: ${current}`)
        setTimeout(function () {
            animate.in(items[current]);
        }, 500);
        // updateClasses();
    }

    function prev() {
        directionForward = false

        animate.out(items[current]);
        current = (current - 1 + items.length) % items.length
        console.log(`Current: ${current}`)
        setTimeout(function () {
            animate.in(items[current]);
        }, 500);
        // updateClasses();
    }

    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);

    // setItems();
}

document.addEventListener("DOMContentLoaded", init);


