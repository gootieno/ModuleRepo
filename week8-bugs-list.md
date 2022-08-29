# Week 8 Bugs List

## **HTTP Response Scenario Practice**

On the response scenario practice, the GIPHY question is phrased as having multiple options but only allows you to pick one. Just a small typo

```GIPHY: Which option(s) above could represent plausible HTTP response components for this scenario?```

# Practice Assessment and Assessment Bugs

## **Week 8 - Practice Assessment**

In the server.js line 75 is:

```colors.push({ colorId: colors.length, color });```

but should be:

```colors.push({ colorId: colors.length + 1, color });```

currently theres colorId: 1 and colorId: 2 but when you POST a new color the new colors colorId is 2 again.
