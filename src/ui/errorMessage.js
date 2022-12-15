const TIMEOUT = 5000;

export function showErrorMessage(element, message, errorElement) {
    errorElement.innerHTML = message;
    setTimeout(() => {
        errorElement.innerHTML = '';
        element.value = '';
    }, TIMEOUT)
}