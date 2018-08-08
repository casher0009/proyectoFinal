const Schema = require("mongoose").Schema;
const orderSchema = new require("mongoose").Schema(
  {
    active:{
      type:Boolean,
      default:true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    celebrated: String,
    date:Date,
    theme: String,
    imgURL: {
      type: String,
      default:
        "https://ae01.alicdn.com/kf/HTB1TqzbKpXXXXaHXFXXq6xXFXXXi/New-100Pieces-lot-10Inch-1-3g-Latex-Balloons-For-Valentine-Celebration-Party-Wedding-Birthday-Surprise-Globos.jpg_640x640.jpg"
    },
    chairs: {
      type: Number,
      default: 0
    },
    tables: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = require("mongoose").model("Order", orderSchema);
