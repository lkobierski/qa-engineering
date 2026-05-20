# BUG-INVENTORY-002 — Product sorting resets to default after page refresh

## Application under test

https://www.saucedemo.com

---

# Bug Summary

Selected product sorting option resets to default after page refresh.

---

# Environment

| Component | Details |
|---|---|
| Browser | Google Chrome |
| Operating System | Windows 11 |
| Testing Type | Manual Testing |

---

# Severity

Low

---

# Priority

Medium

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Preconditions

1. User is logged in
2. Inventory page is accessible

---

# Steps to Reproduce

1. Open inventory page
2. Navigate to product sorting option
3. Select any sorting option other than default
4. Verify products are sorted according to the selected option
5. Refresh page
6. Verify the sorting option and products order

---

# Expected Result

Sorting option remains unchanged after page refresh and products are sorted accordingly.

---

# Actual Result

Selected sorting option resets to default and products are no longer sorted according to the previous selection.

---

# Status

Open

# Attachments

[BUG-002 Recording](./attachments/bug-002.mp4)

---