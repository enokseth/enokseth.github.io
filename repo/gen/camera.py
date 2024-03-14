camera = [
    {
        "file": "60fps",
        "title": "60fps",
        "min_ios": "7.0",
        "description": "<p>720p60 for iPhone 4s (H4), 1080p60 and WIP 4k30 for iPhone 5s (H6) and WIP 4kp60 for iPhone SE (1st generation) (H9)</p>",
        "changes": [
            ["1.0.0~b1", "Compiled with the latest SDK"]
        ]
    },
    {
        "file": "amber",
        "title": "Amber",
        "min_ios": "7.0",
        "tintColor": "orange",
        "featured_as_banner": True,
        "changes": [
            ["1.2.1", [
                "You can also tap the text under the flashlight icon to switch between modes",
                "Some code refactoring"
            ]],
            ["1.2.0", "You now tap the flashlight icon to switch between modes instead of swiping, iOS 14+"],
            ["1.1.1", "Fixed respring bug when expanding the flashlight CC button"],
            ["1.1.0", "Rootless mode (Swipe-only), iOS 11+"],
            ["1.0.2", "Fixed crashing on iOS 12 when opening flashlight CC module"]
        ],
        "description": "<p><b>As of version 1.2.0, you simply tap the flashlight icon to switch between modes and it targets iOS 14+.</b> Check this <a href=\"https://twitter.com/enokseth/status/1614107542342492160\">video</a> for how it works.</p><br/>\
            <b>As of version 1.1.0, the toggle has been removed and it targets iOS 11+.</b> You can change amber mode through swipe. Check this <a href=\"https://twitter.com/enokseth/status/1499984245640495107\">video</a> for how it works.</p><br/>\
            <p>A tweak that allows setting of Amber LED, or both White and Amber LEDs. Read <a href=\"https://github.com/enokseth/Amber/blob/rootless/README.md\">here</a> for more information.</p>"
    },
    {
        "file": "quadhighcurrent",
        "title": "QuadHighCurrent",
        "min_ios": "10.0",
        "changes": [
            ["1.1.1", "Fixed support for H10ISP cameras"],
            ["1.1.0", "Rootless mode (Enabled-only)"],
            ["1.0.0", [
                    "Fixed blackout settings icon when dark mode is active",
                    "Added arm64e slice to the Flipswitch module"
                ]
            ]
        ],
        "description": "<p>As of version 1.1.0, no toggle is available and the tweak is always enabled.</p><br/>\
            <p>A CC/Flipswitch toggle to always have the maximum LEDs brightness (i.e., using high current) for quad-LEDs devices. An example is when you turn on the light in video recording mode of the stock camera app. For iPhone 7 and newer, iPad Pro 12.9\" (2nd Gen) and newer.</p>"
    },
    {
        "file": "recordntorch",
        "title": "Record 'n' Torch",
        "min_ios": "12.0",
        "changes": [
            ["1.8.2", "Fixed torch not turning on for modern camera devices"]
        ],
        "description": "<p>Toggle torch while recording video on iOS camera app.</p>"
    },
    {
        "file": "expandlesscamcontrols",
        "title": "expandlesscamcontrols",
        "min_ios": "9.0",
        "inline_source_code": True,
        "description": "<p>Adjust Flash/HDR/Timer in Camera (with old UI) with less finger travel. <a href=\"https://twitter.com/enokseth/status/1429331330903408645\">Demo video</a>.</p>"
    },
    {
        "file": "livetextenabler",
        "title": "Live Text Enabler",
        "min_ios": "15.0",
        "changes": [
            ["1.3.0", "Hooks into mediaserverd, this should now let you detect the text on iOS Camera app"],
            ["1.2.0", "Added support for iOS 16+"]
        ],
        "description": "<p>Enable Live Text on unsupported iOS 15+ devices.</p>"
    },
    {
        "file": "trollleds",
        "title": "TrollLEDs",
        "min_ios": "11.0",
        "description": "<p>An iOS application to control individual flashlight LEDs. <a href=\"https://github.com/enokseth/TrollLEDs\">README</a></p>"
    }
]