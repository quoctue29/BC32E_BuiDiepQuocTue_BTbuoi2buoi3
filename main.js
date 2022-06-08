/* ---- Bài tập 1 ----- */

document.getElementById('btnTinhLuong').onclick = function (){
var nhapLuong = document.getElementById('nhapLuong').value;
var soNgayLam = document.getElementById('soNgayLam').value;
var tienLuong = 0 ;
tienLuong = nhapLuong * soNgayLam ;
document.getElementById('tienLuong').innerHTML = 'Tiền Lương là :' + tienLuong + 'VND';
}

/* ---- Bài tập 2 ----- */

document.getElementById('btnTinhTrungBinh').onclick = function () {
    var soThuNhat = Number(document.getElementById('soThuNhat').value);
    var soThuHai = Number(document.getElementById('soThuHai').value);
    var soThuBa = Number(document.getElementById('soThuBa').value);
    var soThuBon = Number(document.getElementById('soThuBon').value);
    var soThuNam = Number(document.getElementById('soThuNam').value);
    var trungBinh = 0 ;
    trungBinh = (soThuNhat+soThuHai+soThuBa+soThuBon+soThuNam)/5 ;
    document.getElementById('trungBinh').innerHTML = 'Trung bình của 5 số thực là :' + trungBinh; 
}

/* ---- Bài tập 3 ----- */
document.getElementById('btnDoiUSD').onclick = function () {
    var nhapSo = Number(document.getElementById('nhapSo').value);
    var giaUSD = 23500;
    var quyDoi = 0;
    quyDoi = nhapSo * giaUSD;
    document.getElementById('quyDoi').innerHTML = 'Quy đổi sang VND : ' + quyDoi + 'VNĐ';
}





/* ---- Bài tập 4 ----- */

document.getElementById('btnTinhDienTichChuVi').onclick = function (){
    var chieuDai = Number(document.getElementById('chieuDai').value);
    var chieuRong = Number(document.getElementById('chieuRong').value);
    var dienTich = 0 ;
    var chuVi = 0 ;
    dienTich = chieuDai * chieuRong;
    chuVi = ( chieuDai + chieuRong) * 2;
    document.getElementById('dienTich').innerHTML = 'Diện tích là : ' + dienTich;
    document.getElementById('chuVi').innerHTML = 'Chu vi là : ' + chuVi;
}






/* ---- Bài tập 5 ----- */

document.getElementById('btnTinhTong').onclick = function () {
    var kySo = Number(document.getElementById('kySo').value);
    var donVi = 0;
    var chuc = 0;
    var tongKySo = 0;
    donVi = Math.floor(kySo % 10);
    chuc = Math.floor(kySo / 10);
    tongKySo = donVi + chuc;
    document.getElementById('tongKySo').innerHTML = 'Tổng 2 ký số là: ' + tongKySo;
}