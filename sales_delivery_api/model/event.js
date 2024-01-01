const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Бүтээгдэхүүнийхээ нэрийг оруулна уу!"],
    },
    description:{
        type: String,
        required:[true,"Бүтээгдэхүүнийхээ тайлбарыг оруулна уу!"],
    },
    category:{
        type: String,
        required:[true,"Бүтээгдэхүүний ангилалаа оруулна уу!"],
    },
    start_Date: {
        type: Date,
        required: true,
      },
      Finish_Date: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        default: "Running",
      },
    tags:{
        type: String,
    },
    originalPrice:{
        type: Number,
    },
    discountPrice:{
        type: Number,
        required: [true,"Бүтээгдэхүүний үнэ оруулна уу!"],
    },
    stock:{
        type: Number,
        required: [true,"Бүтээгдэхүүний нөөцөө оруулна уу!"],
    },
    images:[
        {
            public_id: {
                type: String,
                required: true,
              },
              url: {
                type: String,
                required: true,
              },
        },
    ],
    shopId:{
        type: String,
        required: true,
    },
    shop:{
        type: Object,
        required: true,
    },
    sold_out:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Event", eventSchema);