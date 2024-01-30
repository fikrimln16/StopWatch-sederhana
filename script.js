window.onload = function () {
  var milidetik = 0;
  var detik = 0;
  var menit = 0;
  var jam = 0;

  var tambahMilidetik = document.getElementById("milidetik");
  var tambahDetik = document.getElementById("detik");
  var tambahMenit = document.getElementById("menit");
  var tambahJam = document.getElementById("jam");

  var descTimer = document.getElementById("desc-list")

  var buttonStart = this.document.getElementById("play");
  var buttonStop = this.document.getElementById("stop");
  var buttonReset = this.document.getElementById("reset");

  var Interval;


  function startTimer() {
    milidetik++;


    if (milidetik < 9) {
      tambahMilidetik.innerHTML = "0" + milidetik;
    }
    if (milidetik > 9) {
      tambahMilidetik.innerHTML = milidetik;
    }
    if (milidetik > 99) {
      detik++;
      tambahDetik.innerHTML = "0" + detik;
      milidetik = 0;
      tambahMilidetik.innerHTML = "0" + milidetik;
    }
    if (detik > 9) {
      tambahDetik.innerHTML = detik;
    }


    if (detik > 59) {
      menit++;
      tambahMenit.innerHTML = "0" + menit;
      detik = 0;
      tambahDetik.innerHTML = "0" + detik;
    }
    if (menit > 9) {
      tambahMenit.innerHTML = menit;
    }

    if (menit > 59) {
      jam++;
      tambahJam.innerHTML = "0" + jam;
      menit = 0;
      tambahMenit.innerHTML = "0" + menit;
    }
    if (jam > 9) {
      tambahJam.innerHTML = jam;
    }
  }

  buttonStart.onclick = function () {
    clearInterval(Interval);
    //menjalankan stopwatch dengan menggunakan interval
    Interval = setInterval(startTimer, 10);
    descTimer.innerHTML = "starts now";
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
    descTimer.innerHTML = "stopped";
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    milidetik = "00";
    detik = "00";
    menit = "00";
    jam = "00";
    tambahMilidetik.innerHTML = milidetik;
    tambahDetik.innerHTML = detik;
    tambahMenit.innerHTML = menit;
    tambahJam.innerHTML = jam;
    descTimer.innerHTML = "has been reset";
  };
};
