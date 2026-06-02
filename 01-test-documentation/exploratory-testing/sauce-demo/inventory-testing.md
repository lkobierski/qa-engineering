# Exploratory Testing Session — Inventory Page

## Application under test

https://www.saucedemo.com

---

# Session Information

| Field | Details |
|---|---|
| Session ID | EXP-INV-001 |
| Tester | LUK4SZ-QA |
| Date | |
| Duration | 45 minutes |
| Area | Inventory |
| Browser | Google Chrome |
| Operating System | Windows 11 |

---

# Test Charter

Explore the inventory page to identify issues related to product visibility, sorting, product data consistency, navigation and basic UI behavior.

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |
| problem_user | secret_sauce |

---

# Areas Explored

- Product list visibility
- Product titles and descriptions
- Product images
- Product prices
- Sorting options
- Navigation menu
- Page refresh behavior
- Add to cart buttons

---

# Notes

- Verified whether product information is displayed correctly.
- Checked sorting behavior for all available sorting options.
- Compared product titles, descriptions and prices between inventory and cart where applicable.
- Checked whether product images match corresponding products.
- Verified inventory page behavior after refresh.

---

# Findings

| ID | Finding | Severity | Notes |
|---|---|---|---|
| F001 | Product images display incorrect assets for problem_user | Medium | Reported as BUG-INVENTORY-003 |
| F002 | Product sorting resets to default after page refresh | Low | Reported as BUG-INVENTORY-002 |
| F003 | Raw JavaScript code is visible in product titles/descriptions | Medium | Reported as BUG-INVENTORY-001 |
| F004 | Some products cannot be added to cart using Add to cart button | High | Reported as BUG-INVENTORY-004 |

---

# Bugs Found

| Bug ID | Summary |
|---|---|
| BUG-INVENTORY-001 | Product titles and descriptions display raw JavaScript code on the inventory page |
| BUG-INVENTORY-002 | Product sorting resets to default after page refresh |
| BUG-INVENTORY-003 | Product images on the inventory page are replaced with incorrect assets |
| BUG-INVENTORY-004 | Some products cannot be added to shopping cart using Add to cart button |

---

# Session Summary

The inventory page was tested using standard_user and problem_user accounts. Several issues were identified in product rendering, sorting persistence, product images and add to cart behavior. The most critical issue found during this session affects the ability to add selected products to the shopping cart. 