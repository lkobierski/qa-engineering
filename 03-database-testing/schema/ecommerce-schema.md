# E-commerce Database Schema

This document describes a simplified e-commerce database model used for SQL testing examples.

The schema is created for QA practice purposes and focuses on data validation, joins, consistency checks, and database-related test scenarios.

---

## Tables

The model contains the following tables:

| Table | Description |
|---|---|
| `customers` | Stores customer account data |
| `products` | Stores product catalog data |
| `orders` | Stores customer orders |
| `order_items` | Stores products assigned to orders |
| `payments` | Stores payment information for orders |

---

## customers

Stores basic customer information.

| Column | Type | Description |
|---|---|---|
| `customer_id` | INTEGER | Unique customer identifier |
| `first_name` | VARCHAR | Customer first name |
| `last_name` | VARCHAR | Customer last name |
| `email` | VARCHAR | Customer email address |
| `created_at` | DATETIME | Customer creation date |
| `status` | VARCHAR | Customer account status |

Example statuses:

```text
active
inactive
blocked
```

---

## products

Stores product catalog information.

| Column | Type | Description |
|---|---|---|
| `product_id` | INTEGER | Unique product identifier |
| `product_name` | VARCHAR | Product name |
| `category` | VARCHAR | Product category |
| `price` | DECIMAL | Product price |
| `stock_quantity` | INTEGER | Available product stock |
| `is_active` | BOOLEAN | Product availability flag |

---

## orders

Stores customer order data.

| Column | Type | Description |
|---|---|---|
| `order_id` | INTEGER | Unique order identifier |
| `customer_id` | INTEGER | Customer assigned to the order |
| `order_date` | DATETIME | Order creation date |
| `order_status` | VARCHAR | Current order status |
| `total_amount` | DECIMAL | Total order value |

Example order statuses:

```text
new
paid
shipped
cancelled
refunded
```

---

## order_items

Stores products included in each order.

| Column | Type | Description |
|---|---|---|
| `order_item_id` | INTEGER | Unique order item identifier |
| `order_id` | INTEGER | Related order identifier |
| `product_id` | INTEGER | Related product identifier |
| `quantity` | INTEGER | Product quantity in order |
| `unit_price` | DECIMAL | Product price at the time of order |

---

## payments

Stores payment data related to orders.

| Column | Type | Description |
|---|---|---|
| `payment_id` | INTEGER | Unique payment identifier |
| `order_id` | INTEGER | Related order identifier |
| `payment_date` | DATETIME | Payment creation date |
| `payment_method` | VARCHAR | Selected payment method |
| `payment_status` | VARCHAR | Current payment status |
| `amount` | DECIMAL | Payment amount |

Example payment statuses:

```text
pending
completed
failed
refunded
```

---

## Relationships

| Relationship | Description |
|---|---|
| `customers.customer_id` → `orders.customer_id` | One customer can have many orders |
| `orders.order_id` → `order_items.order_id` | One order can have many order items |
| `products.product_id` → `order_items.product_id` | One product can appear in many order items |
| `orders.order_id` → `payments.order_id` | One order can have one or more payment records |

---

## QA Usage

This schema can be used to practice SQL queries for:

- checking required fields
- finding duplicate records
- validating relationships between tables
- verifying order totals
- checking payment consistency
- validating allowed statuses
- supporting manual and automated test execution
