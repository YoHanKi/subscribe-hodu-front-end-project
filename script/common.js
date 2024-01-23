//메인 이미지 출력
const loading_image = document.querySelector('.loading_hodu');
const slide_tab = document.getElementById('slide_tab');
let pageToFetch = 1;
let showMore = document.querySelector('.show_more');
let timer;

async function fetchImages(pageToFetch) {
    try{
        const response = await fetch('https://picsum.photos/v2/list?page='+pageToFetch+'&limit=12')
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 발생했습니다.');
        }
        const data = await response.json();
        //데이터 확인을 위한 출력
        console.log(data);
        makeImageList(data);
    } catch(error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다. :',error);
    }
}
//화면에 뿌려주는 함수
function makeImageList(data) {
    data.forEach((item) => {
        loading_image.innerHTML += "<li><img src="+item.download_url+" alt=''></li>"
    })
}

//스크롤 감지 이벤트
//Show more 클릭 시 이벤트 감지를 위해 텍스트로 구분
slide_tab.addEventListener('scroll', ()=>{
    if(showMore.innerText == "Close") {
        if(!timer) {
            timer = setTimeout(function () {
                timer = null;
                //뷰포트높이 + 스크롤한 거리 + 1300 >= 총 거리 window.innerHeight + document.documentElement.scrollTop + 1300 >= document.documentElement.offsetHeight
                //탭 기준으로 진행 => 탭의 뷰포트 + 스크롤 거리 + 1200 >= 총 스크롤거리
                if (slide_tab.offsetHeight + slide_tab.scrollTop + 1200 >= slide_tab.scrollHeight) {
                    fetchImages(++pageToFetch);
                }
            }, 400);
        }
    }
})
//이미지 로딩 처리
slide_tab.addEventListener('scroll', () => {
    document.querySelector('.scrollDown img').style.display = 'none';
    let loading_img = document.querySelectorAll('.loading_hodu img');
    //화면에서 이미지가 보이면 투명도가 서서히 올라감.
    loading_img.forEach((loading_img) => {
        if(slide_tab.scrollTop + slide_tab.offsetHeight + 378
            >= loading_img.offsetTop + loading_img.offsetHeight) {
            loading_img.style.opacity ='1';
        }
    });
})

//Show more 버튼 활성화
//div display를 toggle로 생성, 버튼의 innerText 변경 로직
//버튼 클릭 시 자연스럽게 펼쳐짐
showMore.addEventListener('click', ()=>{
    slide_tab.classList.toggle('active');
    //첫 클릭일때만 이미지 호출 및 스크롤 다운 이미지 호출
    if(pageToFetch == 1) {
        fetchImages(pageToFetch++);
        document.querySelector('.scrollDown img').style.display = 'block';
    } else document.querySelector('.scrollDown img').style.display = 'none';
    if(showMore.innerText == 'Show more') {
        showMore.innerText = "Close";
    } else {
        showMore.innerText = "Show more";
    }
});
//메인 이미지 관련 끝

// 카카오 지도
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();
// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
//카카오 지도 끝

//모달창
document.querySelector('.subscribe_btn').addEventListener('click', () => {
    let regemail = new RegExp('[a-z0-9]+@[a-z]\.[a-z]');
    if(document.querySelector('.sub_input').value.match(regemail) != null) {
    document.querySelector('.modal_bg').style.display = 'block';
    document.querySelector('.modal_pop').style.display = 'block';
    }
    else alert('email@email.com 형식으로 입력해주세요.');
})

document.querySelector('.thanks').addEventListener('click', () => {
    document.querySelector('.modal_bg').style.display = 'none';
    document.querySelector('.modal_pop').style.display = 'none';
})
//모달창 끝

//로딩창
const loading_cat = document.querySelector('.loading');
window.onload = () => {
    loading_cat.style.display = 'none';
}
//로딩창 끝


//toTop 처리
window.addEventListener('scroll', () => {
    //스크롤 상단 기준 500px 밑으로 이동 시 toTop버튼 나타남.
    let toTop = document.querySelector('.to_top');

    if(window.scrollY >= 1000) {
        toTop.style.display = 'inline';
    } else toTop.style.display = 'none';
});

