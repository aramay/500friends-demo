1. Get a count of all customers for account_id 188 who have a status of “active” and a non-­‐null top_tier_name.

    SELECT COUNT(account_id)

    FROM rs_production_customers

    WHERE (account_id = 188 AND status = 'ACTIVE') AND
    top_tier_name IS NOT NULL;

2. Get a list of the ids for all events in account 207 between 12:01am Pacific on November 1
and 11:59pm Pacific November 5 that were any customer’s first purchase (NOTE: the times in the database are UTC.)

    SELECT id

    FROM rs_production_events

    WHERE account_id = 207 AND
    (created_at > '2016-11-01 00:01:00 PST' AND created_at < '206-11-05 23:59:00 PST')
    ORDER BY created_at ASC
    LIMIT 1;


3. Get the balance and sum of points_remaining for each customer in account_id 186 who has points expiring in December.

    SELECT rs_production_customers.balance, rs_production_events.points_value


    from rs_production_customers JOIN rs_production_events

    ON rs_production_customers.id = rs_production_events.customer_id

    WHERE rs_production_events.account_id = 186;
