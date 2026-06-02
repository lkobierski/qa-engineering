# Exploratory Testing Session — Checkout Flow

## Application under test

https://www.saucedemo.com

---

# Session Information

| Field | Details |
|---|---|
| Session ID | EXP-CHECKOUT-001 |
| Date | 02/06/26|
| Duration | 25 minutes |
| Area | Checkout |
| Browser | Google Chrome |
| Operating System | Windows 11 |

---

# Test Charter

Explore the checkout flow to identify issues related to checkout form validation, checkout navigation, order overview, order confirmation and data consistency between cart and checkout pages.

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

| First Name | Last Name | Zip/Postal Code |
|---|---|---|
| John | Smith | 00-001 |
| John | Smith | abcdef |

---

# Areas Explored

- Checkout information form
- Required field validation
- Zip/Postal Code validation
- Checkout overview page
- Product data consistency
- Item total, tax and total amount
- Cancel button behavior
- Finish button behavior
- Order confirmation page

---

# Notes

- Verified whether checkout can be started from the shopping cart.
- Checked required field validation for First Name, Last Name and Zip/Postal Code.
- Checked whether invalid Zip/Postal Code values are accepted.
- Verified whether checkout overview displays selected products correctly.
- Checked whether order total values are displayed and formatted correctly.
- Verified Cancel and Finish button behavior.
- Checked whether order confirmation page is displayed after completing checkout.

---

# Findings

| ID | Finding | Severity | Notes |
|---|---|---|---|
| F001 | Zip/Postal Code field accepts letters and allows user to continue checkout | Medium | Reported as BUG-CHECKOUT-001 |

---

# Bugs Found

| Bug ID | Summary |
|---|---|
| BUG-CHECKOUT-001 | Checkout form accepts letters in Zip/Postal Code field |

---

# Session Summary

The checkout flow was explored using standard_user account. Main checkout areas were verified, including form validation, navigation, checkout overview and order confirmation. One validation issue was identified: the Zip/Postal Code field accepts letters and allows the user to proceed to the checkout overview page.