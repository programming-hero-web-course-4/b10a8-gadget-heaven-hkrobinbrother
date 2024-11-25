const Faq = () => {
    return (
        <div>
            <div className="bg-primary">
                <div className="flex flex-col justify-center items-center text-center pt-8 pb-[60px]">
                    <h1 className="text-3xl text-white font-semibold">Frequently Asked Questions</h1>
                    <p className="text-gray-200 mt-3">
                        Our Frequently Asked Questions (FAQ) section provides answers to common queries about our products and services.
                        <br className="hidden md:block" />
                        If you have any further questions, feel free to reach out to our customer support!
                    </p>

                </div>
            </div>
            <div className="flex justify-center flex-col md:flex-row mt-10 mb-10">
                <div>
                    <img className="h-full rounded-md" src="https://i.ibb.co.com/SfWYZcy/faq.png" alt="" />
                </div>
                <div className="px-10 flex flex-col gap-1">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">1. What payment methods do you accept?</div>
                        <div className="collapse-content">
                            <p>We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">2. How can I track my order?</div>
                        <div className="collapse-content">
                            <p>Once your order has been shipped, you will receive a confirmation email with a tracking number.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">3. What is your return policy?</div>
                        <div className="collapse-content">
                            <p>You can return any unused item within 30 days of purchase for a full refund. Please ensure the item is in its original packaging.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">4. How do I contact customer support?</div>
                        <div className="collapse-content">
                            <p>You can contact our customer support team via the contact form on our website or by emailing us at ibrahim@gmail.com</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">5. Do you offer warranties on your products?</div>
                        <div className="collapse-content">
                            <p>Yes, we offer warranties on many of our products. Warranty details can be found in the product descriptions.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">6. Can I change my order after placing it?</div>
                        <div className="collapse-content">
                            <p>If you need to change your order, please contact us as soon as possible. We can modify your order if it has not yet been processed.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">7. What should I do if I receive a damaged product?</div>
                        <div className="collapse-content">
                            <p>If you receive a damaged product, please contact our customer support within 48 hours of delivery. </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">8. Is it safe to shop on your website?</div>
                        <div className="collapse-content">
                            <p>Yes, shopping on GadgetHeaven is  your personal and payment information during checkout.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">9. How do I create a wishlist?</div>
                        <div className="collapse-content">
                            <p>You can create a wishlist by clicking the ♥ (heart) icon on any product page. </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">10. Do you have any discounts or promotions?</div>
                        <div className="collapse-content">
                            <p>Yes, we regularly offer discounts and promotions.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Faq;