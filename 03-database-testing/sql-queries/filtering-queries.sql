-- filtering-queries.sql

-- Example schema: customers, products, orders, order_items, payments.

-- 1. Find active customers.
SELECT
  customer_id,
  email,
  status
FROM customers
WHERE status = 'active';

-- 2. Find blocked customers.
SELECT
  customer_id,
  email,
  status
FROM customers
WHERE status = 'blocked';

-- 3. Find active products that are out of stock.
SELECT
  product_id,
  product_name,
  stock_quantity,
  is_active
FROM products
WHERE is_active = true
  AND stock_quantity = 0;

-- 4. Find products within a selected price range.
SELECT
  product_id,
  product_name,
  price
FROM products
WHERE price BETWEEN 10.00 AND 100.00;

-- 5. Find paid orders.
SELECT
  order_id,
  customer_id,
  order_status,
  total_amount
FROM orders
WHERE order_status = 'paid';

-- 6. Find cancelled or refunded orders.
SELECT
  order_id,
  customer_id,
  order_status,
  total_amount
FROM orders
WHERE order_status IN ('cancelled', 'refunded');

-- 7. Find failed payments.
SELECT
  payment_id,
  order_id,
  payment_status,
  amount
FROM payments
WHERE payment_status = 'failed';

-- 8. Return the 10 newest orders.
SELECT
  order_id,
  customer_id,
  order_date,
  order_status
FROM orders
ORDER BY order_date DESC
LIMIT 10;
