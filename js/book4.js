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
        const querys = ['고래'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            for (let j = 0; j < 1; j++) {
                $('.with_book').eq(i).prepend('<div class="box"></div>');
                const div = $('.with_book').eq(i).find('.box').last();

                div.append("<img src=" + book[j].thumbnail + "/>");
            }

            for (let k = 0; k < 1; k++) {
                $('.with_book_text').eq(i).append('<div class="textbox"></div>');
                const div = $('.with_book_text').eq(i).find('.textbox').last();

                div.append("<h6>" + "마치 팀 버튼이 <토지>를 쓴 것 같다" + "</h6>")
                div.append("<h4>" + book[k].title + "</h4>");
                div.append("<h5>" + book[k].authors + "</h5>");
                div.append("<h5>| " + book[k].publisher + "</h5>");

                let content = data.documents[k].contents;
                let str = content.substring(0, 138);
                div.append("<p>" + str + "...</p>");
            }
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();
