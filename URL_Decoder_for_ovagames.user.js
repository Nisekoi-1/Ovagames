// ==UserScript==
// @name         URL Decoder for linkspy.cc
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Decode linkspy.cc URLs automatically
// @match        https://linkspy.cc/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function decodeBase64Url(str) {
        // Add padding if necessary
        str = str.replace(/-/g, '+').replace(/_/g, '/');
        str += '=='.slice(0, (4 - str.length % 4) % 4);
        try {
            return decodeURIComponent(atob(str).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        } catch (e) {
            return str;
        }
    }

    function extractBase64FromUrl(url) {
        const base64Start = url.lastIndexOf('aHR0');
        if (base64Start === -1) return null;
        let base64Part = url.slice(base64Start);
        base64Part = base64Part.split('?')[0].split('&')[0].split()[0];
        return base64Part;
    }

    function extractAndDecode(url) {
        const decodedUrl = decodeURIComponent(url);
        const base64Part = extractBase64FromUrl(decodedUrl);
        if (!base64Part) return "No Base64 encoded URL found";

        const decodedContent = decodeBase64Url(base64Part);
        if (decodedContent.includes('?') && decodedContent.includes('=')) {
            const parsedUrl = new URL(decodedContent);
            const urlParam = parsedUrl.searchParams.get('url');
            if (urlParam) {
                const finalUrl = decodeBase64Url(urlParam);
                return finalUrl || "Decoded URL parameter is empty";
            }
        }
        return decodedContent;
    }

    function redirectToFinalUrl() {
        const currentUrl = window.location.href;
        const finalUrl = extractAndDecode(currentUrl);
        if (finalUrl && finalUrl.startsWith('http')) {
            window.location.href = finalUrl;
        } else {
            // If we couldn't decode or the result isn't a valid URL, display it
            document.body.innerHTML = `
                <h1>Decoded URL:</h1>
                <p>${finalUrl}</p>
                <p>Unable to redirect automatically. If this looks like a valid URL, please copy and paste it into your browser.</p>
            `;
        }
    }

    // Run the script
    redirectToFinalUrl();
})();
