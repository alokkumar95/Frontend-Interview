#include <bits/stdc++.h>

using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

void reorderList(ListNode *head)
{

    if (!head)
        return;

    // find the middle

    ListNode *slow = head, *fast = head->next;
    while (fast && fast->next)
    {
        slow = slow->next;
        fast = fast->next->next;
    }

    // reverse the second half
    ListNode *second = slow->next;
    ListNode *prev = nullptr;

    // when second==nullptr, prev will be head of second half
    while (second)
    {
        ListNode *temp = second->next;
        second->next = prev;
        prev = second;
        second = temp;
    }

    // print reversed on
    ListNode *temp = prev;
    while (temp)
    {
        cout << temp->val << " ";
        temp = temp->next;
    }

    // link the the both half as required
    ListNode *first = head;
    //    ListNode* second = prev;
    ListNode *temp1, *temp2;
    while (prev)
    {
        temp1 = first->next;
        temp2 = prev->next;
        first->next = prev;
        prev->next = temp1;
        first = temp1;
        prev = temp2;
    }
}

int main()
{
    ListNode *head = new ListNode(23);
    ListNode *second = new ListNode(24);
    ListNode *third = new ListNode(25);
    ListNode *fourth = new ListNode(26);
    ListNode *fifth = new ListNode(27);

    head->next = second;
    head->next->next = third;
    head->next->next->next = fourth;
    head->next->next->next->next = fifth;

    // cout << third->next->val;
    reorderList(head);
    ListNode* temp = head;
    while(temp){
        cout<<temp->val;
        temp=temp->next;

    }
    return 0;
}