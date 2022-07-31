function check_permutation(str1, str2){
    let result="";
    if(str1.length == str2.length){
        for(let i=0; i<str1.length; i++){
                if(str1.includes(str2[i])){
                    result="yes"
                }else{
                    result="no"
                }
        }
        return result;
    }
}
