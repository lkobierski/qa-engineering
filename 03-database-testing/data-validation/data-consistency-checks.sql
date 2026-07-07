-- data-consistency-checks.sql

-- Example schema: customers, products, orders, order_items, payments.

-- 1. Find orders assigned to non-existing customers.
SELECT
  o.order_id,
  o.customer_id
FROM orders o
LEFT JOIN customers c
  ON o.customer_id = c.customer_id
WHERE c.customer_id IS NULL;

-- 2. Find order items assigned to non-existing orders.
SELECT
  oi.order_item_id,
  oi.order_id
FROM order_items oi
LEFT JOIN orders o
  ON oi.order_id = o.order_id
WHERE o.order_id IS NULL;

-- 3. Find payments assigned to non-existing orders.
SELECT
  p.payment_id,
  p.order_id
FROM payments p
LEFT JOIN orders o
  ON p.order_id = o.order_id
WHERE o.order_id IS NULL;

-- 4. Find completed payments with zero or negative amount.
SELECT
  payment_id,
  order_id,
  payment_status,
  amount
FROM payments
WHERE payment_status = 'completed'
  AND amount <= 0;

