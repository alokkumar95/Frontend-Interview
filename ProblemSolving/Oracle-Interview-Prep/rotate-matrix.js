let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];


function rotateMatrix(){
    let m = matrix.length;
    let n = matrix[0].length;

    let k=0,l=0,i;

    while(k<m&&l<n){

        for(i=l;i<n;i++){
            console.log(matrix[k][i]," ");
        }
        k++;

        for(i=k;i<m;i++){
            console.log(matrix[i][n-1]," ");
        }
        n--;

        

        for(i=n-1;i>=l;i--){
            console.log(matrix[m-1][i]," ");
        }
        m--;

        for(i=m-1;i>=k;i--){
            console.log(matrix[i][l]," ")
        }
        l++;
    }
}

rotateMatrix(matrix)