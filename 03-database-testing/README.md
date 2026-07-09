# Database Testing

This section contains SQL practice and database testing examples.

The purpose of this section is to demonstrate practical database testing skills, including data validation, SQL queries, joins, consistency checks, and database-related test scenarios.


## Repository Structure

| Section | Content |
|---|---|
| [schema](./schema/ecommerce-schema.md) | Simplified e-commerce database schema used for SQL testing examples |
| [sql-queries](./sql-queries/) | Basic SQL queries for selecting, filtering and aggregating data |
| [data-validation](./data-validation/) | SQL checks for NULL values, duplicates and data consistency issues |
| [joins](./joins/customer-orders-joins.sql) | SQL JOIN examples for validating relationships between tables |
| [test-scenarios](./test-scenarios/database-test-scenarios.md) | Database test scenarios from a QA perspective |


## Database Model

The examples are based on a simplified e-commerce database model.

The model includes:

- `customers`
- `products`
- `orders`
- `order_items`
- `payments`

The schema documentation describes the purpose of each table, key columns, example statuses and relationships between tables.


## Test Coverage

The following database testing areas are covered:

- basic SELECT queries
- filtering data with WHERE conditions
- sorting query results
- aggregate queries
- NULL value checks
- duplicate data checks
- data consistency checks
- joins between related tables
- order and payment validation scenarios
- customer and product data validation scenarios


## SQL Query Examples

### SQL basics

| File | Purpose |
|---|---|
| [select-queries.sql](./sql-queries/select-queries.sql) | Basic SELECT queries used to review key records and columns |
| [filtering-queries.sql](./sql-queries/filtering-queries.sql) | WHERE, IN, BETWEEN, ORDER BY and LIMIT examples |
| [aggregate-queries.sql](./sql-queries/aggregate-queries.sql) | COUNT, SUM, AVG, MIN, MAX, GROUP BY and HAVING examples |

### Data validation

| File | Purpose |
|---|---|
| [null-checks.sql](./data-validation/null-checks.sql) | Checks for missing required values |
| [duplicate-checks.sql](./data-validation/duplicate-checks.sql) | Checks for duplicate business-critical data |
| [data-consistency-checks.sql](./data-validation/data-consistency-checks.sql) | Checks for broken relationships and inconsistent values |

### Joins

| File | Purpose |
|---|---|
| [customer-orders-joins.sql](./joins/customer-orders-joins.sql) | JOIN queries used to verify related customer, order, product and payment data |

---

## Tools

| Area | Tool |
|---|---|
| Database Testing | SQL |
| Documentation | Markdown |
| Version Control | Git, GitHub |


