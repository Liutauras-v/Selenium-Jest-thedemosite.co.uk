const by = {

    id:{

    },

    css:{
        login_output: "body > table > tbody > tr > td.auto-style1 > big > blockquote > blockquote > font > center > b",
        login_usernameField: "body > table > tbody > tr > td.auto-style1 > form > div > center > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2) > p > input",
        login_passwordField: "body > table > tbody > tr > td.auto-style1 > form > div > center > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2) > p > input[type=password]",
        login_loginBtn: "body > table > tbody > tr > td.auto-style1 > form > div > center > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2) > p > input[type=button]",

    },

    linkText:{
        nav_addUser: "3. Add a User",
        nav_login: "4. Login",
    },

    xpath:{
        addUser_usernameField: "/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[1]/td[2]/p/input",
        addUser_passwordField: "/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[2]/td[2]/p/input",
        addUser_saveBtn: "/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[3]/td[2]/p/input",
        addUser_output: "/html/body/table/tbody/tr/td[1]/blockquote/blockquote[2]/blockquote",
        
    }

};

module.exports = by;