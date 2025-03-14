<?php
// 基础版
echo "Hello, World!";

// 带变量版
$name = "访客";
echo "<h1>Hello, " . $name . "!</h1>";

// 带时间版
date_default_timezone_set('Asia/Shanghai');
$hour = date('H');
if ($hour < 12) {
    $greeting = "早上好";
} elseif ($hour < 18) {
    $greeting = "下午好";
} else {
    $greeting = "晚上好";
}
echo $greeting . "，欢迎来到我们的网站！";

// 带表单交互版（需保存为.php文件）
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    echo "<p style='color: blue;'>欢迎您，" . $username . "！</p>";
}
?>
<!DOCTYPE html>
<html>
<body>
    <form method="post">
        输入您的名字：
        <input type="text" name="username">
        <input type="submit" value="打招呼">
    </form>
</body>
</html>