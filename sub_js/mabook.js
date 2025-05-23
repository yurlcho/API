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
        const querys = ['양귀자', '창비청소년', '이꽃님'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            for (let j = 0; j < 6; j++) {
                $('.mabook_sub').eq(i).append('<div class="mabox"></div>');
                const div = $('.mabook_sub').eq(i).find('.mabox').last();

                div.append("<img src=" + book[j].thumbnail + "/>");
                div.append("<h4>" + book[j].title + "</h4>");
                div.append("<h5>" + book[j].authors + "</h5>");
                div.append("<h3>" + book[j].sale_price.toLocaleString() + "원 <span>(10%할인)</sapn></h3>");
            }
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();
