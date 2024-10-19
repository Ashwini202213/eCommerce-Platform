import React, { useState } from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="description-box">
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-navbox ${
            activeTab === "description" ? "active" : ""
          }`}
          onClick={() => handleTabClick("description")}
        >
          Description
        </div>
        <div
          className={`descriptionbox-navbox ${
            activeTab === "reviews" ? "active" : ""
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews(122)
        </div>
      </div>

      {activeTab === "description" && (
        <div className="descriptionbox-description">
          <p>
            Welcome to ShopSphere. Discover an exceptional online shopping
            experience with ShopSphere. We offer a wide range of premium products
            across various categories, including fashion, electronics, home
            essentials, beauty, and more—all carefully curated to meet your needs.
          </p>
          <p>
            Our platform is designed with you in mind, providing a seamless and
            secure shopping experience. Enjoy features like:
          </p>
          <p>Easy Navigation: Quickly find the products you love with our user-friendly interface.</p>
          <p>Advanced Search: Use filters and categories to refine your search and discover exactly what you're looking for.</p>
          <p>Personalized Recommendations: Get customized product suggestions based on your preferences and browsing history.</p>
          <p>Secure Checkout: Experience safe and hassle-free transactions with multiple payment options, including credit cards, wallets, and cash on delivery.</p>
          <p>Fast Delivery: We offer reliable shipping and delivery services to ensure your products reach you on time.</p>
          <p>Exclusive Offers: Unlock discounts, deals, and special promotions just for you.</p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="descriptionbox-reviews">
          <p>Customer Reviews</p>
          <p>User1: "Great product and fast delivery!"</p>
          <p>User2: "Excellent quality and customer service!"</p>
          {/* Add more reviews here */}
        </div>
      )}
    </div>
  );
}

export default DescriptionBox;














// import React from "react";
// import "./DescriptionBox.css";
// function DescriptionBox() {
//   return (
//     <div className="description-box">
//       <div className="discriptionbox-navigator">
//         <div className="descriptionbox-navbox">Description</div>
//         <div className="descriptionbox-navbox fade">Reviews(122)</div>
//       </div>
//       <div className="descriptionbox-description">
//         <p>
//           Welcome to ShopSphere. Discover an exceptional online shopping
//           experience with ShopSphere. We offer a wide range of premium products
//           across various categories, including fashion, electronics, home
//           essentials, beauty, and more—all carefully curated to meet your needs.
//         </p>
//         <p>
//           Our platform is designed with you in mind, providing a seamless and
//           secure shopping experience. Enjoy features like: 
//           </p>
//          <p> Easy Navigation:
//          Quickly find the products you love with our user-friendly interface.</p>
//          <p>Advanced Search: Use filters and categories to refine your search and
//          discover exactly what you're looking for. </p>
          
//           <p>Personalized Recommendations: Get customized product suggestions based on your
//           preferences and browsing history. </p>
//           <p>
//           Secure Checkout: Experience safe and hassle-free transactions with multiple payment options, including credit cards, wallets, and cash on delivery.
//           </p>
//            <p>
//            Fast Delivery: We offer reliable shipping and delivery services to ensure your products reach
//            you on time. 
//            </p>
//          <p> Exclusive Offers: Unlock discounts, deals, and special promotions just for you</p>
        
//       </div>
//     </div>
//   );
// }

// export default DescriptionBox;
