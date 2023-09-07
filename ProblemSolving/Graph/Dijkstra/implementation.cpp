#include<bits/stdc++.h>

using namespace std;
const int INF = 1000000000;


vector<vector<pair<int, int>>> adj;
void dijkstra(int s, vector<bool> &processed,vector<int> &distance){

    int noOfNodes = adj.size();
  
    int n = adj.size();
    distance.assign(n,INF);
    processed.assign(n,false);

    priority_queue<pair<int,int>> q;
    distance[0] = 0;
    // {distance to x,x}
    q.push({0,0});

    while(!q.empty()){
        int a = q.top().second;
        q.pop();
        if(processed[a]) continue;
        processed[a] = true;
        for(auto u:adj[a]){
            int b = u.first, w = u.second;
            if(distance[a]+w<distance[b]){
                distance[b] = distance[a] +w;
                q.push({-distance[b],b});
                
            }
        }
    }

    for(int i=0;i<n;i++){
        cout<<distance[i]<<" ";
    }
}

int main(){
    int n = 4;
    // adj(n);
    // adj[n];
    adj = {{{1,10},{3,5}},{{1,10},{2,10}},{{1,10},{3,10}},{{2,10},{1,5}}};

    // adj[0].push_back({1,10});
    // adj[0].push_back({3,40});
    // adj[1].push_back({1,10});
    // adj[1].push_back({2,10});
    // adj[2].push_back({1,10});
    // adj[2].push_back({3,10});
    // adj[3].push_back({2,10});
    // adj[3].push_back({1,40});
    vector<bool> processed;
    vector<int> distance;


    dijkstra(0,processed,distance);

    
    return 0;
}