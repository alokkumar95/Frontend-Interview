#include<bits/stdc++.h>

using namespace std;

int main(){
    vector<int> arr = {4,23,78,56};

    vector<int> arr2;

    // copy(arr.begin(),arr.end(),back_inserter(arr2));
    // arr2.assign(arr.begin(),arr.end());
    //  for(int i=0;i<arr2.size();i++){
    //     cout<<arr2[i]<<" ";
    // }

    vector<int> arr3(arr); 
     for(int i=0;i<arr3.size();i++){
        cout<<arr3[i]<<" ";
    }

   
    return 0;
}