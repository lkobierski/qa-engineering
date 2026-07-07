-- select-queries.sql

-- Example schema: customers, products, orders, order_items, payments.

-- 1. Display selected customer fields used during account validation.
SELECT
  customer_id,
  first_name,
  last_name,
  email,
  status
FROM customers;

-- 2. Display product catalog data used during product validation.
SELECT
  product_id,
  product_name,
  category,
  price,
  stock_quantity,
  is_active
FROM products;

-- 3. Display order data used during order validation.
SELECT
  order_id,
  customer_id,
  order_date,
  order_status,
  total_amount
FROM orders;

-- 4. Display order item data used to verify order content.
SELECT
  order_item_id,
  order_id,
  product_id,
  quantity,
  unit_price
FROM order_items;

-- 5. Display payment data used during payment validation.
SELECT
  payment_id,
  order_id,
  payment_method,
  payment_status,
  amount
FROM payments;

-- 6. Use aliases to make customer data easier to read in test results.
SELECT
  customer_id AS customerId,
  email AS customerEmail,
  status AS accountStatus
FROM customers;
