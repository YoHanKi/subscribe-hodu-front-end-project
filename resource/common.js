//메인 이미지 출력
const loading_image = document.querySelector('.loading_hodu');
let pageToFetch = 1;
let showMore = document.querySelector('.show_more');
let timer;

async function fetchImages(pageToFetch) {
    try{
        const response = await fetch('https://picsum.photos/v2/list?page='+pageToFetch+'&limit=6')
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 발생했습니다.');
        }
        const data = await response.json();
        console.log(data);
        makeImageList(data);
    } catch(error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다. :',error);
    }
}
fetchImages();

//화면에 뿌려주는 함수
function makeImageList(data) {
    data.forEach((item) => {
        loading_image.innerHTML += "<li><img src="+item.download_url+" alt=''></li>"
    })
}

//스크롤 감지 이벤트
//Show more 클릭 시 이벤트 감지를 위해 텍스트로 구분
window.addEventListener('scroll', ()=>{
    if(showMore.innerText == "Close") {
        if(!timer) {
            timer = setTimeout(function () {
                timer = null;
                if (window.innerHeight + document.documentElement.scrollTop + 1100 >= document.documentElement.offsetHeight) {
                    fetchImages(++pageToFetch);
                }
            }, 600);
        }
    }
})

//Show more 버튼 활성화
//div display를 toggle로 생성, 버튼의 innerText 변경 로직
showMore.addEventListener('click', ()=>{
    loading_image.classList.toggle('active');
    if(showMore.innerText == 'Show more') {
        showMore.innerText = "Close";
    } else showMore.innerText = "Show more";
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
    document.querySelector('.modal_bg').style.display = 'block';
    document.querySelector('.modal_pop').style.display = 'block';
})

document.querySelector('.thanks').addEventListener('click', () => {
    document.querySelector('.modal_bg').style.display = 'none';
    document.querySelector('.modal_pop').style.display = 'none';
})
//모달창 끝