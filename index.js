var selectionColorHasChanged = false;

function changeSelectionColor() {
    if (selectionColorHasChanged) {
        const styleSheet = document.styleSheets[0];
        styleSheet.deleteRule(styleSheet.cssRules.length - 1);

        selectionColorHasChanged = false
    }

    const selection = window.getSelection();

    if (selection.type === "Range") {
        const selectedText = selection.toString();
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;

        var color;
        if (hexRegex.test(selectedText)) {
            color = selectedText;

            const styleSheet = document.styleSheets[0];
            const rule = `::selection { background-color: ${color} !important; }`;
            styleSheet.insertRule(rule, styleSheet.cssRules.length);

            selectionColorHasChanged = true;
        }
    }
}

document.addEventListener("selectionchange", changeSelectionColor);
