const Schema = require("mongoose").Schema;
const orderSchema = new require("mongoose").Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
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
