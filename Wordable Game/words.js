// words.js - Load word lists from text files

async function loadWords() {
    try {
        // Load answer words from answer.txt
        const answersResponse = await fetch('word/answer.txt');
        const answersText = await answersResponse.text();
        const answers = answersText.split('\n')
            .map(word => word.trim().toUpperCase())
            .filter(word => word.length === 5);
        
        // Load allowed words from allowed.txt
        const allowedResponse = await fetch('word/allowed.txt');
        const allowedText = await allowedResponse.text();
        const allowed = allowedText.split('\n')
            .map(word => word.trim().toUpperCase())
            .filter(word => word.length === 5);
        
        console.log(`Loaded ${answers.length} answer words and ${allowed.length} allowed words`);
        
        return { answers, allowed };
    } catch (error) {
        console.error('Error loading word files:', error);
        alert('Error loading word files. Make sure answer.txt and allowed.txt are in the "word" folder.');
        return { answers: [], allowed: [] };
    }
}