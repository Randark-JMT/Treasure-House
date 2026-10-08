---
slug: 2026-06-11-LTFS-Driver
title: HPE LTFS 驱动分析
authors: Randark
tags: [AI]
---

针对 HPE 较老的 LTFS 驱动程序进行分析

<!-- truncate -->

## 检查证书状态

```powershell
PS C:\Users\Randark> Get-AuthenticodeSignature -FilePath 'C:\Windows\System32\drivers\UMFSDK.sys' | Select-Object -Property Status, SignerCertificate

Status SignerCertificate
------ -----------------
 Valid [Subject]…

PS C:\Users\Randark> $sig = Get-AuthenticodeSignature 'C:\Windows\System32\drivers\UMFSDK.sys'
PS C:\Users\Randark> $sig.SignerCertificate.Subject
CN=Hewlett-Packard Company, O=Hewlett-Packard Company, L=Palo Alto, S=California, C=US
```

## 创建补充策略 XML（推荐使用 Supplemental Policy）

```powershell
PS C:\Users\Randark> New-Item -ItemType Directory -Path "C:\WDAC" -Force

    Directory: C:\

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           2026/6/11    23:50                WDAC

PS C:\Users\Randark> New-CIPolicy -Level Publisher -Fallback Hash `
>>     -FilePath "C:\WDAC\UMFSDK_Supplemental.xml" `
>>     -ScanPath "C:\Windows\System32\drivers\UMFSDK.sys"
```

## 检查当前策略

```powershell
PS C:\Users\Randark> CiTool.exe --list-policies
策略:
    策略 ID: 0283ac0f-fff1-49ae-ada1-8a933130cad6
    基本策略 ID： 0283ac0f-fff1-49ae-ada1-8a933130cad6
    好记的名称: VerifiedAndReputableDesktop
    版本: 0.0.0.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: 1283ac0f-fff1-49ae-ada1-8a933130cad6
    基本策略 ID： 1283ac0f-fff1-49ae-ada1-8a933130cad6
    好记的名称: VerifiedAndReputableDesktopEvaluation
    版本: 0.0.0.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: 784c4414-79f4-4c32-a6a5-f0fb42a51d0d
    基本策略 ID： 784c4414-79f4-4c32-a6a5-f0fb42a51d0d
    好记的名称: Microsoft Windows Cross Certificates for Code Integrity Exceptions Audit Policy
    版本: 10.29600.0.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： true
    授权： true
    状态： 0

策略:
    策略 ID: 82443e1e-8a39-4b4a-96a8-f40ddc00b9f3
    基本策略 ID： 82443e1e-8a39-4b4a-96a8-f40ddc00b9f3
    好记的名称: WindowsE_Lockdown_Policy
    版本: 10.0.22117.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: cdd5cb55-db68-4d71-aa38-3df2b6473a52
    基本策略 ID： 82443e1e-8a39-4b4a-96a8-f40ddc00b9f3
    好记的名称: WindowsE_Lockdown_Test_Policy_Supplemental
    版本: 10.0.21349.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: 5951a96a-e0b5-4d3d-8fb8-3e5b61030784
    基本策略 ID： 5951a96a-e0b5-4d3d-8fb8-3e5b61030784
    好记的名称: Windows10S_Lockdown_Policy_Supplementable
    版本: 10.0.15039.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: 1678656c-05ef-481f-bc5b-ebd8c991502d
    基本策略 ID： 0283ac0f-fff1-49ae-ada1-8a933130cad6
    好记的名称: VerifiedAndReputableDesktopFlightSupplemental
    版本: 0.0.0.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: 2678656c-05ef-481f-bc5b-ebd8c991502d
    基本策略 ID： 1283ac0f-fff1-49ae-ada1-8a933130cad6
    好记的名称: VerifiedAndReputableDesktopEvaluationFlightSupplemental
    版本: 0.0.0.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: 5dac656c-21ad-4a02-ab49-649917162e70
    基本策略 ID： 82443e1e-8a39-4b4a-96a8-f40ddc00b9f3
    好记的名称: WindowsE_Lockdown_Flight_Policy_Supplemental
    版本: 10.0.21325.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: d2bda982-ccf6-4344-ac5b-0b44427b6816
    基本策略 ID： d2bda982-ccf6-4344-ac5b-0b44427b6816
    好记的名称: Microsoft Windows Driver Policy
    版本: 10.0.29520.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： false
    当前强制执行： true
    授权： true
    状态： 0

策略:
    策略 ID: 0939ed82-bfd5-4d32-b58e-d31d3c49715a
    基本策略 ID： 0283ac0f-fff1-49ae-ada1-8a933130cad6
    好记的名称: VerifiedAndReputableDesktopTestSupplemental
    版本: 0.0.0.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: 1939ed82-bfd5-4d32-b58e-d31d3c49715a
    基本策略 ID： 1283ac0f-fff1-49ae-ada1-8a933130cad6
    好记的名称: VerifiedAndReputableDesktopEvaluationTestSupplemental
    版本: 0.0.0.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: 8f9cb695-5d48-48d6-a329-7202b44607e3
    基本策略 ID： 8f9cb695-5d48-48d6-a329-7202b44607e3
    好记的名称: Microsoft Windows Cross Certificates for Code Integrity Exceptions Policy
    版本: 10.29505.0.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： true
    授权： true
    状态： 0

策略:
    策略 ID: a072029f-588b-4b5e-b7f9-05aad67df687
    基本策略 ID： a072029f-588b-4b5e-b7f9-05aad67df687
    好记的名称: Microsoft Windows Virtualization Based Security Policy
    版本: 10.0.29540.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： false
    授权： false
    状态： 0

策略:
    策略 ID: 60fd87f8-4593-44a0-91b0-2e0da022f248
    基本策略 ID： 60fd87f8-4593-44a0-91b0-2e0da022f248
    好记的名称: Microsoft Windows Endpoint Security Policy
    版本: 10.0.29526.0
    平台策略： true
    策略已签名: true
    磁盘上有文件： true
    当前强制执行： true
    授权： true
    状态： 0

操作成功
```

