import React from 'react'
import './seo-need-card.css'
import KeywordImg from '../../../assets/keyword.png'
import OnPageImg from '../../../assets/website-optimization2.png'
import TechSEOImg from '../../../assets/technical-support.png'
import LinkBuildSEO from '../../../assets/link-building.png'
import ContentSEOImg from '../../../assets/copy-writing.png'
import MobileOpImg from '../../../assets/mobile.png'
import LocalSEOImg from '../../../assets/local-seo.png'
import AnalyticsImg from '../../../assets/analysis.png'
const SEONeedCard = () => {
    const cards = [
        { title: 'Keyword Research', content: "Keyword research is the foundation of a successful SEO strategy. We dive deep into search data, analyze competitor strategies, and identify high- potential keywords that align with your business goals.", Img:  KeywordImg  },
        { title: 'On-page optimization', content: "On-page optimization is the foundation of SEO. We strategically enhance your website's content, HTML tags, and technical structure, aligning them with search engine best practices and your target keywords.", Img: OnPageImg },
        { title: 'Technical SEO', content: "We optimize the 'behind-the- scenes' aspects of your website, ensuring it's fast, secure, and easily understood by search engines. This leads to Improved rankings, better user experience", Img: TechSEOImg },
        { title: 'Link building', content: "Our link-bullding strategies focus on acquiring links from relevant, trustworthy sources, signaling to search engines that your website is a valuable resource worth ranking higher.", Img: LinkBuildSEO },
        { title: 'Content creation', content: "Our experienced content team crafts persuasive copy that aligns with your brand voice. tells your unique story, and connects with your audience on a deeper level.", Img: ContentSEOImg },
        { title: 'Local SEO', content: "Our local SEO strategies ensure your business is found by people searching for your products or services in your specific city or region, leading to more phone calls, website visits, and in-store purchases.", Img: LocalSEOImg },
        { title: 'Mobile optimization', content: "We fine-tune every aspect of your website-from speed and design to content and SEO- to deliver a seamless user experience, higher search engine rankings, and Increased conversions.", Img: MobileOpImg },
        { title: 'Analytics and reporting', content: "We fine-tune every aspect of your website-from speed and design to content and SEO- to deliver a seamless user experience, higher search engine rankings, and Increased conversions.", Img: AnalyticsImg },

    ];
    return (
        <section className="seo-need-section">
            <div className="seo-need-cards">
                {cards.map((card, index) => (
                    <div className="seo-need-card" key={index}>
                        <div className="seo-need-card-img">
                            <img src={card.Img} alt={card.title} />
                        </div>
                        <h4>{card.title}</h4>
                        <p>{card.content}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SEONeedCard