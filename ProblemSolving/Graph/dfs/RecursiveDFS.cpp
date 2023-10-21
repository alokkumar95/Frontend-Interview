#include<bits/stdc++.h>
using namespace std;

// DFS function for node u and graph adj
void dfs(vector<int> adj[],int u,vector<bool> &visited){
    // Marked u as visited
    visited[u] = true;
    cout<<u<<" ";

    // Travelling over all the neighboring nodes
    for(int i=0;i<adj[u].size();i++){

        // v is the adjacent node
        int v = adj[u][i];

        // if v has not been visited before
        // then perform DFS on it again
        if(visited[v]==false){
            dfs(adj,v,visited);
        }
    }
}

int main(){
    // Number of nodes
    int n = 5;

    // Adjacency List for a directed Graph
    vector<int> adj[n];
    // adj[0] = {1,2,3};
    // adj[1] = {4};
    // adj[2] = {};
    // adj[3] = {2};
    // adj[4] = {};

    adj[0] = {1};
    adj[1] = {};
    adj[2] = {0,3,4};
    adj[3] = {};
    adj[4] = {3};

    // initialize the visited array with false;
    vector<bool> visited(n,false);

    //Let's start the DFS from node 0
    dfs(adj,2,visited);

}