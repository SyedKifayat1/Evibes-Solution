import React from 'react';
import './marketing-details.css';

const MarketingDetails = () => {
    const data = [
        {
            id: 'social-media',
            h1: "Social Media Marketing",
            p: `Social media is a powerful tool that helps you build connections and brand awareness.
                We help you manage your profiles, create engaging content, and interact with your
                followers to strengthen your online community. Our team of experts will make sure
                your brand stays active and connected.`,
            li1: `Social Media Management - We'll manage your social profiles, create engaging content, and foster interactions with your followers to strengthen your online community.`,
            li2: `Audience Tracking and Engagement - We'll help you track your targeted audience and build two-way connections with your audience.`,
            li3: `Content Strategy and Creation - We'll tailor your social media content, track and connect with your audience to build two-way relationships with your targeted audience.`
        },
        {
            id: 'google-ads',
            h1: "Google Ads & PPC",
            p: `Google Ads is a digital advertising platform that helps businesses grow by reaching potential customers and driving sales. With Google Ads, you can create targeted ads that appear on Google search results, YouTube, Gmail, and other Google properties. This allows you to effectively promote your business, products, or services to the right audience at the right time.`,
            li1: `Dedicated Account Management: You'll have a team of Google Ads specialists dedicated to your account, ensuring personalized attention and optimal performance.`,
            li2: `Proven Track Record - We have a proven track record of delivering successful Google Ads campaigns for businesses across various industries.`,
            li3: `Ongoing Optimization - We continuously monitor and optimize your campaigns to ensure you're getting the best return on your advertising investment.`
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
