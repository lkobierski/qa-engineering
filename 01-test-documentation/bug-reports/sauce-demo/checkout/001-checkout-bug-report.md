# BUG-CHECKOUT-001 — Checkout form accepts letters in Zip/Postal Code field

## Application under test

https://www.saucedemo.com

---

# Bug Summary

Checkout form allows the user to enter letters in the Zip/Postal Code field and proceed to the checkout overview page.

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

Medium

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

| First Name | Last Name | Postal Code |
|---|---|---|
| John | Smith | abcdef |

---

# Preconditions

1. User is logged in
2. Product is added to the shopping cart
3. User is on the checkout information page

---

# Steps to Reproduce

1. Open shopping cart
2. Click Checkout button
3. Enter valid First Name
4. Enter valid Last Name
5. Enter letters in the Zip/Postal Code field
6. Click Continue button

---

# Expected Result

Validation message is displayed and user cannot proceed with letters entered in the Zip/Postal Code field.

---

# Actual Result

User proceeds to the checkout overview page with letters entered in the Zip/Postal Code field.

---

# Status

Open

# Attachments

![BUG-CHECKOUT-001 Screenshot](./attachments/bug-checkout-001.png)

---