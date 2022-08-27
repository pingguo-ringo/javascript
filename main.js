'use strict';
{   
    var time = 0;
    var timerLabel = document.getElementById('timerLabel');
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');
    var id;  // setTimeoutから返される値を入れる変数

    // STARTボタン
    function start() {
        // スタートボタンを押せないようにする（これをしないと何回もスタートボタン押せてしまう）
        startBtn.disabled = true;
        // timeをsetTimeoutで設定したミリ秒ごとに1プラスする
        time++;  

        //分・秒・ミリ秒を計算
        var hour = Math.floor(time/100/60/60)
        var min = Math.floor(time/100/60)
        var sec = Math.floor(time/100);
        var mSec = time % 100;
        // 分・秒・ミリ秒が１桁の場合は、先頭に０をつける
        if (hour < 10) hour = '0' + hour;
        if (min >= 60) min = min % 60;
        if (min < 10) min = '0' + min;
        if (sec >= 60) sec = sec % 60; // 秒が60秒以上になった場合の処理（60になったら0になる）
        if (sec < 10) sec = '0' + sec; 
        if (mSec < 10) mSec = '0' + mSec;

        // timerLabelを更新
        timerLabel.innerHTML = hour + ':' + min + ':' + sec + ':' + mSec;
        // setTimeoutでstart関数をループさせるイメージ？
        id = setTimeout(start, 10);
    }

    // STOPボタン
    function stop() {
        // 停止する
        clearTimeout(id);
        // スタートボタンを押せるようにする
        startBtn.disabled = false;

    }

    // RESETボタン
    function reset() {
        // 停止する
        clearTimeout(id);
        // タイムを0に戻す
        time = 0;
        // タイマーラベルをリセット
        timerLabel.innerHTML = '00:00:00:00';
        // スタートボタンを押せるようにする
        startBtn.disabled= false;
    }

    // クリックした時の処理
    startBtn.addEventListener('click', start, false); // STARTボタン
    stopBtn.addEventListener('click', stop, false); // STOPボタン
    resetBtn.addEventListener('click', reset, false); // RESETボタン
}