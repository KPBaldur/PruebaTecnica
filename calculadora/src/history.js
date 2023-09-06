export function getHistory() {
    const history = localStorage.getItem('calculatorHistory');
    return history ? history.split('.') : [];
}

export function updateHistory(newHistory) {
    localStorage.setItem('calculatorHistory', newHistory.join(','));
}