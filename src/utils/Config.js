class Config{
    static loginUrl="http://127.0.0.1:8000/api/gettoken/";
    static homeUrl = "/home";
    static logoutPageUrl = "/logout";

    static SidebarItem=[
        {"index":"0","title":"Home","url":"/home","icons":"home"},
        {"index":"1","title":"Company","url":"/company","icons":"assessment"}
    ]
}

export default Config;