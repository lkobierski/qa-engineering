-- duplicate-checks.sql

-- Example schema: customers, products, orders, order_items, payments.

-- 1. Find duplicate customer email addresses.
SELECT
  email,
  COUNT(*) AS duplicate_count
FROM customers
WHERE email IS NOT NULL
GROUP BY email
HAVING COUNT(*) > 1;

-- 2. Find duplicate products by product name and category.
SELECT
  product_name,
  category,
  COUNT(*) AS duplicate_count
FROM products
GROUP BY
  product_name,
  category
HAVING COUNT(*) > 1;

-- 3. Find duplicated customer IDs.
SELECT
  customer_id,
  COUNT(*) AS duplicate_count
FROM customers
GROUP BY customer_id
HAVING COUNT(*) > 1;

-- 4. Find duplicated order IDs.
SELECT
  order_id,
  COUNT(*) AS duplicate_count
FROM orders
GROUP BY order_id
HAVING COUNT(*) > 1;
