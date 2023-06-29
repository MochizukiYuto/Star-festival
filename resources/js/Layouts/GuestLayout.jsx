import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0  bg-gradient-to-b from-blue-500 to-purple-500 text-center">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>
                <div className="w-auto md:w-1/2 sm:max-w-md mt-6 px-6 py-4 shadow-md overflow-hidden rounded-lg bg-white">
                    {children}
                </div>
            </div>

        </>
    );
}