## 检查拦截记录

```powershell
PS C:\Users\Randark> Get-WinEvent -LogName "Microsoft-Windows-CodeIntegrity/Operational" |
>>     Where-Object { $_.Message -like "*UMFSDK*" } |
>>     Select-Object TimeCreated, Id, Message |
>>     Format-List

TimeCreated : 2026/6/11 23:32:00
Id          : 3004
Message     : Windows is unable to verify the image integrity of the file \Device\HarddiskVolume3\Windows\System32\drivers\UMFSDK.sys because f
              ile hash could not be found on the system. A recent hardware or software change might have installed a file that is signed incorr
              ectly or damaged, or that might be malicious software from an unknown source.

TimeCreated : 2026/6/11 23:30:35
Id          : 3004
Message     : Windows is unable to verify the image integrity of the file \Device\HarddiskVolume3\Windows\System32\drivers\UMFSDK.sys because f
              ile hash could not be found on the system. A recent hardware or software change might have installed a file that is signed incorr
              ectly or damaged, or that might be malicious software from an unknown source.

TimeCreated : 2026/6/11 23:29:51
Id          : 3004
Message     : Windows is unable to verify the image integrity of the file \Device\HarddiskVolume3\Windows\System32\drivers\UMFSDK.sys because f
              ile hash could not be found on the system. A recent hardware or software change might have installed a file that is signed incorr
              ectly or damaged, or that might be malicious software from an unknown source.
```

## 基于哈希进行

```powershell
# 重新生成，改用 Hash 级别
New-CIPolicy -Level Hash `
    -FilePath "C:\WDAC\UMFSDK_Supplemental.xml" `
    -ScanPath "C:\Windows\System32\drivers\UMFSDK.sys"

# 绑定到 Driver Policy 基础策略
Set-CIPolicyIdInfo -FilePath "C:\WDAC\UMFSDK_Supplemental.xml" `
    -SupplementsBasePolicyID "d2bda982-ccf6-4344-ac5b-0b44427b6816" `
    -PolicyName "UMFSDK_HP_LTFS_Driver_HashException" `
    -ResetPolicyID

