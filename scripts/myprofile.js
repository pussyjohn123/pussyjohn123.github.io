document.addEventListener("DOMContentLoaded", function () {
    const buttonCn = document.getElementById("button-cn");
    const buttonEn = document.getElementById("button-en");
    const buttonJp = document.getElementById("button-jp");

    buttonCn.addEventListener("click", function () {
        switchLanguage("cn");
    });

    buttonEn.addEventListener("click", function () {
        switchLanguage("en");
    });

    buttonJp.addEventListener("click", function () {
        switchLanguage("jp");
    });

    function switchLanguage(lang) {
        const introduceContainer = document.querySelector(".introduce");
        if (lang === "cn") {
            introduceContainer.innerHTML = `
                <p>早安，我流淚了
                好像在不知不覺間睡著了
                放在電腦桌上的蛋糕砸在地上
                桌上沾滿了從炸雞袋裡滲透出來的油，冷掉而變白的脂肪乾涸著
                臉頰有些抽筋，可能就是因為睡著時趴在桌上沾到雞的脂肪吧
                就算看了holo行程表，佩可拉的配信欄也絲毫沒有增加
                從我睡著之後好像也沒有突擊開台的跡象呢
                現在我要把掉在地上的奶油蛋糕收拾一下拿去丟了
                肚子有點餓了，該不該把炸雞熱一下拿來吃呢?
                但同時混雜著"這種不像樣的事是不行的吧，丟掉才對吧"這種冷靜的心情
                簡單收拾一下洗個了澡，我的內心在說著:
                「再一次去找現在也買的到的聖誕蛋糕吧?」
                雖然有佩可醬的圖案的特製蛋糕已經砸在地上了，但超商或超市的蛋糕也行吧?
                邊跟族長一起哈哈大笑著說"聖誕節快樂!"邊把蠟燭吹熄，這樣就好了吧?
                就只是...就只是這樣的...只是這樣的願望而已啊。
                只不過想跟佩可醬一起在晚上互相說一句:「Merry Christmas!」而已。
                這種小事也是我要求太多了嗎?難道是我不配有這種期望嗎?
                每次族長在直播中講到聖誕節的事，理所當然那天晚上會到來，這麼想著的我，
                就算有點勉強也要把特休申請書給上司，讓他蓋章了耶
                即使意識到被周圍的同事在背地裡嘲笑著「你根本沒有女朋友吧?」
                我還是自豪的請了一天假，還事前訂了一個蛋糕
                為了之後可以貼到twitter上，我還把桌子周圍掛滿裝飾品，小型聖誕樹上
                掛了族長的鑰匙圈之類的周邊，電腦桌布也換成族長的了。
                剩下就只等族長開頭OP「にーんじん！にーんじん！」響起，播完peko rap
                之後「konpeko~~你們啊!聖誕節幹嘛一張苦瓜臉阿哈↗哈↗哈↗」「但是，為了佩可拉把聖誕節空出來很高興喔peko!哈↗哈↗哈↗」
                一邊裝作有點討厭，但是笑著把不安的心情都吹散，對著我的那張笑臉。
                我想和這樣的佩可拉一起度過平安夜僅僅一小時的時間。
                明明，就只是那樣而已啊。</p>
            `;
        } else if (lang === "en") {
            introduceContainer.innerHTML = `
                <p>Hello, I am Wang Duanyou, currently studying at the Department of Computer Science, National Chin-Yi University of Technology. I have a strong interest in software development and artificial intelligence, and actively participate in various related projects and competitions. I hope to become an excellent software engineer in the future.</p>
            `;
        } else if (lang === "jp") {
            introduceContainer.innerHTML = `
                <p>こんにちは、私は王端佑です。現在、国立勤益科技大学の情報工学科で勉強しています。ソフトウェア開発と人工知能に強い興味を持っており、さまざまな関連プロジェクトやコンペティションに積極的に参加しています。将来、優れたソフトウェアエンジニアになりたいと思っています。</p>
            `;
        }
    }
});