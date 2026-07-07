-- null-checks.sql

-- Example schema: customers, products, orders, order_items, payments.

-- 1. Find customers with missing required account data.
SELECT
  customer_id,
  first_name,
  last_name,
  email,
  status
FROM customers
WHERE first_name IS NULL
   OR last_name IS NULL
   OR email IS NULL
   OR status IS NULL;

-- 2. Find products with missing required catalog data.
SELECT
  product_id,
  product_name,
  category,
  price,
  stock_quantity
FROM products
WHERE product_name IS NULL
   OR category IS NULL
   OR price IS NULL
   OR stock_quantity IS NULL;

-- 3. Find payments with missing required payment data.
SELECT
  payment_id,
  order_id,
  payment_status,
  amount
FROM payments
WHERE order_id IS NULL
   OR payment_status IS NULL
   OR amount IS NULL;

-- 4. Count customers with missing emails.
SELECT
  COUNT(*) AS customers_missing_email
FROM customers
WHERE email IS NULL;

-- 5. Count orders without assigned customers.
SELECT
  COUNT(*) AS orders_missing_customer
FROM orders
WHERE customer_id IS NULL;
