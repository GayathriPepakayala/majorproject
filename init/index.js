const mongoose=require("mongoose");
const data_1=require("./data.js");
const listing=require("../models/listing.js");

main()
.then((res)=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


let init_data=async()=>{
    await listing.deleteMany({});
    data_1.data=data_1.data.map((obj)=>({
      ...obj,owner:"6796350461b99e129520f1ff"
    }));
    await listing.insertMany(data_1.data);
    console.log("INSERTED DATA SUCCESSFULLY");
};
init_data();