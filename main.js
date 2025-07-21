// In ra mảng để xử lý cho các bài sau
let listNumber = [];
function themSo(){
    let number = document.getElementById("number").value * 1;
    listNumber.push(number);
    const infor = document.getElementById("inforListNumber");
    infor.innerHTML = listNumber;
    document.getElementById("number").value = "";
}

// BÀI TẬP 1: Tổng số dương
// INPUT: Mảng các số (listNumber) 
// PROCESS: 
// + Duyệt qua từng phần tử trong mảng
// + Kiểm tra nếu số > 0 thì cộng vào biến sum 
// OUTPUT: Hiển thị tổng các số dương ra inforBT1
function btnBT1(){
    let sum = 0;
    for(let i=0; i<listNumber.length; i++){
        if(listNumber[i] > 0){
            sum += listNumber[i];
        }
    }
    document.getElementById("inforBT1").textContent = `Tổng số dương: ${sum}`;
}

// BÀI TẬP 2: Đếm số dương
// INPUT: Mảng các số (listNumber) 
// PROCESS: 
//  + Duyệt qua từng phần tử trong mảng 
//  + Kiểm tra nếu số > 0 thì tăng biến đếm count 
// OUTPUT: Hiển thị số lượng số dương ra inforBT2
function btnBT2(){
    let count = 0;
    for(let i=0; i<listNumber.length; i++){
        if(listNumber[i] > 0){
            count++;
        }
    }
    document.getElementById("inforBT2").textContent = `Số số dương: ${count}`;
}

// BÀI TẬP 3: Tìm số nhỏ nhất
// INPUT: Mảng các số (listNumber) 
// PROCESS: 
//  + Khởi tạo biến minn = 9999999999 
//  + Duyệt qua từng phần tử, so sánh và cập nhật minn 
//  + Kiểm tra nếu mảng rỗng 
// OUTPUT: Hiển thị số nhỏ nhất hoặc thông báo mảng rỗng ra inforBT3
function btnBT3(){
    let minn = 9999999999;
    for(let i=0; i<listNumber.length; i++){
        if(listNumber[i] < minn){
            minn = listNumber[i];
        }
    }
    if(minn != 9999999999){
        document.getElementById("inforBT3").textContent = `Số nhỏ nhất: ${minn}`;
    }
    else{
        document.getElementById("inforBT3").textContent = ` Mảng chưa có phần tử nên không tìm được số nhỏ nhất`
    }
}
// Bài tập 4: Tìm số dương nhỏ nhất
// INPUT: Mảng các số (listNumber) 
// PROCESS: 
//  + Khởi tạo biến minn = 9999999999. 
//  + Duyệt qua từng phần tử, kiểm tra nếu là số dương và nhỏ hơn minn
//  + Kiểm tra các trường hợp: mảng rỗng, không có số dương 
// OUTPUT: Hiển thị số dương nhỏ nhất hoặc thông báo lỗi ra inforBT4
function btnBT4(){
    let minn = 9999999999;
    for(let i=0; i<listNumber.length; i++){
        if(listNumber[i] > 0 && listNumber[i] < minn){
            minn = listNumber[i];
        }
    }
    if(listNumber.length == 0){
        document.getElementById("inforBT4").textContent = `Mảng chưa có phần tử nên không tìm được số dương nhỏ nhất`
    }
    else{
        if(minn != 9999999999){
            document.getElementById("inforBT4").textContent = `Số dương nhỏ nhất: ${minn}`;
        }
        else{
            document.getElementById("inforBT4").textContent = `Mảng không có số dương nào nên không tìm được số dương nhỏ nhất`;
        }
    }
}

// BÀI TẬP 5: Tìm số chẵn cuối cùng
// INPUT: Mảng các số (listNumber) 
// PROCESS:
//  + Duyệt mảng từ cuối về đầu (i = length-1; i >= 0; i--)
//  + Kiểm tra nếu số chia hết cho 2 (% 2 == 0) thì dừng lại 
// OUTPUT: Hiển thị số chẵn cuối cùng hoặc thông báo không tìm thấy ra inforBT5
function btnBT5(){
    let ans = -1;
    for(let i=listNumber.length-1; i>=0; i--){
        if(listNumber[i] % 2 == 0){
            ans = listNumber[i];
            break;
        }
    }
    if(ans != -1){
        document.getElementById("inforBT5").textContent = `Số chẵn cuối cùng: ${ans} `
    }
    else{
        document.getElementById("inforBT5").textContent = ` Mảng không có số chẵn nên không tìm được số chẵn cuối cùng`

    }
}

