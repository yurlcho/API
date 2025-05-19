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
        const querys = ['마침내 멸망하는 여름'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            for (let j = 0; j < 1; j++) {
                $('.Cen_bookimg2').eq(i).prepend('<div class="box"></div>');
                const div = $('.Cen_bookimg2').eq(i).find('.box').last();

                div.append("<img src=https://image.yes24.com/goods/127167526/XL" + book[j] + "/>");
            }

            for (let k = 0; k < 1; k++) {
                $('.Cen_booktext2').eq(i).append('<div class="textbox"></div>');
                const div = $('.Cen_booktext2').eq(i).find('.textbox').last();

                div.append("<h6>" + "여름이 오지 않는다면" + "</h6>")
                div.append("<h6>" + "나는 사랑하는 마음만을 남겨 두고 갈 거예요" + "</h6>")
                let content = data.documents[k].contents;
                let str = content.substring(0, 230);
                div.append("<p>" + str + "..</p>");
                
                div.append("<h4>" + book[k].title + "</h4>");
                div.append("<h5>" + book[k].authors + "</h5>");
                div.append("<h5>| " + book[k].publisher + "</h5>");
                div.append("<h3>" + "9,900" + "원</h3>");
            }
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();