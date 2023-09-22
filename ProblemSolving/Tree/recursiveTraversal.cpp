#include <bits/stdc++.h>

using namespace std;

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void preorderTraversal(TreeNode *root)
{
    if (!root)
        return;

    cout << root->val << " ";
    preorderTraversal(root->left);
    preorderTraversal(root->right);
}

void inorderTraversal(TreeNode *root)
{
    if (!root)
        return;

    inorderTraversal(root->left);
    cout << root->val << " ";
    inorderTraversal(root->right);
}

void postorderTraversal(TreeNode *root)
{
    if (!root)
        return;

    postorderTraversal(root->left);
    postorderTraversal(root->right);
    cout << root->val << " ";
}

// Youtube Reference - https://www.youtube.com/watch?v=g_S5WuasWUE&t=233s&ab_channel=NeetCode
void inorderIterativeTraversal(TreeNode* root){
    TreeNode* curr = root;
    stack<TreeNode*> stk;

    while(curr || !stk.empty()){
        while(curr){
            stk.push(curr);
            curr = curr->left;
        }
        curr = stk.top();
        cout<<curr->val<<" ";
        stk.pop();
        curr = curr->right;
    }

}

//

void preorderIterativeTraversal(TreeNode* root){
    TreeNode* curr = root;

    stack<TreeNode*> stk;
    stk.push(curr);

    while(!stk.empty()){
        TreeNode* curr = stk.top();
        stk.pop();
        if(curr){
            cout<<curr->val<<" ";
            stk.push(curr->right);
            stk.push(curr->left);
        }
    }

}

int main()
{

    TreeNode *root = new TreeNode(34);
    TreeNode *left = new TreeNode(22);
    TreeNode *right = new TreeNode(38);

    root->left = left;
    root->right = right;

    root->left->left = new TreeNode(21);
    root->left->right = new TreeNode(30);

    root->right->left = new TreeNode(35);
    root->right->right = new TreeNode(40);

    cout << "Preorder Traversal - ";
       

    preorderTraversal(root);

    cout<<"\n\n";

    // cout << "Inorder Traversal - ";

    // inorderTraversal(root);

    // cout<<"\n\n";

    // cout << "Postorder Traversal - ";

    // postorderTraversal(root);

    // cout<<"\n\n";



    cout << "Inorder Iterative Traversal - ";

    inorderIterativeTraversal(root);

    cout<<"\n\n";

    cout << "Preorder Iterative Traversal - ";

    preorderIterativeTraversal(root);

    cout<<"\n\n";
}