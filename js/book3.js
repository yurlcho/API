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
        const querys = ['민음사', '문학과지성사', '창비'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            for (let j = 0; j < 3; j++) {
                $('.read_slider_sub').eq(i).append('<div class="box"></div>');
                const div = $('.read_slider_sub').eq(i).find('.box').last();

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
