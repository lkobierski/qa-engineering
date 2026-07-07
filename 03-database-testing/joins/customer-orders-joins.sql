-- customer-orders-joins.sql
-- SQL JOIN queries for QA database testing practice.
-- Example schema: customers, products, orders, order_items, payments.

-- 1. Display customers with their orders.
SELECT
  c.customer_id,
  c.email,
  o.order_id,
  o.order_status,
  o.total_amount
FROM customers c
JOIN orders o
  ON c.customer_id = o.customer_id;

-- 2. Display orders with customer details.
SELECT
  o.order_id,
  o.order_date,
  o.order_status,
  c.first_name,
  c.last_name,
  c.email
FROM orders o
JOIN customers c
  ON o.customer_id = c.customer_id;

-- 3. Display order items with product names.
SELECT
  oi.order_id,
  p.product_name,
  oi.quantity,
  oi.unit_price
FROM order_items oi
JOIN products p
  ON oi.product_id = p.product_id;

-- 4. Display full order details with customer and product data.
SELECT
  o.order_id,
  c.email,
  p.product_name,
  oi.quantity,
  oi.unit_price,
  o.total_amount
FROM orders o
JOIN customers c
  ON o.customer_id = c.customer_id
JOIN order_items oi
  ON o.order_id = oi.order_id
JOIN products p
  ON oi.product_id = p.product_id;

-- 5. Display orders with payment status.
SELECT
  o.order_id,
  o.order_status,
  o.total_amount,
  p.payment_status,
  p.amount
FROM orders o
LEFT JOIN payments p
  ON o.order_id = p.order_id;

-- 6. Count orders per customer.
SELECT
  c.customer_id,
  c.email,
  COUNT(o.order_id) AS orders_count
FROM customers c
LEFT JOIN orders o
  ON c.customer_id = o.customer_id
GROUP BY
  c.customer_id,
  c.email;
