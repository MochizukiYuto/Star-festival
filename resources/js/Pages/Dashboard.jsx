import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight bg-indigo-300">ダッシュボード</h2>}
        >
            <Head title="ダッシュボード" />

            <div className='h-screen w-screen flex justify-center items-center'>
                あなたの組織がより良いものになるように短く簡潔に共有。上の投稿をクリック。
            </div>
        </AuthenticatedLayout>
    );
}
