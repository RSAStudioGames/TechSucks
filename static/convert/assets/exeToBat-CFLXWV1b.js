import{n as e}from"./Formats-Bk-MOvOr.js";import{a as t,r as n}from"./common-BexlDcRg.js";import{t as r}from"./buffer-Dw5hIAYI.js";var i=r(),a=`application/vnd.microsoft.portable-executable`,o=class{name=`exeToBat`;supportedFormats=[e.EXE.builder(`exe`).from(),e.BATCH.builder(`bat`).lossless().to()];ready=!1;async init(){this.ready=!0}async doConvert(t,n,r){if(n.mime!==a||r.mime!==e.BATCH.mime)throw TypeError(`This handler only supports EXE to BAT conversion`);let i=[];for(let e of t){let t=await this.convertExeToBat(e);i.push(t)}return i}async convertExeToBat(e){let r=t(e.name),a=`${r}.bat`,o=i.Buffer.from(e.bytes).toString(`base64`),s=this.generateBatchWrapper(r,o),c;try{c=n(s)}catch(e){throw console.error(`[exe2bat] Error encoding batch content:`,e),Error(`Failed to encode batch content`,{cause:e})}return{name:a,bytes:c}}generateBatchWrapper(e,t){return`@echo off
setlocal

:: Auto-generated EXE-embedded batch
:: Reconstructs and runs ${e}

set "outExe=%TEMP%\\${e}.exe"
set "b64file=%TEMP%\\payload.b64"

echo Extracting payload to %b64file%...

:: Clean up existing files
if exist "%b64file%" del "%b64file%"
if exist "%outExe%" del "%outExe%"

:: Fast extraction using PowerShell
powershell -NoProfile -Command "$lines = Get-Content '%~f0'; $start = $lines.IndexOf('-----BEGIN PAYLOAD-----') + 1; $end = $lines.IndexOf('-----END PAYLOAD-----'); $payload = $lines[$start..($end-1)]; Set-Content -LiteralPath '%b64file%' -Value $payload -Encoding ASCII"

:: Debug: Check if payload was extracted
if exist "%b64file%" (
  echo Payload extracted successfully
  for %%i in ("%b64file%") do echo Payload size: %%~zi bytes
) else (
  echo ERROR: Payload extraction failed
  exit /b 1
)

echo Decoding using certutil...
certutil -decode "%b64file%" "%outExe%"

:: Debug: Check certutil result
if %errorlevel% equ 0 (
  echo Certutil decoding successful
) else (
  echo ERROR: Certutil failed with error code %errorlevel%
  echo Checking payload content...
  type "%b64file%" | find /C "TV" >nul
  if errorlevel 1 (
    echo ERROR: Payload does not appear to be valid base64
  ) else (
    echo Payload appears to be base64 but certutil failed
  )
)

if exist "%outExe%" (
  echo Running %outExe%...
  start "" "%outExe%"
) else (
  echo ERROR: reconstruction failed.
)

exit /b 0

-----BEGIN PAYLOAD-----
${t}
-----END PAYLOAD-----`}};export{o as default};