# 编译
ConvertFrom-CIPolicy `
    -XmlFilePath "C:\WDAC\UMFSDK_Supplemental.xml" `
    -BinaryFilePath "C:\WDAC\UMFSDK_Supplemental.bin"

# 获取新策略 ID 并部署
[xml]$xml = Get-Content "C:\WDAC\UMFSDK_Supplemental.xml"
$newPolicyId = $xml.SiPolicy.PolicyID.Trim("{}")
Write-Host "新策略 ID: $newPolicyId"

Copy-Item "C:\WDAC\UMFSDK_Supplemental.bin" `
    "C:\Windows\System32\CodeIntegrity\CiPolicies\Active\{$newPolicyId}.cip" -Force

# 尝试热加载（失败则重启）
CiTool.exe --update-policy "C:\WDAC\UMFSDK_Supplemental.bin"
```

理论上的执行

```powershell
PS C:\Users\Randark> New-CIPolicy -Level Hash `
>>     -FilePath "C:\WDAC\UMFSDK_Supplemental.xml" `
>>     -ScanPath "C:\Windows\System32\drivers\UMFSDK.sys"
PS C:\Users\Randark>                                                                                                                ]
PS C:\Users\Randark> Set-CIPolicyIdInfo -FilePath "C:\WDAC\UMFSDK_Supplemental.xml" `
>>     -SupplementsBasePolicyID "d2bda982-ccf6-4344-ac5b-0b44427b6816" `
>>     -PolicyName "UMFSDK_HP_LTFS_Driver_HashException" `
>>     -ResetPolicyID
PolicyID = {d0e01f71-0674-47ac-8c35-70a703da9244}
PS C:\Users\Randark> ConvertFrom-CIPolicy `
>>     -XmlFilePath "C:\WDAC\UMFSDK_Supplemental.xml" `
>>     -BinaryFilePath "C:\WDAC\UMFSDK_Supplemental.bin"
C:\WDAC\UMFSDK_Supplemental.bin
PS C:\Users\Randark> [xml]$xml = Get-Content "C:\WDAC\UMFSDK_Supplemental.xml"
PS C:\Users\Randark> $newPolicyId = $xml.SiPolicy.PolicyID.Trim("{}")
PS C:\Users\Randark> Write-Host "新策略 ID: $newPolicyId"
新策略 ID: D0E01F71-0674-47AC-8C35-70A703DA9244
PS C:\Users\Randark> Copy-Item "C:\WDAC\UMFSDK_Supplemental.bin" `
>>     "C:\Windows\System32\CodeIntegrity\CiPolicies\Active\{$newPolicyId}.cip" -Force
PS C:\Users\Randark> CiTool.exe --update-policy "C:\WDAC\UMFSDK_Supplemental.bin"
操作成功
按 Enter 继续
```

失败

检查签名

```powershell
PS C:\Users\Randark> sc.exe start UMFSDK
[SC] StartService FAILED 577:

Windows cannot verify the digital signature for this file. A recent hardware or software change might have installed a file that is signed incorrectly or damaged, or that might be malicious software from an unknown source.

PS C:\Users\Randark> $sig = Get-AuthenticodeSignature 'C:\Windows\System32\drivers\UMFSDK.sys'
PS C:\Users\Randark> $sig.SignerCertificate | Select-Object Subject, NotBefore, NotAfter,
>>     @{N="SignatureAlgorithm"; E={ $_.SignatureAlgorithm.FriendlyName }},
>>     Thumbprint

Subject            : CN=Hewlett-Packard Company, O=Hewlett-Packard Company, L=Palo Alto, S=California, C=US
NotBefore          : 2014/6/25 8:00:00
NotAfter           : 2016/7/25 7:59:59
SignatureAlgorithm : sha1RSA
Thumbprint         : F235DA210041AE613CC670E0984730A0EB4C052A

PS C:\Users\Randark> $sig.SignerCertificate.Issuer
CN=VeriSign Class 3 Code Signing 2010 CA, OU=Terms of use at https://www.verisign.com/rpa (c)10, OU=VeriSign Trust Network, O="VeriSign, Inc.", C=US
```

可以看到证书已经过期
