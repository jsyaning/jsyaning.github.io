"use strict";


/**
 * 添加到收藏夹
 *
 * @param sURL
 * @param sTitle
 * @constructor
 */
function AddFavorite(sURL, sTitle) {
    sURL = encodeURI(sURL);
    try {
        window.external.addFavorite(sURL, sTitle)
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "")
        } catch (e) {
            alert("加入收藏失败,请使用Ctrl+D进行添加！")
        }
    }
}

$(document).ready(function () {
    let QRBox = $('#QRBox'),
        MainBox = $('#MainBox');

    var screenWid = window.screen.width;//屏幕宽度
    if (screenWid > 480) screenWid = '480px';//设置弹窗最大宽度

    function showQR(QR) {
        if (QR) {
            MainBox.css('background-image', 'url(' + QR + ')');
        }
        $('#donateBox').addClass('blur');
        QRBox.fadeIn(300, function (argument) {
            MainBox.addClass('showQR');
        });
    }

    $('#donateBox>li').click(function (event) {
        var thisID = $(this).attr('id');
        if (thisID === 'QQ' && QQ_SPONSORING_QRCODE.length > 0) {
            showQR(QQ_SPONSORING_QRCODE);
        } else if (thisID === 'AliPay' && ALIPAY_SPONSORING_QRCODE.length > 0) {
            showQR(ALIPAY_SPONSORING_QRCODE);
        } else if (thisID === 'WeChat' && WX_SPONSORING_QRCODE.length > 0) {
            showQR(WX_SPONSORING_QRCODE);
        }
    });

    MainBox.click(function (event) {
        MainBox.removeClass('showQR').addClass('hideQR');
        setTimeout(function (a) {
            QRBox.fadeOut(300, function (argument) {
                MainBox.removeClass('hideQR');
            });
            $('#donateBox').removeClass('blur');
        }, 600);
    });

});

/**
 *
 * @param t
 * @returns {number}
 */
function show_date_time(t) {
    window.setTimeout("show_date_time()", 1000);
    let BirthDay = new Date(t);
    let today = new Date();
    let timeold = (today.getTime() - BirthDay.getTime());
    let sectimeold = timeold / 1000;
    let secondsold = Math.floor(sectimeold);
    let msPerDay = 24 * 60 * 60 * 1000;
    let e_daysold = timeold / msPerDay;
    let daysold = Math.floor(e_daysold);
    let e_hrsold = (e_daysold - daysold) * 24;
    return daysold;
}
let searchHandler = null;
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
    }
});

function quickIcon(el , v)
{
    if (! v) {
        el.removeClass('fa fa-close x onX').addClass('fa fa-search');
    } else {
        el.removeClass('fa fa-search').addClass('fa fa-close x onX');
    }
}

// function apiHtmlBufferRender(view , template_id,  params)
// {
//     $.post(API_LIST_WITH_PATH , params , function (res) {
//         if (res.status != 200) {
//             return layer.alert("搜索失敗: " + res.message , {icon : 2});
//         } else {
//             layui.use(['laytpl'] , function () {
//                 let laytpl = layui.laytpl;
//                 laytpl(template_id.innerHTML).render(res.data , function (html) {
//                     view.innerHTML = html;
//                 });
//             });
//         }
//     } , 'JSON');
// }

// $(document).on('input propertychange' , 'input[id="api-search"]' , function (e) {
//     // 清空定时器
//     clearTimeout(searchHandler);
//     let value = $(this).val(),
//         icon = $('#api-search-icon');
//     searchHandler = setTimeout(function () {
//         quickIcon(icon , value);
//         apiHtmlBufferRender(document.getElementById('listApi') , document.getElementById('api-collect-template') , {value : value});
//     } , 150);
// });

// $(document).on('click' , '#api-search-icon.fa-close' , function (e) {
//     quickIcon($(e.target) , false);
//     $('input[id="api-search"]').val('');
//     apiHtmlBufferRender(document.getElementById('listApi') , document.getElementById('api-collect-template') , {});
// });

// setTimeout(function () {
//     apiHtmlBufferRender(document.getElementById('listApi') , document.getElementById('api-collect-template') , {});
// } , 100);
