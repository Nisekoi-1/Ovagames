# Tampermonkey Scripts

This repository contains two Tampermonkey userscripts:

1. **Copy Password from Ovagames**: Automatically copies the "password: ###" from Ovagames pages.
2. **URL Decoder for Ovagames**: Automatically decodes Base64-encoded URLs in `linkspy.cc` links and redirects to the final URL.

## Scripts

### 1. Copy Password from Ovagames

A userscript that detects and copies the password from the `#link_download` section of Ovagames pages to your clipboard.

#### Features:
- Automatically finds and copies the password.
- Displays a notification once the password is copied.

#### Installation:
1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. Click [**here**](https://github.com/Nisekoi-1/Ovagames/blob/main/copy_password_from_ovagames.user.js) to install the script.
3. Confirm installation in Tampermonkey.

#### How It Works:
- Scans the `#link_download` element on Ovagames pages.
- Copies the password (e.g., "password: 123") to your clipboard if found.
- A notification will appear to confirm the action.

---

### 2. URL Decoder for Ovagames

A userscript that decodes and redirects Base64-encoded URLs from `Ovagames\linkspy.cc` pages.

#### Features:
- Automatically extracts Base64-encoded URLs.
- Decodes the content and redirects to the final URL, or displays it for manual use.

#### Installation:
1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. Click [**here**](https://github.com/Nisekoi-1/Ovagames/blob/main/URL_Decoder_for_ovagames.user.js) to install the script.
3. Confirm installation in Tampermonkey.

#### How It Works:
- Extracts Base64-encoded parts from `linkspy.cc` URLs.
- Decodes and redirects to the final URL if valid.
- If redirection fails, the decoded URL is displayed on the page.

## Changelog

### v1.4 - Copy Password from Ovagames
- Initial release of the script.

### v1.0 - URL Decoder for linkspy.cc
- Initial release of the script.
