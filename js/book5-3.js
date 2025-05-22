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
        const querys = ['심장보다 단단한 토마토 한 알'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            for (let j = 0; j < 1; j++) {
                $('.Cen_bookimg4').eq(i).prepend('<div class="box"></div>');
                const div = $('.Cen_bookimg4').eq(i).find('.box').last();

                div.append("<img src=https://image.yes24.com/goods/141383294/L" + book[j] + "/>");
            }

            for (let k = 0; k < 1; k++) {
                $('.Cen_booktext4').eq(i).append('<div class="textbox"></div>');
                const div = $('.Cen_booktext4').eq(i).find('.textbox').last();

                div.append("<h6>" + "아삭아삭할 겁니다" + "</h6>")
                div.append("<h6>" + "겨울을 견뎌 본 심장이라서요" + "</h6>")
                let content = data.documents[k].contents;
                let str = content.substring(0, 188);
                div.append("<p>" + str + "..</p>");
                
                div.append("<h4>" + book[k].title + "</h4>");
                div.append("<h5>" + book[k].authors + "</h5>");
                div.append("<h5>| " + book[k].publisher + "</h5>");
                div.append("<h3>" + "10,800" + "원</h3>");
            }
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();