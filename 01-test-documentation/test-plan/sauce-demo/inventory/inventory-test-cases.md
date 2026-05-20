# Inventory Test Cases

This document contains test scenarios for the SauceDemo inventory page functionality.

Application under test:

https://www.saucedemo.com

---

# Test Structure

I001 — Verify product images are visible on the inventory page  
I002 — Verify product titles are visible on the inventory page  
I003 — Verify product prices are visible on the inventory page  
I004 — Verify products can be sorted by name from A to Z  
I005 — Verify products can be sorted by name from Z to A  
I006 — Verify products can be sorted by price from low to high  
I007 — Verify products can be sorted by price from high to low  
I008 — Verify inventory page layout consistency  
I009 — Verify inventory page is accessible after page refresh  

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| I001 | Verify product images are visible on the inventory page | User is logged in and inventory page is displayed | 1. Verify product images visibility | Product images are visible and properly displayed | Medium |
| I002 | Verify product titles are visible on the inventory page | User is logged in and inventory page is displayed | 1. Verify product titles visibility | Product titles are visible and readable | Medium |
| I003 | Verify product prices are visible on the inventory page | User is logged in and inventory page is displayed | 1. Verify product prices visibility | Product prices are visible and properly formatted | Medium |
| I004 | Verify products can be sorted by name from A to Z | User is logged in and inventory page is displayed | 1. Select Name (A to Z) sorting option 2. Verify products order | Products are sorted alphabetically from A to Z | High |
| I005 | Verify products can be sorted by name from Z to A | User is logged in and inventory page is displayed | 1. Select Name (Z to A) sorting option 2. Verify products order | Products are sorted alphabetically from Z to A | High |
| I006 | Verify products can be sorted by price from low to high | User is logged in and inventory page is displayed | 1. Select Price (low to high) sorting option 2. Verify products order | Products are sorted by ascending price | High |
| I007 | Verify products can be sorted by price from high to low | User is logged in and inventory page is displayed | 1. Select Price (high to low) sorting option 2. Verify products order | Products are sorted by descending price | High |
| I008 | Verify inventory page layout consistency | User is logged in and inventory page is displayed | 1. Verify inventory page layout consistency | Product cards, buttons and navigation elements are aligned and displayed correctly | Medium |
| I009 | Verify inventory page is accessible after page refresh | User is logged in and inventory page is displayed | 1. Refresh page 2. Verify inventory page accessibility | Inventory page remains accessible and functional after refresh | Medium |

---

# Notes

The purpose of these test cases is to validate inventory page visibility, sorting functionality and basic UI consistency.