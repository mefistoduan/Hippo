$(function () {
    console.log(33);
    getCard();
});

function getCard() {
    var url = 'https://www.douyu.com/lapi/live/getH5Play/52004';//获取
    var postdata = {
        v: '220120190827',
        did: 'c72381bb308e9bac3d176ad900031501',
        tt: '1566889820',
        sign: '915a0e9f4c9d064587e063a97a0f2f5d',
        rate: '-1',
        ver: 'Douyu_219082765',
        iar: '1',
        ive: '0',
    };
    $.post(url, postdata, function (result) {
        console.log(result);
    })
}
