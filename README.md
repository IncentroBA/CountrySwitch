# CountrySwitch
Simple dropdown to select a country and display the flag

## Features
Dropdown with country flags

## Typical usage scenario
With a global language select or when selecting a country for phone number(s).

### Limitations
The country flags are based on underscore country codes, not like `"en_us"` and `"nl_nl"`. Use the following country codes:

`"ac", "ad", "ae", "af", "ag", "ai", "al", "am", "ao", "ar", "as",
  "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi",
  "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz",
  "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr",
  "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec",
  "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr",
  "ga", "gb-eng", "gb-nir", "gb-sct", "gb-wls", "gb-zet", "gb", "gd", "ge", "gf",
  "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw",
  "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io",
  "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km",
  "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "lgbt", "li", "lk", "lr",
  "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk",
  "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx",
  "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu",
  "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps",
  "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd",
  "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st",
  "sv", "sx", "sy", "sz", "ta", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl",
  "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "us", "uy",
  "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xk", "ye", "yt",
  "za", "zm", "zw"`

## Configuration
The list of countries is attached via enumeration value. You can set an onchange action.

## Development and contribution
1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm run start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]


## Bugs
none known at this moment.