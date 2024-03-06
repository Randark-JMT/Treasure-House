# Pixel with Magisk

此教程为 `Pixel 8` 配合 `Magisk` 进行配置的全流程，理论上支持其他的 `Pixel` 型号，其他厂商的手机需要自行调整步骤

:::warning

以下操作将会清除设备中的数据，请在开始操作前备份相关数据

:::

:::warning

Google G 系列芯片自带保护机制，搞机前请三思

:::

## 所需的工具

### Android SDK Platform-Tools

下载地址：[SDK 平台工具版本说明  |  Android Studio  |  Android Developers](https://developer.android.com/tools/releases/platform-tools?hl=zh-cn)

### Google USB Driver

下载地址：[Get the Google USB Driver  |  Android Studio  |  Android Developers](https://developer.android.google.cn/studio/run/win-usb)

镜像地址：[Wave R13 USB Driver for Windows (Official Mobile Driver)](https://gsmusbdriver.com/wave-r13)

### 原厂镜像

由于 `Magisk` 最新版本已经支持 `Android 14`，所以这里直接使用 `Android 14` 的镜像

下载地址：[Factory Images for Nexus and Pixel Devices  |  Google Play services  |  Google for Developers](https://developers.google.com/android/images)

:::warning

需要注意的是，这里的版本号需要与手机的【Build 号】保持一致，否则可能会出现引导失败

:::

例如我这里下载的就是 [husky-uq1a.240105.004-factory-498499a8.zip](https://dl.google.com/dl/android/aosp/husky-uq1a.240105.004-factory-498499a8.zip)

### Magisk

项目地址：[topjohnwu/Magisk: The Magic Mask for Android](https://github.com/topjohnwu/Magisk)

在 Release 中下载 `.apk` 文件即可

## 配置前需要进行的步骤

1. 开启开发者选项

    ```plaintext
    进入设置 - 关于本机，最下方的 【Build 号】，多次点击 【Build 号】 ，直至提示开发者选项已开启
    ```

2. 开启 OEM 解锁

    ```plaintext
    进入设置 - 开发者选项，开启【OEM 解锁】
    ```

3. 开启 USB 调试

    ```plaintext
    进入设置 - 开发者选项，开启【USB 调试】
    ```

## 安装 Magisk 检查环境信息

将 Magisk 的安装包传输到手机上并进行安装，启动 Magisk

或者可以直接通过 adb 安装到手机

```shell
PS D:\Downloads\platform-tools> .\adb.exe install "D:\Downloads\Magisk-v27.0.apk"
```

Pixel 系列的手机，应该能够在 Magisk 的信息栏中，看到 `Ramdisk` 处于 `Yes` 状态

## 解锁 Bootloader

将开启 USB 调试的手机连接到电脑

在下载好的 `Android SDK Platform-Tools` 的文件夹中，启动 Terminal

```shell
PS D:\Downloads\platform-tools> .\adb.exe devices
List of devices attached
39*********D5  device
```

成功识别到设备之后，开始解锁 `Bootloader`

### fastboot 状态

运行以下指令

```shell
PS D:\Downloads\platform-tools> .\adb.exe reboot bootloader
```

手机将会自动重启，并进入 fastboot 界面，则说明状态一切正常，此时应该能看到手机显示中有

```plaintext
Device state: Locked
```

执行以下指令开始解锁 `Bootloader`

```shell
PS D:\Downloads\platform-tools> .\fastboot flashing unlock
```

:::warning

如果出现以下状态，并且长时间没有响应

```plaintext
<waiting for any device>
```

请在设备管理器中检查设备是否连接，驱动程序是否正常

:::

接下来，使用音量键配合电源键在手机上选择

```plaintext
Unlock the bootloader
```

接下来手机将会黑屏一下，然后重新进入 fastboot 界面，此时应该能看到

```plaintext
Device state: unlocked
```

使用音量键配合电源键在手机上选择 `Start` 之后，即可正常开机

:::note

此时系统将会完全重置，需要重复以上步骤重新开启 USB 调试，并且需要再安装 Magisk

:::

## 部署 Magisk

将之前下载好的原厂镜像进行解压，在其中找到 `\husky-uq1a.240105.004\image-husky-uq1a.240105.004.zip`

继续进行解压，此时应该能够得到 `\husky-uq1a.240105.004\image-husky-uq1a.240105.004\boot.img`

将这个文件传输回手机

```shell
PS D:\Downloads\platform-tools> .\adb.exe push "D:\Downloads\husky-uq1a.240105.004-factory-498499a8\husky-uq1a.240105.004\image-husky-uq1a.240105.004\boot.img" /storage/emulated/0/Download
```

进入 Magisk，安装 - 选择并修补一个文件，选择 `boot.img` 文件进行修补

如果操作步骤一切正确，应该能够看到以下日志

```log
- All done!
```

同时，将修补后的 `boot.img` 下载到电脑上

```shell
PS D:\Downloads\platform-tools> .\adb.exe pull /storage/emulated/0/Download/magisk_patched-27000_GSmA1.img "D:\Downloads\"
```

### 刷入镜像

重新进入 fastboot 界面

```shell
PS D:\Downloads\platform-tools> .\adb reboot bootloader
```

然后将修补过后的 `magisk_patched-27000_GSmA1.img` 替换掉原先下载下来的原厂镜像中

:::note

即直接对 `\husky-uq1a.240105.004\image-husky-uq1a.240105.004.zip` 这个文件中的 `boot.img` 文件进行替换

:::

然后直接运行镜像包中的 `flash-all.bat`

```shell

```

## Reference

[Installation | Magisk](https://topjohnwu.github.io/Magisk/install.html)

[How to Root Android 14 Using Magisk?](https://www.getdroidtips.com/root-android-14-using-magisk/)