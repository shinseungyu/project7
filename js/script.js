document.addEventListener(`DOMContentLoaded`, function () { 
    //AOS
    AOS.init();

    //마우스휠 이벤트 (헤더가 휠이 내려갈때는 안보이다가 올라갈때 보이게끔 설정)
    window.addEventListener(`wheel`, (event) => { 
        const headerArea = document.querySelector(`.header_area`);

        if (event.deltaY > 0) {
            // wheel down
            headerArea.classList.remove(`scroll`);
        } else {
            // wheel up
            headerArea.classList.add(`scroll`);
        }
    });

    //body 에 bg 변경(스크롤 이벤트 offset값 활용)
    const sec2 = document.querySelector(`.sec_2`);
    const sec3 = document.querySelector(`.sec_3`);

    window.addEventListener(`scroll`, () => { 
        const sec2Offset = sec2.offsetTop - 500;
        const sec3Offset = sec3.offsetTop;

        const scrollTop = window.scrollY;
        const body = document.querySelector(`body`);

        if (scrollTop > sec2Offset && scrollTop < sec3Offset) {
            body.classList.add(`bg`);
        } else {
            body.classList.remove(`bg`);
        }

    });

    //sec_4 swiper
    var swiper = new Swiper(".ceoSwiper", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });


    //sub-menu
    //마우스 올리면 카테고리에 맞는 탭 활성화 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    const submenuTab = document.querySelectorAll(`.main_menu li`);
    const submenuBox = document.querySelector(`.sub_menu_box`);
    
    for (const li of submenuTab){
        li.addEventListener(`mouseenter`, function () {
            submenuBox.classList.add(`active`);

            //탭메뉴 연결
            const tab = this.getAttribute(`data-alt`);
            const subMenu = document.querySelectorAll(`.sub_menu`);

            for (const tabContent of subMenu){
                tabContent.classList.remove(`active`);
            }
        
            const changeTab = document.querySelector(`#${tab}`);
            changeTab.classList.add(`active`);
        });
        
    }

    // 서브메뉴박스에 마우스리브되면 서브메뉴박스 active 제거
    submenuBox.addEventListener(`mouseleave`, function () { 
        this.classList.remove(`active`);
    });


    //상단이동 버튼 300px 이상일때 top_btn 보여지게끔(scroll 클래스명 설정해놓음) / 최상단으로 올라가는 상단이동 버튼 구현해보기 -> 클릭했을때 최상단으로 이동

    //작은그리드에서 햄버거 버튼 클릭하면 메인메뉴가 나오면서 햄버거버튼 스위치되도록 처리
});