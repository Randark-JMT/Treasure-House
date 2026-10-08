# 水坑攻击

水坑攻击 (Watering Hole Attack) 是一种网络攻击手法，攻击者通过入侵受害者经常访问的网站或服务来传播恶意软件或窃取敏感信息。这种攻击的名称来源于动物在水坑边聚集的行为，攻击者就像在水坑边等待猎物一样，等待受害者访问被感染的网站。

相较于钓鱼攻击 (Phishing Attack)，水坑攻击更具针对性，攻击者会选择特定的目标群体，并针对他们常访问的网站进行攻击。两者本质上都是针对整体系统最为薄弱的环节 —— 人类用户进行攻击，但水坑攻击更注重对特定用户群体的精准打击。

## Microsoft Exchange

有关 Exchage 的基础知识，可以阅读 [Microsoft Exchange](docs/../../../DevSecOps/Microsoft%20Exchange/index.md)

对于 Exchage 用户最常见的环节，就是通过 OWA (Outlook Web Access) 访问邮件系统。攻击者可能会针对 OWA 进行水坑攻击。

Exchage 的虚拟路由，其基本文件存放于 `C:\Program Files\Microsoft\Exchange Server\V15\FrontEnd\HttpProxy` 目录下，此目录存放了各个虚拟目录的相关文件，例如 ECP、EWS、MAPI、OAB、OWA、EAS 和 PowerShell 等。

而用户界面，也就是 `owa` 目录，位于 `C:\Program Files\Microsoft\Exchange Server\V15\FrontEnd\HttpProxy\owa` 目录下。攻击者可能会通过修改该目录下的文件来植入恶意代码，从而在用户访问 OWA 时执行恶意操作。

最为常见的操作，就是对 `owa` 目录下的 `.\auth\<version>\scripts\premium\flogon.js` 文件进行篡改，根本原因，就是因为登录按钮所绑定的 `clkLgn` 函数位于该文件中。

```javascript
function clkLgn()
{
    // Add performance marker for Logon page as the item name defined in the spec:
    // http://exweb/14/Specs/E14 Spec Library/Client side perf marker definition.xlsx
    //
    addPerfMarker("Logon.Start");

    var p = false;

    if (gbid("chkPrvt")) {
        p = p | gbid("chkPrvt").checked;
    }
    else
    {
        p = true;
    }

    // If security is set to private, add a cookie to persist username and basic setting
    // Cookie format: logondata=acc=<1 or 0>&lgn=<username>
    //
    if (p)
    {
        // Calculate the expires time for two weeks
        //
        var oD = new Date();
        oD.setTime(oD.getTime() + 2 * 7 * 24 * 60 * 60 * 1000);
        var sA = "acc=" + (gbid("chkBsc") && gbid("chkBsc").checked ? 1 : 0);
        var sL = "lgn=" + gbid("username").value;
        document.cookie = "logondata=" + sA + "&" + sL + "; expires=" + oD.toUTCString();
        document.cookie = "PrivateComputer=true; path=/; expires=" + oD.toUTCString();
    }

    if (gbid("showPasswordCheck").checked)
    {
        passwordElement = gbid("password");
        passwordTextElement = gbid("passwordText");
        passwordElement.value = passwordTextElement.value;
    }

    // We clean the post back cookie in order to indicate that the credentials post is legitimate (and not history postback)
    //
    document.cookie = "PBack=0; path=/";
    document.logonForm.submit();
}
```

通过对改函数进行篡改，攻击者可以在用户点击登录按钮时执行任意代码，例如窃取用户输入的用户名和密码，或者在用户不知情的情况下将用户重定向到恶意网站。
