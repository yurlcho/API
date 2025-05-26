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
        const querys = ['소년이 온다', '모순', '급류', '첫 여름, 완주', '파과'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            for (let j = 0; j < 1; j++) {
                $('.bsbook').eq(i).prepend('<div class="bsbookimg"></div>');
                const div = $('.bsbook').eq(i).find('.bsbookimg').last();

                div.append("<img src=" + book[j].thumbnail + "/>");
            }

            for (let k = 0; k < 1; k++) {
                $('.bsbook').eq(i).append('<div class="bsbooktxt"></div>');
                const div = $('.bsbook').eq(i).find('.bsbooktxt').last();
                
                div.append("<h4>" + book[k].title + "</h4>");
                div.append("<h5>" + book[k].authors + "</h5>");
                div.append("<h3>" + book[k].sale_price.toLocaleString() + "원 <span>(10%할인)</sapn></h3>");
            }
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();
