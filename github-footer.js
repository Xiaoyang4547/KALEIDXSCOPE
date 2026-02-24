// 本地开发时：若未替换 __LAST_UPDATE__，则显示 "-"
(function () {
    var el = document.querySelector('.github-footer-update');
    if (el && el.textContent.indexOf('__LAST_UPDATE__') >= 0) {
        el.textContent = '更新于 -';
    }
})();
