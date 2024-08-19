document.addEventListener('DOMContentLoaded', function () {
    const easyTexts = [
        "The cat sat on the mat.",
        "A quick brown fox jumps over the lazy dog.",
        "She sells seashells by the seashore."
    ];

    const mediumTexts = [
        "The quick brown fox jumps over the lazy dog near the riverbank.",
        "She sells seashells by the seashore, where the waves crash.",
        "A journey of a thousand miles begins with a single step."
    ];

    const hardTexts = [
        "The quick brown fox jumps over the lazy dog near the riverbank, where the sun sets.",
        "She sells seashells by the seashore, where the waves crash and the seagulls fly.",
        "A journey of a thousand miles begins with a single step, but the path is long and winding."
    ];

    const difficultySelect = document.getElementById('difficulty');
    const sampleTextDiv = document.getElementById('sample-text');

    function getRandomText(textArray) {
        const randomIndex = Math.floor(Math.random() * textArray.length);
        return textArray[randomIndex];
    }

    function updateSampleText() {
        let selectedText;
        switch (difficultySelect.value) {
            case 'easy':
                selectedText = getRandomText(easyTexts);
                break;
            case 'medium':
                selectedText = getRandomText(mediumTexts);
                break;
            case 'hard':
                selectedText = getRandomText(hardTexts);
                break;
            default:
                selectedText = "Please select a difficulty level.";
        }
        sampleTextDiv.textContent = selectedText;
    }

    difficultySelect.addEventListener('change', updateSampleText);

    // Initialize with a default text
    updateSampleText();
});