/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges 
(each edge is a pair of nodes), write a function to check whether these
edges make up a valid tree.
*/

#include<bits/stdc++.h>

using namespace std;


// dfs will just help to detect cycle
bool dfs(vector<vector<int>> &adj,int n,int currentNode,int prevNode,vector<int> &visited){

    // cycle detected - if currentNode is already visited
    if(visited[currentNode]){
        return false;
    }
    visited[currentNode] = 1;

    for(int neighbor:adj[currentNode]){
        // ignore prevNode because they already visited
        if(neighbor == prevNode){
            continue;
        }
       if(!dfs(adj,n,neighbor,currentNode,visited)){
        return false;
       }
    }
    return true;
}

int main(){


    // 5 node is separated from others
    vector<vector<int>> edges = {{0, 1},{0, 2},{0,3},{1,4},{5,5}};

    // get adjacency list from the edges;
    int rows = 6;

    vector<vector<int>> adj(rows);
    vector<int> visited(rows,0);

   

    // create adj list

    for(int i=0;i<edges.size();i++){
        adj[edges[i][0]].push_back(edges[i][1]);
        adj[edges[i][1]].push_back(edges[i][0]);
    }

    bool cyle = dfs(adj,rows,0,-1,visited);
    for(int i=0;i<rows;i++){
        cout<<visited[i]<<" ";
    }



  // print adj list

    // for(int i=0;i<rows;i++){
    //     cout<<"\ni--"<<i<<"-";
    //     for(int j=0;j<adj[i].size();j++){
    //         cout<<adj[i][j]<<" ";
    //     }
    // }

    return 0;
}