// BÀI TẬP 6: Đổi chỗ hai vị trí
// INPUT: 
//  + Mảng các số (listNumber)
//  + Vị trí thứ nhất (posFirstBT6)
//  + Vị trí thứ hai (posSecondBT6) 
// PROCESS:
//  + Kiểm tra tính hợp lệ của vị trí (0 ≤ pos < length)
//  + Sử dụng biến tạm để hoán đổi: tmp = arr[pos1], arr[pos1] = arr[pos2], arr[pos2] = tmp 
// OUTPUT: Hiển thị mảng sau khi đổi chỗ hoặc thông báo lỗi ra inforBT6
function btnBT6(){
    let pos1 = document.getElementById("posFirstBT6").value * 1;
    let pos2 = document.getElementById("posSecondBT6").value * 1;
    
    // Kiểm tra vị trí hợp lệ
    if(pos1 < 0 || pos1 >= listNumber.length || pos2 < 0 || pos2 >= listNumber.length){
        document.getElementById("inforBT6").textContent = `Vị trí không hợp lệ. Vui lòng nhập từ 0 đến ${listNumber.length - 1}`;
        return;
    }
    
    let tmp = listNumber[pos1];
    listNumber[pos1] = listNumber[pos2];
    listNumber[pos2] = tmp;
    document.getElementById("inforBT6").textContent = ` Mảng sau khi đổi chỗ là: ${listNumber}`;
}

// BÀI TẬP 7: Sắp xếp tăng dần
// INPUT: Mảng các số (listNumber) 
// PROCESS:
//  + Sử dụng hàm sort((a, b) => a - b) để sắp xếp mảng tăng dần 
// OUTPUT: Hiển thị mảng đã được sắp xếp ra inforBT7
function btnBT7(){
    listNumber.sort((a, b) => a - b);
    document.getElementById("inforBT7").textContent = listNumber;
}

// BÀI TẬP 8: Tìm số nguyên tố đầu tiên
// INPUT: Mảng các số (listNumber) 
// PROCESS:
// + Duyệt qua từng phần tử trong mảng
// + Kiểm tra từng số có phải số nguyên tố không bằng hàm checkPrime()
// + Hàm Number.isInteger(): Kiểm tra coi số đó có phải số nguyên không
// + Hàm checkPrime(): Kiểm tra từ 2 đến √x xem có ước số nào không
// + Dừng khi tìm thấy số nguyên tố đầu tiên 
// OUTPUT: Hiển thị số nguyên tố đầu tiên hoặc thông báo không tìm thấy ra inforBT8
function checkPrime(x){
    if(x <= 1){
        return 0;
    }
    for(let i=2; i*i <= x; i++){
        if(x % i == 0){
            return 0;
        } 
    }
    return 1;
}
function btnBT8(){
    let ans = -1
    for(let i=0; i<listNumber.length; i++){
        if(Number.isInteger(listNumber[i]) == 1 && checkPrime(listNumber[i]) == 1){
            ans = listNumber[i];
            break;
        }
    }
    if(ans != -1){
        document.getElementById("inforBT8").textContent = `Số nguyên tố đầu tiên: ${ans}`;
    }
    else{
        document.getElementById("inforBT8").textContent = `Không tìm được số nguyên tố trong mảng`;
    }
}

// BÀI TẬP 9: Đếm số nguyên
// INPUT:
//  + Input từ người dùng (numberBT9)
//  + Mảng các số thực (listCheck) 
// PROCESS:
//  + Thêm số từ input vào mảng listCheck bằng hàm themSoBT9()
//  + Duyệt qua từng phần tử trong mảng listCheck
//  + Kiểm tra từng số có phải số nguyên không bằng Number.isInteger()
//  + Đếm số lượng số nguyên 
// OUTPUT:
//  + Hiển thị mảng hiện tại ra inforNumberBT9
//  + Hiển thị số lượng số nguyên ra inforBT9
let listCheck = [];
function themSoBT9(){
    let num = document.getElementById("numberBT9").value * 1;
    listCheck.push(num);
    document.getElementById("inforNumberBT9").textContent = listCheck;
    document.getElementById("numberBT9").value = "";
}
function btnBT9(){
    let count = 0;
    for(let i=0; i<listCheck.length; i++){
        if(Number.isInteger(listCheck[i]) == 1){
            count ++;
        }
    }
    document.getElementById("inforBT9").textContent = ` Số số nguyên: ${count}`;
}

// BÀI TẬP 10: So sánh số lượng số âm và số dương
// INPUT: Mảng các số (listNumber) 
// PROCESS:
//  + Duyệt qua từng phần tử trong mảng
//  + Đếm số lượng số âm (count1: số < 0) và số dương (count2: số > 0)
//  + So sánh hai giá trị đếm được (count1 vs count2) 
// OUTPUT: Hiển thị kết quả so sánh (=, >, <) giữa số âm và số dương ra inforBT10
function btnBT10(){
    let count1 = 0; // Số âm
    let count2 = 0; // Số dương
    for(let i=0; i<listNumber.length; i++){
        if(listNumber[i] > 0){
            count2++;
        }
        else if(listNumber[i] < 0){
            count1++;
        }
    }
    if(count1 == count2){
        document.getElementById("inforBT10").textContent = `Số âm = Số dương`;
    }
    else if(count1 > count2){
        document.getElementById("inforBT10").textContent = `Số âm > Số dương`;
    }
    else{
        document.getElementById("inforBT10").textContent = ` Số âm < Số dương`
    }
}