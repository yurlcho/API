async function fetchBooks(query) {
    const params = new URLSearchParams({
        target: "name",
        query,
        size: 50
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "KakaoAK cef308c504afbcc4b33acdee904881cd"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}

async function bookData() {
    try {
        const querys = ['소년이 온다', '작별하지 않는다', '급류','채식주의자','모우어','아침을 볼 때마다 당신을 떠올릴 거야', '모순','아버지의 해방일지','하얼빈','홍학의 자리','파과','아몬드','아가미','여름과 루비','두고온 여름','일억 번째 여름'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            for (let j = 0; j < 1; j++) {
                $('.fbook').eq(i).append('<div class="fbookbox"></div>');
                const div = $('.fbook').eq(i).find('.fbookbox').last();

                div.append("<img src=" + book[j].thumbnail + "/>");
                div.append("<h4>" + book[j].title + "</h4>");
                div.append("<h5>" + book[j].authors +"|" + book[j].publisher + "</h5>");
                div.append("<h3>" + book[j].sale_price.toLocaleString() + "원 <span>(10%할인)</sapn></h3>");
            }
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();
