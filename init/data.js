const sampleListing = [
  
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Seaside Villa with Private Pool",
    description: "Experience luxury living in this stunning seaside villa. Relax by the private pool while enjoying panoramic views of the ocean.",
    image:{
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Amalfi Coast",
    country: "Italy"
  },
  {
    title: "Mountain Retreat Cabin",
    description: "Unwind in this cozy cabin nestled in the mountains. Enjoy hiking trails, wildlife, and breathtaking views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Aspen",
    country: "United States"
  }, {
    title: "Luxurious Lakeside Retreat",
    description: "Indulge in luxury at this lakeside retreat. Enjoy gourmet dining, spa services, and stunning sunset views over the water.",
    image:{
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Lake Como",
    country: "Italy"
  },
  {
    title: "Rustic Countryside Farmhouse",
    description: "Experience the charm of rural living at this rustic farmhouse. Enjoy fresh air, scenic views, and farm-to-table dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Provence",
    country: "France"
  },
  {
    title: "Urban Loft in the City Center",
    description: "Stay in style at this chic urban loft. Experience city living with trendy restaurants, nightlife, and cultural attractions at your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "New York City",
    country: "United States"
  },{
    title: "Mountain Retreat Cabin",
    description: "Unwind in this cozy cabin nestled in the mountains. Enjoy hiking trails, wildlife, and breathtaking views.",
    image:{
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Luxurious Lakeside Retreat",
    description: "Indulge in luxury at this lakeside retreat. Enjoy gourmet dining, spa services, and stunning sunset views over the water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Lake Como",
    country: "Italy"
  },
  {
    title: "Rustic Countryside Farmhouse",
    description: "Experience the charm of rural living at this rustic farmhouse. Enjoy fresh air, scenic views, and farm-to-table dining.",
    image:  {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Provence",
    country: "France"
  },
  {
    title: "Serenity Island Paradise",
    description: "Escape to this secluded island paradise for the ultimate relaxation. Enjoy pristine beaches, crystal-clear waters, and lush tropical surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Charming Countryside Cottage",
    description: "Experience the tranquility of the countryside in this charming cottage. Surrounded by rolling hills and picturesque landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Cotswolds",
    country: "United Kingdom"
  },
  {
    title: "Modern Urban Apartment",
    description: "Live in style in this sleek urban apartment. Located in the heart of the city with easy access to shopping, dining, and entertainment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Scenic Mountain Lodge",
    description: "Stay in this cozy mountain lodge surrounded by breathtaking scenery. Perfect for outdoor enthusiasts and nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Banff",
    country: "Canada"
  },
  {
    title: "Historic Townhouse in Old City",
    description: "Step back in time in this beautifully restored historic townhouse. Explore cobblestone streets and iconic landmarks right outside your door.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Florence",
    country: "Italy"
  },
  {
    title: "Secluded Forest Cabin",
    description: "Find peace and quiet in this secluded forest cabin. Surrounded by towering trees and wildlife, it's the perfect retreat from city life.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Black Forest",
    country: "Germany"
  },
  {
    title: "Coastal Cliffside Retreat",
    description: "Experience coastal living at its finest in this stunning cliffside retreat. Enjoy panoramic views of the ocean and easy beach access.",
    image:  {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Big Sur",
    country: "United States"
  },
  {
    title: "Riverside Cabin Retreat",
    description: "Relax by the riverside in this charming cabin retreat. Fish, kayak, or simply unwind amidst the serene sounds of nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Yellowstone National Park",
    country: "United States"
  },
  {
    title: "Historic Castle Estate",
    description: "Live like royalty in this historic castle estate. Explore magnificent gardens, grand halls, and luxurious accommodations.",
    image:  {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Edinburgh",
    country: "Scotland"
  },
  // Insert more data here
];


// You can easily generate more data by adding additional entries to the array.


module.exports = { data: sampleListing };



