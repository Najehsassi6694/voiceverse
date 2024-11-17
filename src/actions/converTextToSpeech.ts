'use server';

export const converTextToSpeech = async ({
    text,
    speaker
}: {
    text: string;
    speaker: string;
}) => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    if (!url){
        console.error('API URL IS UNDEFINED');
        throw new Error('API URL IS MISSING');
    }
    let mediaStudio = speaker === 'MALE' ? 'en-US-News-N' : 'en-US-News-L';

    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY|| '',
            'x-rapidapi-host': 'joj-text-to-speech.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: {
                text: text
            },
            voice: {
                languageCode: 'en-US',
                name: mediaStudio,
                ssmlGender: speaker === 'MALE' ? 'MALE' : 'FEMALE'
            },
            audioConfig: {
                audioEncoding: 'MP3'
            }
        })
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in converTextToSpeech:", error);
        throw error;
    }
};
