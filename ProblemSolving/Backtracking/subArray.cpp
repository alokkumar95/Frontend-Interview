#include<bits/stdc++.h>

using namespace std;

vector<vector<int>> getSubarray(vector<int> nums){

    vector<vector<int>> subarr;
    int start=0,end=0;

    for(int num:nums){
        vector<int> temp = {num};
        subarr.push_back(temp);
        for(int i = start;i<end;i++){
            temp = subarr[i];
            temp.push_back(num);
            subarr.push_back(temp);
        }
        start = end;
        end = subarr.size();
    }
    return subarr;
}


int  main(){
    vector<int> nums = {2,3,3,1,5};

    vector<vector<int>> subarr = getSubarray(nums);

    for(int i=0;i<subarr.size();i++){
        for(int j=0;j<subarr[i].size();j++){
            cout<<subarr[i][j]<<" ";
        }
        cout<<"\n";
    }

    return 0;
}

/**
 * How it is working 
 * 
 * Let's take an example
 * 
 * [2,3,1,4]
 * 
 * [[2]]
 * [[2],[3],[2,3]]
 * [[2],[3],[2,3],[1],[3,1],[2,3,1]]
 * [[2],[3],[2,3],[1],[3,1],[2,3,1],[4],[1,4],[3,1,4],[2,3,1,4]]
 * 
 * 
 * Time Complexity - (n * (n+1))/2 - O(n*n)
 * Space Complexity - O(n*n)
 * 
 */ 