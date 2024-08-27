console.log("background script loaded");

chrome.tabs.onCreated.addListener(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (tabs[0].url.startsWith("https://www.youtube.com/watch"))
            chrome.tabs.update(tabs[0].id, {
                url: "https://ytvideo-enul.vercel.app" + "?video_url=" + tabs[0].url
            });
    });
});

chrome.tabs.onUpdated.addListener(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.storage.local.set({ "url": "https://ytvideo-enul.vercel.app" + "?video_url=" + tabs[0].url });
        console.log(tabs[0].url);
        if (tabs[0].url.startsWith("https://www.youtube.com/watch")) {
            chrome.tabs.update(tabs[0].id, {
                url: "https://ytvideo-enul.vercel.app" + "?video_url=" + tabs[0].url
            });
        }
        console.log(chrome.storage.local.get(["url"]))
    });
});

chrome.tabs.onActivated.addListener(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (tabs[0].url.startsWith("https://www.youtube.com/watch"))
            chrome.tabs.update(tabs[0].id, {
                url: "https://ytvideo-enul.vercel.app" + "?video_url=" + tabs[0].url
            });
    });
});