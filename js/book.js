async function fetchBooks(query) {
    const params = new URLSearchParams({
        target: "title",
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
        const querys = ['문학동네시인선', '도쿄 에일리언즈', '여름'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            //썸네일이 빈 문자열인것은 제외
            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            // for문 (8개)
            for (let j = 0; j < 4; j++) {
                $('.thisbook').eq(i).append('<div class="box"></div>');
                const div = $('.thisbook').eq(i).find('.box').last();

                div.append("<img src=" + book[j].thumbnail + "/>");
                div.append("<h4>" + book[j].title + "</h4>");
                div.append("<h5>" + book[j].authors + "</h5>");
                div.append("<h3>" + book[j].sale_price + "원</h3>");
            }
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();
