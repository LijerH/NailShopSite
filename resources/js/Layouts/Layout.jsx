import { Link } from '@inertiajs/react';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Header - Sticky */}
            <header className="sticky top-0 z-50 bg-white border-b-2 border-black py-6 px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Desktop Layout - Hidden below 900px */}
                    <div className="hidden min-[900px]:flex min-[900px]:items-center min-[900px]:justify-between min-[900px]:w-full">
                        {/* Logo - Left */}
                        <Link
                            href={route('home')}
                            className="flex flex-col items-center justify-center border-2 border-black px-12 py-8 hover:bg-black hover:text-white transition-colors"
                        >
                            <div className="uppercase tracking-wider mb-1">COMPANY</div>
                            <div className="uppercase tracking-wider">LOGO</div>
                        </Link>
                        {/* Menu Buttons - Right */}
                        <div className="flex gap-4">
                            <Link
                                href={route('store')}
                                className="border-2 border-black px-12 py-2 hover:bg-black hover:text-white transition-colors"
                            >
                                STORE
                            </Link>
                            <Link
                                href={route('contact')}
                                className="border-2 border-black px-12 py-2 hover:bg-black hover:text-white transition-colors"
                            >
                                CONTACT
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Layout - Visible below 900px */}
                    <div className="min-[900px]:hidden w-full flex items-center justify-between">
                        {/* Logo - Left */}
                        <Link
                            href={route('home')}
                            className="flex flex-col items-center justify-center border-2 border-black px-8 py-4 hover:bg-black hover:text-white transition-colors"
                        >
                            <div className="uppercase tracking-wider text-sm mb-1">COMPANY</div>
                            <div className="uppercase tracking-wider text-sm">LOGO</div>
                        </Link>
                        {/* Hamburger Dropdown */}
                        <details className="relative">
                            <summary className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors aspect-square flex items-center justify-center cursor-pointer list-none">
                                <span className="text-2xl">☰</span>
                            </summary>
                            <div className="absolute right-0 top-full mt-2 bg-white border-2 border-black min-w-[200px]">
                                <Link
                                    href={route('store')}
                                    className="block w-full border-b-2 border-black px-6 py-4 hover:bg-black hover:text-white transition-colors"
                                >
                                    STORE
                                </Link>
                                <Link
                                    href={route('contact')}
                                    className="block w-full px-6 py-4 hover:bg-black hover:text-white transition-colors"
                                >
                                    CONTACT
                                </Link>
                            </div>
                        </details>
                    </div>

                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    );
}
