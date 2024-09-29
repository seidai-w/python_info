document.addEventListener("DOMContentLoaded", function() {
    console.log("Wikiページが読み込まれました");
    // 他に必要なJavaScriptコードをここに記述できます
});
function copyCode(codeId) {
    const codeElement = document.getElementById(codeId);
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges(); // 既存の選択をクリア
    window.getSelection().addRange(range); // コードを選択

    try {
        document.execCommand('copy'); // コピーコマンドを実行
        alert('コードがコピーされました！');
    } catch (err) {
        alert('コピーに失敗しました。');
    }

    window.getSelection().removeAllRanges(); // 選択をクリア
}