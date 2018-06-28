isPanelShown = false;

function toggleBurger() {
    isPanelShown = !isPanelShown;
    navpanel.className = isPanelShown ? 'flex-container visible' : 'flex-container';
}