-- aggregate-queries.sql

-- Example schema: customers, products, orders, order_items, payments.

-- 1. Count customers by account status.
SELECT
  status,
  COUNT(*) AS customers_count
FROM customers
GROUP BY status;

-- 2. Count products by category.
SELECT
  category,
  COUNT(*) AS products_count
FROM products
GROUP BY category;

-- 3. Calculate minimum, maximum and average product price.
SELECT
  MIN(price) AS lowest_price,
  MAX(price) AS highest_price,
  AVG(price) AS average_price
FROM products;

-- 4. Count orders by order status.
SELECT
  order_status,
  COUNT(*) AS orders_count
FROM orders
GROUP BY order_status;

-- 5. Calculate total value of paid orders.
SELECT
  SUM(total_amount) AS paid_orders_total
FROM orders
WHERE order_status = 'paid';

-- 6. Find customers with more than one order.
SELECT
  customer_id,
  COUNT(*) AS orders_count
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 1;

-- 7. Calculate expected order value from order items.
SELECT
  order_id,
  SUM(quantity * unit_price) AS calculated_order_value
FROM order_items
GROUP BY order_id;

-- 8. Count payments by payment status.
SELECT
  payment_status,
  COUNT(*) AS payments_count
FROM payments
GROUP BY payment_status;
