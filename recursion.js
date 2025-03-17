

function countHi(str) {
    if (str[0]=="h"&&str[1]=="i") {
        return 1+countHi(str.substring(2))
    } else {
        return countHi(str.substring(1))
    }
}

function fibonacci(n) {
    if (n==0||n==1) {
        return 1;
    } else {
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

function triangle(n) {
    if (n=0) {
        return 0;
    } else {
        return n+triangle(n-1);
    }
}

function reverseString(str) {
    if (str.length==1||str.length==0){
        return str;
    } else {
        return str[str.length-1]+reverseString(str.substring(1,str.length-1))+str[0];
    }
}

function sumDigits(x) {
    let y=x.toString();
    let sum=0
    for (let i=0; i<y.length; i++) {
        sum+=Number(y[i]);
    }
    return sum;
}

function palindrome() {
    if(str.length==1||str.length==0){return true}
    if (str[0]==str[str.length-1]){return palindrome(str.substring(1,str.length-1))}
    return false;
}

function cheatingPalindrome(str) {
    return str==reverseString(str);
}

function binarySearch(arr,val) {
    let num=(arr.length-arr.length%2)/2;
    if(arr.length==0){return -1}
    if (arr[num]==val){return num} 
    if (arr[num]<val){
        return num+1+binarySearch(arr.splice(num+1,arr.length-num-1),val)
    } else {
        return binarySearch(arr.splice(0,num),val);
    }
}



function pTri(n) {
    if(n==1){return [[1]]}
    let res=pTri(n-1);
    res.push(pRow(res));
    return res;
}

// takes in first n-1 rows of pascal's triangle
//and outputs the next row
function pRow(r) {
    var n=r.length-1;
    let row = [1];
    for (let i=0; i<n; i++) {
        row.push(r[n][i]+r[n][i+1]);
    }
    row.push(1);
    return row;
}


function perm(str){
    let arr=[];
    let l = str.length;
    if(l==1){ return [str] }
    for (let i=0; i<l; i++) {
        let tStr="";
        for (let k=0; k<l; k++){if(k!=i){tStr+=str[k]}}
        let temp=perm(tStr);
        for (let j=0; j<temp.length; j++){
            arr.push(str[i]+temp[j])
        }
    }
    return arr;
}

function arrPerm(arr){
    let final=[];
    let l = arr.length;
    if(l==1){ 
        return [[].concat(arr)]; 
    }
    for (let i=0; i<l; i++) {
        let tArr=[].concat(arr);
        tArr.splice(i,1);
        let temp=arrPerm(tArr);
        for (let j=0; j<temp.length; j++){
            temp[j].push(arr[i])
            final.push(temp[j])
        }
    }
    return final;
}


function subSets(arr) {
    if (arr.length==0) {return [[]]}
    let sets=[arr];
    let tArr=[].concat(arr);
    for (let i=0; i<arr.length; i++) {
        tArr.splice(i,1);
        sets=sets.concat(subSets(tArr));
        tArr=[];
        for(let j=0; j<arr.length; j++) {
            tArr.push(arr[j]);
        }
    }
    return removeRedundancy(sets);
}

function removeRedundancy(arr) {
    let nArr=[];
    for (let i=0; i<arr.length; i++) {
        let bool=true;
        for (let j=0; j<nArr.length; j++) {
            if (equal(nArr[j],arr[i])) {bool=false}
        }
        if(bool) {nArr.push(arr[i])}
    }
    return nArr;
}

//checks whether two arrays are equal
function equal(a,b) {
    if (a.length!=b.length) {return false}
    for (let i=0; i<a.length; i++) {
        if (a[i]!=b[i]) {return false}
    }
    return true;
}


function comboSum(arr, num) {
    let final=[];
    if (arr.length==1) {
        if (num%arr[0]==0) {
            let temp=[];
            for (let i=0; i<num/arr[0]; i++) {
                temp.push(arr[0]);
            }
            final.push(temp);
            return final;
        } else {
            return final;
        }
    }
    
    
    let original=[].concat(arr);
    for (let i=0; i<original.length; i++) {
        let temp=arr[i];
        arr.splice(i,1);
        let n=Math.floor(num/temp);
        let tArr=[];
        for (let k=0; k<=n; k++) {
            if (k!=0) {
                tArr.push(temp);
                num-=temp;
            }
            if (num==0) {final.push(tArr);}
            let rec=comboSum(arr,num);
            for (let j=0; j<rec.length; j++) {
                final.push(tArr.concat(rec[j]));
            }
        }
        arr=[].concat(original);
        num+=n*arr[i];
    }
    return removeRedundancyCSum(final);
}

function removeRedundancyCSum(arr) {
    let final=[]
    for (let i=0; i<arr.length; i++) {
        let tArr=arrPerm(arr[i]);
        let bool=true;
        for (let j=0; j<tArr.length; j++) {
            for (let k=0; k<final.length; k++) {
                if (equal(tArr[j],final[k])) {bool=false}
            }
        }
        if(bool){final.push(arr[i])}
    }
    return final
}










console.log(comboSum([1,2,3,4,5,6],6))