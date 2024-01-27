The impact on performance largely depends on the size and complexity of your user object and how frequently you call the getUserDetails function. However, in this specific case, the performance impact is likely to be minimal.

The getUserDetails function simply iterates over a predefined set of fields and extracts them from the user object. Unless you have an exceptionally large user object or you call this function very frequently, the impact on performance should not be significant.

In general, when dealing with performance concerns:

Optimize Rendering: React is efficient at handling updates, and it only updates the parts of the UI that have changed. If the component doesn't need to re-render, it won't.

Memoization: If you find that the getUserDetails function is being called too frequently and you want to avoid unnecessary computations, you can use memoization techniques like useMemo to cache the result of the function.

```js
const { getUserDetails } = useUserDetails();
const userDetails = useMemo(() => getUserDetails(), [getUserDetails]);
```

Profile: Use browser developer tools to profile your application's performance. This will help you identify any bottlenecks and areas that may need optimization.
Always measure the actual impact on performance in your specific use case and consider optimizing if you observe any issues. In this case, the function is relatively simple, so the impact is likely to be minimal.