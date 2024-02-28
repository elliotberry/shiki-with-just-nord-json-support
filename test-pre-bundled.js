import makeHTML from "./index.js";
import fs from "fs";

let value = `{
    "ip": "130.44.182.125",
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    "requests": 2,
    "timeISO": "2024-02-28T21:27:03.087Z",
    "allHeaders": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-encoding": "gzip",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "cf-connecting-ip": "130.44.182.125",
      "cf-ipcountry": "US",
      "cf-ray": "85cbbfd42d4742d7",
      "cf-visitor": "{\"scheme\":\"https\"}",
      "connection": "Keep-Alive",
      "cookie": "cf_clearance=yLMiC7fT0Neolv9AaBq_E_VolB3vIgQqorZZ985Pd70-1709155531-1.0-AZp/QJAHLfH/xX7NhHh22JdB0GWQ6fr6djYV7DMCZadb8DQj38UsxnGeaQ6LQDY62L8UmlmtIrOIuXvjbpIxBsA=",
      "host": "logs.daddy.cat",
      "priority": "u=0, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      "x-forwarded-proto": "https",
      "x-real-ip": "130.44.182.125"
    },
    "cf": {
      "longitude": "-71.12460",
      "latitude": "42.39960",
      "tlsCipher": "AEAD-AES128-GCM-SHA256",
      "continent": "NA",
      "asn": 6079,
      "clientAcceptEncoding": "gzip, deflate, br, zstd",
      "country": "US",
      "tlsClientRandom": "RUkcIhe19XukwAj3Y3fzitiwi9OXWPFtO1Rcp5kog0A=",
      "tlsClientAuth": {
        "certIssuerDNLegacy": "",
        "certIssuerSKI": "",
        "certSubjectDNRFC2253": "",
        "certSubjectDNLegacy": "",
        "certFingerprintSHA256": "",
        "certNotBefore": "",
        "certSKI": "",
        "certSerial": "",
        "certIssuerDN": "",
        "certVerified": "NONE",
        "certNotAfter": "",
        "certSubjectDN": "",
        "certPresented": "0",
        "certRevoked": "0",
        "certIssuerSerial": "",
        "certIssuerDNRFC2253": "",
        "certFingerprintSHA1": ""
      },
      "verifiedBotCategory": "",
      "tlsExportedAuthenticator": {
        "clientFinished": "a00f396162105eb547dc2a927a4c10b230603e4cae7944f62385e3a57e68b23d",
        "clientHandshake": "5966e7e36434a8b3891a6db4c5afcb1708785458fb44f9d07ddfc44f721a7c06",
        "serverHandshake": "2be10573e4178e77d33c76e427a4c67f2fed447dc7f1ac467e25f1ccb73215fa",
        "serverFinished": "24adb88f1e878068752048c28be8c67cf3f690d7ebff84b91c5630f6889c2e0c"
      },
      "tlsVersion": "TLSv1.3",
      "city": "Somerville",
      "timezone": "America/New_York",
      "colo": "EWR",
      "edgeRequestKeepAliveStatus": 1,
      "postalCode": "02144",
      "tlsClientHelloLength": "1998",
      "region": "Massachusetts",
      "httpProtocol": "HTTP/3",
      "regionCode": "MA",
      "asOrganization": "Astound Broadband",
      "metroCode": "506",
      "requestPriority": "",
      "botManagement": {
        "corporateProxy": false,
        "verifiedBot": false,
        "jsDetection": { "passed": false },
        "staticResource": false,
        "detectionIds": {},
        "score": 99
      }
    }
  }
  `
async function main() {
    
  const html = await makeHTML(value);
  await fs.promises.writeFile("pre-bundled-output.html", html);
}

main();
