import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const FAQ = () => {
    const { darkMode } = useContext(AuthContext)
    return (
        <div className={`my-4 lg:my-8 w-11/12 m-auto text-white ${darkMode ? "text-white" : "text-black"}`}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-4 lg:my-8">FAQ</h1>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What types of products does PrismCraft Emporium offer?
                    </div>
                    <div className="collapse-content">
                        <p>PrismCraft Emporium specializes in offering a wide range of paper and glass art and crafts products. Our inventory includes handmade greeting cards, scrapbooking supplies, paper quilling kits, glass painting materials, lampworking tools, and much more. Explore our website to discover unique creations crafted with passion and skill.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer customization options for your products?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we understand that personalization adds a special touch to gifts and crafts. At PrismCraft Emporium, we offer customization options for many of our products. Whether you're looking to personalize a handmade card with a heartfelt message or create a custom stained glass piece for your home, we're here to bring your vision to life. Contact our customer service team for more information on customization options.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What sets PrismCraft Emporium apart from other art and crafts sellers?
                    </div>
                    <div className="collapse-content">
                        <p>At PrismCraft Emporium, we are committed to providing our customers with high-quality products that inspire creativity and imagination. What sets us apart is our dedication to craftsmanship, attention to detail, and passion for the arts. With a diverse selection of paper and glass art supplies, exceptional customer service, and a community-focused approach, we strive to be your go-to destination for all things creative. Experience the PrismCraft difference today!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;