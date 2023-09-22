#include <bits/stdc++.h>

using namespace std;

bool comparator(pair<int, int> a, pair<int, int> b)
{
    return a.first > b.first;
}

int main()
{
    vector<pair<int, int>> arr = {{0, 30}, {5, 10}, {15, 20}, {6, 34}, {3, 23}};
    int len = arr.size();

    // use lambda function sort a pair in descending order with respect to
    // first element
    sort(arr.begin(), arr.end(), [](pair<int,int> &a, pair<int,int> &b)
         { return a.first > b.first; });

    for (int i = 0; i < len; i++)
    {
        cout << "\n"
             << arr[i].first << " " << arr[i].second;
    }

    return 0;
}