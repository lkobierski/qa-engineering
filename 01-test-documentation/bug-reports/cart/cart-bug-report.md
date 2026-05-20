# BUG-001 — Product titles and descriptions display raw JavaScript code on the inventory page
## Application under test

https://www.saucedemo.com

---

# Bug Summary

Raw JavaScript code is displayed within product titles and descriptions on the inventory page instead of product names.

---

# Environment

| Component | Details |
|---|---|
| Browser | Google Chrome |
| Operating System | Windows 11 |
| Testing Type | Manual Testing |

---

# Severity

Medium

---

# Priority

High

---

# Preconditions

1. User is logged in
2. Products are visible on the inventory page

---

# Steps to Reproduce

1. Open inventory page
2. Verify product titles and descriptions

---

# Expected Result

Product titles and descriptions contain product names and are rendered correctly without raw code visible.

---

# Actual Result

Raw JavaScript code is visible within some product titles and descriptions on the inventory page instead of product names.

---

# Status

Open