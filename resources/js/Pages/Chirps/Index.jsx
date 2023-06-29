import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Chirp from '@/Components/Chirp'
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ auth, chirps }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('chirps.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="投稿" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 ">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="願いを込めて"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>願いを載せる</PrimaryButton>
                </form>
            </div>
            <div className='max-w-full'>
                <div className='flex flex-wrap'>


                    {chirps.map(chirp =>
                        <Chirp key={chirp.id} chirp={chirp} />
                    )}

                </div>
            </div>


        </AuthenticatedLayout>
    );
}
