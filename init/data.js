 const resorts = [
//     {
//         title: "Lakshadweep Retreat",
//         description: "A beautiful island retreat surrounded by crystal-clear waters.",
//         image:  {filename:"image",
//             url:"https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"},
//         price: 2000,
//         location: "Lakshadweep",
//         country: "India"
//     },
//     {
//         title: "Goa Beach Paradise",
//         description: "Experience the vibrant beaches and nightlife of Goa.",
//         image: {filename:"image",
//             url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEv9fKeIqwR9CydwQDRXeJqACxhQtfD5oYA&s"},
//         price: 3500,
//         location: "Goa",
//         country: "India"
//     },
//     {
//         title: "Kerala Backwater Bliss",
//         description: "Stay amidst serene backwaters and lush greenery in Kerala.",
//         image:  {filename:"image",
//             url:"https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="},
//         price: 4000,
//         location: "Alleppey, Kerala",
//         country: "India"
//     },
//     {
//         title: "Shimla Hills Resort",
//         description: "Escape to the serene hills of Shimla for a refreshing vacation.",
//         image:  {filename:"image",
//             url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/328688768.jpg?k=b7a9499944f153e2a685f9ca75e4d051aa8d80958d93112dc8a4d2e7237bb82a&o=&hp=1"},
//         price: 3000,
//         location: "Shimla, Himachal Pradesh",
//         country: "India"
//     },
//     {
//         title: "Rajasthan Desert Retreat",
//         description: "Experience luxury in the heart of the Thar Desert.",
//         image:  {filename:"image",
//             url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWw9EYG_ltEjsUEsK15v8kxcMSixGDZnDtg&s"},
//         price: 4500,
//         location: "Jaisalmer, Rajasthan",
//         country: "India"
//     },
//     {
//         title: "Maldives",
//         description: "Tropical paradise with crystal-clear waters",
//         image:  {filename:"image",
//             url:"https://www.agoda.com/wp-content/uploads/2020/01/Best-hotels-in-Bali-The-Anvaya-Beach-Resort-Bali.jpg"},
//         price: 5000,
//         type1:"resort",
//         location: "Malé",
//         country: "Maldives",
//     },
//     {
//         title: "Bora Bora",
//         description: "Romantic overwater bungalows",
//         image:  {filename:"image",
//             url:"https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="},
//         price: 7000,
//         type1:"resort",
//         location: "Bora Bora",
//         country: "French Polynesia",
//     },
//     {
//         title: "Santorini",
//         description: "Iconic white-washed buildings with blue domes",
//         image:  {filename:"image",
//             url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqyVePbN2CVDV1F7zyG4E73kzyBo1TOKZNA&s"},
//         price: 4500,
//         location: "Santorini",
//         country: "Greece",
//     },
//     {
//         title: "Bali",
//         description: "A tropical paradise known for beaches, temples, and vibrant nightlife",
//         image: { filename: "bali", url: "https://example.com/bali.jpg" },
//         price: 5000,
//         type: "island",
//         location: "Bali",
//         country: "Indonesia"
//       },
//     {
//         title: "Phuket",
//         description: "Lively beaches and vibrant nightlife",
//         image:  {filename:"image",
//             url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/328688768.jpg?k=b7a9499944f153e2a685f9ca75e4d051aa8d80958d93112dc8a4d2e7237bb82a&o=&hp=1"},
//         price: 3000,
//         location: "Patong Beach",
//         country: "Thailand",
//     },
//     {
//         title: "Andaman Island Escape",
//         description: "Discover pristine beaches and exotic marine life in the Andamans.",
//         image: {filename:"image",
//             url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEv9fKeIqwR9CydwQDRXeJqACxhQtfD5oYA&s"},
//         price: 5000,
//         location: "Port Blair, Andaman Islands",
//         country: "India"
//     },
//     {
//         title: "Coorg Coffee Plantation Resort",
//         description: "Relax amidst aromatic coffee plantations in Coorg.",
//         image:  {filename:"image",
//             url:"https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="},
//         price: 3200,
//         location: "Coorg, Karnataka",
//         country: "India"
//     },
//     {
//     title: "Maui",
//     description: "Lush tropical beaches and volcanic landscapes",
//     image: {filename:"image",
//         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZthXyUpv46LQNC79vUKMeWPhkHC6EgH3oTQ&s"},
//     price: 5500,
//     location: "Hawaii",
//     country: "USA",
// },
// {
//     title: "Bali",
//     description: "Enchanting temples and serene beaches",
//     image:  {filename:"image",
//             url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqyVePbN2CVDV1F7zyG4E73kzyBo1TOKZNA&s"},
//     price: 4000,
//     location: "Ubud",
//     country: "Indonesia",
// },
// {
//     title: "Fiji",
//     description: "An archipelago of coral reefs and clear lagoons",
//     image:  {filename:"image",
//             url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWw9EYG_ltEjsUEsK15v8kxcMSixGDZnDtg&s"},
//     price: 6000,
//     location: "Nadi",
//     country: "Fiji",
// },
// {
//     title: "Tahiti",
//     description: "Exquisite beaches and black-sand shores",
//     image:  {filename:"image",
//             url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZthXyUpv46LQNC79vUKMeWPhkHC6EgH3oTQ&s"},
//     price: 6500,
//     location: "Papeete",
//     country: "French Polynesia",
// },
// {
//     title: "Seychelles",
//     description: "Granite islands surrounded by turquoise waters",
//     image: {filename:"image",
//         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWw9EYG_ltEjsUEsK15v8kxcMSixGDZnDtg&s"},
//     price: 5800,
//     location: "Mahe",
//     country: "Seychelles",
// },
// {
//     title: "Aruba",
//     description: "Sunny beaches and Dutch-Caribbean culture",
//     image:  {filename:"image",url:"https://www.agoda.com/wp-content/uploads/2020/01/Best-hotels-in-Bali-The-Anvaya-Beach-Resort-Bali.jpg"},
//     price: 4800,
//     location: "Oranjestad",
//     country: "Aruba",
// },
// {
//     title: "Cancún",
//     description: "Vibrant nightlife and pristine beaches",
//     image: {filename:"image",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqyVePbN2CVDV1F7zyG4E73kzyBo1TOKZNA&s"},
//     price: 3500,
//     location: "Cancún",
//     country: "Mexico",
// },
// {
//     title: "Mauritius",
//     description: "Luxurious lagoons and coral reefs",
//     image: {filename:"image",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZthXyUpv46LQNC79vUKMeWPhkHC6EgH3oTQ&s"},
//     price: 5000,
//     location: "Port Louis",
//     country: "Mauritius",
// },
// {
//     title: "Galápagos Islands",
//     description: "Unique wildlife and volcanic landscapes",
//     image: {filename:"image",url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/328688768.jpg?k=b7a9499944f153e2a685f9ca75e4d051aa8d80958d93112dc8a4d2e7237bb82a&o=&hp=1"},
//     price: 7000,
//     location: "Galápagos",
//     country: "Ecuador",
// },
// {
//     title: "Reunion Island",
//     description: "A blend of French and Creole culture with volcanoes",
//     image: {filename:"image",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEv9fKeIqwR9CydwQDRXeJqACxhQtfD5oYA&s"},
//     price: 4500,
//     location: "Saint-Denis",
//     country: "France",
// }
// ];

// 

 {
          title: "Varanasi",
          description: "One of the oldest cities in the world, known for its spiritual significance",
          image: { filename: "image", url: "https://s7ap1.scene7.com/is/image/incredibleindia/manikarnika-ghat-city-hero?qlt=82&ts=1727959374496" },
          price: 3000,
          type1: "city",
          location: "Uttar Pradesh",
          country: "India"
        },
        {
            title: "Taj Mahal",
            description: "A UNESCO World Heritage Site, symbolizing eternal love",
            image: { filename: "taj_mahal", url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D" },
            price: 1500,
            type1: "historicplace",
            location: "Agra",
            country: "India"
          },
          {
            title: "Rameswaram Temple",
            description: "A sacred Hindu pilgrimage site dedicated to Lord Shiva",
            image: { filename: "rameswaram", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5EmImNe-LQEgNsllajvhI4hflOhWApwcNw&s" },
            price: 1000,
            type1: "temple",
            location: "Tamil Nadu",
            country: "India"
          },
        {
            title: "Paris",
            description: "The City of Love, home to the Eiffel Tower and Louvre Museum",
            image: { filename: "image", url: "https://media.timeout.com/images/106181719/image.jpg" },
            price: 10000,
            type1: "city",
            location: "Île-de-France",
            country: "France"
          },
    
    {
      title: "Goa Beach",
      description: "Famous for golden sand beaches, nightlife, and water sports",
      image: { filename: "goa_beach", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19rv286dqp3MbeYO4wWFQL3BlCNG5cgaNIA&s" },
      price: 2500,
      type1: "beach",
      location: "Goa",
      country: "India"
    },
    {
      title: "Himalayas",
      description: "The world's highest mountain range, home to many peaks and monasteries",
      image: { filename: "himalayas", url: "https://undiscoveredmountains.com/uploads/articles/wysiwyg/Mount%20Everest.png" },
      price: 5000,
      type1: "mountain",
      location: "North India",
      country: "India"
    },
    
        {
          title: "Jaipur",
          description: "The Pink City, famous for its palaces and forts",
          image: { filename: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcOApDEmsmhqUe1DGhut0ydTlOAxxXt4Sog&s" },
          price: 3500,
          type1: "city",
          location: "Rajasthan",
          country: "India"
        },
        {
          title: "Coorg",
          description: "The Scotland of India, known for its coffee plantations and dense forests",
          image: { filename: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozAEtOBwq_XHccXwusSXOgPHTkt-hBa54jw&s" },
          price: 3500,
          type1: "greenery",
          location: "Karnataka",
          country: "India"
        },
        
        {
          title: "Mumbai",
          description: "The City of Dreams, home to Bollywood and Marine Drive",
          image: { filename: "image", url: "https://i.ytimg.com/vi/tWD_-Rzrn8o/maxresdefault.jpg" },
          price: 5000,
          type1: "city",
          location: "Maharashtra",
          country: "India"
        },
        {
            title: "Thar Desert",
            description: "India's largest desert, known for camel safaris and dunes",
            image: { filename: "thar_desert", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGuyc6oapzFPSDXpzOMJYB3moAOjBYaogwA&s" },
            price: 2000,
            type1: "desert",
            location: "Rajasthan",
            country: "India"
          },
        {
          title: "Bangalore",
          description: "India's Silicon Valley, known for tech parks and vibrant nightlife",
          image: { filename: "image", url: "https://static.toiimg.com/thumb/msid-54559212/Bangalore.jpg?width=361&height=241" },
          price: 4500,
          type1: "city",
          location: "Karnataka",
          country: "India"
        },
        {
          title: "Meghalaya",
          description: "Home to living root bridges and the wettest place on Earth, Cherrapunji",
          image: { filename: "image", url: "https://etripto.in/uploads/0000/96/2023/06/29/wards-lake-shillong-photo-sanjukta-sharma.jpg" },
          price: 3000,
          type1: "greenery",
          location: "Northeast India",
          country: "India"
        },
       
        {
          title: "New York",
          description: "The city that never sleeps, home to Times Square and the Statue of Liberty",
          image: { filename: "image", url: "https://media.nomadicmatt.com/2022/newnycguidemain.jpeg" },
          price: 15000,
          type1: "city",
          location: "New York",
          country: "USA"
        },
       
        {
          title: "Puri Beach",
          description: "Famous for its golden sands and the annual Rath Yatra festival",
          image: { filename: "image", url: "https://odishatourism.gov.in/content/dam/tourism/home/discover/attractions/beaches/puri/puri%20corosal2.jpg" },
          price: 3000,
          type1: "beach",
          location: "Odisha",
          country: "India"
        },
        
    {
      title: "Lakshadweep Islands",
      description: "A tropical paradise with coral atolls and pristine beaches",
      image: { filename: "lakshadweep", url: "https://etimg.etb2bimg.com/photo/109819916.cms" },
      price: 4000,
      type1: "island",
      location: "Lakshadweep",
      country: "India"
    },
   
    {
      title: "Mysore Palace",
      description: "A grand royal residence famous for its opulent interiors",
      image: { filename: "mysore_palace", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ls_ojAbQcTmdtFruHEuYzqO6xkS-484qbQ&s" },
      price: 1500,
      type1: "historicplace",
      location: "Karnataka",
      country: "India"
    },
    {
      title: "Kerala Backwaters",
      description: "A network of lakes and canals, best explored on houseboats",
      image: { filename: "kerala_backwaters", url: "https://static.toiimg.com/photo/msid-83336319,width-96,height-65.cms" },
      price: 3000,
      type1: "resort",
      location: "Kerala",
      country: "India"
    },
    {
      title: "Andaman & Nicobar Islands",
      description: "Exotic beaches, marine life, and a rich colonial history",
      image: { filename: "andaman", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0-jCN-94YQ9Qe88IG6cPZMH0YsOKwT1u1w&s" },
      price: 4500,
      type1: "island",
      location: "Bay of Bengal",
      country: "India"
    },
    {
      title: "Sahara Desert",
      description: "The world's largest hot desert, known for its endless sand dunes",
      image: { filename: "sahara_desert", url: "https://cdn-ikppcfn.nitrocdn.com/jqtVDbjdfBPrQSiPhMihAdYLibcqMkkx/assets/images/optimized/rev-4c3905d/sevennaturalwonders.org/wp-content/uploads/2023/11/Sahara-Desert-sunset.jpg" },
      price: 5000,
      type1: "desert",
      location: "North Africa",
      country: "Multiple"
    },
    {
      title: "Great Barrier Reef",
      description: "The world's largest coral reef system, a paradise for divers",
      image: { filename: "great_barrier_reef", url: "https://cdn.britannica.com/67/152567-050-C976C2B3/Great-Barrier-Reef.jpg" },
      price: 6000,
      type1: "island",
      location: "Queensland",
      country: "Australia"
    },
    {
      title: "Mount Everest",
      description: "The highest peak in the world, attracting climbers from across the globe",
      image: { filename: "mount_everest", url: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg" },
      price: 8000,
      type1: "mountain",
      location: "Himalayas",
      country: "Nepal"
    },
    {
        title: "London",
        description: "The heart of the UK, known for its history, Buckingham Palace, and Big Ben",
        image: { filename: "image", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg" },
        price: 12000,
        type1: "city",
        location: "England",
        country: "United Kingdom"
      },
      {
        title: "Kovalam",
        description: "A crescent-shaped beach with lighthouse views and Ayurvedic treatments",
        image: { filename: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9eu9K8mDlRB1gSWGpeNc1Mbp6CZY_sgTCg&s" },
        price: 4500,
        type1: "beach",
        location: "Kerala",
        country: "India"
      },
    {
      title: "Santorini",
      description: "A Greek island famous for its whitewashed buildings and stunning sunsets",
      image: { filename: "santorini", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgUkI9nK6f2ulcXwugONca9jYNz4yJI5Mbg&s" },
      price: 7000,
      type1: "island",
      location: "Aegean Sea",
      country: "Greece"
    },
    {
      title: "Machu Picchu",
      description: "An ancient Incan city set high in the Andes Mountains",
      image: { filename: "machu_picchu", url: "https://caminoincamachupicchu.org/cmingutd/wp-content/uploads/2021/06/machu-picchu-llama.jpg" },
      price: 5500,
      type1: "historicplace",
      location: "Cusco Region",
      country: "Peru"
    },
    {
      title: "Angkor Wat",
      description: "A stunning temple complex, the largest religious monument in the world",
      image: { filename: "angkor_wat", url: "https://operation-adventure.com/wp-content/uploads/2023/03/DSC01918-scaled.jpg" },
      price: 3500,
      type1: "temple",
      location: "Siem Reap",
      country: "Cambodia"
    },
    {
      title: "Reunion Island",
      description: "A blend of French and Creole culture with volcanoes",
      image: { filename: "reunion_island", url: "https://static.ffx.io/images/$zoom_1%2C$multiply_0.5047%2C$ratio_1.777778%2C$width_1585%2C$x_216%2C$y_192/t_crop_custom/q_86%2Cf_auto/f6b3b2cc3ff5f2316ee44ab0dbf062f1481917db" },
      price: 4500,
      type1: "island",
      location: "Saint-Denis",
      country: "France"
    },
    {
      title: "Bali",
      description: "A tropical paradise known for beaches, temples, and vibrant nightlife",
      image: { filename: "bali", url: "https://assets.cntraveller.in/photos/63f5b2d472cc3e2749d663f5/16:9/w_2580,c_limit/GettyImages-1145042281.jpeg" },
      price: 5000,
      type1: "island",
      location: "Bali",
      country: "Indonesia"
    },
    {
      title: "Petra",
      description: "An archaeological wonder, famous for its rock-cut architecture",
      image: { filename: "petra", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYp2hHcz62zHX5NZlfP3Brc8SyPKCKuy8yA&s" },
      price: 4000,
      type1: "historicplace",
      location: "Ma'an",
      country: "Jordan"
    },
    {
      title: "Serengeti National Park",
      description: "A vast ecosystem famous for its great migration and wildlife safaris",
      image: { filename: "serengeti", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdp9kCOOIb4GJY0tF8yenWFzzFX4Pj70m0g&s" },
      price: 6000,
      type1: "resort",
      location: "Tanzania",
      country: "Tanzania"
    }
  ]
  

  module.exports={data:resorts};