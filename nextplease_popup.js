(function () {
    const pageNumInput = $("#PageNum");
    const pageNumButton = $("#PageNumButton");

    function goToPage() {
        const pageNumStr = pageNumInput.val();
        console.log(`page
                nextplease.sendMessageToActiveTab({ number: pageNum });
            } else {
                nextplease.notify({
                    titleKey: "pageNumErrorTitle",
                    messageKey: "pageNumErrorMsg",
                    messageArgs: [pageNumStr]
                });
          
    }

    pageNumInput.keyup((e) => {
        pageNumButton.attr("disabled", !parseInt(pageNumInput.val(), 10));
    });
    pageNumInput.change(goToPage);
    pageNumButtone.sendMessageToActiveTab({ direction: direction });
        });
    }

    $("#Options").click(e => browser.runtime.openOptionsPage());

    browser.commands.getAll().then(commands => {
        for (const command of commands) {
            const ele
                if (command.shortcut) {
                    const shortcutText = command.shortcut;
                    // TODO Below doesn't work
                    // const shortcutText = command.shortcut.split("+").map(ShortcutCustomizeUI.getLocalizedKey).join("+");
                    // https://github.com/piroor/webextensions-lib-shortcut-customize-ui/issues/7
                    element.title = `${element.title} (${shortcutText})`;
                }
           
        
    });
})