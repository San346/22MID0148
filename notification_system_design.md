# Stage 1

## Problem Statement

The goal is to display the top 10 most important unread notifications for students in a campus notification system.

Priority is determined using:

1. Notification Type Priority
2. Recency of Notification

Placement notifications are considered most important, followed by Results and Events.

---

## Priority Logic

The following weights are assigned:

| Notification Type | Priority |
|-------------------|----------|
| Placement         | 3        |
| Result            | 2        |
| Event             | 1        |

Notifications are first sorted by priority score and then by latest timestamp.

---

## Approach Used

1. Fetch notifications from the API using Axios.
2. Add a priority score for each notification.
3. Sort notifications using:
   - Higher priority first
   - Latest timestamp first
4. Select top 10 notifications using `slice(0,10)`.
5. Display output using `console.table()`.

---

## Efficient Maintenance of Top 10

As new notifications arrive continuously, maintaining all notifications is inefficient.

A better approach is to use a Min Heap (Priority Queue) of size 10.

Steps:
1. Insert notifications into heap.
2. Remove lowest priority notification when heap size exceeds 10.
3. Heap always contains the top 10 notifications efficiently.

Time Complexity:
- Sorting approach: O(n log n)
- Heap approach: O(n log 10)

---

## Logging Middleware Usage

The reusable `Log()` middleware function is integrated throughout the application for:
- Application startup logs
- API request logs
- Success logs
- Error logs

This improves debugging and observability.