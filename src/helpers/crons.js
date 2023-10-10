const CronJob = require("cron").CronJob;

/** It's running on time */
new CronJob(
    "45 7 * * *",
    function() {
        console.log("It's running on when clock time is 7:45");
    },
    null,
    false,
    "Asia/kolkata"
).start();