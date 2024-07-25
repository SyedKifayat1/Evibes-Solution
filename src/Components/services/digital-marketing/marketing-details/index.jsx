import React from 'react';
import './marketing-details.css';

const MarketingDetails = () => {
    const data = [
        {
            id: 'social-media',
            h1: "Social Media Marketing",
            p: `Social media is a powerful tool for building connections and brand awareness. Evibes Development helps you manage your profiles, create engaging content, and interact with your followers to strengthen your online community. Our team of experts will ensure your brand stays active and connected.`,
            li1: `Social Media Management - We'll manage your social profiles, create engaging content, and build a strong online community, driving engagement and achieving your business goals.`,
            li2: `Audience Tracking and Engagement - We'll help you track your audience, understand their needs, and build two-way connections, fostering a loyal and engaged following.`,
            li3: `Content Strategy and Creation - We'll tailor your content, track its performance, and connect with your audience in meaningful ways, ensuring your social media efforts are always evolving to maximize impact and deliver a strong return on investment.`
        },
        {
            id: 'google-ads',
            h1: "Google Ads & PPC",
            p: `Through its ability to connect with new clients and increase sales, Google Ads is a digital advertising platform that supports business development. You can make targeted advertising using Google advertising that show up on YouTube, Gmail, Google search results, and other Google sites.`,
            li1: `Dedicated Google Ads Experts: Our team will provide personalized attention to your account, ensuring optimal performance.`,
            li2: `Proven Success: We have a proven track record of delivering successful Google Ads campaigns.`,
            li3: `Continuous Optimization: We constantly monitor and optimize your campaigns for maximum return on investment.`
        },
        {
            id: 'brand-growth',
            h1: "Branding & Growth",
            p: `Branding involves creating a strong and distinctive identity for your business that connects with your target audience. This includes defining your brand’s values, personality, and positioning to differentiate yourself from competitors.`,
            li1: `Increased Brand Awareness - Reach a wider audience and increase brand visibility.`,
            li2: `Improved Customer Engagement - Engage with your audience across various digital channels.`,
            li3: `Higher Conversion Rates - Optimize your website and marketing funnels to improve conversion rates.`
        }
    ];

    return (
        <>
            {data.map((detail) => (
                <section className="marketing-details" id={detail.id} key={detail.id}>
                    <div className="content">
                        <h1>{detail.h1}</h1>
                        <p>{detail.p}</p>
                        <button>Get Started</button>
                    </div>
                    <div className="details">
                        <ul>
                            <li>{detail.li1}</li>
                            <li>{detail.li2}</li>
                            <li>{detail.li3}</li>
                        </ul>
                    </div>
                </section>
            ))}
        </>
    );
}

export default MarketingDetails;
