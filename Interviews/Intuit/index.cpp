#include<bits/stdc++.h>

using namespace std;

//stack - [())] 

// ())
// (=1
//())()( 


bool checkBraccket(string str){
    //
    int len = str.size();

    // base
    if(len==0) return false;

    stack<char> stk;

    for(int i=0;i<len;i++){
        if(str[i]=='('){
            stk.push(str[i]);
        }else{
            if(stk.empty()){
                return false;
            }else{
                char top = stk.top();
                stk.pop();
                if(top!='('){
                    return false;
                }
            }
        }
        
    }
    return stk.size()?false:true;


}

int main(){
    // cout<<"Interview";
    cout<<checkBraccket("()")<<"\n";
    cout<<checkBraccket("(((())))")<<"\n";
    cout<<checkBraccket("(((())))")<<"\n";
    cout<<checkBraccket(")")<<"\n";
    cout<<checkBraccket("((")<<"\n";
    // checkBraccket("()");
    // checkBraccket("()");
    // checkBraccket("()");

    return 0;
}


