export function getAceMode(language:unknown) {
    switch (language) {
        case 'cpp':
            return 'c_cpp';
        case 'java':
            return 'java';
        case 'javascript':
            return 'javascript';
        case 'python':
            return 'python';
        default:
            return 'text';
    }
}