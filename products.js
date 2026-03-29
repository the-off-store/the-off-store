// This function creates 20 empty slots for each of your 7 categories
const generateSlots = (category, count) => {
    return Array(count).fill(null).map(() => ({
        id: "AUTO", 
        name: "", 
        category: category, 
        price: "", 
        images: ["", "", ""], 
        active: false,
        bestseller: false
    }));
};

const storeData = {
    categories: ["Electronics", "Fashion", "Home Decor", "Gadgets", "Appliances", "Footwear", "Accessories"],
    products: [
        // --- ADD YOUR ACTUAL PRODUCTS BELOW THIS LINE ---
        { 
            id: "PROD-X101", 
            name: "Premium Wireless Headphones", 
            category: "Electronics", 
            price: "2999", 
            images: ["https://via.placeholder.com/300x200", "", ""], 
            active: true,
            bestseller: true
        },

        // --- AUTOMATIC SLOTS (140 total) ---
        ...generateSlots("Electronics", 20),
        ...generateSlots("Fashion", 20),
        ...generateSlots("Home Decor", 20),
        ...generateSlots("Gadgets", 20),
        ...generateSlots("Appliances", 20),
        ...generateSlots("Footwear", 20),
        ...generateSlots("Accessories", 20)
    ]
};
