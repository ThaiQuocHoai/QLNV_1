document.querySelector('#hienthi').onclick = function(event){
    event.preventDefault();
    nhanvien.ma = document.querySelector('#maNv').value;
    nhanvien.ten = document.querySelector('#tenNv').value;
    nhanvien.chucvu = document.querySelector('#chucVu').value;
    nhanvien.luongcb = document.querySelector('#luonCb').value;
    nhanvien.giolam = document.querySelector('#gioLam').value;
    document.querySelector('#txtTen').innerHTML = nhanvien.ten;
    document.querySelector('#txtMa').innerHTML = nhanvien.ma;
    document.querySelector('#txtChucVu').innerHTML = nhanvien.chucvu;
    document.querySelector('#txtTongLuon').innerHTML = nhanvien.tongluong(nhanvien.chucvu, nhanvien.luongcb);
    document.querySelector('#txtXepLoai').innerHTML = nhanvien.xeploai(nhanvien.giolam);
}
