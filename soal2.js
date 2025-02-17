const calculator = (nums1,operator, nums2) =>{
    if(typeof nums1 !== "number" || typeof nums2 !== "number")return console.log("======== Inputan angkanya harus number bro! ========")
    let result;
    switch(operator){
        case "+":
            result = nums1 + nums2;
           console.log(`======== Hasil Penambahan ${nums1} di tambah dengan ${nums2} adalah : ${result} ========`);
           break;
        case "-":
            result = nums1 - nums2;
            console.log(`======== Hasil Pengurangan ${nums1} di kurang dengan ${nums2} adalah : ${result} ========`);
            break;
        case "*":
            result = nums1 * nums2;
            console.log(`======== Hasil  Perkalian ${nums1} di kali dengan ${nums2} adalah : ${result} ========`);
            break;
        case "/":
            result = nums1 / nums2;
            console.log(`======== Hasil Pembagian ${nums1} di bagi dengan ${nums2} adalah : ${result} ========`);
            break;
        default:
            console.log("======== Operator yang anda masukkan salah! Masukkan ========");
    }
}


calculator(10, "+", 10);
calculator(10, "-", 10);
calculator(10, "*", 10);
calculator(10, "/", 10);
