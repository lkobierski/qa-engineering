# Database Test Scenarios

This document contains practical database test scenarios for a simplified e-commerce application.

The goal is to show how SQL can support QA work during functional testing, regression testing, and defect investigation.

---

## Scenario 1: Verify customer data after registration

### Purpose

Check whether a new customer account is saved correctly after registration.

### Tables

- `customers`

### What to verify

- customer record exists
- email is saved correctly
- required fields are not empty
- account status is correct

### Example SQL

```sql
SELECT
  customer_id,
  first_name,
  last_name,
  email,
  status
FROM customers
WHERE email = 'test.customer@example.com';
```

### Expected result

One customer record is returned and the data matches the registration form.

---

## Scenario 2: Check for duplicate customer emails

### Purpose

Verify that customer emails are unique in the database.

### Tables

- `customers`

### What to verify

- the same email address should not be assigned to more than one customer
- duplicate records should be investigated as a potential data issue

### Example SQL

```sql
SELECT
  email,
  COUNT(*) AS duplicate_count
FROM customers
WHERE email IS NOT NULL
GROUP BY email
HAVING COUNT(*) > 1;
```

### Expected result

The query returns no records.

---

## Scenario 3: Verify order after checkout

### Purpose

Check whether an order is created correctly after the user completes checkout.

### Tables

- `customers`
- `orders`

### What to verify

- order record exists
- order is assigned to the correct customer
- order status is correct
- total amount is saved

### Example SQL

```sql
SELECT
  o.order_id,
  c.email,
  o.order_status,
  o.total_amount,
  o.order_date
FROM orders o
JOIN customers c
  ON o.customer_id = c.customer_id
WHERE c.email = 'test.customer@example.com'
ORDER BY o.order_date DESC;
```

### Expected result

The latest order for the customer is visible and contains the expected status and total amount.

---

## Scenario 4: Verify order total consistency

### Purpose

Check whether the order total matches the value calculated from order items.

### Tables

- `orders`
- `order_items`

### What to verify

- order total equals the sum of item quantity multiplied by unit price
- differences between saved total and calculated total should be investigated

### Example SQL

```sql
SELECT
  o.order_id,
  o.total_amount,
  SUM(oi.quantity * oi.unit_price) AS calculated_total
FROM orders o
JOIN order_items oi
  ON o.order_id = oi.order_id
GROUP BY
  o.order_id,
  o.total_amount
HAVING o.total_amount <> SUM(oi.quantity * oi.unit_price);
```

### Expected result

The query returns no records.

---

## Scenario 5: Find paid orders without payment records

### Purpose

Check whether paid orders have related payment records.

### Tables

- `orders`
- `payments`

### What to verify

- every paid order should have a payment record
- missing payment records may indicate an integration or data consistency issue

### Example SQL

```sql
SELECT
  o.order_id,
  o.order_status,
  o.total_amount
FROM orders o
LEFT JOIN payments p
  ON o.order_id = p.order_id
WHERE o.order_status = 'paid'
  AND p.payment_id IS NULL;
```

### Expected result

The query returns no records.


