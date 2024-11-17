'use client';
import { converTextToSpeech } from '@/actions/converTextToSpeech';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from './Button';


type FormState = {
    text: string;
    speaker: string;
};

export const TTSForm = () => {
    const [form, setForm] = useState<FormState>({
        text: '',
        speaker: 'MALE',
    });
    const [loading, setLoading] = useState(false);
    const [audioData, setAudioData] = useState<string | null>(null);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const { text, speaker } = form;

        if (text && text.length > 10 && text.length < 500) {
            try {
                const data: any = await converTextToSpeech({ text, speaker });
                if (data) {
                    setLoading(false);
                    const audioBlob = new Blob(
                        [
                            new Uint8Array(
                                atob(data)
                                    .split('')
                                    .map((char) => char.charCodeAt(0))
                            ),
                        ],
                        { type: 'audio/mp3' }
                    );
                   const audioUrl = URL.createObjectURL(audioBlob);
        console.log("Audio URL:", audioUrl); // Debug
        setAudioData(audioUrl);
        toast.success('Your TTS file is ready');
    } else {
        setLoading(false);
        toast.error('Something went wrong');
    }
} catch (error) {
    console.error('Error converting text to speech:', error);
    setLoading(false);
    toast.error('An error occurred');
            }
        } else if (text.length < 10) {
            setLoading(false);
            toast.error('Add more text for better conversion');
        } else if (text.length > 500) {
            setLoading(false);
            toast.error('Only 500 characters max allowed');
        }
    };

    return (
        <div className="min-h-[20vh] w-full relative flex items-center justify-center overflow-hidden mt-5">
            <div className="relative z-10 w-[55rem]">
                <div className="custom_background p-5">
                    <form onSubmit={onSubmitForm} className="flex-1 relative z-20">
                        <div className="mb-3">
                            <textarea
                                id="text"
                                name="text"
                                value={form.text || ''}
                                onChange={handleChange}
                                rows={3}
                                className="w-full p-2 bg-transparent border border-transparent focus:outline-none text-white"
                                placeholder="Type the text here and listen to the magic work"
                            ></textarea>
                        </div>
                        <div className="flex justify-start">
                            <div className="custom_background flex items-center gap-2 py-1">
                                <label className='block text-white'>Speaker:</label>
                                <select
                                id="speaker"
                                name="speaker"
                                value={form.speaker}
                                onChange={handleChange}
                                className='block relative z-20 w-full px-0 py-1 pr-2 leading-tight bg-transparent text-gray-200 rounded focus:outline-none focus:ring-0'>
                                    <option
                                    value='MALE'
                                    className='text-gray-300 bg-gray-800 hover:bg-gray-500'
                                    >Male Voice

                                    </option>
                                    <option
                                    value='FEMALE'
                                    className='text-gray-300 bg-gray-800 hover:bg-gray-500'
                                    >Female Voice

                                    </option>
                                    

                                </select>

                            </div>
                        </div>
                        <div className="div">
                            <hr className='border-[0.2px] border-gray-400/10'/>
                            </div>
                            {loading &&(
                                <div className="w-full absolute flex justify-center bottom-0 z-20">
                                    <span className='w-fit absolute flex justify-center top-0 h-full items-center'>
                                        {' '}
                                        ....
                                    </span>
                                </div>
                            )}

                    {audioData && (
                        <div className="audio-container mt-10">
                            <audio controls src={audioData} ></audio> 
                        </div>
                    )}
                    <div className="w-full flex justify-center items-center pt-2">
                        <div className="w-fit">
                            <Button 
                            text={`${loading ? 'converting...' : 'convert to Speech'}`} 
                            link={''}/>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
