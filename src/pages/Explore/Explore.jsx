import './Explore.css';

const BrowseList = () => {
    // Example data array containing list items
    const listItems = [
        "32 inch LED TVs", "32 inch smart TVs", "32 inch tv", "3D animation maker", "3D animation software",
        "3D effect", "3D video", "3D video maker", "40 inch tv", "50 inch tv", "55 inch tv", "60 inch tv",
        "Abstract art", "Ac adapter", "Ac condenser", "Ac unit", "Acer laptops", "Acer tablet", "Acoustic guitar",
        "Action figures", "Acura parts", "Addicting games", "Adidas", "Adidas backpack", "Adidas hoodie",
        "Chair covers", "Chair cushions", "Chair with ottoman", "Chandelier", "Chanel bag", "Chanel perfume",
        "Changing tables", "Charm bracelets", "Charms", "Cheese grater", "Cherished teddies", "Chevy", "Chevy blazer",
        "Chevy bolt", "Chevy corvette", "Chevy express", "Chevy impala", "Chevy parts", "Chevy silverado",
        "Chevy sonic", "Chicago concert tickets", "Chopsticks", "Christian louboutin heels", "Christmas crafts",
        "Gaming collectibles", "Gaming computer", "Gaming headphones", "Gaming laptops", "Garage door",
        "Garage shelving", "Garden supplies", "Garment bag", "GE appliances", "Gemstones", "Gender reveal decorations",
        "General", "Generator", "Giant bear", "Giant bikes", "Giant stuffed animals", "Giant teddy bear",
        "Girl doll", "Girls backpack", "Girls bikes", "Girls boots", "Glass cups", "Glass shelves",
        "Metal wall decor", "Michael kors", "Mickey ears", "Microsoft products", "Microsoft software",
        "Microsoft surface", "Microwaves", "Military boots", "Mini drones", "Mini fridges", "Mini laptop",
        "Minivan", "Minnie mouse ears", "Mirror", "Mirrored furniture", "Mirrored nightstand", "Mixing bowls",
        "Moana", "Modem", "Modern aris", "Modern internet", "Modern router", "Modern art", "Modern kitchen table",
        "Modern sofa", "Short stories", "Shrek", "Sideshow collectibles", "Sideshow toys", "Silicone molds",
        "Silver", "Ski boat", "Skid steer", "Skin care", "Skip hop diaper bag", "Skirt", "Skullcandy headphones",
        "Skullcandy wireless", "Sleeper chair", "Sleeper sectional", "Sleeper sofa", "Sleeping bag", "Sliding door",
        "Slow cooker", "Small boat", "Small couch", "Small desk", "Small kitchen table", "Small shelf"
    ];

    return (
        <div className="browse-list-container">
            <h1 className="browse-header">Browse</h1>
            <div className="browse-grid">
                {listItems.map((item, index) => (
                    <p key={index} className="browse-item">{item}</p>
                ))}
            </div>
        </div>
    );
};

export default BrowseList;