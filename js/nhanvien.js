var nhanvien ={
    ma : '',
    ten : '',
    chucvu : '',
    luongcb : '',
    giolam :'',
    tongluong: function(chucvu, luongcb){
        switch(chucvu){
            case 'Giám đốc':
                {
                    return luongcb*3;
                }
                break
            case 'Trưởng phòng':
                {
                    return luongcb*2;
                }
                break
            case 'Nhân viên':
                {
                    return luongcb*1;
                }
                break
        }
    },
    xeploai: function(giolam){
        if(giolam >= 50 && giolam <80){
            return 'Nhân viên trung bình';
        } else if (giolam >= 80 && giolam <100){
            return 'Nhân viên khá';
        } else if (giolam >=100 && giolam <120){
            return 'Nhân viên giỏi';
        } else if( giolam >=120){
            return 'Nhân viên xuất sắc';
        }
        
    }
};