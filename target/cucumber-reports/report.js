$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resourses/cucumberOrangeHRM/login.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM log in",
  "description": "",
  "id": "orangehrm-log-in",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7226009077,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a User, I should able to log in",
  "description": "",
  "id": "orangehrm-log-in;as-a-user,-i-should-able-to-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "he should able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdeaf.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 196691969,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_enters_username_and_password()"
});
formatter.result({
  "duration": 443330798,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 2548574486,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_should_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 65184825,
  "status": "passed"
});
formatter.after({
  "duration": 429929203,
  "status": "passed"
});
formatter.after({
  "duration": 836507377,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Invalid credentials",
  "description": "",
  "id": "orangehrm-log-in;invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he enters invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "he clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he should not able to log in with \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "orangehrm-log-in;invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error message"
      ],
      "line": 18,
      "id": "orangehrm-log-in;invalid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "Abcxyz89",
        "Invalid credentials"
      ],
      "line": 19,
      "id": "orangehrm-log-in;invalid-credentials;;2"
    },
    {
      "cells": [
        "Test123",
        "admin123",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "orangehrm-log-in;invalid-credentials;;3"
    },
    {
      "cells": [
        "Test123",
        "Abcxyz89",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "orangehrm-log-in;invalid-credentials;;4"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 22,
      "id": "orangehrm-log-in;invalid-credentials;;5"
    },
    {
      "cells": [
        "",
        "Abcxyz89",
        "Username cannot be empty"
      ],
      "line": 23,
      "id": "orangehrm-log-in;invalid-credentials;;6"
    },
    {
      "cells": [
        "Test123",
        "",
        "Password cannot be empty"
      ],
      "line": 24,
      "id": "orangehrm-log-in;invalid-credentials;;7"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 25,
      "id": "orangehrm-log-in;invalid-credentials;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4960142523,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid credentials",
  "description": "",
  "id": "orangehrm-log-in;invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he enters invalid \"Admin\" and \"Abcxyz89\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "he clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he should not able to log in with \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdeaf.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 43093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    },
    {
      "val": "Abcxyz89",
      "offset": 31
    }
  ],
  "location": "Stepdeaf.he_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 265716366,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 678217097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 35
    }
  ],
  "location": "Stepdeaf.he_should_not_able_to_log_in_with(String)"
});
formatter.result({
  "duration": 53649470,
  "status": "passed"
});
formatter.after({
  "duration": 365862671,
  "status": "passed"
});
formatter.after({
  "duration": 834039964,
  "status": "passed"
});
formatter.before({
  "duration": 4927761097,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid credentials",
  "description": "",
  "id": "orangehrm-log-in;invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he enters invalid \"Test123\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "he clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he should not able to log in with \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdeaf.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 58026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 19
    },
    {
      "val": "admin123",
      "offset": 33
    }
  ],
  "location": "Stepdeaf.he_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 280315187,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 433497415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 35
    }
  ],
  "location": "Stepdeaf.he_should_not_able_to_log_in_with(String)"
});
formatter.result({
  "duration": 51960298,
  "status": "passed"
});
formatter.after({
  "duration": 303498110,
  "status": "passed"
});
formatter.after({
  "duration": 845312066,
  "status": "passed"
});
formatter.before({
  "duration": 5036270918,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Invalid credentials",
  "description": "",
  "id": "orangehrm-log-in;invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he enters invalid \"Test123\" and \"Abcxyz89\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "he clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he should not able to log in with \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdeaf.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 44800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 19
    },
    {
      "val": "Abcxyz89",
      "offset": 33
    }
  ],
  "location": "Stepdeaf.he_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 289734277,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 445014424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 35
    }
  ],
  "location": "Stepdeaf.he_should_not_able_to_log_in_with(String)"
});
formatter.result({
  "duration": 57460456,
  "status": "passed"
});
formatter.after({
  "duration": 302538111,
  "status": "passed"
});
formatter.after({
  "duration": 810174375,
  "status": "passed"
});
formatter.before({
  "duration": 4951247380,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid credentials",
  "description": "",
  "id": "orangehrm-log-in;invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he enters invalid \"\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "he clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he should not able to log in with \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdeaf.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 38827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "admin123",
      "offset": 26
    }
  ],
  "location": "Stepdeaf.he_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 279698227,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 76175754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 35
    }
  ],
  "location": "Stepdeaf.he_should_not_able_to_log_in_with(String)"
});
formatter.result({
  "duration": 41154116,
  "status": "passed"
});
formatter.after({
  "duration": 342762521,
  "status": "passed"
});
formatter.after({
  "duration": 774983776,
  "status": "passed"
});
formatter.before({
  "duration": 4799366485,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid credentials",
  "description": "",
  "id": "orangehrm-log-in;invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he enters invalid \"\" and \"Abcxyz89\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "he clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he should not able to log in with \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdeaf.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 44800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "Abcxyz89",
      "offset": 26
    }
  ],
  "location": "Stepdeaf.he_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 267110286,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 73353782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 35
    }
  ],
  "location": "Stepdeaf.he_should_not_able_to_log_in_with(String)"
});
formatter.result({
  "duration": 54844990,
  "status": "passed"
});
formatter.after({
  "duration": 364054032,
  "status": "passed"
});
formatter.after({
  "duration": 896119938,
  "status": "passed"
});
formatter.before({
  "duration": 5048047766,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid credentials",
  "description": "",
  "id": "orangehrm-log-in;invalid-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he enters invalid \"Test123\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "he clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he should not able to log in with \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdeaf.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 51626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 19
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "Stepdeaf.he_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 260732049,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 93742040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 35
    }
  ],
  "location": "Stepdeaf.he_should_not_able_to_log_in_with(String)"
});
formatter.result({
  "duration": 41217263,
  "status": "passed"
});
formatter.after({
  "duration": 310364881,
  "status": "passed"
});
formatter.after({
  "duration": 790653530,
  "status": "passed"
});
formatter.before({
  "duration": 4867183843,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid credentials",
  "description": "",
  "id": "orangehrm-log-in;invalid-credentials;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he enters invalid \"Admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "he clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he should not able to log in with \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdeaf.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 39680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    },
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "Stepdeaf.he_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 242137070,
  "status": "passed"
});
formatter.match({
  "location": "Stepdeaf.he_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 86309083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 35
    }
  ],
  "location": "Stepdeaf.he_should_not_able_to_log_in_with(String)"
});
formatter.result({
  "duration": 44450541,
  "status": "passed"
});
formatter.after({
  "duration": 350259050,
  "status": "passed"
});
formatter.after({
  "duration": 804407977,
  "status": "passed"
});
});