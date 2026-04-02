// resources/js/Pages/Contact.jsx
import { useForm, usePage } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Contact() {
    const { orderType, productId, productName, productPrice } = usePage().props;

    const hasOrder = !!productId;

    const { data, setData, post, processing } = useForm({
        name: '',
        email: '',
        message: orderType === 'custom'
            ? '[Please describe your custom order requirements here...]'
            : '',
        order_type: orderType || null,
        product_id: productId || null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.send'));
    };

    const socialPlatforms = [
        { name: 'FACEBOOK',  placeholder: 'F'  },
        { name: 'INSTAGRAM', placeholder: 'IG' },
        { name: 'TWITTER',   placeholder: 'X'  },
        { name: 'TIKTOK',    placeholder: 'TT' },
    ];

    return (
        <main className="max-w-3xl mx-auto px-8 py-12 page-fade-in">
            <div className="mb-6 uppercase tracking-wider border-b-2 border-black pb-2">
                CONTACT
            </div>

            {/* Order Summary - shown if arriving from a product page */}
            {hasOrder && (
                <div className="border-2 border-black p-6 mb-8 bg-gray-50">
                    <div className="mb-4 uppercase tracking-wider text-sm">
                        {orderType === 'now' ? 'ORDER SUMMARY' : 'CUSTOM ORDER REQUEST'}
                    </div>
                    <div className="space-y-2">
                        <div>
                            <span className="uppercase tracking-wider text-sm">PRODUCT: </span>
                            <span>{productName}</span>
                        </div>
                        <div>
                            <span className="uppercase tracking-wider text-sm">PRICE: </span>
                            <span>${parseFloat(productPrice).toFixed(2)}</span>
                        </div>
                        {orderType === 'custom' && (
                            <div className="mt-2 text-sm opacity-75">
                                [Please describe your customization requirements in the message field below]
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Contact Form */}
            <div className="border-2 border-black p-8 mb-12">
                <div className="mb-6 uppercase tracking-wider text-sm">
                    SEND US A MESSAGE
                </div>
                <div className="mb-4 text-sm opacity-75">
                    [Email will be sent to: placeholder@nailsalon.com]
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block uppercase tracking-wider text-sm mb-2">
                            NAME
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            required
                            className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                            placeholder="[Your Name]"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block uppercase tracking-wider text-sm mb-2">
                            EMAIL
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            required
                            className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                            placeholder="[your.email@example.com]"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block uppercase tracking-wider text-sm mb-2">
                            MESSAGE
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={data.message}
                            onChange={e => setData('message', e.target.value)}
                            required
                            rows={6}
                            className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 resize-none"
                            placeholder="[Your message here...]"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-colors uppercase tracking-wider disabled:opacity-50"
                    >
                        {hasOrder ? 'CONFIRM ORDER' : 'SEND MESSAGE'}
                    </button>

                </form>
            </div>

            {/* Social Media */}
            <div className="border-2 border-black p-8">
                <div className="mb-6 uppercase tracking-wider text-sm text-center">
                    FOLLOW US ON SOCIAL MEDIA
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                    {socialPlatforms.map(platform => (
                        <button
                            key={platform.name}
                            className="w-16 h-16 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center uppercase tracking-wider text-sm"
                            aria-label={platform.name}
                        >
                            {platform.placeholder}
                        </button>
                    ))}
                </div>
            </div>

        </main>
    );
}

Contact.layout = (page) => <Layout>{page}</Layout>;
