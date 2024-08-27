console.log("background script loaded");

chrome.tabs.onActivated.addListener(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].url);
        if (tabs[0].url.includes("www.youtube.com/watch"))
            chrome.tabs.update(tabs[0].id, {
                url: "https://ytvideo-enul.vercel.app" + "?video_url=" + tabs[0].url
            });
    });
});
