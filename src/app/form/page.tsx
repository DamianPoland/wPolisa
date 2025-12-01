"use client";
import axios from "axios";

export const FormPage = () => {

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/form', {
                name: 'John',
                email: 'john@example.com',
            });
            console.log('Response from API:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }



    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div>Form</div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={(e) => onSubmit(e)}
            >
                Submit
            </button>
        </div>
    );
}

export default FormPage;